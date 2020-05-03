<template>
  <Content>
      <Note>This component is for displaying your panel in browser, not for use within host applications.</Note>
      <h2>Styles</h2>
      <div class="demos">
        <div class="main-demo desktop">
          <iframe style="overflow: scroll;" width="375" height="500" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/basic"> </iframe>
        </div>
        <div class="main-demo landscape">
          <iframe style="overflow: scroll;" width="375" height="320" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/basic"> </iframe>
        </div>
        <div class="main-demo mobile">
          <iframe style="overflow: scroll; 
            width: 100vw;
            padding: 0px;
            margin: 0px;" width="375" height="400" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/basic"> </iframe>
        </div>
        <div class="main-demo desktop">
          <iframe style="overflow: scroll;" width="375" height="500" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/router"> </iframe>
        </div>
        <div class="main-demo landscape">
          <iframe style="overflow: scroll;" width="375" height="320" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/router"> </iframe>
        </div>
        <div class="main-demo mobile">
          <iframe style="overflow: scroll; 
            width: 100vw;
            padding: 0px;
            margin: 0px;" width="375" height="440" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/router"> </iframe>
        </div>
      </div>
      <UIFold>
        <Coder :content="getChildByName('Styles').data" />
      </UIFold>
      <!-- <Table :content="tableData.panelify" /> -->

      <h2>Props</h2>
      <Table :content="tableData.properties" />

  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from '@/template.json'
import tableData from '../../../pages/Panelify/table'

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
    UIFold: require('@/components/UIFold.vue').default,
    Note: require('@/components/Note.vue').default
  }
}
</script>

<style>
.demos {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .desktop {
    display: none;
  }
  .landscape {
    display: none;
  }
  .demos {
    flex-direction: column;
  }
  .home-title {
    padding-top: 50px;
    z-index: 1;
  }
  .markdown-content {
    margin: 0;
  }
}

@media screen and (min-width: 601px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: none;
  }

  .home-title {
    padding-top: 50px;
    z-index: 1;
  }
  .markdown-content {
    margin: 0;
  }
}

@media screen and (min-width: 951px) {
  .home-title {
    padding-top: 90px;
    z-index: 1;
  }
  .home-anno {
    padding: 0px;
  }
  .desktop {
    display: block;
  }
  .landscape {
    display: none;
  }
  .mobile {
    display: none;
  }
}
</style>