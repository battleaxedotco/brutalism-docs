<template>
  <pre :class="[ `language-${lang}` ]">
    <code @input="update" ref="code" contenteditable="true" :spellcheck="false">{{content}}</code>
  </pre>
</template>

<script>
// const sanitizeHtml = require('sanitize-html');

export default {
  props: {
    lang: {
      type: String,
      default: 'html'
    }
  },
  data: () => ({
    options: {
      allowedTags: [ 'Row', 'Button', 'div', 'svg', 'Icon', 'path' ],
      allowedAttributes: {
        'Row': [],
        'Button': [ 'label', 'primary', 'flat', 'filled', 'disabled', 'toolbar' ],
        'Icon': ['name', 'size'],
        'svg': ['fill', 'viewBox'],
        'path': ['d', 'fill-rule', 'clip-rule']
      }
    },
    content: `
<Row>
  <Button label="Normal" />
  <Button primary>Primary</Button>
  <Button flat label="Flat" />
  <Button filled label="Filled" />
  <Button disabled>Disabled</Button>
  <Button>
    <Icon name="mdi-account">
    <div>With Slot content</div>
  </Button>
  <Button label="Tall" tall />
  <Button toolbar>
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M2 7h5v2H2zM2 11h2v2H2zM12 11h10v2H12zM5 11h2v2H5zM2 15h5v2H2zM12 15h2v2h-2zM12 7h3v2h-3zM16 7h2v2h-2zM8 3h2v18H8z"
      />
      <path d="M7 3V2h4v1L9.667 5H8.333L7 3z" />
      <path
        fill-rule="evenodd"
        d="M20 16h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"
        clip-rule="evenodd"
      />
    </svg>
  </Button>
</Row>`
  }),
  methods: {
    update(val) {
      let el = this.$refs.code
      console.log(el.innerHTML)
      this.cleanUpString(el.innerHTML)
    },
    cleanUpString(val) {
      let trimSpanTags = val.replace(/\<span\s?[^\>]*\>|\<\/span>/gm, '');
      let withBrackets = trimSpanTags.replace(/\&lt\;/gm, '<').replace(/\&gt\;/gm, '>')
      console.log(withBrackets)
      // this.$refs.code.innerHTML = this.sanitizeString(withBrackets);
      console.log(this.sanitizeString(withBrackets))
    },
    sanitizeString(val) {
      return this.sanitizeHtml(val, {
        allowedTags: [ 'Row', 'Button', 'div', 'svg', 'Icon', 'path' ],
        allowedAttributes: {
          'Row': [],
          'Button': [ 'label', 'primary', 'flat', 'filled', 'disabled', 'toolbar' ],
          'Icon': ['name', 'size'],
          'svg': ['fill', 'viewBox'],
          'path': ['d', 'fill-rule', 'clip-rule']
        }
      });
    },
    sanitizeHtml(val, opts = null) {
      opts = opts ? this.options : opts;
      const rx = {
        openTag: /<[^\s\>\/]{1,}/gm,
        closeTag: /\s?<?\/.*?>/gm,
        slot: />.{0,}</gm,
        
      }
      
    }
  },  
  watch: {
    content(val) {
      console.log(val)
    }
  }
}
</script>

<style>

code:focus-within {
  outline: none;
}
code {

  cursor: text;
}

</style>