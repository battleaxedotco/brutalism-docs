<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Tabs dummy :routes='[
           { label: "Home", name: "home" },
           { label: "About", name: "about" }
         ]' />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <!-- <Table :content="tableData.tabs" /> -->

      <h2>Props</h2>
      <Display>
         <Tabs invert dummy :routes='[
           { label: "Home", name: "home" },
           { label: "About", name: "about" }
         ]' />
         <Tabs delay="200ms" dummy :routes='[
           { label: "Home", path: "/" },
           { label: "About", path: "/about" }
         ]' />
         <Tabs duration="1000ms" dummy :routes='[
           { label: "Home", path: "/" },
           { label: "About", path: "/about" }
         ]' />
         <Tabs 
           timing="cubic-bezier(0.48, 0.04, 0.52, 0.96)" 
           dummy 
           :routes='[
             { label: "Home", path: "/" },
             { label: "About", path: "/about" }
           ]' 
         />
         <Tabs emit-to-parent dummy :routes='[
           { label: "Home", path: "/" },
           { label: "About", path: "/about" }
         ]' />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <!-- <Table :content="tableData.tabs" /> -->

      <h2>Events</h2>
      <Display>
        <Tabs 
           dummy 
           @update="msg"
           @click="msg"
           :routes='[
             { label: "Home", path: "/" },
             { label: "About", path: "/about" }
           ]' 
         />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Events').data" />
      </UIFold>
      <!-- <Table :content="tableData.tabs" /> -->

  </Content>
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Tabs/table'

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
    msg(value) {
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