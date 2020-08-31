export default async function ({ store, params }) {
  await Promise.all([
    store.dispatch('posts/getPosts', params.slug),
    store.dispatch('projects/getProjects', params.slug)
  ])
}
