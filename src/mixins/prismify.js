import Prism from 'prismjs'

export default {
  methods: {
    prismify(text, lang) {
      return require('prismjs').highlight(text, Prism.languages[lang || 'html'], lang || 'html');
    }
  }
}