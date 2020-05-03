<template>
  <div class="right-drawer" v-if="isMounted">
    <div v-for="anchor in anchors" :key="anchor.name" :class="['right-drawer-item', checkItemStatus(anchor) ? 'active' : 'idle' ]" :style="">
      <span v-scroll-to="{ el: `#${anchor.id}`, offset: 6 }" class="right-drawer-item-label">{{anchor.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showScrollbar: false,
    realPos: 0,
    scrollOffset: 400,
    anchors: [],
    miniScrollTop: 0,
    scrollPercentage: 0,
    isMounted: false,
    stickyAnchors: []
  }),
  watch: {
    realPos(val) {
      try {
        let targetRange = this.anchors.find(anchor => {
          return val >= anchor.range[0] && val <= anchor.range[1]
        })
        if (!targetRange && val < this.anchors[0].range[0]) {
          targetRange = this.anchors[0];
        } else if (!targetRange && val > this.anchors[this.anchors.length - 1].range[0]) {
          targetRange = this.anchors[this.anchors.length - 1];
        }
        if (this.activeAnchor !== targetRange) this.activeAnchor = targetRange;
        if (this.anchors.length) {
          this.calculateScrollPercentage();
        }
      } catch(err) {
        return null;
      }
    },
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
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
        this.app.activeAnchor = val
      }
    },
  },
  mounted() {
    const self = this;
    if (this.$route.name == 'Home')
      window.addEventListener('scroll', this.measureScrollEvents)
  },
  beforeDestroy() {
    if (this.$route.name == 'Home')
      window.removeEventListener('scroll', this.measureScrollEvents)
  },
  methods: {
    measureScrollEvents() {
      const self = this;
      let ticking;
      let last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          self.checkScroll(last_known_scroll_position.toFixed());
          ticking = false;
        });
        ticking = true;
      }
    },
    calculateScrollPercentage() {
      try {
        if (this.activeAnchor.index !== this.anchors.length - 1 && this.realPos > this.anchors[0].range[0]) {
          this.scrollPercentage = Math.floor(((this.realPos - this.activeAnchor.range[0]) / (this.activeAnchor.range[1] - this.activeAnchor.range[0])) * 100);
          this.miniScrollTop = (this.activeAnchor.index * 40) + (40 * this.scrollPercentage / 100);
        } else if (this.realPos > this.anchors[this.anchors.length - 1].range[0]) {
          this.scrollPercentage = 0;
          this.miniScrollTop = (this.activeAnchor.index * 40) + (40 * this.scrollPercentage / 100);
          this.activeAnchor = this.anchors[this.anchors.length - 1];
        } else {
          this.scrollPercentage = 0;
          this.miniScrollTop = (this.activeAnchor.index * 40) + (40 * this.scrollPercentage / 100);
        }
      } catch(err) {
        return null;
      }
    },
    checkScroll(value) {
      this.realPos = +value;
    },  
    checkItemStatus(item) {
      return item.active
    },
    getMiniScrollPos() {
      let style = '';
      style += `top: ${this.miniScrollTop}px;`
      return style;
    },
    init(val) {
      const self = this;
      this.anchors = val.map((value, i, a) => {
        let child = {
          name: decodeURI(value).replace(/\_/g, ' '),
          id: value,
          index: i,
          active: i == 0,
          yPos: +document.querySelector(`#${value}`).getBoundingClientRect().y.toFixed(),
          fakePos: 0,
          range: [],
          increment: 0
        }
        return child;
      });
      this.app.anchors = this.anchors;
      this.activeAnchor = this.anchors[0]
      this.createRanges();
      this.isMounted = true;
    },
    scrollTo(elt) {
      let opts = {
        container: 'body',
        offset: 6,
        force: true,
        cancelable: true,
        x: false,
        y: true
      }
      this.$scrollTo(elt, 500, opts)
    },
    createRanges() {
      this.$nextTick(() => {
        this.anchors.forEach((anchor, i, a) => {
          if (i < 1 && a.length > 1) {
            // first anchor
            anchor.range.push(anchor.yPos);
            anchor.range.push(a[i + 1].yPos);
            anchor.range.push((anchor.range[1] + anchor.range[0]) / 2)
  
          } else if (i == a.length - 1 && a.length > 1) {
            // last anchor
            anchor.range.push(anchor.yPos);
            anchor.range.push(document.documentElement.scrollHeight)
            anchor.range.push((anchor.range[1] + anchor.range[0]) / 2)
  
          } else if (a.length == 1) {
            // only anchor
            anchor.range.push(0);
            anchor.range.push(document.documentElement.scrollHeight);
            anchor.range.push((anchor.range[1] + anchor.range[0]) / 2)
  
          } else {
            // normal anchor
            anchor.range.push(anchor.yPos);
            anchor.range.push(a[i + 1].yPos);
            anchor.range.push((anchor.range[1] + anchor.range[0]) / 2)
          }
          // Add centerpoint
          anchor.range = anchor.range.map(item => {
            return Math.floor(item)
          })
          anchor.fakePos = anchor.range[2] + anchor.range[0];
        })
      })
    }
  },
  
}
</script>

<style>

.real-scroll-pos {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px 20px;
  font-size: 1.5em;
}

.mini-scroll-pos {
  position: absolute;
  top: 40px;
  right: 0px;
  padding: 10px 20px;
  font-size: 1.5em;
}

.mini-anno {
  position: absolute;
  right: 0px;
  padding: 10px 20px;
  font-size: 1em;
}

.mini-anno.top {
  top: 90px;
}

.mini-anno.bottom {
  top: 120px;
}

.mini-scrollbar {
  position: absolute;
  left: 0px;
  height: 40px;
  width: 5px;
  background: #5978f3;
}

.right-drawer {
  min-width: 20px;
  min-height: 20px;
  position: fixed;
  right: 0px;
  top: 126px;
  z-index: 10;
  font-weight: bold;
  font-size: 1.5em;
  width: 330px;
  user-select: none;
}

.right-drawer-item {
  box-sizing: border-box;
  padding: 4px 0px;
  border-width: 0px 0px 0px 4px;
  border-color: transparent;
  height: 40px;
  color: var(--text);
  transition: color 120ms var(--quint) 20ms;
  border-style: solid; 
}

.right-drawer-item.idle {
  opacity: 0.4;
}
.right-drawer-item.idle:hover {
  opacity: 1;
}

.right-drawer-item:hover {
  /* color: var(--text); */
  opacity: 1;
}

.right-drawer-item-label {
  padding-left: 10px;
  cursor: pointer;
}


@media screen and (max-width: 1450px) {
  .right-drawer {
    display: none;
  }
}
</style>