# PostHog Setup Guide

The magnet site is wired to PostHog for:

- landing page **A/B testing** (PostHog Experiments / feature flags) with a
  server-side `/` → `/v1`/`/v2` redirect
- **funnels** for the registration flow
- **every button / link / outbound link** tracking
- **session replay**, scroll depth and engagement
- a lightweight **consent gate**

The code already sends all the events below. The one-time PostHog dashboard
setup (create the flag + funnels) is the only remaining work — follow steps in
order. It shares the same PostHog project as the workshop site, so events from
both sites land in one project.

---

## 1. Environment variables

Everything lives in `.env` (copy from `.env.example`):

```
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_xxxxx   # from PostHog > Project settings > Project API key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com   # your region

# Optional. The feature-flag key used for the landing A/B test.
# Defaults to "home-page-variant" if unset.
POSTHOG_LANDING_FLAG_KEY=home-page-variant
```

Notes:

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` is the **project** API key (`phc_...`).
  It is public and safe to expose client-side.
- This site and the workshop share one PostHog project. To distinguish them in
  dashboards, filter by the `source` property (`magnet` vs `workshop`) that the
  registration form attaches to the webhook payload, or by the page paths.

## 2. Create the landing A/B experiment

The root route (`/`) evaluates the flag `home-page-variant` server-side and
redirects visitors to `/v1` or `/v2`. Create it once in PostHog:

1. PostHog → **Experiments → New experiment**.
2. **Name:** `Magnet home page A/B test` (or reuse the workshop one — both sites
   share the same flag, so the same variant split applies to both).
3. **Feature flag key:** must be `home-page-variant` (or set
   `POSTHOG_LANDING_FLAG_KEY` to your own key).
4. **Variants:** add two variants with the **exact** values `v1` and `v2`.
5. **Rollout:** 100% rollout, split 50 / 50.
6. **Primary metric:** attach the funnel from step 3.
7. **Launch.**

Flag value mapping used by the code:

| flag value | page |
| --- | --- |
| `v1`, `control`, `false` | `/v1` |
| `v2`, `test`, `true` | `/v2` |
| anything else / not created | `/v1` (fallback) |

If the flag doesn't exist, the site still works — it falls back to `/v1`.
Assignments are recorded automatically (`$feature_flag_called`, server-side),
and the client is initialised with the same `visitor_id`, so conversions link
back to the assignment.

## 3. Create the funnels

PostHog → **Insights → New insight → Funnel**:

**A. Registration funnel** (the main one):

1. `landing_page_viewed`
2. `registration_cta_clicked`
3. `registration_form_continue`
4. `registration_form_submit_success`
5. `confirmation_page_viewed`

Window: 14 days, "Conversion rate = Total". Attach this to the experiment.

**B. CTA performance** (optional): `registration_cta_clicked` filtered by
`cta_location` → `registration_form_submit_success`, to see which section
(hero / how-it-works / final-cta) converts.

## 4. Full event list

**Page lifecycle** (auto, from `PageAnalytics`)

| Event | Properties |
| --- | --- |
| `$pageview` | `page`, `pathname`, `search` |
| `$pageleave` | auto from posthog-js |
| `landing_page_viewed` | `variant` (v1/v2), `page` |
| `confirmation_page_viewed` | `variant`, `page` |
| `page_engaged` | `pathname`, `duration_seconds` |
| `scroll_depth_25` / `_50` / `_75` / `_100` | `pathname` |

**Registration flow**

| Event | Properties |
| --- | --- |
| `registration_cta_clicked` | `variant`, `cta_location` (hero / how-it-works / final-cta) |
| `registration_form_validation_failed` | `reason` (name/email/phone), `stage` (continue/submit) |
| `registration_form_continue` | `variant`, `cta_location` |
| `registration_form_submit_attempt` | `variant`, `cta_location`, `has_phone` |
| `registration_form_submit_success` | `variant`, `cta_location`, `has_phone` |
| `registration_form_webhook_missing` | — |

**Generic clicks** (every button and link, auto from `PostHogProvider`)

| Event | Properties |
| --- | --- |
| `button_clicked` | `text`, `variant`, `pathname`, `page` |
| `link_clicked` | `href`, `link_text`, `pathname` |
| `outbound_link_clicked` | `url`, `link_text`, `pathname` |

Covers footer social links, the header logo, FAQ contact button, and all CTAs.

**FAQ**

| Event | Properties |
| --- | --- |
| `faq_question_opened` | `question` (q1–q6), `pathname` |

**Errors**

| Event | Properties |
| --- | --- |
| `client_error` | `message`, `filename`, `lineno`, `colno` |
| `client_unhandled_rejection` | `reason` |
| `$exception` (via captureException) | `context`, `variant`, `cta_location` |

**People / user properties** (set with `identify()`)

- `email`, `name`, `registered`, `stage`

## 5. Session replay

Replay is enabled in `src/lib/posthog.ts` with full masking
(`mask_all_text` + `mask_all_element_attributes`), so emails / names / phones
typed into the form are hidden. Watch sessions in PostHog → **Recordings**.
Replay only records after the visitor accepts the consent banner (step 6).

## 6. Consent

- A consent banner (`src/components/consent-banner.tsx`) shows once per visitor.
- Until they click **Accept**, PostHog stays opted out: no events, no replay.
- Accept → `setPostHogConsent("granted")`; Decline keeps capturing off.
- To remove the gate, delete `<ConsentBanner />` from `src/app/layout.tsx` and
  the consent logic in `src/lib/posthog.ts`.

## 7. Verify it works (dev)

1. `bun dev` and open `http://localhost:2301/` — you'll be redirected to
   `/v1` or `/v2`.
