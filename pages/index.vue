<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="Kuaty"
      >
      <img src="~/assets/img/yaku.jpg">
        Kulve-taroth lover
      </card>

      <card
        title="Yoshihara"
      >
      <img src="~/assets/img/amane.jpg">
        Wrapped in the wind
      </card>

      <card
        title="Mutoh"
      >
      <img src="~/assets/img/muto.jpg">
        Au Crepuscule de La Vie
      </card>

      <card
        title="Ihara"
      >
      <img src="~/assets/img/teru.jpg">
        Just ihara.
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
