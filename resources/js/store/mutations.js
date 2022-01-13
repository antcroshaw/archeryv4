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
    }

}
