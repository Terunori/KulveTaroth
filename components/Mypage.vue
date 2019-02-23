<template>
<div id="mypage" class="columns is-mobile">
  <div class="columns is-mobile">
    こんにちは, {{ user.displayName }}さん
  </div>
  <button class="button is-danger is-outlined" @click="logout">ログアウト</button>
</div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'mypage',
  props: ['user'],
  methods: {
    logout: function() {
      firebase.auth().signOut();
    }
  }
}
</script>
