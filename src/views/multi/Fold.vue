<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Fold label="Default">
          <Fold label="Nested Default">
            <Button label="Slot content" />
          </Fold>
        </Fold>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <!-- <Table :content="tableData.styles" /> -->

      <h2>Props</h2>
      <Display>
        <Fold label='mount as open' :open="true">
          <Button label="Slot content" />
        </Fold>
        <Fold prefs-id="exampleID" label="auto-save state">
          <Button label="Slot content" />
        </Fold>
        <Fold label='persistent' :persistent="false">
          <Button label="Slot content" />
        </Fold>
        <Fold label='inner-padding' inner-padding="30px">
          <Button label="Slot content" />
        </Fold>


      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />

      <h2>Events</h2>
      <Display>
        <Fold label='@click' :open="true" @click="testClick">
          <Button label="Slot content" />
        </Fold>
        <Fold label='@prefs' :open="true" prefs-id="foldExampleEvent" @prefs="testPrefs">
          <Button label="Slot content" />
        </Fold>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Events').data" />
      </UIFold>
      <Table :content="tableData.events" />

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Fold/table'

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
    },
    testPrefs(value) {
      console.log('Last prefs:', value)
    },
    testClick() {
      console.log('Clicked!')
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