<template>
  <div :style="" class="toolbar-wrapper">
    <Battleaxe-Logo />
  </div>
</template>

<script>
export default {
  data: () => ({
    text: 'Hello',
    height: '70px'
  }),
  mounted() {
    // window.addEventListener('scroll', this.scrollFunction)
  },
  components: {
    'Battleaxe-Logo': require('./battleaxeLogo.vue').default
  },
  methods: {
    scrollFunction() {
      // console.log('Scrolling')
      this.height = 
        (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
          ? "20px"
          : "50px"
    }
  }
}
</script>

<style>
.toolbar-wrapper {
  display: flex;
  width: 100%;
  height: 70px;
  position: fixed;
  transition: height 120ms var(--quart) 0ms;
  background-color: transparent;
  z-index: 0;
}


@media screen and (max-width: 950px) {
  .toolbar-wrapper {
    background-color: rgb(243, 247, 249, 0.85);
    z-index: 3;
    backdrop-filter: blur(5px);
    height: 42px;
  }
}
</style>