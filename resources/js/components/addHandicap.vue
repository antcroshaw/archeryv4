<template>
<div>
    <form @submit.prevent="submitForm" class="form-group">

       <p><label for="score">Add score to handicap</label>
           <input type="text" class="score" name="score" v-model="score" id="score"/></p>
<!--       <p><label for="name">Name</label>-->
<!--           <input type="text" class="name" name="name" v-model="name" id="name"/></p>-->
        <p>
            <select name="name" id="name" v-model="name">
               <option v-for="(item,index) in handicapList" :key="index" :value="item">{{ item }}</option>
            </select>
        </p>
    <button type="submit">Add score</button>
    </form>
</div>
</template>

<script>
export default {
    props: ['handicapList'],
    data: function(){
        return {
            score: '',
            name: ''
        }
    },
methods: {
    submitForm(){
        this.$emit('addScore',this.score,this.name);
        this.score = '';
        this.name = '';

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
