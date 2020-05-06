<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Wrapper>
          <Input-Scroll label="default" />
          <Input-Scroll label="flat" flat />
          <Input-Scroll label="filled" filled />
        </Wrapper>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />
      <h2>Props</h2>
      <Display>
        <Input-Scroll label="default" />
        <Input-Scroll label='set value' :value="100" />
        <Input-Scroll label="auto-save" prefs-id="inputScrollProp" />
        <Input-Scroll
          label='min/max values'
          :min="-100"
          :max="100"
        />
        <Input-Scroll label='custom color' color="red" />
        <Input-Scroll label="disabled" :value="20" disabled />
        <Input-Scroll label='custom value increment' :step="2" />
        <Input-Scroll
          label='custom increments per modifier key'
          :steps="[2, 5, 25]"
        />
        <Input-Scroll
          label='specify decimal point'
          :value="100.125"
          :toFixed="3"
        />
        <Input-Scroll
          label='reset value if empty'
          :value="446"
          :reset-value="100"
        />
        <Input-Scroll label="no validation" lazy :value="29.97" suffix="fps" />
        <Input-Scroll label='suffix' suffix="px" />
        <Input-Scroll label='prefix' prefix="$" />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />
      <h2>Events</h2>
      <Display>
        <Wrapper>
          <Input-Scroll label="@change" @change="changeVal" />
          <Input-Scroll label="@update" @update="updateVal" />
          <Input-Scroll label="@prefs" @prefs="testPrefs" prefs-id="exampleEvent" />
          <Input-Scroll
            label="@focus/@blur"
            @focus="message('Focus!')"
            @blur="message('Blur!')"
          />
        </Wrapper>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Events').data" />
      </UIFold>
      <Table :content="tableData.events" />
  </Content>
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Input-Scroll/table'

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
    changeVal(val) {
      console.log('@change:', val)
    },
    updateVal(val) {
      console.log('@update:', val)
    },
    message(msg) {
      console.log(msg)
    },
    testPrefs(value) {
      console.log('Last prefs:', value)
    }
  },
  data: () => ({
    twoWayBinding: 100
  }),
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