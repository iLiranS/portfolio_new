/** @type {import('next').NextConfig} */
const nextConfig = {

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
      },
      {
        protocol:'https',
        hostname:'i.ibb.co',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'**'
      }
    ],
    
  }
}

module.exports = nextConfig
