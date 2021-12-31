export default {
  handicaps (state) {
    return state.handicaps
  },
  getHandicapById: (state) => (id) => {
    return state.handicaps.find(handicaps => handicaps.id === id)
  },
  categories (state) {
    return state.categories
  },
  getHandicapByCategoryId: (state) => (id) => {
    return state.handicaps.filter(handicaps => handicaps.categoryId === id)
  }
}
