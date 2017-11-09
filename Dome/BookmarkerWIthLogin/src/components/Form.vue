<template>
    <div>
        <div class="jumbotron">
        <h2>Bookmark Your Favorite Sites</h2>
        <form id="myForm" @submit="onSubmit">
          <div class="form-group">
            <label>Site Name</label>
            <input v-model="name" type="text" class="form-control" id="siteName" placeholder="Website Name">
          </div>
          <div class="form-group">
            <label>Site URL</label>
            <input v-model="url" type="text" class="form-control" id="siteUrl" placeholder="Website URL">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="row marketing">
        <bookmark-result 
          v-for="(result, key) in results" 
          :key="key"
          :id="key"
          :data="result"
          :onDelete="onDelete"></bookmark-result>
      </div>
      <button v-on:click="logout" >Logout</button>
    </div>
</template>

<script>

import firebase from 'firebase'
import uuid from 'uuid'
import Result from './Result.vue'

export default {
  components: {
    bookmarkResult: Result
  },
  data() {
    return {
      name: '',
      url: '',
      results: {},
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      firebase.database().ref('bookmark/' + uuid()).set({
        name: this.name,
        url: this.url
      });
    },
    onDelete(id) {
      console.log(id)
      firebase.database().ref('bookmark/' + id).remove()
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'Login'});
      })
    }
  },
  created() {
    const bookmarkDB = firebase.database().ref('bookmark')
    bookmarkDB.on('value', (snapshot) => {
      console.log(snapshot.val())
      this.results = snapshot.val()
    });
  }
}
</script>

