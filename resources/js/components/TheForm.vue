<template>
  <form @submit.prevent="submitForm">

    <div class="form-control">
      <div class="row" v-for="(handicap,index) in handicaps" :key="index">
        <handicap-item
        :handicap="handicap"
        ></handicap-item>

<!--          <div v-for="(item,index) in items" :key="index">-->
<!--              <list-item-->
<!--                  :item="item"-->
<!--                  class="item"-->
<!--                  v-on:itemchanged="$emit('reloadlist')"-->
<!--              />-->
<!--          </div>-->
      </div>
    </div>

    <div>
      <button @click="submitForm">Save Data</button>
    </div>
  </form>
</template>

<script>
import handicapItem from "./handicapItem";

export default {
    props: ['handicaps'],
    components: {
        handicapItem
    },

  methods: {
    submitForm() {
        axios.post('api/handicaps/store', {
            handicap: this.handicap
        })
            // .then( response=> {
            //     if(response.status == 201) {
            //         this.handicap.name = "";
            //         this.$emit('reloadlist');
            //     }
            // })
            .catch(error => {
                console.log(error);
            })


    },


  },
}
</script>



<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
.my_button{
    width: 1.2rem;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}


</style>
