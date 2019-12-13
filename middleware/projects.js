export default async function({ store, route }) {
  await store.dispatch('posts/getProjectBySlug', route.params.slug)
}
