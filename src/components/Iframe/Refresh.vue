<template>
  <div class="iframe-refresh-button" :style="getPosition()" @click="refreshTarget"></div>
</template>

<script>
export default {
  props: {
    frameid: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    left: 0,
    top: 0
  }),
  mounted() {
    window.addEventListener('resize', this.getPosition);
    // window.addEventListener('scroll', this.getPosition);
    if (this.frameid && document.getElementById(this.frameid)) this.getPosition();
  },
  methods: {
    init() {

    },
    refreshTarget() {
      let parent = document.getElementById(this.frameid);
      parent.contentWindow.postMessage('refresh', '*');
    },
    getPosition() {
      try {
        let parent = document.getElementById(this.frameid).getBoundingClientRect();
        this.left = parent.left + parent.width;
        this.top = parent.top;
        return `
          top: ${this.top}px;
          left: ${this.left}px;
        `

      } catch(err) {
        console.log(`Problem with ${this.iframeid}`)
        console.error(err)
      }
    }
  }
}
</script>

<style>
.iframe-refresh-button {
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 20;
  background: #232323;
  border: 2px solid #232323;
  border-radius: 20px;
}

.iframe-refresh-button:hover {
  background: #545454;
  border-color: #787878;
}

.iframe-refresh-button:active {
  background: #787878;
}

</style>