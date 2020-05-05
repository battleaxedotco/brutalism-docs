<template>
  <div class="toolbar-wrapper">
    <div class="toolbar-blur">
      <Battleaxe-Logo />
      <!-- 
        This is a mess,
        quick fix to move theme button to top toolbar
      -->
      <div class="style-section" v-show="canDisplay">
        <div
          v-if="shouldThemeChange"
          class="footer-button theme desktop"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="themeOpen = true"
        >Change theme</div>
        <div v-else />
        <div
          v-if="shouldThemeChange"
          class="footer-button theme landscape"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="themeOpen = true"
        >theme</div>
        <div v-else />
        <div
          v-if="shouldThemeChange"
          class="footer-button theme portrait"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="themeOpen = true"
        >
          <Icon size="30px" name="palette" />
        </div>
        <div v-else />
      </div>
      <div class="toolbar-content">
        <div class="component-title">{{ $route.name }}</div>
        <div @mouseenter="hover = true" @mouseleave="hover = false" class="anchor-wrapper">
          <div :style="{ opacity: open ? 0 : 1 }" class="anchor-title">{{ activeAnchor }}</div>
          <div @click="open = !open" class="drawer-header-button">
            <Icon :name="open ? 'close' : 'menu'" color="var(--text)" size="30px" />
          </div>
        </div>
      </div>
    </div>
    <Theme-Drawer v-click-outside="handleToggle" :open="themeOpen" />
    <Drawer :open="open" v-click-outside="handleOutsideClick" />
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    themeOpen: false,
    hover: false,
    canDisplay: false
  }),
  mounted() {
    const self = this;
    // window.addEventListener('scroll', this.scrollFunction)
    setTimeout(() => {
      self.canDisplay = true;
    }, 1000);
  },
  watch: {
    themeOpen(value) {
      // console.log("Parent:", value);
    }
  },
  components: {
    "Battleaxe-Logo": require("./battleaxeLogo.vue").default,
    Drawer: require("../MobileDrawer/Mobile.vue").default,
    "Theme-Drawer": require("../BottomToolbar/ThemeDrawer.vue").default
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
    activeAnchor() {
      if (this.app.activeAnchor) return this.app.activeAnchor.name;
      else return "";
    },
    shouldThemeChange() {
      return !/home|utils/i.test(this.$route.name);
    }
  },
  methods: {
    scrollFunction() {
      // console.log('Scrolling')
      this.height =
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
          ? "20px"
          : "50px";
    },
    handleOutsideClick() {
      if (this.open && !this.hover) this.open = !this.open;
    },
    handleToggle() {
      if (this.themeOpen && !this.hover) this.themeOpen = false;
    }
  }
};
</script>

<style>
.toolbar-wrapper {
  display: flex;
  width: 100%;
  height: 70px;
  position: fixed;
  transition: height 120ms var(--quart) 0ms;
  background-color: transparent;
  z-index: 11;
}
.toolbar-blur {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
}

.footer-button.theme.desktop {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
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
  letter-spacing: 0.25ch;
  font-weight: 400;
  white-space: pre;
}

.footer-button {
  margin-right: 10px;
  padding: 0px 6px;
  cursor: pointer;
  border-radius: 5px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-button.theme {
  user-select: none;
  border: 2px solid transparent;
  color: var(--text);
  background: transparent;
}

.floating {
  position: fixed;
  bottom: 7px !important;
  left: 30px;
}

.footer-button:active {
  background: var(--text);
  color: var(--bg);
}

.footer-button:hover {
  border-color: var(--text);
}

.footer-button.theme {
  text-transform: uppercase;
  letter-spacing: 0.25ch;
}

.anchor-wrapper {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  flex-direction: row-reverse;
  align-items: center;
}

.anchor-title {
  box-sizing: border-box;
  font-weight: bold;
  /* color: var(--text-faded); */
  font-size: 20px;
  height: 100%;
  padding: 6px 0px 6px 20px;
  display: flex;
  align-items: center;
  transition: opacity 250ms var(--quint) 20ms;
}
.drawer-header-button {
  margin-right: 6px;
}

.component-title,
.anchor-title {
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
    /* display: block; */
  }
  .toolbar-wrapper {
    background-color: var(--frost);
  }
}

@media screen and (max-width: 600px) {
  .footer-button.theme.desktop {
    display: none;
  }
  .landscape {
    display: none;
  }
  .portait {
    display: flex;
  }
}

@media screen and (min-width: 601px) {
  .footer-button.theme.desktop {
    display: none;
  }
  .portrait {
    display: none;
  }
  .landscape {
    display: flex;
  }
}

@media screen and (min-width: 951px) {
  .footer-button.theme.desktop {
    display: flex;
  }
  .landscape {
    display: none;
  }
  .portrait {
    display: none;
  }
}
</style>
