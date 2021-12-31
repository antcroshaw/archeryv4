<template><div>
  <h1>Categories</h1>
  <div v-for="category in categories" :key="category.id">
    <router-link :to="{
     name: 'handicaps',
     params: {
       id: category.id
     }
   }">{{ category.name }}</router-link>
  </div>
  <router-view></router-view>
<!--  <form @submit.prevent="submitForm">-->
<!--    <div class="form-group">-->
<!--      <label for="addHandicapName">Add Handicap Name: </label>-->
<!--      <input class="text" name="addHandicapName" id="addHandicapName" v-model="newHandicapName"/>-->
<!--      <button type="submit" @click="addHandicapName(newHandicapName)">Add</button>-->
<!--      <p class="errors" v-if="!formIsValid">Please enter a valid and non-empty name</p>-->

<!--    </div>-->

<!--  </form>-->
</div>
</template>
<script>
export default {
  computed: {
    categories () {
      return this.$store.getters['handicaps/categories']
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
