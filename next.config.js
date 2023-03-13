/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/file/d/**',
      },
      {
        protocol:'https',
        hostname:'lh3.googleusercontent.com',
        port:'',
        pathname:'/drive-viewer/**'
      }
    ],
    
  }
}

module.exports = nextConfig
