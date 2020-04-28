<template>
  <div class="home">
    <Title />
    <Markdown-Preview ref="content" @convertedAnchors="buildPageNav" />
    <Left-Drawer ref="drawerL" />
    <Right-Drawer ref="drawerR" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  },
  components: {
    'Markdown-Preview': require('../components/Markdown.vue').default,
    'Left-Drawer': require('../components/LeftDrawer').default,
    'Right-Drawer': require('../components/RightDrawer').default,
    'Title': require('../components/Title.vue').default
  },
  methods: {
    buildPageNav(val) {
      console.log('Hello?')
      console.log(val)
      this.$refs.drawerR.init(val)
    }
  }
}
</script>

<style>
</style>