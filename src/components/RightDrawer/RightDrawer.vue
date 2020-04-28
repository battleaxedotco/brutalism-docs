<template>
  <div class="right-drawer" v-if="isMounted">
    <div v-for="anchor in anchors" :key="anchor.name" class="right-drawer-item" :style="checkItemStatus(anchor)">
      <span v-scroll-to="{ el: `#${anchor.id}`, offset: 0 }" class="right-drawer-item-label">{{`${anchor.name} ${anchor.yPos}`}}</span>
      <div class="fake-anchor" :style="setFakeAnchor(anchor)" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    scrollOffset: 210,
    anchors: [
      {
        name: 'Styles',
        active: true
      },
      {
        name: 'Props and Events',
        active: false
      }
    ],
    isMounted: false
  }),
  mounted() {
    const self = this;
    window.addEventListener('scroll', function(e) {
      let ticking;
      let last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function() {
          self.checkScroll(last_known_scroll_position.toFixed());
          ticking = false;
        });
        ticking = true;
      }
    });
  },
  methods: {
    onShow(value) {
      console.log('Showing:', value)
    },
    checkScroll(value) {
      this.anchors.forEach(anchor => {
        return anchor.fakePos = anchor.yPos - +value;
      })
    },  
    setFakeAnchor(anchor) {
      return `top: ${anchor.fakePos}px;`
    },
    clearActiveAnchors() {
      this.anchors.forEach(anchor => {
        anchor.active = false;
      })
    },
    checkItemStatus(item) {
      let style = '';
      style += `
        border-color: ${item.active ? '#5978f3' : 'transparent'};
        color: var(--text${item.active ? '' : '-faded' });  
      `
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
          fakePos: +document.querySelector(`#${value}`).getBoundingClientRect().y.toFixed(),
        }
        return child;
      });
      this.createRanges();
      this.isMounted = true;
      // this.checkScroll(0)
    },
    createRanges() {
      console.log(this.anchors)
    }
  },
  
}
</script>

<style>
/* a:-webkit-any-link {
  color: inherit;
  text-decoration: none;
} */

.fake-anchor {
  width: 50px;
  height: 10px;
  /* border: 2px solid red; */
  background: rgba(0,0,0,0.2);
  position: absolute;
  right: 0px;
  z-index: 10;
}

.right-drawer {
  /* border: 2px solid red; */
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
  padding: 4px 0px;
  margin: 3px 0px;
  border-width: 0px 0px 0px 4px;
  border-style: solid;
  cursor: pointer;
}

.right-drawer-item-label {
  padding-left: 10px;
}


@media screen and (max-width: 1450px) {
  .right-drawer {
    display: none;
  }
}
</style>