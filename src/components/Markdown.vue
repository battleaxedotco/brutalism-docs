<template>
  <div class="markdown-wrapper">
    <div class="markdown-content" v-html="renderedText"></div>
  </div>
  
</template>

<script>
const commonmark = require('commonmark');

export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    // renderedText: ''
  }),
  mounted() {
    // this.getRenderedText()
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
  watch: {
    text(val) {
      console.log('Text value is:', val)
      const self = this;
      this.renderedText = this.getRenderedText();
      if (val) {
        setTimeout(() => {
          self.replaceH2WithAnchors();
        }, 100);
      }
    }
  },
  methods: {
    // getRenderedText() {
    //   if (this.text) {
    //     var reader = new commonmark.Parser({smart: true});
    //     var writer = new commonmark.HtmlRenderer({sourcepos: true});
    //     var parsed = reader.parse(this.text);
    //     return writer.render(parsed);
    //   } else {
    //     console.log('No text')
    //   }
    // },
    replaceH2WithAnchors() {
      let targets = document.querySelectorAll('h2');
      let results = [];
      targets.forEach(target => {
        let sanitized = target.innerHTML.replace(/\s/g, '_');
        results.push(encodeURI(sanitized));
        target.outerHTML = `<a name="${encodeURI(sanitized)}" id="${encodeURI(sanitized)}" data-sourcepos="${target.dataset.sourcepos}" class="h2-mock">${target.innerHTML}</a>`;
      })
      this.$emit('convertedAnchors', results);
      console.log('Anchors replaced')
    }
  }
}
</script>

<style>
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
  /* background: var(--frost); */
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