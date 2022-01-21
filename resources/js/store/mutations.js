import axios from "axios";

export default {
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
            const handicap = {
                id: payload[key].id,
                categoryId: payload[key].categoryId,
                name: payload[key].name
            };
            handicapList.push(handicap);
        }
        state.handicapList = handicapList
    },
    setHandicaps (state,payload) {
        const handicaps = [];
        for (const key in payload) {
            const handicap = {
                id: payload[key].id,
                name: payload[key].name,
                score: payload[key].score
            };
            handicaps.push(handicap);
        }
        state.handicaps = handicaps
    },
    setCategoryId(state, payload) {
        console.log(payload)
        state.currentCategoryId = payload
    }

}
