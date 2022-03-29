<template>
  <div class="page2-error">
    <h1>Ooops</h1>

    <div>{{ $route.query.message }}</div>

    <button @click="onClick">Ok :(</button>
  </div>
</template>

<script>
export default {
  name: 'Page2Error',
  methods: {
    onClick() {
      this.$router.push({ name: 'page1' });
    }
  }
};
</script>
