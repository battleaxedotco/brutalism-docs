<template>
  <div :style="" class="toolbar-wrapper">
    <Battleaxe-Logo />
    <div class="toolbar-content">
      <div class="component-title">{{$route.name}}</div>
      <div class="anchor-wrapper">
        <div class="anchor-title">{{activeAnchor}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: 'Hello',
    height: '70px',
  }),
  mounted() {
    // window.addEventListener('scroll', this.scrollFunction)
  },
  components: {
    'Battleaxe-Logo': require('./battleaxeLogo.vue').default
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
    activeAnchor() {
      if (this.app.activeAnchor)
        return this.app.activeAnchor.name
      else return ''
    }
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
  background-color: var(--bg);
  z-index: 0;
}

.toolbar-content {
  box-sizing: border-box;
  padding: 0px 10px;
  width: 100%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.component-title {
  color: var(--text-faded);
  height: fit-content;
  display: flex;
  align-items: center;
  margin: -4px 0px 0px 0px;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: .25ch;
  font-weight: 400;
  white-space: pre;
}

.anchor-wrapper {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
}

.anchor-title {
  box-sizing: border-box;
  font-weight: bold;
  color: var(--text-faded);
  font-size: 20px;
  height: 100%;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  /* text-transform: uppercase; */
  /* letter-spacing: .25ch;
  font-weight: 400; */
}

.component-title, .anchor-title {
  display: none;
}

@media screen and (max-width: 600px) {
  .toolbar-content {
    box-sizing: border-box;
    max-width: calc(100% - 30px)
  }
  .component-title {

    margin: 0px 0px 0px 0px;
    font-size: 20px;
    font-weight: 500;
    max-width: 45%;
    /* white-space: pre; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .anchor-title {
    font-size: 16px;
  }
  .anchor-wrapper {
    max-width: 65%;
  }
}

@media screen and (max-width: 950px) {
  .component-title {
    display: block;
  }
  .anchor-title {
    display: flex;
  }
  .toolbar-wrapper {
    /* background-color: rgb(243, 247, 249, 0.85); */
    z-index: 3;
    backdrop-filter: blur(5px);
    height: 42px;
  }
}
</style>