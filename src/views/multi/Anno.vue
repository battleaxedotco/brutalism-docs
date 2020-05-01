<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Anno>Default</Anno>
        <Anno bold>bold</Anno>
        <Anno italic>italic</Anno>
        <Anno underline>underline</Anno>
        <Anno overline>overline</Anno>
        <Anno strikethrough>strikethrough</Anno>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />

      <h2>Props</h2>
      <Display>
        <Anno text='text="Text here"' />
        <Anno size="20px">size="20px"</Anno>
        <Anno uppercase>uppercase</Anno>
        <Anno color="#46a0f5">color="#46a0f5"</Anno>
        <Anno weight="100">weight="100"</Anno>
        <Anno weight="400">weight="400"</Anno>
        <Anno weight="600">weight="600"</Anno>
        <Anno weight="900">weight="900"</Anno>
        <Anno letter-spacing=".5ch">letter-spacing=".5ch"</Anno>
        <Anno text-decoration="underline">
          text-decoration="underline"
        </Anno>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Anno/table'

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
  components: {
    Content: require('@/components/Content.vue').default,
    Display: require('@/components/Display.vue').default,
    Coder: require('@/components/Codeking.vue').default,
    Table: require('@/components/Table.vue').default,
    UIFold: require('@/components/UIFold.vue').default
  }
}
</script>

<style>
</style>