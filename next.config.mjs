/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Required: Tells Next.js to build a static site
  basePath: '/uncensored-gen', // Required: Tells Next.js your site is at a sub-folder
  images: {
    unoptimized: true,       // Required: GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;


