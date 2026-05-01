/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/15/09/cristiano-ronaldo-10.jpg
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.independent.co.uk',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
