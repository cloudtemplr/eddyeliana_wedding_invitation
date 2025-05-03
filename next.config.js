/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false, // 필요 없으면 이 줄도 삭제 가능
        };
        return config;
    },
};

module.exports = nextConfig;
