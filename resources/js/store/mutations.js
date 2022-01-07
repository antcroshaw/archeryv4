import axios from "axios";

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
    //axios request here with handicap name and new score
      axios.post('/api/handicaps/store', {
          name: newHandicap.name,
          score: newHandicap.value
      }).then(response => {
          this.dispatch('handicaps/loadHandicaps');
      })
  },
  deleteHandicap (state, payload) {
    const item = state.handicaps.find(item => item.name === payload.name)
    return item.scores.splice(payload.index, 1)
  },
  addNewHandicapName (state, payload) {
            axios.post('/api/handicapList', {
            categoryId: payload.id,
            name: payload.name
      }).then(response => {
                this.dispatch('handicaps/loadHandicaps');
      })
  },
 setCategories (state,payload) {
     const categories = [];
     for (const key in payload) {
         const category = {
             id: key,
             name: payload[key].name
         };
         categories.push(category);
     }
     state.categories = categories
 },
    setHandicapList (state,payload) {
        const handicapList = [];
        for (const key in payload) {
            //this is where we need to add the scores for each name
            axios.get(`api/handicapScores/${payload[key].name}`)
                .then(response => {
                    payload[key].scores = response.data
                    const handicapName = {
                        id: key,
                        categoryId: payload[key].categoryId.toString(),
                        name: payload[key].name,
                        scores: payload[key].scores
                    };
                    handicapList.push(handicapName);
                })
                .catch(error => {
                    console.log(error);
                })



        }
        state.handicaps = handicapList
    }

}
