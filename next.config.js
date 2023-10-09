/** @type {import('next').NextConfig} */
const nextConfig = {
  

  
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test && rule.test.test && rule.test.test('.svg')
    );

    // Clone the fileLoaderRule and modify it
    const svgFileLoaderRule = { ...fileLoaderRule };
    svgFileLoaderRule.test = /\.svg$/i;
    svgFileLoaderRule.resourceQuery = /url/; // *.svg?url

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      svgFileLoaderRule,
      

      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    return config;
  },
};

module.exports = nextConfig;
