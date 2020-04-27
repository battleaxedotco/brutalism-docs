<template>
  <pre><code :class="lang" v-html="this.text"></code></pre>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default: 'html',
    },
    code: {
      type: String,
      default: `<Button label="Hello world" />`
    }
  },
  mixins: [
    require('../mixins/prismify').default
  ],
  computed: {
    lang() {
      return `language-${this.language}`
    },
    text() {
      return this.prismify(this.code, this.language)
    }
  }
}
</script>

<style>
</style>