<template>
  <Content>
    <Note>Some of these are redundant and component-specific to not interfere with original starlette variables. Any value prefixed by "--color-" is from the original set, otherwise are brutalism-specific.</Note>
    <h2>CSS Variables</h2>
    <h4>You can change the host app and theme with the toolbar at the bottom of this page.</h4>
    <!-- <h4>Displaying {{appName}} and {{activeTheme}}</h4> -->
    <div class="table-container">
      <div class="table-wrapper colors">
        <div class="table-row label">
          <div class="table-row-label">
            Variable
          </div>
          <div class="table-row-label">
            Value
          </div>
        </div>
        <div class="table-row" v-for="(item, i) in stylesheet" :key="i">
          <div class="table-row-cell-name" @mouseenter="item.hoverName = true" @mouseleave="item.hoverName = false">
            <span>{{`var(--${item.title})`}}</span>
            <div class="clipboard-button" v-show="item.hoverName" @click="copyText(`var(--${item.title})`)">
              <Icon :name="dynamicIcon" />
            </div>
          </div>
          <div class="table-row-cell-value" @mouseenter="item.hoverVal = true" @mouseleave="item.hoverVal = false">
            <div class="table-row-swatchwrap">
              <div class="swatch-preview" :style="{
                backgroundColor: `var(--${item.title})`
              }" />
              <div class="table-row-value">{{getValue(i)}}</div>
            </div>
            <div class="clipboard-button" v-show="item.hoverVal" @click="copyText(getValue(i))">
              <Icon :name="dynamicIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
import template from '@/template.json'
import stylesheet from '../../../pages/Colors/stylesheet.json'
import { copy } from 'brutalism'

export default {
  data: () => ({
    stylesheetValues: [],
    isMounted: false,
    appName: null,
    activeTheme: null,
    stylesheet: [],
    isCopying: false,
  }),
  computed: {
    filteredStylesheet() {
      return stylesheet.sort(this.byName).filter(item => {
        return !item.value || !/px/.test(item.value)
      })
    },
    dynamicIcon() {
      return this.isCopying ? 'clipboard-check' : 'content-copy'
    },
    target() {
      return template.find(item => {
        return item.name == this.$route.name;
      })
    }
  },
  mounted() {
    this.$root.$children[0].colorSheet = this;
    this.createStylesheet();
    this.createStylesheetValues();
    this.isMounted = true;
  },
  methods: {
    copyText(text) {
      const self = this;
      this.isCopying = true;
      setTimeout(() => {
        self.isCopying = false;
      }, 1000);
      return copy(text)
    },
    createStylesheet() {
      this.stylesheet = this.filteredStylesheet.map(item => {
        return {
          title: item.title,
          value: item.value,
          hoverName: false,
          hoverVal: false
        }
      })
    },
    getValue(index) {
      if (!this.isMounted) return null;
      return this.stylesheetValues[index].value
    },  
    createStylesheetValues() {
      const self = this;
      this.stylesheetValues = this.stylesheet.map(item => {
        return {
          title: item.title,
          value: self.getCSS(item.title)
        }
      })
      let theme = JSON.parse(window.localStorage.getItem('activeTheme'));
      // this.appName = theme.name;
      // this.activeTheme = 
    },
    getChildByName(name) {
      return this.target.children.find(item => {
        return item.name == name;
      })
    },
    byName(a, b) {
      // console.log(a, b)
      if (/^color/.test(a.title) && !/^color/.test(b.title)) {
        return 1;
      } else if (/^color/.test(b.title) && !/^color/.test(a.title)) {
        return -1;
      } else 
        return a.title.localeCompare(b.title)
    },
    getCSS(prop) {
      return window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
    },
  },
  components: {
    Content: require('@/components/Content.vue').default,
    Display: require('@/components/Display.vue').default,
    Coder: require('@/components/Codeking.vue').default,
    Table: require('@/components/Table.vue').default,
    UIFold: require('@/components/UIFold.vue').default,
    Note: require('@/components/Note.vue').default,
  }
}
</script>

<style>

.table-wrapper.colors {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* user-select: text;
  cursor: auto; */
}

.swatch-preview {
  box-sizing: border-box;
  min-width: 20px;
  width: 20px;
  height: 20px;
  border: 2px solid;
  margin-right: 10px;
}

.table-row {
  box-sizing: border-box;
  padding: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  /* border: 2px solid red; */
}

.table-row-label {
  font-size: 1.17em;
  font-weight: bold;
  padding: 10px 15px;
}

.table-row-cell-value {
  display: flex;
  flex-wrap: nowrap;
  min-width: 33%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
[class^="table-row-cell-"] {
  margin-left: 10px;
  display: flex;
  flex-shrink: none;
  align-items: center; 
}

[class^="table-row-cell-"] > span {
  padding: 16px 0px;
}

.table-row-swatchwrap {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

/* .table-row-cell:last-of-type {
  border-width: 0px;
} */

.table-row-cell-name {
  border-style: solid;
  border-width: 0px 2px 0px 0px;
  border-color: #e0e4e6;
  color: #e83e8c;
  box-sizing: border-box;
  padding-right: 0px !important;
  display: flex;
  justify-content: space-between;
  
  /* max-width: 66%;
  min-width: 66%; */
  /* width: 66%; */
}
.clipboard-button {
  color: var(--text);
  /* margin-right: 20px; */
  padding: 10px 15px;
  cursor: pointer;
}
.clipboard-button:hover {
  color: var(--text-faded);
}

.table-row:not(.label):nth-child(even) {
  background: rgba(55,55,55,0.05);
}


@media screen and (max-width: 951px) {
  .clipboard-button {
    display: none;
    opacity: 0;
  }
}

</style>