<template>
<div>
    <p>
        Name: {{ name }}
    </p>
   <p>
      Score:  {{ score }}
       <button class="my_button" type="button" @click="increaseScore(id)">+</button>
       <button class="my_button" type="button" @click="decreaseScore(id)">-</button>
       <button class="my-button btn-danger" type="button" @click="deleteHandicap(id)">Delete</button>



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
    name: {
        type: String,
        required: true
    }

},
    methods: {
         increaseScore(){
            this.$emit('addOneToScore', this.id);

    },
        decreaseScore(){
            this.$emit('subtractOneToScore', this.id);

        },
        updateHandicap(){
            this.$emit('updateHandicap',this.id)
        },

        deleteHandicap(){
             this.$emit('deleteHandicap',this.id)
        },

    }
}
</script>

<style scoped>

</style>
