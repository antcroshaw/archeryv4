export default {
  addOneToScore (context, payload) {
    context.commit('addOneToScore', payload)
  },
  subtractOneFromScore (context, payload) {
    context.commit('subtractOneFromScore', payload)
  },
  addNewHandicap (context, newHandicap) {
    context.commit('addNewHandicap', newHandicap)
  },
  deleteHandicap (context, payload) {
    context.commit('deleteHandicap', payload)
  },
  addNewHandicapName (context, payload) {
    context.commit('addNewHandicapName', payload)
  }
}
