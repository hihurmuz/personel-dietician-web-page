const state = () => ({
  headerElements: [
    // { name: 'Anasayfa', icon: 'mdi-home', path: '/'},
    { name: 'Hakkımda', icon: 'mdi-view-dashboard', path: '/hakkimda'},
    { name: 'Hizmetlerim', icon: 'mdi-view-dashboard', path: '/hizmetlerim'},
    // { name: 'Basında Ben', icon: 'mdi-view-dashboard', path: '/basinda-ben'},
    // { name: 'Blog', icon: 'mdi-view-dashboard', path: '/blog'},
    { name: 'Online Diyet', icon: 'mdi-view-dashboard', path: '/online-diyet'},
    { name: 'İletişim', icon: 'mdi-home', path: '/iletişim'},
  ]
})

const mutations = {
}

const actions = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
