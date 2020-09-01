export default async function ({ store }) {
  await Promise.all([
    store.dispatch('content/getBrags'),
    store.dispatch('posts/getPosts'),
    store.dispatch('projects/getProjects')
  ])
}
