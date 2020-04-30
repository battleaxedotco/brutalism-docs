<template>
  <div id="app">
    <Toolbar />
    <router-view @mounted="refreshPrism"/>
    <!-- <refresh-button v-for="frame in frames" :key="frame" :frameid="frame" :ref="frame" /> -->
  </div>
</template>

<script>
export default {
  components: {
    'Toolbar': require('./components/Toolbar').default,
    'refresh-button': require('./components/Iframe/Refresh.vue').default
  },
  data: () => ({
    frames: []
  }),
  mounted() {
    // this.resetScroll();
    require('starlette').default.initAs('ILST', 'darkest');
    this.setCSS('color-scrollbar', 'rgba(44, 62, 80, 0.25)');
    this.setCSS('color-scrollbar-thumb', 'rgba(44, 62, 80, 0.25)')
  },
  watch: {
    '$route.path'() {
      this.resetScroll();
    }
  },
  methods: {
    resetScroll() {
      window.scrollTo(0, 0);
    },
    refreshPrism() {
      this.$nextTick(() => {
        Prism.highlightAll();
      })
    },
    setCSS(prop, data) {
      // Sets value of CSS variable
      // prop == typeof String as name of variable, with or without leading dashes:
      // this.setCSS('color-bg', 'rgba(25,25,25,1)') || this.setCSS('--scrollbar-width', '20px')
      document.documentElement.style.setProperty(
        `${/^\-\-/.test(prop) ? prop : "--" + prop}`,
        data
      );
    }
  }
}
</script>>

<style>
:root {
  --quad: cubic-bezier(0.48, 0.04, 0.52, 0.96);
	--quart: cubic-bezier(0.76, 0, 0.24, 1);
	--quint: cubic-bezier(0.84, 0, 0.16, 1);
  --bg: rgb(243, 247, 249);
  --frost: rgba(245, 249, 251, 0.9);
  --text-faded: rgba(44, 62, 80, 0.25);
  --text: #2c3e50;
  --code-bg: #eaeeef;
  --code-inline-bg: rgba(0,0,0,0.075);
  color: var(--text) !important;

  font-size: 16px !important;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg);
  margin: 0px;
  padding: 0px;
  height: 100%;
}

:root, html, body {
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  min-height: 100%;
}

hr {
  margin: 24px 0px;
  border-color: #e1e4e8;
  border-width: 4px;
  border-style: solid;
}

blockquote {
  margin: 0px;
  padding: 1px 5px;
  background: rgba(200,200,200,.2);
}

img {
  max-width: 100%;
}

.centered {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Page specific */
.home {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  height: auto;
  position: relative;
  min-height: 100vh;
}

pre {
  /* border: 2px solid red; */
  margin-bottom: 2em;
}



/* Markdown specific */
h2 {
  padding-top: 20px;
}

h3 code, h4 code, p code {
  padding: 0px 5px;
  background: var(--code-inline-bg);
}

h4 code {
  font-size: 1em;
}

.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
  background: rgba(0,0,0,0);
}

pre[class*="language-"]:before, pre[class*="language-"]:after {
  box-shadow: none;
}

.code-toolbar {
  margin: 2em 0px;
}

:not(pre) > code[class*="language-"], pre[class*="language-"] {
	background-color: var(--code-bg);
  margin: 0px;
}

.token.property {
  color: #07a;
}

.markdown-wrapper {
  z-index: 1;
  box-sizing: border-box;
  margin: 80px 0px 40px 0px;
  padding: 10px 20px;
  max-width: 800px;
  width: 100%;
}
.markdown-content {
  box-sizing: border-box;
  max-width: 100vw;
}

.spacer {
  margin: 2em 0px 0px 0px;
  width: 100%;
  height: 0px;
}

.h2-mock {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding-top: 20px;
}

@media screen and (max-width: 950px) {
  h2, .h2-mock {
    padding-left: 50px;
  }.h2-mock {
    position: sticky;
    top: 0px;
    left: 50px;
  }
  .markdown-wrapper {
    box-sizing: border-box;
    margin: 80px 0px 0px 0px;
    padding: 10px 0px;
    width: 100%;
  }
  code[class*="language-"], pre[class*="language-"] {
    font-size: 12px;
  }
}

#app::-webkit-scrollbar {
  display: block;
}
body::-webkit-scrollbar, #app::-webkit-scrollbar, ::-webkit-scrollbar {
	background-color: var(--bg) !important;
  width: 15px;
}
pre::-webkit-scrollbar {
  background-color: transparent !important;
}

body::-webkit-scrollbar-thumb, #app::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb {
	background: rgba(44, 62, 80, 0.25) !important;
	border-radius: 2px !important;
}
body::-webkit-scrollbar-thumb:hover, #app::-webkit-scrollbar-thumb:hover, ::-webkit-scrollbar-thumb:hover {
	background: rgba(44, 62, 80, 0.25) !important;
}

</style>
