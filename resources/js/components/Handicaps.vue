<template>
    <div>
<h1>Handicaps</h1>
 <div>
   <router-link :to="{
     name: 'HandicapDetails',
     params: {
     }
   }"></router-link>
 </div>
  <router-view></router-view>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="newHandicapName">Add Handicap Name: </label>
      <input class="text" name="newHandicapName" id="newHandicapName" />
      <button type="submit" @click="">Add</button>
      <p class="errors" v-if="!formIsValid">Please enter a valid and non-empty name</p>

    </div>
  </form>
    </div>
</template>
<script>
export default {
  computed: {
    handicaps () {
      return this.$store.getters['handicaps/handicaps']
    }
  },
  data () {
    return {
      newHandicapName: '',
      formIsValid: true
    }
  },
    methods: {
      redirect(){
          this.$router.push('Home')
      }
  }
}
</script>
<style scoped>
.errors {
  font-weight: bold;
  color: red;
}

</style>
