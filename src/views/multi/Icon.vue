<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Anno>Currently only supports 
          <Link url="https://materialdesignicons.com/">Material Icons</Link>
        </Anno>
        <Row>
          <Icon name="github-circle" />
          <Icon name="facebook" />
          <Icon name="slack" />
        </Row>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />

      <h2>Props</h2>
      <Display>
        <Row>
          <Icon name="github-circle" />
          <Icon name="github-circle" color="#46a0f5" />
          <Icon name="github-circle" size="30px" />
          <Icon name="github-circle" url="https://www.github.com" />
        </Row>
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
import tableData from '../../../pages/Icon/table'

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