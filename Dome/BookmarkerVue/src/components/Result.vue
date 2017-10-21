<template>
    <div class="col-lg-12">
        <div id="bookmarksResults">
            <div class="well">
                <h3>{{ result.name }}
                <a class="btn btn-default" target="_blank" v-bind:href="result.url">Visit</a>
                <button @click="onPress" class="btn btn-danger">Delete</button>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['data', 'onDelete', 'id'],
  data() {
      return {
          result: this.data,
      }
  },
  methods: {
      onPress(e) {
          e.preventDefault()
          this.onDelete(this.id)
      }
  }
}
</script>

