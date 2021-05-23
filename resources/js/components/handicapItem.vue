<template>
    <p v-model="handicap">{{ handicap.score }}
        <button class="my_button" type="button" @click="increaseValue(index)">+</button>
        <button type="button" class="my_button" @click="decreaseValue(index)">-</button>
    </p>

</template>


<script>

export default {
    props: ['handicap'],


    methods: {
        increaseValue(){
            this.handicap.score = this.handicap.score + 1;
            this
        },
        decreaseValue(){
            this.handicap.score = this.handicap.score - 1;
        }
    }
}
</script>

<style scoped>

</style>
