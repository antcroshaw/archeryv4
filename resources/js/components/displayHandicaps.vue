<template>
<div>
   <p>
      Score:  {{ score }}
       <button class="my_button" type="button" @click="increaseScore(id)">+</button>
       <button class="my_button" type="button" @click="decreaseScore(id)">-</button>
       <button type="submit" @click="updateHandicap"> Update Handicap</button>


   </p>


</div>
</template>

<script>
export default {
props: {
    id: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },

},
    methods: {
         increaseScore(){
            this.$emit('addOneToScore', this.id)
    },
        decreaseScore(){
            this.$emit('subtractOneToScore', this.id)
        },
        updateHandicap(){
            this.$emit('updateHandicap',this.id)
        },

    }
}
</script>

<style scoped>

</style>
