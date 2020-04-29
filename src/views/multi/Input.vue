<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Input label="Default" value="value" />
         <Input label="Flat" value="value" flat />
         <Input label="Filled" value="value" filled />
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Styles').data" />
      </UI-Fold>
      <Table :content="tableData.styles" />
      <h2>Props</h2>
      <Display>
        <Input label="I am a label" />
         <Input
           label='placeholder="Display if no value"'
           placeholder="Display if no value"
         />
         <Input placeholder="disabled" disabled />
         <Input placeholder='color="red"' color="red" flat />
         <Input 
           value="This text is automatically selected on focus" 
           label="auto-select" 
           auto-select 
         />
         <Input value="This text is always uppercase" label="uppercase" uppercase />
         <Input value="Warn of mispelings" label='spellcheck' spellcheck />
         <Input
           label="truncate" truncate 
           value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
         />
         <Input
           placeholder='underline-size="2px" left'
           underline-size="2px"
           flat
           left
         />
         <Input
           filled
           prepend-icon="magnify"
           placeholder='prepend-icon="magnify"'
         />
         <Input
           filled
           append-icon="find-replace"
           placeholder='prepend-icon="find-replace"'
         />
         <Input
           filled
           prepend-outer-icon="magnify"
           placeholder='prepend-outer-icon="magnify"'
         />
         <Input
           filled
           append-outer-icon="find-replace"
           placeholder='append-outer-icon="find-replace"'
         />
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Props').data" />
      </UI-Fold>
      <Table :content="tableData.properties" />
      <h2>Events</h2>
      <Display>
        <Input value="@change" @change="message" />
         <Input value="@update" @update="message" />
         <Input value="@submit" @submit="message" />
         <Input
           value="@focus/blur"
           @focus="message('Focused!')"
           @blur="message('Blur!')"
         />
         <Input 
           value="@append-outer-click" 
           append-outer-icon="find-replace" 
           @append-outer-click="message" 
         />
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Events').data" />
      </UI-Fold>
      <Table :content="tableData.events" />
  </Content>
  
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Input/table'

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
    message(value) {
      console.log(value)
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