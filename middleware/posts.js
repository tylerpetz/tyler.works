export default async function({ store, route }) {
  await store.dispatch('posts/getPostBySlug', route.params.slug)
}
