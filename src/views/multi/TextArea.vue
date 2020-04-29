<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <TextArea
           value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
           label="default"
         />
         <TextArea
           value="Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus."
           flat
           label="flat"
         />
         <TextArea
           value="The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
           filled
           label="filled"
         />
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Styles').data" />
      </UI-Fold>
      <Table :content="tableData.styles" />
      <h2>Props</h2>
      <Display>
        <TextArea label='I am a label' />
         <TextArea
           label='placeholder="Display if no value"'
           placeholder="Display if no value"
         />
         <TextArea placeholder="disabled" disabled />
         <TextArea value='color="red"' color="red" flat />
         <TextArea 
           value="This text is automatically selected on focus" 
           label="auto-select" 
           auto-select 
         />
         <TextArea spellcheck value="Warn of mispelings" label='spellcheck' />
         <TextArea placeholder=':rows="5"' :rows="5" />
         <TextArea placeholder="truncate" value='Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.' color="red" />
         <TextArea
           placeholder='underline-size="2px" left'
           underline-size="2px"
           flat
           left
         />
         <TextArea
           filled
           prepend-icon="magnify"
           placeholder='prepend-icon="magnify"'
         />
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Props').data" />
      </UI-Fold>
      <Table :content="tableData.properties" />
      <h2>Events</h2>
      <Display>
        <TextArea value="@change" @change="message" />
         <TextArea value="@update" @update="message" />
         <TextArea value="@submit" @submit="message" />
         <TextArea
           value="@focus/blur"
           @focus="message('Focused!')"
           @blur="message('Blur!')"
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
import tableData from '../../../pages/TextArea/table'

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