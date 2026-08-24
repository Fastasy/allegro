import posthog from 'posthog-js';

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (!projectToken) {
  if (process.env.NODE_ENV === 'development') {
    throw new Error(
      'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is configured',
    );
  }
} else if (!host) {
  if (process.env.NODE_ENV === 'development') {
    throw new Error(
      'NEXT_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_HOST is configured',
    );
  }
} else {
  posthog.init(projectToken, {
    api_host: host,
    defaults: '2026-01-30',
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
    // Performance: keep core analytics, drop the heavy optional sub-modules
    // (recorder.js ~60KB, surveys.js ~33KB, dead-clicks ~7KB were auto-loading
    // and adding a ~380ms main-thread task on page load).
    disable_session_recording: true,
    disable_surveys: true,
    capture_dead_clicks: false,
    debug: process.env.NODE_ENV === 'development',
  });
}
