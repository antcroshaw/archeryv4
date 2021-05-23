<template><div>
  <display-handicaps
v-for="handicap in handicaps"
:key="handicap.id"
:id="handicap.id"
:score="handicap.score"

@addOneToScore="increaseScore"
@subtractOneToScore="decreaseScore"
@updateHandicap="updateHandicap"


  ></display-handicaps>
    <p v-if="updateSuccess"> Handicaps updated successfully</p>

</div>
</template>

<script>
import displayHandicaps from "../components/displayHandicaps";

export default {
    data: function() {
        return {
            handicaps: [],
            updateSuccess: false
        };
    },
  components: {
    displayHandicaps
  },
    methods: {
        getList(){
            axios.get('api/handicaps')
                .then( response => {
                    this.handicaps = response.data
                })
                .catch( error => {
                    console.log(error);
                })
        },

        increaseScore(id){
          const handicapToIncrease = this.handicaps.find(
              (handicaps) => handicaps.id === id
          );
          handicapToIncrease.score = handicapToIncrease.score + 1;
        },
        decreaseScore(id){
            const handicapToDecrease = this.handicaps.find(
                (handicaps) => handicaps.id === id
            );
            handicapToDecrease.score = handicapToDecrease.score - 1;
        },
        updateHandicap(id){
            const updateHandicap = this.handicaps.find(
                (handicaps) => handicaps.id === id
            );
            axios.put('api/handicaps/' + updateHandicap.id, {
                score: updateHandicap.score,

            })
                .then( response=> {
                    if( response.status == 200 ) {

                       this.handicapUpdated();

                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        handicapUpdated(){

            this.updateSuccess = true;

                setTimeout(() => {
                    this.updateSuccess = false;
                }, 1000 );
        }




    },
    created(){
        this.getList();

    }
}
</script>

<style>

</style>
