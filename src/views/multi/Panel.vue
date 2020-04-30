<template>
  <Content>
    <h2>Demo</h2>
      <Markdown-Snippet content="`<Panel>` is a wrapper component which handles dynamic script loading, browser compatibility, host app UI theme and events, fitting content within, scrollbar styling, CSInterface, support for JSON, `console.log` and ES6 Array methods in JSX and more. This component is best used as the direct child of `#app` or parent of a `<router-view>`. It includes:" />
      <Markdown-Snippet content=' - [starlette](https://github.com/Inventsable/starlette) - Color and theming engine that handles all host app colors and exposes them as reactive CSS variables to save you the need to do any theme or color logic yourself.'/>
      <Markdown-Snippet content=' - [cep-spy](https://github.com/Inventsable/CEP-Spy) - Lightweight, no dependency utility for revealing all information about the current host app, current panel, environment and even sibling CEP extensions.'/>
      <Markdown-Snippet content=' - [cluecumber](https://github.com/Inventsable/cluecumber) - Browser-friendly utilities for using CSInterface, opening links, async evalScript, and more.'/>

      <div class="centered"><iframe style="overflow: scroll;" width="500" height="310" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/"> </iframe></div>
      <div class="spacer" />
      <Coder content='<Panel>
    <router-view />
  </Panel>' />

      <h2>Props</h2>
      <Coder :content="getChildByName('Props').data" />
      <div class="spacer" />
      <Table :content="tableData.properties" />

      <h2>Examples</h2>
      <Markdown-Snippet content='Scripts are located in `./src/host/[appName]/host.jsx`, utilities in `./src/host/universal`, styles match host app exactly with no manual logic or code:

```html
  <Panel>
    <router-view />
  </Panel>
```

Custom script paths can be easily given via the `script-path` prop to avoid placing production code inside the `./src/` directory or match personal preference:

```html
  <Panel script-path="./host/myScript.jsx">
    <router-view />
  </Panel>
```

`script-path` can be an `Array`, evaluating synchronously:

```html
  <Panel :script-path="[
        `./host/myFirstScript.jsx`, 
        `./host/mySecondScript.jsx`, 
        `./host/myThirdScript.jsx`
      ]"
    >
    <router-view />
  </Panel>
```

`utils` can also be a relative `String` or an `Array` of folder paths, in the event you need to evaluate multiple files before your script is loaded:

```html
  <Panel :utils="[
        `./shared/utils`, 
        `./shared/helpers`, 
      ]"
    >
    <router-view />
  </Panel>
```' />
  </Content>
</template>

<script>
import template from '@/template.json'
import tableData from '../../../pages/Panel/table'


export default {
  computed: {
    tableData() {
      return tableData;
    },
    target() {
      return template.find(item => {
        return item.name == this.$route.name;
      })
    }
  },
  methods: {
    getChildByName(name) {
      return this.target.children.find(item => {
        return item.name == name;
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    })
  },
  components: {
    Content: require('@/components/Content.vue').default,
    Display: require('@/components/Display.vue').default,
    Coder: require('@/components/Codeking.vue').default,
    Table: require('@/components/Table.vue').default,
    "Markdown-Snippet": require('@/components/MarkdownSnippet.vue').default
  }
}
</script>

<style>
</style>