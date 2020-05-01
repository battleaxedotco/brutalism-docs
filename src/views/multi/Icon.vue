<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Anno>Material Icons</Anno>
         <Row>
           <Icon name="github-circle" />
           <Icon name="facebook" />
           <Icon name="slack" />
         </Row>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <!-- <Table :content="tableData.icon" /> -->

      <h2>Props</h2>
      <Display>
        <Icon name="github-circle" />
         <Icon name="github-circle" color="#46a0f5" />
         <Icon name="github-circle" size="30px" />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <!-- <Table :content="tableData.icon" /> -->

      <h2>Events</h2>
      <Display>
        <Icon name="github-circle" @click="testClick" />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Events').data" />
      </UIFold>
      <!-- <Table :content="tableData.icon" /> -->

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
// import tableData from '../../../pages/Icon/table'

export default {
  computed: {
    // tableData() {
    //   return tableData;
    // },
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