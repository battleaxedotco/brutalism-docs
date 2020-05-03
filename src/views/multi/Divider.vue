<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Button icon="github-circle" />
         <Divider />
         <Button icon="github-circle" />
         <Divider alt />
         <Row>
           <Button icon="github-circle" />
           <Divider vertical />
           <Button icon="github-circle" />
           <Divider vertical alt />
           <Button icon="github-circle" />
         </Row>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />

      <h2>Props</h2>
      <Display>
        <Divider color="#46a0f5" />
         <Divider thickness="5px" />
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
import tableData from '../../../pages/Divider/table'

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