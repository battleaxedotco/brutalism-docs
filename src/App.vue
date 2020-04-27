<template>
  <div id="app">
    <Toolbar />
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
    'Toolbar': require('./components/Toolbar').default
  },
  mounted() {
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
</script>>

<style>
:root {
  --quad: cubic-bezier(0.48, 0.04, 0.52, 0.96);
	--quart: cubic-bezier(0.76, 0, 0.24, 1);
	--quint: cubic-bezier(0.84, 0, 0.16, 1);
  --bg: rgb(243, 247, 249);
  --frost: rgba(245, 249, 251, 0.9);
  --faded-text: rgba(44, 62, 80, 0.25);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
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


</style>
