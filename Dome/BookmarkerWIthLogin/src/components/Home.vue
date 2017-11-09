<template>
  <div>
    <app-header></app-header>
    <app-form></app-form>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './Header.vue'
import Footer from './Footer.vue'
import Form from './Form.vue'

export default {
  name: 'Home',
  components: {
    appHeader: Header,
    appFooter: Footer,
    appForm: Form,
  }
}
</script>
