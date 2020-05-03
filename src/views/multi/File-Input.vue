<template>
  <Content>
    <Note>Todo</Note>
      <!-- <h2>Styles</h2>
      <Display>
        
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />

      <h2>Props</h2>
      <Display>
        
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />

      <h2>Events</h2>
      <Display>
        
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Events').data" />
      </UIFold>
      <Table :content="tableData.events" /> -->

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
// import tableData from '../../../pages/File-Input/table'

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
    UIFold: require('@/components/UIFold.vue').default,
    Note: require('@/components/Note.vue').default
  }
}
</script>

<style>
</style>