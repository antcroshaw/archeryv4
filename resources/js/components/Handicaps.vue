<template>
    <div>
<h1>Handicaps</h1>
 <div v-for="handicap in handicapsByCategoryId(id)" :key="handicap.id">
   <router-link :to="{
     name: 'HandicapDetails',
     params: {
       id: handicap.id,
       name: handicap.name,
     }
   }">{{ handicap.name }}</router-link>
 </div>
  <router-view></router-view>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="addHandicapName">Add Handicap Name: </label>
      <input class="text" name="addHandicapName" id="addHandicapName" v-model="newHandicapName"/>
      <button type="submit" @click="addHandicapName(newHandicapName)">Add</button>
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
    },
    handicapsByCategoryId () {
      return this.$store.getters['handicaps/getHandicapByCategoryId']
    },
    id () {
      return this.$route.params.id
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
      },
    addHandicapName () {
      this.formIsValid = true
      if (this.newHandicapName === '') {
        this.formIsValid = false
        return
      }
      const payload = {
        name: this.newHandicapName,
        id: this.id
      }
      console.log(payload)
      this.$store.dispatch('handicaps/addNewHandicapName', payload)
        this.$router.replace('/categories');
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
