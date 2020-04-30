<template>
  <div class="table-container">
    <div class="table-wrapper">
      <div class="table-column" v-for="(field, i) in realFields" :key="i">
        <div :class="[ 'table-column-label', field.toLowerCase(), i == realFields.length - 1 ? 'last' : '' ]" >
          {{field}}
        </div>
        <div 
          :class="[ 'table-column-cell', field.toLowerCase(), i == realFields.length - 1 ? 'last' : '' ]" 
          v-for="(child, c) in getFieldsOf(field)" 
          :key="c"
        >
          <span :class="field.toLowerCase()">{{child}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  computed: {
    realFields() {
      if (!this.content) return null;
      return this.content.fields;
    }
  },
  mounted() {
    // 
  },
  methods: {
    getFieldsOf(prop) {
      if (!this.content) return '';
      return this.content.data.map(item => {
        return item[prop.toLowerCase()]
      })
    }
  },
  data: () => ({
    
  })
}
</script>

<style>
.table-container {
  border: 2px solid #e0e4e6;
  box-sizing: border-box;
  width: 100%;
  cursor: auto;
  margin-bottom: 2em;
  user-select: none;
  cursor: default;
  overflow-x: auto;
  overflow-y: hidden;
}

.table-wrapper {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  /* flex-grow: 0; */
}

.table-column {
  box-sizing: border-box;
  padding: 0;
  border-style: solid;
  border-color: transparent;
}


.table-column-label {
  padding: 10px 45px 10px 15px;
  font-size: 1.17em;
  font-weight: bold;
}
.table-column-label.last {
  display: flex;
  /* justify-content: flex-end; */
}

.table-column-label.default, .table-column-cell.default {
  padding: 10px 15px;
}

.table-column:not(:last-of-type) {
  border-width: 0px 2px 0px 0px;
  border-color: #e0e4e6;
}
.table-column:last-of-type {
  border-width: 0px;
}


.table-column-cell {
  box-sizing: border-box;
  padding: 10px 45px 10px 15px;
  display: flex;
  flex-wrap: nowrap;
  word-wrap: none;
  white-space: pre;
  min-height: 40px;
}
.table-column-cell.last {
  display: flex;
  /* justify-content: flex-end; */
}

.table-column-cell:nth-child(even) {
  background: rgba(55,55,55,0.05);
}

.table-column:last-child {
  width: 100%;
}

span.type, span.property, span.default, span.event, span.arguments {
  color: #e83e8c;
  /* font-weight: bold; */
}

@media screen and (max-width: 950px) {
  .table-container {
    font-size: 12px;
  }
  .table-column-cell, .table-column-cell.default {
    padding: 6px 20px 6px 10px;
    min-height: 28px;
  }
  .table-column-label, .table-column-label.default {
    padding: 8px 20px 8px 10px;
  }
  
}

</style>