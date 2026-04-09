const path = require('path');

/**
 * Hardcoded i18n for latency / cache-key testing.
 * URL shape: default locale has no prefix, e.g. /sponsor-accounts/
 *
 * For deployment behind a path + CDN asset prefix, set `assetPrefix` and add
 * Netlify (or proxy) rewrites from `/your-prefix/_next/*` to `/_next/*`.
 */
const i18nConfig = {
  localeDetection: false,
  locales: ['de-de'],
  defaultLocale: 'de-de',
  domains: [],
};

module.exports = {
  // Standalone app: avoid picking a parent directory when other lockfiles exist nearby.
  outputFileTracingRoot: path.join(__dirname),
  trailingSlash: true,
  basePath: '',
  // Empty so `next dev` and `next start` serve `/_next/static/*` correctly.
  assetPrefix: '',
  eslint: { ignoreDuringBuilds: true },
  productionBrowserSourceMaps: false,
  i18n: i18nConfig,
  experimental: { cpus: 1 },
};
