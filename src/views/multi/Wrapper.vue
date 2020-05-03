<template>
  <Content>
      <Note>Wrapper has no props, styles, or events and automatically spaces slot content to an 8px margin.</Note>
      <h2>Example</h2>
      <Display>
        <Wrapper>
          <Button label="A" />
          <Button label="B" />
          <Button label="C" />
        </Wrapper>

        <div>
          <Button label="E" />
          <Button label="F" />
          <Button label="G" />
        </div>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Example').data" />
      </UIFold>
      <!-- <Table :content="tableData.wrapper" /> -->

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
// import tableData from '../../../pages/Wrapper/table'

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