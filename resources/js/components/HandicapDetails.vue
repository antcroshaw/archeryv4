<template>
    <div>
  <h1>Handicap Details</h1>
  <base-card>
    <p>
      <base-button @click="showDialog" v-if="!dialogIsVisible">Edit</base-button>
      <button @click="hideDialog" v-if="dialogIsVisible">Done</button>
    </p>
    <table id="scores">
      <th id="table-heading"></th>
      <tr v-for="(handicap,index) in handicaps" :key="handicap.id">
        <td>Handicap: {{ index + 1 }} </td>
        <td>Score: {{ handicap.score }} </td>
        <td>
          <button @click="" v-if="dialogIsVisible">+
          </button>
          <button @click="" v-if="dialogIsVisible">-</button>
          <button @click="" v-if="dialogIsVisible">Delete</button>
        </td>
      </tr>
    </table>
    <div class="form-group" v-if="dialogIsVisible">
      <form @submit.prevent="submitForm" method="post" type="application/json">
        <label for="addHandicap">Add Handicap: </label>
        <input class="text" name="addHandicap" id="addHandicap" v-model="newHandicap.value"/>
        <button type="submit" @click="addHandicap(name)">Add</button>
        <p class="errors" v-if="!formIsValid">Please enter a valid and non empty handicap</p>
      </form>
    </div>
    <router-link :to="{
     name: 'handicaps',
     params: {
     id: this.currentCategoryId
     }}" >Back to Handicaps</router-link>
  </base-card>
    </div>
</template>

<script>
import BaseButton from './ui/BaseButton'
import BaseCard from './ui/BaseCard'

export default {
  components: { BaseCard, BaseButton },
  data () {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      formIsValid: true
    }
  },
  computed: {
      id () {
          return this.$route.params.id
      },
      name() {
          return this.$route.params.name
      },
      handicaps (){
          const handicaps = this.$store.getters['handicaps/handicaps']
          console.log(this.name)
           const newHandicaps = handicaps.filter(handicaps => handicaps.name === this.name)
      console.log(newHandicaps)
      return newHandicaps;},
      currentCategoryId(){
          return this.$store.getters['handicaps/currentCategoryId']
      }
  },
  methods: {
    // addHandicap () {
    //   this.formIsValid = true
    //   if (this.newHandicap.value < 1 || this.newHandicap.value === '') {
    //     this.formIsValid = false
    //     return
    //   }
    //   this.newHandicap.name = this.name
    //   this.newHandicap.id = this.id
    //   this.$store.dispatch('handicaps/addNewHandicap', this.newHandicap)
    //   this.newHandicap.value=''
    // },
    //
    animateBlock () {
      this.animatedBlock = true
    },
    showDialog () {
      this.dialogIsVisible = true
    },
    hideDialog () {
      this.dialogIsVisible = false
    },
  }
}
</script>

<style scoped>
#scores {
  margin: 0 auto; /* or margin: 0 auto 0 auto */
  text-align: center;
  border: none;
}

#table-heading {
  text-align: center;

}

.errors {
  font-weight: bold;
  color: red;
}

</style>
