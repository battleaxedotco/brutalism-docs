<template>
  <div class="right-drawer">
    <div v-for="anchor in anchors" :key="anchor.name" class="right-drawer-item" :style="checkItemStatus(anchor)">
      <a :href="`#${anchor.name}`" class="right-drawer-item-label">{{anchor.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    anchors: [
      {
        name: 'Styles',
        active: true
      },
      {
        name: 'Props and Events',
        active: false
      }
    ]
  }),
  methods: {
    checkItemStatus(item) {
      let style = '';
      style += `
        border-color: ${item.active ? '#5978f3' : 'transparent'};
        color: var(--text${item.active ? '' : '-faded' });  
      `
      return style;
    }
  }
}
</script>

<style>
a:-webkit-any-link {
  color: inherit;
  text-decoration: none;
}

.right-drawer {
  /* border: 2px solid red; */
  min-width: 20px;
  min-height: 20px;
  position: fixed;
  right: 0px;
  top: 126px;
  z-index: 10;
  font-weight: bold;
  font-size: 1.5em;
  width: 330px;
  user-select: none;
}

.right-drawer-item {
  padding: 4px 0px;
  margin: 3px 0px;
  border-width: 0px 0px 0px 4px;
  border-style: solid;
  cursor: pointer;
}

.right-drawer-item-label {
  padding-left: 10px;
}


@media screen and (max-width: 1450px) {
  .right-drawer {
    display: none;
  }
}
</style>