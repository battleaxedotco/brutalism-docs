<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Row>
           <Button label="Normal" />
           <Button primary>Primary</Button>
           <Button flat label="Flat" />
           <Button filled label="Filled" />
           <Button disabled>Disabled</Button>
           <Button>
               <Icon name="account-circle" />
               <div>With Slot content</div>
           </Button>
           <Button label="Tall" tall />
           <Button toolbar>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" style="width: 22px">
               <path 
                   d="M19,11l-8,8L3,11a5.15,5.15,0,0,1,7.28-7.28l.74.75.74-.75A5.15,5.15,0,0,1,19,11Z" />
               </svg>
           </Button>
         </Row>
         <Button block label="Block button (fill horizontal space)"/>
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Styles').data" />
      </UI-Fold>
      <Table :content="tableData.styles" />
      <h2>Props</h2>
      <Display>
        <Row>
           <Button label="Button label" />
           <Button bg="#389672">bg="#389672"</Button>
           <Button color="#46a0f2" label='color="#46a0f2"' />
           <Button label='icon="mdi-account"' icon="mdi-account" />
           <Button label='prefix-icon="mdi-account"' prefix-icon="mdi-account" />
           <Button icon="mdi-settings" icon-size="10px" label='icon-size="10px"' />
           <Button tooltip="I'm a tooltip">tooltip="I'm a tooltip"</Button>
           <Button uppercase label="uppercase" />
           <Button goto="https://battleaxe.co" label='goto="https://battleaxe.co"'/>
           <Button evalScript="someJSXFunction()" label='evalScript="someJSXFunction()"'/>
           <Button copy="Copy this text on click" label='copy="Copy this text on click"'/>
           <Button block left>block left</Button>
           <Button block right>block right</Button>				
         </Row>
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Props').data" />
      </UI-Fold>      
      <Table :content="tableData.properties" />
      <h2>Events</h2>
      <Display>
        <Button-Group grid column>
          <Button @click="testClick" label='@click="testClick"' />
          <Button evalScript="testEvalScript()" @evalScript="reportEval" label='@evalScript' />
          <Button 
            :evalScript="`testEvalScript('${ JSON.stringify({ msg: 'data' }) }')`" 
            @evalScript="reportEval" label='template literal evalScript' />
          <Button 
            copy="Copy this text on click" 
            label='@clipboard="reportClipboardSuccess"'
            @clipboard="reportClipboardSuccess"
          />
        </Button-Group>
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Events').data" />
      </UI-Fold>
      <Table :content="tableData.events" />
      <h2>Tooltips</h2>
      <Display>
        <Anno>Positioning Test</Anno>
        <Button-Group grid>
            <Button block tooltip="Default">Default tooltip</Button>
            <Button block no-bold tooltip="Default">No bold tooltip</Button>
            <Button block tooltip="Only opacity transition" no-slide
                >Adding no-slide prop</Button
            >
        </Button-Group>
        <Button-Group grid>
            <Button block left tooltip="Aligned to left"
                >Left prop on button also aligns tooltip</Button
            >
            <Button block right tooltip="Adding the top prop" top
                >Right and top props</Button
            >
        </Button-Group>
        <div class="divider" />
        <Anno>Timing</Anno>
        <Button-Group grid>
            <Button block left
                tooltip="cubic-bezier(0.48, 0.04, 0.52, 0.96)"
                timing="var(--quad)"
                >timing="var(--quad)"</Button
            >
            <Button block
                tooltip="cubic-bezier(0.76, 0, 0.24, 1)"
                timing="cubic-bezier(0.76, 0, 0.24, 1)"
                >timing="cubic-bezier(0.76, 0, 0.24, 1)"</Button
            >
            <Button block right
                tooltip="cubic-bezier(0.84, 0, 0.16, 1)"
                timing="var(--quint)"
                >timing="var(--quint)"</Button
            >
          </Button-Group>
          <Button-Group grid>
            <Button block left
                tooltip="I'm slow to animate"
                duration="1000ms"
                >duration="1000ms"</Button
            >
            <Button block 
                tooltip="I'm slow to respond" 
                delay="1000ms"
                >delay="1000ms"</Button
            >
        </Button-Group>
      </Display>
      <UI-Fold>
        <Coder :content="getChildByName('Tooltips').data" />
      </UI-Fold>
      <Table :content="tableData.tooltips" />
  </Content>
</template>

<script>
import template from '@/template.json'
import tableData from '../../../pages/Button/table'

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
    reportClipboardSuccess(value) {
      console.log('Copy function was:', value)
    },
    getChildByName(name) {
      return this.target.children.find(item => {
        return item.name == name;
      })
    },
    testClick() {
      console.log('Click!')
    },
    reportEval() {
      console.log('Host app will return a value here')
    }
  },
  components: {
    Content: require('@/components/Content.vue').default,
    Display: require('@/components/Display.vue').default,
    Coder: require('@/components/Codeking.vue').default,
    Table: require('@/components/Table.vue').default,
    UIFold: require('@/components/UIFold.vue').default
  },

}
</script>

<style>
</style>