2. Accept the consent banner.
3. Browser console shows PostHog debug logs (`$pageview`, `landing_page_viewed`,
   and on click `button_clicked` etc.).
4. PostHog → **Live events** shows them within seconds.
5. Revisiting `/` keeps the same variant (cookie).

## 8. Troubleshooting

| Symptom | Fix |
| --- | --- |
| No events at all | Consent not accepted yet (step 6), or `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` empty. |
| `PostHog feature flag evaluation failed` in server logs | Check the token/host; flags need the project key and internet access. |
| Experiment shows no assignments | Flag `home-page-variant` doesn't exist, or variant values aren't exactly `v1`/`v2`. |
| Funnel step 1 empty (`landing_page_viewed`) | PageAnalytics not mounted — check `src/app/layout.tsx`. |
| Old `pageview` / `ab_test_assignment` events missing | Expected — replaced by `$pageview` / `$feature_flag_called`. |


---

## 9. Dev-team relay

Server-side events are optionally fanned out to a **second, dev-team PostHog
project** through our Cloudflare proxy (`ingest.dastyare.social`). This keeps
clients / founders seeing the clean project while engineers get the same
server events in their own project.

How it works (see `src/lib/analytics/server.ts`):

- `src/lib/analytics/devrel.ts` holds the **proxy URL + an opaque token** in an
  obfuscated form. Our PostHog project key is never stored here — the proxy
  injects it on our side. The relay is enabled only when that config decodes
  successfully.
- `src/lib/analytics/server.ts` exposes a `RelayPostHog` whose `capture` fans
  out to **both** destinations: the direct client/founder project (103916) and
  the dev-team relay. `src/lib/posthog-server.ts` uses this shared client, so
  the `$feature_flag_called` assignment events also reach both projects.
- Set `DISABLE_DEV_TEAM_PH=true` to turn the relay fan-out **off** while
  keeping the direct captures. Defaults to relaying.

## 10. PostHog bootstrap (optional)

`scripts/posthog-bootstrap.ts` (run via `bun run bootstrap:posthog`) provisions
this app's PostHog dashboard suite onto a target project through the admin REST
API. The suite only references events the app actually captures — it mirrors
what `src/components/page-analytics.tsx`, `registration-form.tsx`,
`posthog-provider.tsx`, etc. emit, so no dashboard or insight is created for
features this project does not have:

- **Overview** — Unique Visitors (DAU), Weekly Active Users (WAU), Pageviews,
  Top Pages (`pathname` breakdown).
- **Conversion** — Registration Funnel (landing → CTA → continue → submit →
  confirmation), Landing Engagement ($pageview → scroll ≥50% → CTA),
  CTA Performance by Section (`cta_location` breakdown), Confirmation Views,
  Form Validation Failures, Button Clicks, FAQ Opens.
- **Reliability** — Web Vitals, Uncaught Exceptions ($exception), Client Errors.

The script is idempotent: re-running finds existing dashboards/insights by name
and reuses them. When several of our products share one PostHog account, run it
per product with `PH_DASHBOARD_LABEL` set so every dashboard and insight is
suffixed ` — {product}` (e.g. `Overview — Magnet`). It needs:

- `PH_PERSONAL_API_KEY` — a `phx_` personal API key with **admin** scope.
- `PH_PROJECT_ID` — optional; auto-discovered from the key's `@current` project
  when unset.
- `PH_HOST` — the PostHog host (e.g. `https://us.i.posthog.com`).
- `PH_DASHBOARD_LABEL` — optional; product name used as the ` — {label}`
  suffix so per-product suites coexist in one account.

The script retries transient 429/5xx responses with backoff, so re-running (or
letting it finish) is safe. See `.env.example` for the placeholders (loaded
automatically via `dotenv/config`).

## 11. Data products (session replay, error tracking, heatmaps)

The PostHog data products are enabled on **both** projects:

| Project | ID | Role | Replay | Error tracking | Heatmaps |
| --- | --- | --- | --- | --- | --- |
| `omidshabab.com` (client / founder) | 103916 | Landing-repo client events land here | On | On | On (client) |
| `Dastyare Social — ORG` (dev team) | 581705 | Server relay fan-out destination | On | On | n/a (server-only) |

### Client project — 103916

Server flags (verified live via `project-get`):

- `session_recording_opt_in: true` — **session replay** enabled.
- `autocapture_exceptions_opt_in: true` — **error tracking** enabled (uncaught
  exceptions + rejections are autocaptured).
- Heatmaps are enabled **client-side** via the SDK `capture_heatmaps` flag (there
  is no server flag) — see `src/lib/posthog.ts`.

SDK config (`src/lib/posthog.ts`), identical across the three landing repos:

```ts
posthog.init(token, {
  capture_exceptions: true,   // error tracking (autocapture)
  capture_heatmaps: true,     // heatmaps
  // ...
});
posthog.startSessionRecording();
```

`$exception` / `client_error` are already flowing. Replay, error-tracking issues
and heatmap data appear once the deploy ships **and** a visitor accepts the
consent banner (`opt_out_capturing_by_default` is on by design, so only consented
visitors contribute — see section 6).

### Dev-team project — 581705

Enabled (verified live via the project REST API with a `phx_` personal key that
has membership in 581705):

- `session_recording_opt_in: true`
- `autocapture_exceptions_opt_in: true`

Note: 581705 receives **server-only** relay events (no browser SDK points at it),
so replay and heatmaps are limited there by design; **error tracking works** —
server `$exception` events from the relay arrive in this project.
