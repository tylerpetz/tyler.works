export default async function ({ store, route }) {
  await store.dispatch('projects/getProjectBySlug', route.params.slug)
}
