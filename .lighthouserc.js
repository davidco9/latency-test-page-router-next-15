module.exports = {
  ci: {
    collect: {
      // the port number should match the APP_PORT in /config/index.js
      url: 'http://localhost:3051/',
    },
    assert: {
      assertions: {
        /**
         * Errors
         */
        // Eliminate render-blocking resources. More info: https://web.dev/render-blocking-resources/
        'render-blocking-resources': 'error',

        // Properly size images. More info: https://web.dev/uses-responsive-images/
        'uses-responsive-images': 'error',

        // Defer offscreen images. More info: https://web.dev/offscreen-images/
        'offscreen-images': 'error',

        // Minimize main thread work. More info: https://web.dev/mainthread-work-breakdown/
        'mainthread-work-breakdown': 'error',

        // Avoid an excessive DOM size. More info: https://web.dev/dom-size/
        'dom-size': 'error',

        // Ensure text remains visible during webfont load. More info: https://web.dev/font-display/
        'font-display': 'error',

        /**
         * Warnings
         */
        // Set all accessibility type issues to warning. More info: https://web.dev/lighthouse-accessibility/
        'categories:accessibility': 'warn',

        // Remove unused CSS. More info: https://web.dev/unused-css-rules/
        'unused-css-rules': 'warn',

        // Efficiently encode images. More info: https://web.dev/uses-optimized-images/
        'uses-optimized-images': 'warn',

        // Preconnect to required origins. More info: https://web.dev/uses-rel-preconnect/
        'uses-rel-preconnect': 'warn',

        // Preload key requests. More info: https://web.dev/uses-rel-preload/
        'uses-rel-preload': 'warn',

        // Use video formats for animated content. More info: https://web.dev/efficient-animated-content/
        'efficient-animated-content': 'warn',

        // Avoid enormous network payloads. More info: https://web.dev/total-byte-weight/
        'total-byte-weight': 'warn',

        // Avoid chaining critical requests. More info: https://web.dev/critical-request-chains/
        'critical-request-chains': 'warn',

        // Reduce JavaScript execution time. More info: https://web.dev/bootup-time/
        'bootup-time': 'warn',

        // Reduce the impact of third-party code. More info: https://web.dev/third-party-summary/
        'third-party-summary': 'warn',
      },
    },
  },
};
