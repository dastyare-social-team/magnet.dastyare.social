# Dastyare Social — Magnet

A landing page offering the Founder's Personal Brand Guide as a lead magnet, with an A/B-tested registration funnel that sends leads to a confirmation page.

## Completed work

Everything that has been set up / done on this project so far:

- **Pages** — A/B landing (`/v1`, `/v2`), confirmation (`/confirmation/v1`, `/confirmation/v2`). A server-side `/` redirect picks a variant based on the PostHog flag `home-page-variant` (cookie `home_ab_variant`, fallback `/v1`).
- **Full-page screenshots** — captured for every page/variant, compressed to WebP q80, and committed under `screenshots/` (see tables below).
- **PostHog analytics** — consent-gated (`posthog_consent` cookie), session replay with full text/attribute masking, scroll depth, button/link/outbound-click tracking, plus the registration funnel events. The full setup guide and event list live in [`POSTHOG.md`](POSTHOG.md).
- **PostHog dashboard** — a project dashboard (see below) hosting the funnel insights plus a weekly email subscription. Shares the same PostHog project as the workshop/score-card sites; magnet and score-card insights are isolated by filtering on `$host`.
- **Shared A/B experiment** — reuses `Home page A/B test` (PostHog experiment, flag `home-page-variant`, variants `v1`/`v2`, 50/50, 100% rollout) shared with the workshop and score-card sites.

### PostHog dashboard (as configured)

A PostHog dashboard named after this project hosts three funnel insights (14-day window), all filed under their own dashboard folder. All three insights are filtered to this site's host:

| Insight | Type | Steps |
| --- | --- | --- |
| Registration funnel | Funnel (14-day), host-filtered | `landing_page_viewed` → `registration_cta_clicked` → `registration_form_continue` → `registration_form_submit_success` → `confirmation_page_viewed` |
| Landing engagement | Funnel (14-day), host-filtered | `$pageview` → `scroll_depth_50` → `registration_cta_clicked` |
| CTA performance by section | Funnel (14-day), host-filtered, broken down by `cta_location` | `registration_cta_clicked` → `registration_form_submit_success` |

A weekly email subscription exports all three insights every Monday (AI summary emphasising conversion and drop-off).

> **Note on folders:** folders in PostHog can only be created/moved via the browser UI — no API key type (personal or project) has `file_system:write` scope, and the dashboard serializer has no writable `folder` field. This was confirmed against the OpenAPI spec; objects (dashboards/insights/funnels) are created via API, folders are organised in the UI.

## Landing
Routes: `/v1`, `/v2`

<table>
  <tr>
    <th>v1 — <code>/v1</code></th>
    <th>v2 — <code>/v2</code></th>
  </tr>
  <tr>
    <td><img src="screenshots/landing-v1.webp" alt="Landing v1"></td>
    <td><img src="screenshots/landing-v2.webp" alt="Landing v2"></td>
  </tr>
</table>

## Confirmation
Routes: `/confirmation/v1`, `/confirmation/v2`

<table>
  <tr>
    <th>v1 — <code>/confirmation/v1</code></th>
    <th>v2 — <code>/confirmation/v2</code></th>
  </tr>
  <tr>
    <td><img src="screenshots/confirmation-v1.webp" alt="Confirmation v1"></td>
    <td><img src="screenshots/confirmation-v2.webp" alt="Confirmation v2"></td>
  </tr>
</table>
