// next.config.mjs

const nextConfig = {
  reactStrictMode: true, // Enable React strict mode

  // Add valid options supported by your Next.js version
  compiler: {
    styledComponents: true, // Example: Enable styled-components if used
  },

  // Internationalization (i18n) setup, if applicable
  i18n: {
    locales: ['en'],         // Define your supported locales (default: ['en'])
    defaultLocale: 'en',     // Set your default locale
  },
};

// For .mjs, use ES module syntax
export default nextConfig;