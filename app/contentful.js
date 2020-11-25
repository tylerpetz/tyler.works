import * as contentful from 'contentful'

export default (spaceId, accessToken) => contentful.createClient({
  space: spaceId,
  accessToken
})
