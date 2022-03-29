<template>
  <div class="page3">
    <h1>Summary</h1>

    <div>Name: {{ $route.query.name }}</div>
    <div>Age: {{ $route.query.age }}</div>
    <div>Location: {{ $route.query.location }}</div>
    <div>Package: {{ $route.query.package }}</div>
    <div>Premium: {{ $route.query.premium }}</div>

    <button @click="onBackClick">Back</button>
    <button @click="onBuyClick">Buy</button>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  methods: {
    onBackClick() {
      this.$router.push({ name: 'page2' });
    },
    onBuyClick() {
      this.$router.push({ name: 'page1' });
    }
  }
};
</script>

<style scoped>

</style>
