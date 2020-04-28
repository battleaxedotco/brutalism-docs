<template>
  <div class="home">
    <div class="title-wrapper">
      <h1 class="title">{{$route.params.component || $route.name}}</h1>
    </div>
    <Markdown-Preview ref="content" :text="testText" @convertedAnchors="buildPageNav" />
    <Left-Drawer ref="drawerL" />
    <Right-Drawer ref="drawerR" />
  </div>
</template>

<script>
const templates = require('@/template.json');

export default {
  name: 'Home',
  components: {
    'Markdown-Preview': require('../components/Markdown.vue').default,
    'Left-Drawer': require('../components/LeftDrawer').default,
    'Right-Drawer': require('../components/RightDrawer').default,
  },
  data: () => ({
    testText: '',
  }),
  mounted() {
    console.log(templates)
    this.detectCorrectRoute()

  },
  watch: {
    '$route.path'() {
      console.log(this.$route.path)
      this.detectCorrectRoute()
    }
  },
  methods: {
    detectCorrectRoute() {
      if (this.$route.params.component) {
        let target = templates.find(component => {
          return component.name == this.$route.params.component
        })
        if (target) {
          console.log(`SETTING PAGE TO ${target.name.toUpperCase()}`)
          this.testText = target.data;
          this.$refs.drawerR.getRenderedText()
        }
      } else if (this.$route.path == '/') {
        console.log('OVERRIDING PAGE')
        this.setToTest()
        this.$refs.drawerR.getRenderedText()
      } else {
        console.log('404')
      }
    },
    buildPageNav(val) {
      console.log('PASSING DATA TO RIGHT DRAWER', val)
      this.$refs.drawerR.init(val)
    },
    setToTest() {
      this.$router.push({
        name: 'Home',
        params: {
          component: 'Home'
        }
      })
      this.$nextTick(() => {
        this.testText = templates[0].data;
      })
    }
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  height: auto;
  position: relative;
  min-height: 100vh;
}

.title-wrapper {
  z-index: 4;
  left: 80px;
  top: 0px;
  position: absolute;
  max-width: 800px;
  width: 100%;
}

.title {
  color: var(--text-faded);
  margin: 0px 0px 0px 30px;
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: .25ch;
  font-weight: 400;
}

@media screen and (max-width: 950px) {
  .title {
    margin: -2px 0px 0px 20px;
    font-size: 40px;
  }
  .title-wrapper {
    left: 40px;
  }
}
</style>