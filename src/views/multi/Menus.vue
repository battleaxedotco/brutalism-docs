<template>
  <Content>
      <Note>Menus is the only non-browser component. Check and run the sample repos to see it in action.</Note>
      <Markdown-Snippet content="Invisible component which reactively handles context and flyout menus. Supports multiple instances and will rebuild as the most recently mounted instance (in the event you need different menus per router page or other use case). Any changes to the `:context` or `:flyout` Arrays will trigger a full rebuild of the menu in real-time." />

      <h2>Props</h2>
      <Coder :content="getChildByName('Props').data" />
      <div class="spacer" />
      <Table :content="tableData.properties" />

      <Markdown-Snippet content="> ***NOTE:*** To include callbacks into `:context` or `:flyout` within the same file, you must use `this.callback` with `data: { return {} }` syntax, or `callback` with `data: () => ({})` syntax. Do not initialize functions ( e.g. use `this.callback` and not `this.callback()` )." />

      <h2>Menu Item Props</h2>
      <Table :content="tableData.menus" />

      <h2>Examples</h2>
      <Markdown-Snippet content='Menus contain only `Copy debug URL` and `Refresh Panel`:

```html
  <Menus refresh debug />
```

Menus contain reload and a custom context menu, passing an event to a local method each time the context menu is clicked. Note that `this.doSomething` is called for both menu items, though the last item will trigger `this.localMethod` after the `@contextClick` event.
```html
<Menus refresh
  @contextClick="this.doSomething"
  :context="[
      {
        label: `This is a disabled menu item`,
        enabled: false
      },
      {
        label: `Toggle value of this.data.something`,
        checkable: true,
        checked: something,
        callback: (item, index, value) => (something = value)
      },
      {
        label: `This activates a method within this file on clicking this item`,
        enabled: true,
        callback: this.localMethod
      }
  ]"
/>
```

Context menu contains a menu item with icon, then a divider, then a nested menu group:

```html
<Menus
  :context="[
    {
      label: `Menu item has a custom icon`,
      icon: `./src/assets/MyMenuIcon.png`
    },
    { label: `---` },
    {
      label: `Nested item`,
      menu: [
        { label: `Hello` },
        { label: `Goodbye` }
      ]
    }
  ]"
/>
```

Redress flyout menu contents based on a property:

```html
<Menu 
  :flyout="showExtendedMenu ? extendedMenu : baseMenu"
/>
```

The above could be done much better with a computed property like so, which will automatically rebuild itself any time the property value is changed:

```html
<template>
  <Menu :flyout="flyoutMenu" />
<template>
```

```html
<script>
export default {
  data: () => ({
    showExtendedMenu: true,
    extendedMenu: [
      { label: `Hello` },
      { label: `World` }
    ],
    baseMenu: [
      { label: `Hello World` }
    ]
  }),
  computed: {
    flyoutMenu() {
      return this.showExtendedMenu ? this.extendedMenu : this.baseMenu,
    },
  }
}
</script>
```' />

  </Content>
</template>

<script>
import template from '@/template.json'
import tableData from '../../../pages/Menus/table'

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
    "Markdown-Snippet": require('@/components/MarkdownSnippet.vue').default,
    Note: require('@/components/Note.vue').default,
  }
}
</script>

<style>
</style>