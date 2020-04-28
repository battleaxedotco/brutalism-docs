<template>
  <div class="home">
    <Title />
    <div class="markdown-wrapper">
      <div class="markdown-content">
        <h1>404</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('404')
  },
  components: {
    Title: require('../components/Title.vue').default
  }
}
</script>

<style>

</style>