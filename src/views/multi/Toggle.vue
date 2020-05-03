<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Wrapper>
          <Toggle label="default" />
          <Toggle label="Radio" radio />
          <Toggle label="Switch" switch />
          <Toggle label="Custom" on-icon="eye" off-icon="eye-off" />
          <Toggle @update="val => slotState = val" style="padding-top: 6px">
            <div v-if="slotState">Click me! Slot content if true</div>
            <div v-else>Click me! Slot content if false</div>
          </Toggle>
        </Wrapper>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />
      <h2>Props</h2>
      <Display>
        <Row>
           <Toggle on-icon="lock" off-icon="lock-open-variant" />
           <Toggle on-icon="bell" off-icon="bell-off" />
           <Toggle on-icon="account" off-icon="account-off" />
           <Toggle 
             on-icon="video-check" 
             off-icon="video-minus" 
           />
         </Row>
         <Toggle 
           :label='dynamicState' 
           :state="realState" 
           @update="val => realState = val"
         />
         <Toggle label='color="#46a0f2"' color="#46a0f2" />
         <Toggle label="disabled" :state="true" disabled />
         <Toggle 
           label='on-icon="alarm" off-icon="alarm-off"' 
           on-icon="alarm" 
           off-icon="alarm-off"
         />
         <Toggle label='size="32px"' size="32px" />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />
      <h2>Events</h2>
      <Display>
        <Toggle label="@click" @click="showClick"/>
         <Toggle label='@update' @update="showState" />
         <Toggle 
           label='@mouseEnter/@mouseExit' 
           @mouseenter="showEnter" 
           @mouseleave="showExit" 
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
import tableData from '../../../pages/Toggle/table'

export default {
  data: () => ({
    realState: false,
    slotState: false,
    testState: true
  }),
  computed: {
    tableData() {
      return tableData;
    },
    target() {
      return template.find(item => {
        return item.name == this.$route.name;
      })
    },
    dynamicState() {
			return `:state="${this.realState}"`
		}
  },
  methods: {
    getChildByName(name) {
      return this.target.children.find(item => {
        return item.name == name;
      })
    },
    showEnter() {
      console.log('Enter')
    },
    showExit() {
      console.log('Exit')
    },
    showState(val) {
      console.log(val)
    },
    showClick() {
      console.log('Click!')
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