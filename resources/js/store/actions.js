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
  addNewHandicapName (context) {
    context.commit('addNewHandicapName', payload)
  },
  loadCategories(context) {
      const axios = require('axios');
      axios.get(`api/categories`)
          .then(response => {
              this.result = response.data
              context.commit('setCategories', this.result)
          })
          .catch(error => {
              console.log(error);
          })


  }}
