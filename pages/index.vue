<template>
  <section class='section'>
    <div class='columns is-mobile'>
      <h1> Hello, Kulve-Taroth! </h1>
    </div>
    <div class='columns is-mobile'>
      <img  style='height:30vh;' src='~assets/iconTaroth.png'>
    </div>
    <p>
      マムタロト（英語名: Kulve Taroth）は16人で挑むモンスターです。
      ログインしてパーティを組みましょう。
    </p>
    <h2> 一狩りいこうぜ！ </h2>
    <div class='columns is-mobile'>
        <login :config=config></login>
    </div>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>クリックすると増える。
  </section>
</template>

<script>
import Login from "~/components/Login.vue";
import firebase from "~/plugins/firebase.js";
import auth from "~/plugins/auth.js";

export default {
  components: {
    Login
  },
  data() {
    return {
      config: {
        signInSuccessUrl: '/party',
        signInOptions: [
          // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID
          // firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        tosUrl: 'https://google.com'
      }
    };
  }
};
</script>


