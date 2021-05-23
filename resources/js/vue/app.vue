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

</div>
</template>

<script>
import displayHandicaps from "../components/displayHandicaps";

export default {
    data: function() {
        return {
            handicaps: []
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
                        this.$emit('handicapUpdated', updateHandicap);

                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },




    },
    created(){
        this.getList();

    }
}
</script>

<style>

</style>
