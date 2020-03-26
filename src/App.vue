<template>
  <div id="app">
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script>
import Navbar from "./views/layouts/Navbar.vue";
import Footer from "./views/layouts/Footer.vue";
export default {
  name: 'App',
  components: {},
}
</script>
