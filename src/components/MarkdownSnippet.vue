<template>
  <div class="markdown-snippet-wrapper">
    <div class="markdown-snippet-content" v-html="renderedText"></div>
  </div>
</template>

<script>
import templates from '../template.json'
const commonmark = require('commonmark');

export default {
  props: {
    content: {
      type: String,
      default: '# Hello world'
    }
  },
  data: () => ({
    text: '',
    renderedText: ''
  }),
  mounted() {
    this.renderedText = this.getRenderedText()
  },
  methods: {
    getRenderedText() {
      var reader = new commonmark.Parser({smart: true});
      var writer = new commonmark.HtmlRenderer({sourcepos: true});
      var parsed = reader.parse(this.content);
      return writer.render(parsed);
    }
  }
}
</script>

<style>
</style>