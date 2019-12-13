export default function({ store, route }) {
  store.commit('app/updatePageName', route.name)
}
