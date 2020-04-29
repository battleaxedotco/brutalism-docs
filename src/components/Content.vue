<template>
  <div class="home">
    <Title />
    <div class="api-wrapper">
      <div class="api-content">
        <slot />
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
      this.replaceH2WithAnchors()
    })
  },
  methods: {
    replaceH2WithAnchors() {
      let targets = document.querySelectorAll('h2');
      let results = [];
      targets.forEach(target => {
        let sanitized = target.innerHTML.replace(/\s/g, '_');
        results.push(encodeURI(sanitized));
        target.outerHTML = `<a name="${encodeURI(sanitized)}" id="${encodeURI(sanitized)}" data-sourcepos="${target.dataset.sourcepos || null}" class="h2-mock">${target.innerHTML}</a>`;
      });
      this.$refs.drawerR.init(results);
    }
  }
}
</script>

<style>
.api-wrapper {
  z-index: 1;
  box-sizing: border-box;
  margin: 80px 0px 40px 0px;
  padding: 10px 20px;
  max-width: 800px;
  width: 100%;
  /* background: rgba(0,0,0,0.025); */
}
.api-content {
  box-sizing: border-box;
  max-width: 100vw;
}


@media screen and (max-width: 950px) {
  h2, .h2-mock {
    padding-left: 50px;
  }.h2-mock {
    position: sticky;
    top: 0px;
    left: 50px;
  }
  .api-wrapper {
    box-sizing: border-box;
    margin: 80px 0px 0px 0px;
    padding: 10px 0px;
    width: 100%;
  }
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