import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state () {
    return {
      categories: [
        {
          id: 1,
          name: 'GNAS Outdoor'
        },
        {
          id: 2,
          name: 'GNAS Indoor'
        }
      ],
      handicaps: [
        {
          categoryId: '1',
          id: '1',
          name: 'York',
          scores: [20, 23, 25]
        },
        {
          categoryId: '1',
          id: '2',
          name: 'Western I',
          scores: [30, 35, 36]
        },
        {
          categoryId: '1',
          id: '3',
          name: 'Western Short',
          scores: [35, 38, 39]
        },
        {
          categoryId: '2',
          id: '1',
          name: 'Bristol',
          scores: [35, 38, 39]
        },
        {
          categoryId: '2',
          id: '2',
          name: 'Bristol II',
          scores: [35, 38, 39]
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}
