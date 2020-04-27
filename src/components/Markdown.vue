<template>
  <div class="markdown-wrapper">
    <div class="markdown-content" v-html="renderedText"></div>
    <!-- <Snippet /> -->
  </div>
  
</template>

<script>
const commonmark = require('commonmark');

export default {
  props: {
    text: {
      type: String,
      default: '# Hello world'
    }
  },
  components: {
    'Snippet': require('./Snippet.vue').default
  },
  computed: {
    renderedText() {
      var reader = new commonmark.Parser({smart: true});
      var writer = new commonmark.HtmlRenderer({sourcepos: true});
      var parsed = reader.parse(this.text);
      return writer.render(parsed);
    }
  }
}
</script>

<style>
h2 {
  padding-top: 20px;
}

.markdown-wrapper {
  z-index: 1;
  box-sizing: border-box;
  margin: 80px 0px 40px 0px;
  padding: 10px 20px;
  max-width: 800px;
  width: 100%;
  background: var(--frost);
}
.markdown-content {
  box-sizing: border-box;
  max-width: 100vw;
}

@media screen and (max-width: 870px) {
  h2 {
    padding-left: 20px;
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