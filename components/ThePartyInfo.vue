<template lang="html">
  <div class="partyinfo">
    <template v-if="party">
      <div class="mcard media media-party">
        <div class="media-content">
          <div class="content">
            <figure class="has-text-centered">
              <div class="image is-64x64" style="margin: 0 auto;">
                <img :src="party.photoURL" />
              </div>
            </figure>
            <p class="has-text-centered">
              <strong>{{ party.displayName }}</strong>
            </p>
          </div>
        </div>
      </div>
    </template>
    <div class="mcard media media-party" v-else>
      <a class="button is-primary" @click="callAuth">Signin with Google</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['party'])
  },
  methods: {
    ...mapActions(['callAuth'])
  }
}
</script>

<style scoped>
.partyinfo .mcard {
  background: #fff;
  border: solid 1px #e6e6e6;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0px auto;
  padding: 16px 0;
}
.partyinfo .media-party {
  width: 280px;
  height: 240px;
}
.partyinfo {
  justify-content: center;
  align-items: flex-start;
  display: flex;
}
@media (min-width: 768px) {
  .partyinfo .media-party {
    position: fixed;
    top: 32px;
    padding-top: 0;
  }
}
</style>
