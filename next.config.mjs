/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features if necessary
  experimental: {
    appDir: true, // Enables the new app directory feature
    turbo: false, // Switches back to Webpack for stability
  },

  // Custom Webpack configuration (if needed)
  webpack(config) {
    return config; // Modify if required
  },

  // React strict mode
  reactStrictMode: true, // Ensures React strict mode
  swcMinify: true, // Faster builds with SWC minification

  // Static and dynamic file handling
  trailingSlash: false, // Set trailing slash for URLs (false by default)

  // Environment variable example
  env: {
    // Example: Add your API keys or variables here
    // EXAMPLE_API_KEY: process.env.EXAMPLE_API_KEY,
  },

  // Internationalization (optional - enable if using i18n)
  i18n: {
    locales: ["en"], // Add other languages if necessary
    defaultLocale: "en",
  },
};

module.exports = nextConfig;