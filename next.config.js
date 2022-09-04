/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },
  env:{
    FB_APIKEY: "AIzaSyB5jNTcDJcVcvsg6K7PCkSW9cCC6BZd9vM",
    FB_AUTHDOMAIN: "project-hackathon-ebcfa.firebaseapp.com",
    FB_PROJECTID: "project-hackathon-ebcfa",
    FB_STORAGEBUCKET: "project-hackathon-ebcfa.appspot.com",
    FB_MSS_SENDERID: "617664718510",
    FB_APPID: "1:617664718510:web:9fd4896fdf2e8502ed6f3f",
    DATABASE_URL: "https://project-hackathon-ebcfa-default-rtdb.firebaseio.com"
  }
}

module.exports = nextConfig

