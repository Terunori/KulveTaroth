<template>
    <button class="button is-info" @click="twitterLogin"><i class="fab fa-twitter"></i> &nbsp; twitterでログイン</button>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
  name: 'home',
  methods: {
    twitterLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    }
  }
}
</script>
