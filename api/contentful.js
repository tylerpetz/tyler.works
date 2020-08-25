import * as contentful from 'contentful'

const createClient = () => contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CD_ACCESS_TOKEN
})

export default createClient
