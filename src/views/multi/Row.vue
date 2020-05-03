<template>
  <Content>
      <Note>This adds margin between all items and handles CSS flexbox, but should be replaced with a Flex component handling both Row and Column directions.</Note>
      <h2>Styles</h2>
      <Display>
        <Row>
          <Button icon="github-circle" />
          <Button icon="slack" />
          <Button icon="facebook" />
          <Button icon="twitter" />
        </Row>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <!-- <Table :content="tableData.row" /> -->

      <h2>Props</h2>
      <Display>
        <Row>
          <Button icon="github-circle" />
          <Button icon="slack" />
          <Button icon="facebook" />
          <Button icon="twitter" />
        </Row>
        <Row justify="flex-end" >
          <Button icon="github-circle" />
          <Button icon="slack" />
          <Button icon="facebook" />
          <Button icon="twitter" />
        </Row>
        <Row align="flex-end">
          <Button icon="github-circle" height="40px"/>
          <Button icon="slack" />
          <Button icon="facebook" />
          <Button icon="twitter" />
        </Row>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />

      <!-- <Table :content="tableData.row" /> -->

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Row/table'

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
    UIFold: require('@/components/UIFold.vue').default,
    Note: require('@/components/Note.vue').default
  }
}
</script>

<style>
</style>