<template>
<div>
    <form @submit.prevent="submitForm" class="form-group">
        <label for="score">Add score to handicap</label>
    <input type="text" class="score" name="score" v-model="score" id="score"/>
    <button type="submit">Add score</button>
    </form>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            score: ''
        }
    },
methods: {
    submitForm(){
        this.$emit('addScore',this.score);
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
