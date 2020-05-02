<template>
  <div class="note-wrapper">
    <div class="note-icon">
      <Icon :name="icon" />
    </div>
    <div class="note-content"><slot/></div>
  </div>
</template>

<script>
import { Icon } from 'brutalism'

export default {
  props: {
    icon: {
      type: String,
      default: 'information-outline'
    }
  }
}
</script>

<style>
.note-wrapper {
  margin-top: 40px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  background: var(--code-bg);
  user-select: none;
  cursor: default;
} 
.note-content {
  padding-left: 10px;
  /* padding-top: 6px; */
}
.note-icon {
  /* padding-bottom: 6px; */
}

</style>