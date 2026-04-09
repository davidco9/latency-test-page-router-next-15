/**
 * Hardcoded i18n for latency / cache-key testing (revert to generateCpZoneI18nConfigUnifiedDomain for production).
 * Same URL shape as unified domain: lowercase locale segment, e.g. /de-de/sponsor-accounts/
 */
const i18nConfig = {
  localeDetection: false,
  locales: ['de-de'],
  defaultLocale: 'de-de',
  domains: [],
};

module.exports = {
  trailingSlash: true,
  basePath: '',
  assetPrefix: '/sponsor-accounts',
  eslint: { ignoreDuringBuilds: true },
  // Disable public sourcemaps to prevent exposing source code in production
  // Sourcemaps are still generated for Datadog upload but not served publicly
  productionBrowserSourceMaps: false,

  i18n: i18nConfig,
  experimental: { cpus: 1 },
};
