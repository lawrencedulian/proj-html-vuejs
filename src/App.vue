<script>
import { store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      navLinks: [
        {
          name: "Home",
          href: "/home",
          active: true

        },
        {
          name: "Rates",
          href: "/rates",
          active: false
        },
        {
          name: "Testimonials",
          href: "/testimonials",
          active: false
        },
        {
          name: "FAQ",
          href: "/faq",
          active: false
        },
        {
          name: "Blog",
          href: "/blog",
          active: false
        },
        {
          name: "Contact",
          href: "/contact",
          active: false
        },
      ]
    }
  }
}
</script>

<template>
  <AppHeader :navLinksObj="navLinks" />
  <AppMain />
  <AppFooter :navLinksObj="navLinks" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
