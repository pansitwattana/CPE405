<template>
  <div>
      <hr>
      <h4>ServerStatus Component:</h4>
      <span>Server Status {{ status }} - </span>
      <button v-on:click="toggleStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        status: 'Normal'
    };
  },
  methods: {
    toggleStatus() {
        this.status = this.status === 'Normal' ? 'Critical' : 'Normal'
    }
  }
}
</script>

<style>

</style>
