<template>
  <div class="home">
    <Title />
    <div class="api-wrapper">
      <div class="api-content">
        <slot ref="content" @mounted="replaceH2WithAnchors" />
      </div>
    </div>
    <Left-Drawer ref="drawerL" />
    <Right-Drawer ref="drawerR" />
  </div>
</template>

<script>
export default {
  components: {
    Title: require('../components/Title.vue').default,
    'Left-Drawer': require('../components/LeftDrawer').default,
    'Right-Drawer': require('../components/RightDrawer').default,
  },
  mounted() {
    this.$nextTick(() => {
      this.replaceH2WithAnchors();
    })
    window.addEventListener('scroll', this.measureScrollEvents);  
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.measureScrollEvents)
  },
  methods: {
    measureScrollEvents() {
      const self = this;
      let ticking;
      let last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          let temp = +last_known_scroll_position.toFixed();
          self.$refs.drawerR.checkScroll(temp);
          if (self.$route.name == 'Button') self.checkAnchors(temp)
          ticking = false;
        });
        ticking = true;
      }
    },
    replaceH2WithAnchors(val) {
      let targets = document.querySelectorAll('h2');
      let results = [];
      targets.forEach(target => {
        let sanitized = target.innerHTML.replace(/\s/g, '_');
        results.push(encodeURI(sanitized));
        target.outerHTML = `<a name="${encodeURI(sanitized)}" id="${encodeURI(sanitized)}" data-sourcepos="${target.dataset.sourcepos || null}" class="h2-mock">${target.innerHTML}</a>`;
      });
      this.$refs.drawerR.init(results);
    },
    checkAnchors() {
      // 
    }
  }
}
</script>

<style>
.api-wrapper {
  z-index: 2;
  box-sizing: border-box;
  margin: 40px 0px 0px 0px;
  padding: 10px 20px;
  max-width: 800px;
  width: 100%;
  /* background: rgba(0,0,0,0.025); */
}
.api-content {
  padding: 40px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100vw;
}

#app::-webkit-scrollbar {
	display: block;
}
textarea::-webkit-scrollbar {
	background-color: transparent !important;
  width: 10px !important;
  height: 100% !important;
}
textarea::-webkit-scrollbar-thumb {
	background: var(--color-scrollbar-thumb) !important;
	border-radius: 15px;
}
textarea::-webkit-scrollbar-thumb:hover {
	background: var(--color-scrollbar-thumb-hover) !important;
}
</style>