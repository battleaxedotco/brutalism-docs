<template>
  <div class="markdown-wrapper">
    <div class="markdown-content" v-html="renderedText"></div>
  </div>
</template>

<script>
import templates from '../template.json'
const commonmark = require('commonmark');

export default {
  data: () => ({
    text: ''
  }),
  mounted() {
    let content = templates.find(template => {
      return template.name == this.$route.name
    });
    this.text = content ? content.data : '# 404'
    this.replaceH2WithAnchors()
  },
  computed: {
    renderedText() {
      var reader = new commonmark.Parser({smart: true});
      var writer = new commonmark.HtmlRenderer({sourcepos: true});
      var parsed = reader.parse(this.text);
      return writer.render(parsed);
    }
  },
  methods: {
    replaceH2WithAnchors() {
      let targets = document.querySelectorAll('h2');
      let results = [];
      targets.forEach(target => {
        let sanitized = target.innerHTML.replace(/\s/g, '_');
        results.push(encodeURI(sanitized));
        target.outerHTML = `<a name="${encodeURI(sanitized)}" id="${encodeURI(sanitized)}" data-sourcepos="${target.dataset.sourcepos}" class="h2-mock">${target.innerHTML}</a>`;
      })
      this.$emit('convertedAnchors', results);
    }
  }
}
</script>

<style>
</style>