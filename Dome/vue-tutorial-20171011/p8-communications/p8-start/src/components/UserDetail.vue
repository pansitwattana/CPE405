<template>
    <div class="component">
        <h3>More Detail of {{ uName }}</h3>
        <p>age = {{ age }}</p>
        <button @click="resetName">Reset Name by Event</button>
        <button @click="resetFn">Reset by Callback</button>
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
      resetFn: {
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
      resetName() {
          this.name = 'Hello world'
          this.$emit('nameWasReset', this.name)
      }
  },
  created() {
      eventBus.$on('ageEdited', (age) => {
          console.log(age)
          this.age = age
      })
  }
}
</script>


<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
