<template>
  <section class='section'>
    <div class='columns is-mobile'>
      <h1> Hello, Kulve-Taroth! </h1>
    </div>
    <div class='columns is-mobile'>
      <img  style='height:30vh;' src='~assets/iconTaroth.png'>
    </div>
    <div class='columns is-mobile'>
      <p>
        マムタロト（英語名: Kulve Taroth）は16人で挑むモンスターです。
        ログインしてパーティを組みましょう。
      </p>
      <h2> 一狩りいこうぜ！ </h2>
    </div>
    <div class="columns is-mobile">
      <div class="links">
        <Home v-if="!isLogin"></Home>
        <Mypage v-if="isLogin" :user="userData"></Mypage>
      </div>
    </div>
    <!-- <div class='columns is-mobile' v-if='isLogin'>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>クリックすると増える。
    </div>
    <div class='columns is-mobile' v-else>
      <login :config=config></login>
    </div> -->
  </section>
</template>

<script>
import Login from "~/components/Login.vue";
import Home from '~/components/Home.vue';
import Mypage from '~/components/Mypage.vue';
import firebase from "~/plugins/firebase.js";
import auth from "~/plugins/auth.js";

export default {
  components: {
    Home,
    Mypage
  },
  asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出されます
    return { name: 'Hello, World！！', isLogin:false, userData:null}
  },
  fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
  },
  methods: {
    twitterLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    }
  }
};

// export default {
//   components: {
//     Login
//   },
//   data() {
//     return {
//       config: {
//         signInSuccessUrl: '/party',
//         signInOptions: [
//           // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//           firebase.auth.TwitterAuthProvider.PROVIDER_ID
//           // firebase.auth.EmailAuthProvider.PROVIDER_ID
//         ],
//         tosUrl: 'https://google.com'
//       }
//     };
//   }
// };
</script>


