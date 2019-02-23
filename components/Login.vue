<template>
    <div id="firebaseui-auth-container">
    </div>
</template>

<script>
import firebase from "~/plugins/firebase.js";
import auth from "~/plugins/auth.js";
import firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css'

export default {
  props: ["config"],
  mounted() {
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", this.config);
  }
};
</script>
