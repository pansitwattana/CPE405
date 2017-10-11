<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Username: </p><input type="text" v-model="name" @keyup="editName">
        <br>
        <p>{{ age }}</p>
        <button @click="editAge">Name+=2</button>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
      uName: {
          type: String,
          default: 'Not defined',
      },
      uAge: {
          type: Number,
          default: 1
      },
      editName: {
          type: Function
      }
  },
  data: function() {
      return {
          name: this.uName,
          age: this.uAge,
      }
  },
  methods: {
      editAge() {
          this.age += 2
          eventBus.$emit('ageEdited', this.age)
      },
  }
}
</script>


<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
