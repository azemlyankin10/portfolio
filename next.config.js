/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: currentApiUrl()
  }
}

module.exports = nextConfig


function currentApiUrl() {
  const isProd = process.env.NODE_ENV === 'production'
  if(isProd) {
    return 'my-portfolio-32tewjzq3-azemlyankin10.vercel.app'
  } 
  return 'http://localhost:3000'
}