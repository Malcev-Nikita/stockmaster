/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cms.studap.ru'],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
