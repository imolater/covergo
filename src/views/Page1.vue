<template>
  <div class="page1">
    <h1>Hello There!</h1>
    <div>Let's buy insurance.</div>

    <button @click="onClick">Let's buy!</button>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  methods: {
    onClick() {
      this.$router.push('/page2');
    }
  }
};
</script>
