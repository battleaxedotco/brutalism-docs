<template>
  <div class="left-drawer">
    <div v-for="anchor in anchors" :key="anchor.name" class="left-drawer-item" :style="checkItemStatus(anchor)">
      <span class="left-drawer-item-label">{{anchor.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    anchors: [
      {
        name: 'Buttons',
        active: true
      },
      {
        name: 'Button-Groups',
        active: false
      },
      {
        name: 'Tooltips',
        active: false
      },
      {
        name: 'Input-Scroll',
        active: false
      },
      {
        name: 'Input',
        active: false
      },
      {
        name: 'TextArea',
        active: false
      },
      {
        name: 'Toggle',
        active: false
      },
      {
        name: 'Dropdown',
        active: false
      },
      
    ]
  }),
  methods: {
    checkItemStatus(item) {
      let style = '';
      style += `
        color: var(--text${item.active ? '' : '-faded' });  
      `
      return style;
    }
  }
}
</script>

<style>
.left-drawer {
  /* border: 2px solid red; */
  min-width: 20px;
  min-height: 20px;
  position: fixed;
  left: 50px;
  top: 126px;
  z-index: 10;
  font-weight: bold;
  font-size: 1.5em;
  width: 350px;
  user-select: none;
}

.left-drawer-item {
  padding: 4px 0px;
  margin: 3px 0px;
}

.left-drawer-item-label {
  padding: 4px 10px;
  cursor: pointer;
}


@media screen and (max-width: 1450px) {
  .left-drawer {
    display: none;
  }
}
</style>