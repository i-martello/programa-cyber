/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://First:nacho@personalcluster.hg1pfct.mongodb.net/CyberDB?retryWrites=true&w=majority",
  }
}

module.exports = nextConfig
