// If you are using a .mjs file, use ESM syntax instead of CommonJS
const nextConfig = {
  experimental: {
    appDir: true, // Adjust according to Next.js app directory usage
    turbo: false, // Enable Webpack instead of Turbopack
  },
  reactStrictMode: true,
  swcMinify: true,
  // Environment variables (add variables if needed)
  env: {
    // EXAMPLE_VARIABLE: "value",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

// Use ESM export default syntax
export default nextConfig;