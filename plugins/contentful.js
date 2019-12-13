const contentful = require('contentful')
require('dotenv').config()

module.exports = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CD_ACCESS_TOKEN
})
