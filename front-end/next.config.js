/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },
  images: {
    domains: [
      'https://github.com/',
      'https://github.com/eemr3',
      'avatars.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
