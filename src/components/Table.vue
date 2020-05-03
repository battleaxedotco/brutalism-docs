<template>
  <div style="position: relative;">
    <div class="table-container">
      <div class="table-wrapper">
        <div class="table-column" v-for="(field, i) in realFields" :key="i">
          <div :class="[ 'table-column-label', field.toLowerCase(), i == realFields.length - 1 ? 'last' : '' ]" >
            {{field}}
          </div>
          <div 
            v-for="(child, c) in getFieldsOf(field)" 
            :key="c"
            :class="[ 'table-column-cell', checkIfTodo(child, field, i, c), checkIfRequired(child, field, i, c), field.toLowerCase(), i == realFields.length - 1 ? 'last' : '' ]"
          >
            <span :class="[ field.toLowerCase() ]">{{`${child} ${checkIfRequired(child, field, i, c) ? '*' : ''}`}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="hasTodos" class="todo-anno">Fields marked in red are planned but not supported</div>
    <div v-if="hasRequireds" class="todo-anno">Fields with an asterisk are required</div>
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
  data: () => ({
    hasTodos: false,
    hasRequireds: false
  }),
  mounted() {
    this.content.data.forEach(item => {
      if (item.todo)
        this.hasTodos = true;
      if (item.required)
        this.hasRequireds = true
    })    
  },
  methods: {
    checkIfTodo(child, field, i, c) {
      let parent;
      parent = this.content.data.find(item => {
        return item[field.toLowerCase()] == child;
      })
      return parent.todo && field == 'Property' ? 'todo' : '';
    },
    checkIfRequired(child, field, i, c) {
      let parent;
      parent = this.content.data.find(item => {
        return item[field.toLowerCase()] == child;
      })
      return parent.required && field == 'param' ? 'required' : '';
    },
    getFieldsOf(prop) {
      if (!this.content) return '';
      return this.content.data.map(item => {
        return item[prop.toLowerCase()]
      })
    }
  },
  
}
</script>

<style>
.table-container {
  position: relative;
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

.todo-anno {
  /* position: absolute; */
  /* bottom: -3ch; */
  margin-top: -3ch;
  padding: 0px 2ch;
  font-style: italic;
  opacity: 0.5;
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

.table-column-cell.todo {
  background: rgba(200,0,0,0.1) !important;
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