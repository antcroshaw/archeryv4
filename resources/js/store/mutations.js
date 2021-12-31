export default {
  addOneToScore (state, payload) {
    const item = state.handicaps.find(item => item.name === payload.name)
    return item.scores[payload.index]++
  },
  subtractOneFromScore (state, payload) {
    const item = state.handicaps.find(item => item.name === payload.name)
    return item.scores[payload.index]--
  },
  addNewHandicap (state, newHandicap) {
    const item = state.handicaps.find(item => item.name === newHandicap.name)
    return item.scores.push(newHandicap.value)
  },
  deleteHandicap (state, payload) {
    const item = state.handicaps.find(item => item.name === payload.name)
    return item.scores.splice(payload.index, 1)
  },
  addNewHandicapName (state, payload) {
    // first need to work out the max id, we need the id values from all the handicaps
    const categoryId = payload.id
    const ids = state.handicaps.map(user => state.handicaps.id)
    const sorted = ids.sort((a, b) => a - b)
    const id = String(sorted.length + 1)
    const newHandicap = { id: id, categoryId: categoryId, name: payload.name, scores: [1, 1, 1] }
    return state.handicaps.push(newHandicap)
  }
}
