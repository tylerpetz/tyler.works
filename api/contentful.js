import * as contentful from 'contentful'
require('dotenv').config()

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CD_ACCESS_TOKEN
})
export default client
