<template>
    <div>
<h1>Handicaps</h1>
        <div v-for="handicap in handicapList" :key="handicap.id">
            <router-link :to="{
     name: 'HandicapDetails',
     params: {
       id: handicap.id,
       name: handicap.name,
     }
   }">Name: {{ handicap.name }} | ID: {{ handicap.id }}</router-link>
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
    handicapList () {
        let handicaps =  this.$store.getters['handicaps/handicapList']
         return handicaps.filter(handicaps => handicaps.categoryId.toString() === this.id )
    },
      id () {
        if(this.$route.params.id){
          return this.$route.params.id}
        else {
            return this.currentCategoryId()
        }
      },
      name() {
        return this.$route.params.name
      },
      currentCategoryId(){
          return this.$store.getters['handicaps/currentCategoryId']
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
  },
    created(){
    this.$store.dispatch('handicaps/setCategoryId', this.id)

    }
}
</script>
<style scoped>
.errors {
  font-weight: bold;
  color: red;
}

</style>
