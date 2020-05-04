<template>
  <div
    :class="['mobile-drawer', 'flip', isOpen ? 'open' : 'closed']"
    :style="getStyle()"
  >
    <div class="drawer-content unflip">
      <div class="drawer-anchors">
        <span class="drawer-anno">This page</span>
        <div
          v-for="anchor in anchors"
          @click="scrollTo(anchor)"
          :key="anchor.name"
          :class="['drawer-anchor-item', anchor.active ? 'active' : 'idle']"
        >
          {{ anchor.name }}
        </div>
      </div>
      <div class="drawer-library">
        <span class="drawer-anno">Misc</span>
        <div
          v-for="route in pageRoutes"
          :key="route.name"
          @click="goTo(route)"
          :class="[
            'drawer-route-item',
            $route.name == route.name ? 'active' : 'idle',
          ]"
        >
          {{ route.name }}
        </div>
      </div>
      <div class="drawer-routes">
        <span class="drawer-anno">Components</span>
        <div
          v-for="route in componentRoutes"
          :key="route.name"
          @click="goTo(route)"
          :class="[
            'drawer-route-item',
            $route.name == route.name ? 'active' : 'idle',
          ]"
        >
          {{ route.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routes from "@/router/routes.js";

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isOpen: false,
    isMounted: false,
    routes: [],
    utilRX: /home|utils|functions|colors/i,
  }),
  mounted() {
    this.isOpen = this.open;
    this.isMounted = true;
    this.routes = routes.filter((item) => {
      return item.name !== "404";
    });
    this.$el.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
    anchors() {
      return this.app.anchors;
    },
    componentRoutes() {
      return this.routes.filter((item) => {
        return !this.utilRX.test(item.name);
      });
    },
    pageRoutes() {
      return this.routes.filter((item) => {
        return this.utilRX.test(item.name);
      });
    },
  },
  watch: {
    open(val) {
      this.isOpen = val;
    },
  },
  methods: {
    scrollTo(anchor) {
      let elt = document.querySelector(`#${anchor.id}`);
      let opts = {
        container: "body",
        offset: 6,
        force: true,
        cancelable: true,
        x: false,
        y: true,
      };
      this.$scrollTo(elt, 500, opts);
    },
    goTo(route) {
      if (this.$route.name !== route.name)
        this.$router.push({ name: route.name });
    },
    getStyle() {
      let style = "";
      if (this.isMounted) {
        let pos = this.isOpen ? "0" : this.$el.offsetWidth * -1 + -2;
        style += `left: ${pos}px;`;
      }
      return style;
    },
  },
};
</script>

<style>
.mobile-drawer {
  user-select: none;
  box-sizing: border-box;
  top: 42px;
  position: fixed;
  width: 230px;
  padding: 0px 0px 0px 10px;
  height: calc(100vh - 42px);
  z-index: 40;
  display: flex;
  justify-content: flex-end;
  transition: left 750ms var(--quint) 20ms;
  background-color: var(--frost);
  backdrop-filter: blur(10px);
  overflow: auto;
}

/* 
  Overriding scrollbar completely
  This is confusing because it clips content
 */
/* .mobile-drawer::-webkit-scrollbar {
  display: none;
}
.mobile-drawer {
  -ms-overflow-style: none;
} */

/* 
  Flipping scrollbar from right to left side
  This is confusing because it also flips scroll direction for element
*/

/* .flip {
  transform: rotateX(180deg);
  -ms-transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
  direction: rtl;
}

.unflip {
  transform: rotateX(-180deg);
  -ms-transform: rotateX(-180deg);
  -webkit-transform: rotateX(-180deg);
  direction: ltr;
} */

.mobile-drawer::-webkit-scrollbar {
  width: 5px !important;
}

.drawer-routes,
.drawer-library {
  margin-top: 15px;
}

.drawer-anno {
  padding-left: 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: var(--text-faded);
}

.drawer-anchors,
.drawer-library {
  border-style: solid;
  border-color: var(--border);
  border-width: 0px 0px 2px 0px;
}

.drawer-header {
  box-sizing: border-box;
  /* width: 100%; */
  height: 42px;
  /* border: 2px solid blue; */
  position: fixed;
  background-color: var(--bg);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.drawer-header-title {
  color: var(--text-faded);
  font-size: 20px;
  padding: 0px 10px;
  font-weight: bold;
}

.drawer-anchor-item:first-child,
.drawer-route-item:first-child {
  margin-top: 10px;
}
.drawer-anchor-item:last-child,
.drawer-route-item:last-child {
  margin-bottom: 10px;
}

.drawer-anchor-item,
.drawer-route-item {
  padding: 5px 10px 5px 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.drawer-anchor-item:hover,
.drawer-route-item:hover {
  background: var(--code-inline-bg);
}

.drawer-anchor-item.idle,
.drawer-route-item.idle {
  opacity: 0.4;
}
.drawer-anchor-item.idle:hover,
.drawer-route-item.idle:hover {
  opacity: 1;
}

.drawer-content {
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
}

@media screen and (min-width: 1451px) {
  .mobile-drawer {
    display: none;
  }
  .drawer-content {
    margin-top: 40px;
  }
}
</style>
