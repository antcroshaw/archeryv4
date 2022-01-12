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
    // setHandicapList (state,payload) {
    //     const handicapList = [];
    //     for (const key in payload) {
    //         //this is where we need to add the scores for each name
    //         axios.get(`/api/handicapScores/${payload[key].name}`)
    //             .then(response => {
    //                 console.log(response.data)
    //                 payload[key].scores = response.data
    //                 const handicapName = {
    //                     id: key,
    //                     categoryId: payload[key].categoryId.toString(),
    //                     name: payload[key].name,
    //                     scores: payload[key].scores
    //                 };
    //                 console.log(handicapName)
    //                 handicapList.push(handicapName);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //
    //
    //
    //     }
    //     state.handicaps = handicapList
    // }

}
