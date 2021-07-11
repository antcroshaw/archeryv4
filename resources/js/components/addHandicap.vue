<template>
<div>
    <form @submit.prevent="submitForm" class="form-group">

       <p><label for="score">Add score to handicap</label>
           <input type="text" class="score" name="score" v-model="score" id="score"/></p>
<!--       <p><label for="name">Name</label>-->
<!--           <input type="text" class="name" name="name" v-model="name" id="name"/></p>-->

    <button type="submit">Add score</button>
    </form>
</div>
</template>

<script>
export default {
    props: ['handicapList','activeHandicap'],
    data: function(){
        return {
            score: '',

        }
    },
methods: {
    submitForm(){
        this.$emit('addScore',this.score,this.activeHandicap);
        this.score = '';


    }
}
}
</script>

<style scoped>

.score{
    background: grey;
    color:white;
}
</style>
