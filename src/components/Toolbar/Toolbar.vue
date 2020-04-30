<template>
  <div class="toolbar-wrapper">
    <div class="toolbar-blur">
      <Battleaxe-Logo />
      <div class="toolbar-content">
        <div class="component-title">{{$route.name}}</div>
        <div @mouseenter="hover = true;" @mouseleave="hover = false;" class="anchor-wrapper">
          <div :style="{ opacity: open ? 0 : 1 }" class="anchor-title">{{activeAnchor}}</div>
          <div @click="open = !open" class="drawer-header-button">
            <Icon :name="open ? 'close' : 'menu'" color="var(--text)" size="30px" />
          </div>
        </div>
      </div>
    </div>
    <Drawer :open="open" v-click-outside="handleOutsideClick"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    hover: false,
  }),
  mounted() {
    // window.addEventListener('scroll', this.scrollFunction)
  },
  components: {
    'Battleaxe-Logo': require('./battleaxeLogo.vue').default,
    'Drawer': require('../MobileDrawer/Mobile.vue').default
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
    },
    handleOutsideClick() {
      if (this.open && !this.hover) this.open = !this.open;
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
.toolbar-blur {
  display: flex;
  width: 100%;
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
  align-items: center;
}

.anchor-title {
  box-sizing: border-box;
  font-weight: bold;
  /* color: var(--text-faded); */
  font-size: 20px;
  height: 100%;
  padding: 6px 20px 6px 0px;
  display: flex;
  align-items: center;
  transition: opacity 250ms var(--quint) 20ms;
}
.drawer-header-button {
  margin-right: 6px;
}

.component-title, .anchor-title {
  display: none;
}

@media screen and (max-width: 600px) {
  
  .toolbar-content {
    box-sizing: border-box;
    max-width: calc(100% - 30px);
  }
  .component-title {

    margin: 0px 0px 0px 0px;
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
  }
  .anchor-title {
    font-size: 16px;
  }
  .anchor-wrapper {
    max-width: 65%;
  }
}

@media screen and (max-width: 1450px) {
  .anchor-title {
    display: flex;
  }
  .toolbar-wrapper {
    z-index: 3;
    height: 42px;
    background-color: var(--bg);
  }
  .toolbar-blur {
    backdrop-filter: blur(10px);
  }
  
}

@media screen and (min-width: 1451px) {
  .toolbar-content {
    display: none;
  }
}
@media screen and (max-width: 950px) {
  .component-title {
    display: block;
  }
  .toolbar-wrapper {
    background-color: var(--frost);
  }
}
</style>