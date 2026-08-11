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
