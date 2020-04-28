<template>
  <div class="home">
    <div class="title-wrapper">
      <h1 class="title">{{$route.name}}</h1>
    </div>
    <Markdown-Preview ref="content" @convertedAnchors="buildPageNav" />
    <Left-Drawer ref="drawerL" />
    <Right-Drawer ref="drawerR" />
  </div>
</template>

<script>
const templates = require('@/template.json');
export default {
  name: 'Home',
  components: {
    'Markdown-Preview': require('../components/Markdown.vue').default,
    'Left-Drawer': require('../components/LeftDrawer').default,
    'Right-Drawer': require('../components/RightDrawer').default,
  },
  methods: {
    buildPageNav(val) {
      this.$refs.drawerR.init(val)
    }
  }
}
</script>

<style>
</style>