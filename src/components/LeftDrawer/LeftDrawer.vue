<template>
  <div class="left-drawer">
    <div class="util-anchors">
      <div 
        v-for="anchor in utilAnchors" 
        :key="anchor.name" 
        :class="[ 'left-drawer-item', anchor.active ? 'active' : 'idle']" 
      >
        <span @click="toRoute(anchor)" class="left-drawer-item-label">{{anchor.name}}</span>
      </div>
    </div>
    <div class="component-anchors">
      <div 
        v-for="anchor in componentAnchors" 
        :key="anchor.name" 
        :class="[ 'left-drawer-item', anchor.active ? 'active' : 'idle']" 
      >
        <span @click="toRoute(anchor)" class="left-drawer-item-label">{{anchor.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes.js'

export default {
  data: () => ({
    anchors: [],
    utilRX: /home|utils/i
  }),
  mounted() {
    this.buildRoutes();
    this.checkRoutes();
  },
  computed: {
    activeAnchor: {
      get() {
        return this.anchors.find(anchor => {
          return anchor.active
        })
      },
      set(val) {
        this.anchors.forEach(anchor => {
          anchor.active = anchor !== val 
            ? false
            : true
        })
      }
    },
    correctAnchor() {
      return this.anchors.find(anchor => {
        return anchor.name == this.$route.name
      })
    },
    componentAnchors() {
      return this.anchors.filter(anchor => {
        return !this.utilRX.test(anchor.name)
      })
    },
    utilAnchors() {
      return this.anchors.filter(anchor => {
        return this.utilRX.test(anchor.name)
      })
    }
  },
  methods: {
    checkRoutes() {
      this.activeAnchor = this.correctAnchor;      
    },
    buildRoutes() {
      this.anchors = [];
      routes.forEach(route => {
        if (route.name !== '404')
          this.anchors.push({
            name: route.name,
            active: this.$route.name == route.name
          })
      })
    },
    toRoute(anchor) {
      this.$router.push({ name: anchor.name }, () => {
        window.scrollTo(0, 0)
      })
    }
  },
}
</script>

<style>
.left-drawer::-webkit-scrollbar {
  width: 6px;
}
.left-drawer {
  /* background: green; */
  min-width: 20px;
  min-height: 20px;
  position: fixed;
  left: 50px;
  top: 126px;
  z-index: 1;
  font-weight: bold;
  font-size: 1.5em;
  user-select: none;
  max-height: calc(100% - 126px);
  overflow-y: auto;
  padding-right: 20px;
}

.util-anchors {
  /* border-style: solid;
  border-color: #e1e4e8;
  border-width: 0px 0px 3px 0px; */
}

.left-drawer-item {
  padding: 4px 0px;
  /* margin: 3px 0px; */
  color: var(--text-faded);
  height: 40px;
  box-sizing: border-box;
}

.left-drawer-item-label {
  transition: color 120ms var(--quint) 20ms;
}

.left-drawer-item.active {
  color: var(--text);
}

.left-drawer-item-label:hover {
  color: var(--text);
}

.left-drawer-item-label {
  padding: 4px 10px;
  cursor: pointer;
}


@media screen and (max-width: 1450px) {
  .left-drawer {
    display: none;
  }
}
</style>