
module.exports = {
  trailingSlash: true,
  basePath: '',
  eslint: { ignoreDuringBuilds: true },
  // Disable public sourcemaps to prevent exposing source code in production
  // Sourcemaps are still generated for Datadog upload but not served publicly
  productionBrowserSourceMaps: false,

  experimental: { cpus: 1 },
};
