<template>
  <div class="default_container d-flex flex-column">
    <main class="main" :class="$route.meta.navigation ? 'has_navigation' : ''">
      <router-view />
    </main>
    <Navigation v-if="$route.meta.navigation" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'DefaultContainer',

  components: {
    Navigation,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
.default_container {
  .main {
    min-height: 100dvh;
    background-color: #fff;
    @media only screen and (min-width: 600px) {
      width: 400px;
      margin: 0 auto;
    }

    &.has_navigation {
      margin-bottom: 50px;
    }
  }
}
</style>
