<template>
  <form @submit.prevent="login">
    <p>
      Email: <input type="text" v-model="email" />
    </p>
    <p>
      Password: <input type="password" v-model="password" />
    </p>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() =>{
          console.log('autenticado 👍');
          this.$router.push({name: 'Home'});
        })
        .catch(() =>{
          window.alert('Invalid email and password');
        })
    }
  }
}
</script>

<style>

</style>template