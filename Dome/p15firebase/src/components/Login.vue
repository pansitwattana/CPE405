<template>
  <div class="login">
      <h3>Sign in</h3>
      <input type="text" v-model="user.username" placeholder="Username"><br>
      <input type="password" v-model="user.password" placeholder="Password"><br>
      <button @click="login">Login</button>
      <p>You don't have an account? You can <router-link to="/signup"> create one</router-link><br>
        Or... You can <router-link to="/signup2"> create account here</router-link></p>
      <hr>
      <p>Sign-in with <span @click="loginGoogle">Google</span> or <span @click="loginFacebook">Facebook</span> account.</p>
      <p>Sign-in with Firebase UI <router-link to='/firebaseauth'>click here</router-link></p>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginFacebook() {

    },
    loginGoogle() {
      console.log('Google login')
      // Using a popup.
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          result => {
            if (result) {
              // This gives you a Google Access Token.
              var token = result.credential.accessToken
              // The signed-in user info.
              var user = result.user

              console.log('token: ' + token)
              console.log(user)

              this.$router.push('/hello')
            }
          },
          err => {
            alert('Oops. ' + err.message)
          }
        )
    }
  }
}
</script>

