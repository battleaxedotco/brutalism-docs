<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Dropdown label="Default" :items="['Item 1', 'Item 2']" :active="0" />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <h2>Props</h2>
      <Display>
        <Dropdown 
          label='label-to-left' 
          :items=" [ 'Item 1', 'Item 2' ]" 
          :active="0" 
          label-to-left 
        />
        <Dropdown 
          label='label-to-right' 
          :items=" [ 'Item 1', 'Item 2' ]" 
          :active="0"
          label-to-right 
        />
        <Dropdown 
          label='active="ILST" (targeting item.value)' 
          :items="[
            { value: 'ILST' },
            { value: 'AEFT' }
          ]" 
          active="ILST" 
        />
        <Dropdown 
          label='active="Item 3" (targeting item as string value)' 
          :items=" [ 'Item 1', 'Item 2', 'Item 3' ]" 
          active="Item 3" 
        />
        <Dropdown 
          label=':active="2" (targeting index)' 
          :items="[
            { value: 'ILST' },
            { value: 'AEFT' },
            { value: 'PHXS' }
          ]" 
          :active="2" 
        />
        <Dropdown 
          label='width="200px"' 
          :items=" [ 'Item 1', 'Item 2' ]" 
          :active="0" 
          width="200px" 
        />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />

      <h2>Events</h2>
      <Display>
        <Dropdown 
          label='@update'
          :items=" [ 'Item 1', 'Item 2', 'Item 3' ]" 
          :active="0"
          @update="showUpdate" 
        />
        <Dropdown 
          label='@focus/@blur' 
          :items="[
            { value: 'ILST' },
            { value: 'AEFT' }
          ]" 
          :active="1" 
          @focus="showFocus" 
          @blur="showBlur" 
        />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Events').data" />
      </UIFold>
      <Table :content="tableData.events" />
  </Content>
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Dropdown/table'

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
  data: () => ({
    dropdown1: [
			'Item 1',
			'Item 2',
			'Item 3',
			'Item 4',
			'Item 5',
			'Item 6',
		],
		dropdown2: [
			{
				label: 'Illustrator',
				value: 'ILST'
			},
			{
				label: 'After Effects',
				value: 'AEFT'
			},
			{
				label: 'Photoshop',
				value: 'PHXS'
			},
			{
				label: 'Premiere Pro',
				value: 'PPRO'
			},
			{
				label: 'Audition',
				value: 'AUDT'
			},
			{
				label: 'InDesign',
				value: 'IDSN'
			},
			{
				label: 'Animate',
				value: 'FLPR'
      }
    ]
  }),
  methods: {
    getChildByName(name) {
      return this.target.children.find(item => {
        return item.name == name;
      })
    },
    showUpdate(value) {
			console.log('Active value is currently:', value)
		},
		showFocus() {
			console.log('Dropdown is focused!')
		},
		showBlur() {
			console.log('Dropdown is blurred!')
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