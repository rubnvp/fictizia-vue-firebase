<template>
  <div class="hello">
    <h1>MY Messages:</h1>
    <form @submit.prevent="sendMessage">
      <input type="text" placeholder="Message" v-model="newMessage" />
      <button type="submit">Send</button>
    </form>
    <ul>
      <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'ChatMessages',
  data: () => ({
    $db: null,
    newMessage: '',
    messages: [],
    unsubscribe: null,
  }),
  methods: {
    sendMessage() {
      this.$db.collection('messages')
        .add({
          text: this.newMessage,
          date: new Date(),
        })
        .then(() => {
          this.newMessage = '';
        })
    },
  },
  created() {
    this.$db = firebase.firestore();
    this.unsubscribe = this.$db.collection('messages')
      .orderBy('date', 'desc')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs
          .map(doc => ({id: doc.id, ...doc.data()}));
        this.messages = messages;
      });
    
  },
  destroyed() {
    this.unsubscribe();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
</style>
