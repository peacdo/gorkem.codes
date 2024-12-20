/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/gorkem.codes',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;