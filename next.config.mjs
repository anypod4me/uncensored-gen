/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  basePath: '/uncensored-gen', // Must match your GitHub repo name
  assetPrefix: '/uncensored-gen/', 
  images: {
    unoptimized: true, // Prevents errors with external AI images on static sites
  },
};

export default nextConfig;
