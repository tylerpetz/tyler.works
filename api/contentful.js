
const contentful = require('contentful')

module.exports = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CD_ACCESS_TOKEN
})

// export default function ({ $axios }) {
//   $axios.interceptors.response.use(
//     (response) => response,
//     // send server error messages back to frontend try/catch blocks
//     (error) => Promise.reject(error),
//   )
// }
