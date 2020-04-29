<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Button-Group label="default">
             <Button icon="github-circle" />
             <Button icon="slack" />
             <Button icon="twitter" />
             <Button icon="facebook" />
         </Button-Group>
         <Button-Group grid label="grid">
             <Button block>block default</Button>
             <Button block left>block left</Button>
             <Button block right>block right</Button>
         </Button-Group>
         <Button-Group exclusive label="exclusive" :active="3">
             <Button 
                 v-for="index in 7" 
                 :key="index" 
                 :icon="`brightness-${index}`"
             />
         </Button-Group>
         <Button-Group multiselect :active="[0, 1]" label="multiselect">
             <Button primary icon="format-bold" />
             <Button primary icon="format-color-text" />
             <Button primary icon="format-color-highlight" />
             <Button primary icon="format-paint" />
             <Button primary icon="format-size" />
             <Button primary icon="format-strikethrough" />
         </Button-Group>
      </Display>
      <Coder :content="getChildByName('Styles').data" />
      <Table :content="tableData.styles" />
      <h2>Props</h2>
      <Display>
        <div style="display: flex; flex-wrap: nowrap">
             <Button-Group label='left (default)' left width="33vw">
                 <Button icon="github-circle" />
                 <Button icon="slack" />
             </Button-Group>
             <Button-Group label='center' center grid width="33vw">
                 <Button icon="github-circle" />
                 <Button icon="slack" />
             </Button-Group>
             <Button-Group label='right' right width="33vw">
                 <Button icon="github-circle" />
                 <Button icon="slack" />
             </Button-Group>
         </div>
         <Button-Group label='grid template="1fr 4fr"' grid template="1fr 4fr">
             <Button icon="github-circle" />
             <Button icon="slack" />
         </Button-Group>
         <Button-Group label='grid gap="50px"' grid gap="50px">
             <Button icon="github-circle" />
             <Button icon="slack" />
         </Button-Group>
         <Button-Group label='column' grid column width="60px">
             <Button icon="github-circle" />
             <Button icon="slack" />
             <Button icon="facebook" />
         </Button-Group>
         <Button-Group label='exclusive :active="1"' exclusive :active="[1]" >
             <Button icon="vector-point" />
             <Button icon="vector-line" />
             <Button icon="vector-rectangle" />
             <Button icon="vector-circle" />
             <Button icon="vector-triangle" />
             <Button icon="vector-polygon" />
         </Button-Group>
         <Button-Group 
             label='multiselect :active="[0, 1]"'
             multiselect 
             :active="[0, 1]" 
         >
             <Button icon="chess-king" />
             <Button icon="chess-queen" />
             <Button icon="chess-bishop" />
             <Button icon="chess-knight" />
             <Button icon="chess-rook" />
             <Button icon="chess-pawn" />
         </Button-Group>
      </Display>
      <Coder :content="getChildByName('Props').data" />
      <Table :content="tableData.properties" />
      <h2>Events</h2>
      <Display>
        <Button-Group 
             label='exclusive @update' 
             exclusive 
             :active="tool" 
             @update="reportActive"
         >
             <Button icon="vector-point"/>
             <Button icon="vector-line"/>
             <Button icon="vector-rectangle"/>
             <Button icon="vector-circle"/>
             <Button icon="vector-triangle"/>
             <Button icon="vector-polygon"/>
         </Button-Group>
         <Button-Group 
             label='multiselect @update' 
             multiselect 
             :active="[0, 1]" 
             @update="reportActive"
         >
             <Button icon="chess-king" />
             <Button icon="chess-queen" />
             <Button icon="chess-bishop" />
             <Button icon="chess-knight" />
             <Button icon="chess-rook" />
             <Button icon="chess-pawn" />
         </Button-Group>
         <Button-Group 
             label='exclusive @update' 
             exclusive 
             :active="tool" 
             @update="val => tool = val"
         >
             <Button icon="vector-point" :color="tool == 0 ? '#59e' : 'var(--color-icon)'" />
             <Button icon="vector-line" :color="tool == 1 ? '#59e' : 'var(--color-icon)'" />
             <Button icon="vector-rectangle" :color="tool == 2 ? '#59e' : 'var(--color-icon)'" />
             <Button icon="vector-circle" :color="tool == 3 ? '#59e' : 'var(--color-icon)'" />
             <Button icon="vector-triangle" :color="tool == 4 ? '#59e' : 'var(--color-icon)'" />
             <Button icon="vector-polygon" :color="tool == 5 ? '#59e' : 'var(--color-icon)'" />
         </Button-Group>
         <Button-Group label="default should use @click or :goto on children">
             <Button icon="github-circle" goto="https://www.github.com" />
             <Button icon="slack" goto="https://www.slack.com" />
             <Button icon="twitter" goto="https://www.twitter.com" />
             <Button icon="facebook" goto="https://www.facebook.com" />
         </Button-Group>
      </Display>
      <Coder :content="getChildByName('Events').data" />
      <Table :content="tableData.events" />
  </Content>
</template>

<script>
import template from '@/template.json'
import tableData from '../../../pages/Button-Group/table'

export default {
  data: () => ({
    tool: 0
  }),
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
    reportActive(val) {
      console.log(`Active is currently:`, val)
    },
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
    Table: require('@/components/Table.vue').default
  }
}
</script>

<style>
</style>