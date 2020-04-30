<template>
  <div class="anchorItem">
    <h2 ref="original" :id="name">{{name}}</h2>
    <span ref="clone" v-show="isMounted" class="h2-clone" :style="getStyle()">{{name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Styles'
    }
  },
  mounted() {
    this.isMounted = true;
    this.clone();
  },
  data: () => ({
    originalY: 0,
    tempY: 0,
    isMounted: false
  }),
  methods: {
    getStyle() {
      if (this.isMounted) {
        return `top: ${this.tempY}px`;
        // console.log('Get style')
        // console.log(this.$refs.clone.getBoundingClientRect().top)
        // console.log(this.$refs.original.getBoundingClientRect().top)
      } else {
        return ``
      }
    },
    checkElt(value) {
      this.tempY = this.$refs.original.getBoundingClientRect().top;
    },
    clone() {
      this.tempY = this.$refs.original.getBoundingClientRect().top;
    },
    sayHello() {
      console.log(`Hello from ${this.name}`)
    }
  }
}
</script>

<style>
.h2-clone {
  position: absolute;
  /* margin-top: -25px; */
  /* top: 0px; */
  /* position: sticky; */
  /* margin-top: 20px; */
  font-size: 1.5em;
  /* margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
  font-weight: bold;
}
</style>