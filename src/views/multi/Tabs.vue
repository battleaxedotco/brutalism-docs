<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Tabs dummy :routes='[
          { label: "Default 1", name: "home" },
          { label: "Default 2", name: "about" },
          { label: "Default 3", name: "about" }
        ]' />
        <div class="spacer"></div>
        <Tabs dummy flat :routes='[
          { label: "Flat 1", name: "home" },
          { label: "Flat 2", name: "about" },
          { label: "Flat 3", name: "settings" }
        ]' />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />

      <h2>Props</h2>
      <Display>
        <Tabs dummy :routes='[
          { label: "Route 1", name: "Route 1" },
          { label: "Route 2", name: "Route 2" }
        ]' />
        <div class="spacer"></div>
        <Tabs dummy disabled :routes='[
          { label: "Disabled Route 1", name: "Route 1" },
          { label: "Disabled Route 2", name: "Route 2" }
        ]' />
        <div class="spacer"></div>
        <Tabs invert dummy flat :routes='[
          { label: "Invert Route 1", name: "Route 1" },
          { label: "Invert Route 2", name: "Route 2" }
        ]' />
        <div class="spacer"></div>
        <Tabs delay="200ms" dummy flat :routes='[
          { label: "Delay Route 1", path: "/" },
          { label: "Delay Route 2", path: "/Route2" }
        ]' />
        <div class="spacer"></div>
        <Tabs duration="1000ms" dummy flat :routes='[
          { label: "Duration Route 1", path: "/" },
          { label: "Duration Route 2", path: "/Route2" }
        ]' />
        <div class="spacer"></div>
        <Tabs 
          timing="cubic-bezier(0.48, 0.04, 0.52, 0.96)" 
          dummy flat 
          :routes='[
            { label: "Timing Route 1", path: "/" },
            { label: "Timing Route 2", path: "/Route2" }
          ]' 
        />
        <div class="spacer"></div>
        <Tabs emit-to-parent dummy :routes='[
          { label: "Emit Route 1", path: "/" },
          { label: "Emit Route 2", path: "/Route2" }
        ]' />
        <div class="spacer"></div>
        <Tabs dummy :routes='[
          { label: "Dummy Route 1", path: "/" },
          { label: "Dummy Route 2", path: "/Route2" }
        ]' />
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />

      <h2>Events</h2>
      <Display>
        <Tabs 
          dummy 
          @click="testClick"
          :routes='[
            { label: "Click Route 1", path: "/" },
            { label: "Click Route 2", path: "/about" }
          ]' 
        />
        <div class="spacer"></div>
        <Tabs 
          dummy 
          @update="showUpdate"
          :routes='[
            { label: "Update Route 1", path: "/home" },
            { label: "Update Route 2", path: "/about" }
          ]' 
        />
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
    testClick() {
      console.log('Clicked!')
    },
    showUpdate(val) {
      console.log('New active tab is:', val)
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