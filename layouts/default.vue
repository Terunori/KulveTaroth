<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/iconTaroth.png"
            alt="KulveTaroth"
            height="28"
          >
          &nbsp;
          <span>マムタロト集会所</span>
        </a>

        <div class="navbar-burger" data-target="navMenu" @click="toggleMenu" :class="{'is-active': isMenuActive}">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav><!-- navbar-brand END -->

    <section class="main-content columns">
      <div class="navbar-menu" id="navMenu" :class="{'is-active': isMenuActive}">
        <aside class="column is-10 section" >
          <p class="menu-label is-hidden-touch">
            General
          </p>
          <ul class="menu-list" >
            <li
              v-for="(item, key) of items"
              :key="key"
            >
              <nuxt-link
                :to="item.to"
                exact-active-class="is-active"
              >
                <b-icon :icon="item.icon" /> {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </aside>
      </div>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Party',
          icon: 'axe',
          to: { name: 'party' }
        },
        {
          title: 'Member',
          icon: 'account-multiple',
          to: { name: 'members' }
        },
        {
          title: 'Talkroom',
          icon: 'android-messages',
          to: { name: 'talkroom' }
        }
      ],
      isMenuActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>
