<template><div>
  <display-handicaps
v-for="handicap in handicaps"
:key="handicap.id"
:id="handicap.id"
:score="handicap.score"
:name="handicap.name"

@addOneToScore="increaseScore"
@subtractOneToScore="decreaseScore"
@updateHandicap="updateHandicap"
@deleteHandicap="deleteHandicap"



  ></display-handicaps>
    <button :disabled="!isDisabled" type="button" @click="saveAllChanges">Save All Changes</button>
    <p v-if="updateSuccess"> Handicaps updated successfully</p>
    <p v-if="updateFailed"> Handicaps NOT updated please try again later!</p>
<hr>
    <add-handicap
    @addScore="addScore"
    ></add-handicap>

</div>
</template>

<script>
import displayHandicaps from "../components/displayHandicaps";
import addHandicap from "../components/addHandicap";

export default {
    data: function() {
        return {
            handicaps: [],
            handicapsUpdated: [],
            updateSuccess: false,
            updateFailed: false,


        };
    },
    computed: {
        isDisabled() {
            // you can  check your form is filled or not here.
            return this.handicapsUpdated.length > 0;
        },
    },
  components: {
        displayHandicaps,
        addHandicap

  },
    methods: {
        addScore(score){
            axios.post('api/handicaps/store',{
                score : score
            })
                .then( response => {
                    if( response.status == 200 ) {
                   this.getList()
                    }
                }).catch(error => {
                this.updateFail();
                console.log(error);
            })

        },
    deleteHandicap(id) {
        axios.delete('api/handicaps/' + id, )
            .then( response => {
                if( response.status == 200 ) {
                    this.getList()
                }
            }).catch(error => {
            this.getList()
            console.log(error);
        })

    },
        getList(){
            axios.get('api/handicaps')
                .then( response => {
                    this.handicaps = response.data
                })
                .catch( error => {
                    console.log(error);
                })
        },
        saveAllChanges(){
          this.handicapsUpdated.forEach(
               (id) => {
                 this.updateHandicap(id);
              }

          )
            this.handicapsUpdated = [];
        },
        increaseScore(id){
          const handicapToIncrease = this.handicaps.find(
              (handicaps) => handicaps.id === id
          );
            handicapToIncrease.score = handicapToIncrease.score + 1;
            if(!this.handicapsUpdated.includes(handicapToIncrease.id)) {
             this.handicapsUpdated.push(handicapToIncrease.id);}
        },
        decreaseScore(id){
            const handicapToDecrease = this.handicaps.find(
                (handicaps) => handicaps.id === id
            );
            handicapToDecrease.score = handicapToDecrease.score - 1;
            if(!this.handicapsUpdated.includes(handicapToDecrease.id)) {
            this.handicapsUpdated.push(handicapToDecrease.id);}
        },
        updateHandicap(id){

            const updateHandicap = this.handicaps.find(
                (handicaps) => handicaps.id === id
            );
            axios.put('api/handicaps/' + updateHandicap.id, {
                score: updateHandicap.score,

            })
                .then( response => {
                    if( response.status == 200 ) {
                       this.handicapUpdated();
                    }
            }).catch(error => {
                this.updateFail();
                    console.log(error);
                })
        },
        handicapUpdated(){

            this.updateSuccess = true;

                setTimeout(() => {
                    this.updateSuccess = false;
                }, 1000 );
        },
        updateFail(){
            this.updateFailed = true;
            setTimeout(() => {
                this.updateFailed = false;
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
