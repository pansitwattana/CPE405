<template>
  <div>
    <h2>Home Component:</h2>
    <app-server-status v-for="server in 5" v-bind:key="server"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus'

export default {
  components: {
    'app-server-status': ServerStatus
  }
}
</script>

<style>

</style>
