<template>
    <div>
  <h1>Handicap Details</h1>
  <base-card>
    <p>
      <base-button @click="showDialog" v-if="!dialogIsVisible">Edit</base-button>
      <button @click="hideDialog" v-if="dialogIsVisible">Done</button>
    </p>
    <table id="scores">
      <th id="table-heading">{{ handicapsById(id).name }}</th>
      <tr v-for="(score,index) in handicapsById(id).scores" :key="index">
        <td>Handicap: {{ index + 1 }}</td>
        <td>Score: {{ score }}</td>
        <td>
          <button @click="increaseScore(index,handicapsById(id).name)" v-if="dialogIsVisible">+
          </button>
          <button @click="decreaseScore(index,handicapsById(id).name)" v-if="dialogIsVisible">-</button>
          <button @click="deleteHandicap(index,handicapsById(id).name)" v-if="dialogIsVisible">Delete</button>
        </td>
      </tr>
    </table>
    <div class="form-group" v-if="dialogIsVisible">
      <form @submit.prevent="submitForm">
        <label for="addHandicap">Add Handicap: </label>
        <input class="text" name="addHandicap" id="addHandicap" v-model="newHandicap.value"/>
        <button type="submit" @click="addHandicap(name)">Add</button>
        <p class="errors" v-if="!formIsValid">Please enter a valid and non empty handicap</p>
      </form>
    </div>
    <router-link :to="{
     name: 'categories',
     params: {
     id: id
     }}" >Back to Categories</router-link>
  </base-card>
    </div>
</template>

<script>
import BaseButton from './ui/BaseButton'
import BaseCard from './ui/BaseCard'

export default {
  components: { BaseCard, BaseButton },
  props: ['name'],
  data () {
    return {
      // this is required as you cannot send more than one item of data in an action call
      payload: {
        name: '',
        index: null
      },
      newHandicap: {
        value: '',
        name: ''
      },
      animatedBlock: false,
      dialogIsVisible: false,
      formIsValid: true
    }
  },
  computed: {
    handicapsById () {
      return this.$store.getters['handicaps/getHandicapById']
    },
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    increaseScore (index, name) {
      this.payload.name = name
      this.payload.index = index
      this.$store.dispatch('handicaps/addOneToScore', this.payload)
    },
    decreaseScore (index, name) {
      this.payload.name = name
      this.payload.index = index
      this.$store.dispatch('handicaps/subtractOneFromScore', this.payload)
    },
    addHandicap (name) {
      this.formIsValid = true
      if (this.newHandicap.value < 1 || this.newHandicap.value === '') {
        this.formIsValid = false
        return
      }
      this.newHandicap.name = name
      this.$store.dispatch('handicaps/addNewHandicap', this.newHandicap)
      this.newHandicap.value = ''
    },
    deleteHandicap (index, name) {
      this.payload.name = name
      this.payload.index = index
      this.$store.dispatch('handicaps/deleteHandicap', this.payload)
    },
    animateBlock () {
      this.animatedBlock = true
    },
    showDialog () {
      this.dialogIsVisible = true
    },
    hideDialog () {
      this.dialogIsVisible = false
    }
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
