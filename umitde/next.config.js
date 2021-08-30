/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  env: {
    CAPCTCHA_SITE_KEY: process.env.SITE_KEY,
    CAPCTCHA_SECET_KEY: process.env.SECRET_KEY,
  },
}
