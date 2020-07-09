export default{
  update (context, value) {
    context.commit('updateCount', value)
  },
  login (context, value) {
    context.commit('giao', value)
  },
  regiest (context, value) {
    context.commit('addUser', value)
  },
  selectAll (context) {
    context.commit('select')
  }
}
