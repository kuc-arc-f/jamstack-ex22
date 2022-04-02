/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MY_SITE_NAME: "jamstack-ex-22",  
    MY_JSON_URL: 'http://localhost/cms.json',  
    BASE_URL: "http://localhost:3000",
  },  
}
