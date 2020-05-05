<template>
  <div :class="['theme-drawer-wrapper', isOpen ? 'open' : 'closed']" :style="getStyle()">
    <div class="theme-drawer-inside">
      <div class="theme-drawer-header">
        <div class="theme-drawer-title"></div>
        <div @click="toggle" class="theme-close-button">
          <Icon name="close" color="var(--text)" size="30px" />
        </div>
      </div>
      <div class="theme-drawer-content">
        <div class="drawer-line" v-for="app in themeAnchors" :key="app.name">
          <div class="drawer-items-title">{{app.label}}</div>
          <div class="drawer-items">
            <div
              v-for="(swatch, i) in app.values"
              :key="i"
              :style="{
              background: swatch.bg
            }"
              @click="makeActive(app.name, i)"
              :class="[ 'drawer-items-swatch', swatch.active ? 'active' : 'idle' ]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import starlette from "starlette";

export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isOpen: false,
    isMounted: false,
    themeAnchors: [
      {
        name: "ILST",
        label: "ILST | PHXS | IDSN",
        values: [
          {
            theme: "darkest",
            gradient: 0,
            active: true,
            bg: starlette.getColorAs("color-bg", "ILST", "darkest", null)
          },
          {
            theme: "dark",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "ILST", "dark", null)
          },
          {
            theme: "light",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "ILST", "light", null)
          },
          {
            theme: "lightest",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "ILST", "lightest", null)
          }
        ]
      },
      {
        name: "AEFT",
        label: "AEFT | PPRO | AUDT",
        values: [
          {
            theme: "gradient",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "AEFT", "gradient", 0)
          },
          {
            theme: "gradient",
            gradient: 33,
            active: false,
            bg: starlette.getColorAs("color-bg", "AEFT", "gradient", 33)
          },
          {
            theme: "gradient",
            gradient: 66,
            active: false,
            bg: starlette.getColorAs("color-bg", "AEFT", "gradient", 66)
          },
          {
            theme: "gradient",
            gradient: 100,
            active: false,
            bg: starlette.getColorAs("color-bg", "AEFT", "gradient", 100)
          }
        ]
      },
      {
        name: "FLPR",
        label: "FLPR",
        values: [
          {
            theme: "darkest",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "FLPR", "darkest", null)
          },
          {
            theme: "dark",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "FLPR", "dark", null)
          },
          {
            theme: "light",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "FLPR", "light", null)
          },
          {
            theme: "lightest",
            gradient: 0,
            active: false,
            bg: starlette.getColorAs("color-bg", "FLPR", "lightest", null)
          }
        ]
      }
    ]
  }),
  mounted() {
    this.isOpen = this.open;
    this.isMounted = true;
    let lastTheme = window.localStorage.getItem("activeTheme");
    if (lastTheme) {
      let data = JSON.parse(lastTheme);
      this.makeActive(data.name, data.index);
    } else {
      this.makeActive("ILST", 0);
    }
  },
  watch: {
    open(val) {
      // console.log(val)
      this.isOpen = val;
    }
  },
  methods: {
    toggle() {
      this.$parent.themeOpen = !this.$parent.themeOpen;
      // console.log(this.$parent.open = !this.$parent.open)
    },
    getStyle() {
      let style = "";
      if (this.isMounted) {
        let pos = this.isOpen ? "0" : this.$el.offsetHeight * -1;
        style += `bottom: ${pos}px;`;
      }
      return style;
    },
    makeActive(appName, index) {
      window.localStorage.setItem(
        "activeTheme",
        JSON.stringify({
          name: appName,
          index: index
        })
      );
      let app = this.themeAnchors.find(item => {
        return item.name == appName;
      });
      let child = app.values[index];
      this.resetActives();
      child.active = true;
      starlette.initAs(appName, child.theme, child.gradient);
      // console.log(this.$root.$children[0].colorSheet)
      if (this.$root.$children[0].colorSheet) {
        this.$root.$children[0].colorSheet.createStylesheetValues();
      }
    },
    resetActives() {
      this.themeAnchors.forEach(app => {
        app.values.forEach(theme => {
          theme.active = false;
        });
      });
    }
  }
};
</script>

<style>
.theme-drawer-wrapper {
  user-select: none;
  box-sizing: border-box;
  width: 100%;
  /* min-height: 200px; */
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  justify-content: flex-start;
  /* bottom: 0px; */
  left: 0px;
  background: transparent;
  transition: bottom 750ms var(--quint) 20ms;
}

.theme-drawer-inside {
  display: flex;
  box-sizing: border-box;
  max-width: 760px;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-color: var(--border);
  border-width: 2px 0px 0px 0px;
  background-color: var(--frost);
  backdrop-filter: blur(10px);
  overflow: auto;
  padding: 10px 10px;
}

.theme-close-button {
  cursor: pointer;
  padding: 10px 10px;
}

.theme-drawer-header {
  width: 100%;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-faded);
  font-size: 20px;
  margin-bottom: 20px;
}

.drawer-items-title {
  word-spacing: 2ch;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  /* letter-spacing: 1ch; */
}

.drawer-items-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.theme-drawer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.drawer-items-swatch {
  /* width: 26px; */
  /* height: 20px; */
  cursor: pointer;
  border: 2px solid var(--border);
  border-radius: 1px;
}

.drawer-items-swatch.active {
  border-color: var(--color-selection);
}

.drawer-line {
  /* border: 2px solid green; */
  margin: 20px;
  width: 230px;
}

.drawer-items {
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
  height: 40px;
}
</style>