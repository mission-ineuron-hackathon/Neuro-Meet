/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    FB_APIKEY: "AIzaSyB5jNTcDJcVcvsg6K7PCkSW9cCC6BZd9vM",
    FB_AUTHDOMAIN: "project-hackathon-ebcfa.firebaseapp.com",
    FB_PROJECTID: "project-hackathon-ebcfa",
    FB_STORAGEBUCKET: "project-hackathon-ebcfa.appspot.com",
    FB_MSS_SENDERID: "617664718510",
    FB_APPID: "1:617664718510:web:9fd4896fdf2e8502ed6f3f"
  }
}

module.exports = nextConfig
