/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config) {

        // Convert all other *.svg imports to React components
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        // fileLoaderRule.exclude = /\.svg$/i

        return config;
    }
}

module.exports = nextConfig