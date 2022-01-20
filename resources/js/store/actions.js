import axios from "axios";

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
  addNewHandicapName (context,payload) {
    context.commit('addNewHandicapName', payload)
  },
  loadCategories(context) {
      const axios = require('axios');
      axios.get(`/api/categories`)
          .then(response => {
              this.result = response.data
              context.commit('setCategories', this.result)
          })
          .catch(error => {
              console.log(error);
          })


  },
    loadHandicapList(context) {
        const axios = require('axios');
        axios.get(`/api/handicapList`)
            .then(response => {
                this.result = response.data
                context.commit('setHandicapList', this.result)
            })
            .catch(error => {
                console.log(error);
            })


    },
    loadHandicaps(context) {
        const axios = require('axios');
        axios.get(`/api/handicaps`)
            .then(response => {
                this.result = response.data
                context.commit('setHandicaps', this.result)
            })
            .catch(error => {
                console.log(error);
            })


    },

    setCategoryName(context,payload){
        context.commit('setCategoryName', payload)
    }


}
