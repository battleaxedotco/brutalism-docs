<template>
  <div class="ui-fold-wrapper">
    <div class="ui-fold-label" @click="toggle">
			<div class="ui-fold-label-text">{{ label }}</div>
			<div class="ui-fold-icon" :class="{ flip: !isOpen }">
				<svg width="18" height="18" viewBox="0 0 24 24">
					<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</div>
		</div>
    <div class="ui-fold-content"  v-show="isOpen" >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
			type: Boolean,
			default: true
		},
  },
  data: () => ({
    isOpen: null
  }),
  methods: {
		toggle() {
			this.isOpen = !this.isOpen;
			this.$emit("clicked");
		}
  },
  computed: {
    label() {
      return this.isOpen ? 'Hide' : 'Show'
    }
  },
	watch: {
		open(val) {
			this.toggle();
		}
	},
	mounted() {
		this.isOpen = this.open;
	}
}
</script>

<style>
.ui-fold-wrapper {
  position: relative;
  background-color: var(--code-bg);
  width: 100%;
  min-height: 10px;
  /* border: 2px solid red; */
  margin: 2em 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: nowrap;
  justify-content: flex-end;
  min-height: 20px;

}

.ui-fold-label {
  user-select: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  box-sizing: border-box;
  /* border: 2px solid blue; */
  width: fit-content;
  padding: 0px 4px 0px 20px;
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: .2ch;
  font-weight: 600;
  color: var(--color-icon);

}

.ui-fold-content {
  width: 100%;
}

.ui-fold-icon {
  float: right;
	margin-top: 2px;
	fill: var(--color-icon);
	height: 18px;
	transform-origin: 50% 50%;
	transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
}
.ui-fold-icon.flip {
	transform: rotate(-90deg);
}
</style>