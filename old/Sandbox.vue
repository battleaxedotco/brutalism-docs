<template>
  <Content>
    <h1>Styles</h1>
      <Display>
        $$$
      </Display>
      <Coder />
  </Content>
</template>

<script>
export default {
  data: () => ({

  }),
  components: {
    Content: require('../components/Content.vue').default,
    Display: require('../components/Display.vue').default,
    Coder: require('../components/Codeking.vue').default
  }
}
</script>

<style>

</style>