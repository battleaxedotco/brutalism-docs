<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Input-Scroll label="default" />
         <Input-Scroll label="flat" flat />
         <Input-Scroll label="filled" filled />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />
      <h2>Props</h2>
      <Display>
        <Input-Scroll label="default" />
        <Input-Scroll label=':value="100"' :value="100" />
        <Input-Scroll
          label=':min="-100" :max="100"'
          :min="-100"
          :max="100"
        />
        <Input-Scroll
          label='color="#ff0000"'
          color="red"
        />
        <Input-Scroll label="disabled" :value="20" disabled />
        <Input-Scroll label=':step="2"' :step="2" />
        <Input-Scroll
          label=':steps="[2, 5, 25]"'
          :steps="[2, 5, 25]"
        />
        <Input-Scroll
          label=':toFixed="3"'
          :value="100.125"
          :toFixed="3"
        />
        <Input-Scroll
          label=':reset-value="100"'
          :value="446"
          :reset-value="100"
        />
        <Input-Scroll label="lazy" lazy :value="29.97" suffix="fps" />
        <Input-Scroll
          label='suffix="px"'
          suffix="px"
        />
        <Input-Scroll
          label='prefix="page"'
          prefix="page"
        />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />
      <h2>Events</h2>
      <Display>
        <Input-Scroll label="@Change" @change="changeVal" />
         <Input-Scroll label="@Update" @update="updateVal" />
         <Input-Scroll
           label="@Focus/@Blur"
           @focus="message('Focus!')"
           @blur="message('Blur!')"
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