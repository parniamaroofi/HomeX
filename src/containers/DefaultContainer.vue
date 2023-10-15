<template>
  <div class="default_container">
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultContainer',

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
  }
}
</style>
