<template>
  <Content>
      <h2>Styles</h2>
      <Display>
        <Grid>
          <div class="placeholder">1</div>
          <div class="placeholder">2</div>
          <div class="placeholder">3</div>
        </Grid>
        <div class="divider" />
        <Grid column>
          <div class="placeholder">1</div>
          <div class="placeholder">2</div>
          <div class="placeholder">3</div>
        </Grid>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <Table :content="tableData.styles" />

      <h2>Props</h2>
      <Display>
        <Grid template="1fr 4fr 2fr">
        <div class="placeholder">1</div>
        <div class="placeholder">2</div>
        <div class="placeholder">3</div>
      </Grid>
      <div class="divider" />
      <Grid gap="50px">
        <div class="placeholder">1</div>
        <div class="placeholder">2</div>
        <div class="placeholder">3</div>
      </Grid>
      <div class="divider" />
      <Grid height="100px">
        <div class="placeholder">1</div>
        <div class="placeholder">2</div>
        <div class="placeholder">3</div>
      </Grid>
      <div class="divider" />
      <Grid>
        <Grid column>
          <div class="placeholder">A</div>
          <div class="placeholder">B</div>
        </Grid>
        <Grid column>
          <div class="placeholder">C</div>
          <div class="placeholder">D</div>
        </Grid>
      </Grid>
      </Display>
      <UIFold>
        <Coder :content="getChildByName('Props').data" />
      </UIFold>
      <Table :content="tableData.properties" />

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Grid/table'

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