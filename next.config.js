/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cms.sleep-bag-shop.ru'],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
