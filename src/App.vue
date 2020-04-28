<template>
  <div id="app">
    <Toolbar />
    <router-view @checkIframes="appendIframeRefreshes" @mounted="refreshPrism"/>
  </div>
</template>

<script>
export default {
  components: {
    'Toolbar': require('./components/Toolbar').default
  },
  mounted() {
    if (!/localhost.*\#|\#.*\#/.test(window.location.href)) {
      this.reloadIframes()
    };
    window.scrollTo(0, 0);
    console.log('App mounted')
  },
  methods: {
    refreshPrism() {
      this.$nextTick(() => {
        console.log('Refreshing prism')
        Prism.highlightAll();
      })
    },
    appendIframeRefreshes() {
      console.log('Hello')
    },
    // This is very sloppy but I can't figure out what goes wrong.
    // Even after these particular iframe's onload events are called,
    // the SRC attribute doesn't match the content with > 2 instances.
    // 
    // SRC is correct but the "true" URL of the iframe is not
    reloadIframes() {
      let iframes = document.querySelectorAll('iframe');
      const self = this;
      iframes.forEach(frame => {
        const target = frame;
        frame.onload = () => {
          let realSrc = frame.src
          setTimeout(() => {
            self.$nextTick(() => {
              let frameRoute = frame.src.replace(/.*\#/).replace('undefined', '');
              frame.contentWindow.postMessage(frameRoute, '*');
              console.log('Forcing frame to reload:', frame.src);           
            })
          }, 100);
        }
      })
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

  color: var(--text);
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


/* Markdown specific */
h2 {
  padding-top: 20px;
}

h3 code {
  padding: 0px 5px;
  background: rgba(0,0,0,0.075);
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

</style>
