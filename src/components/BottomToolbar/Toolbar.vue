<template>
  <div class="bottom-toolbar-wrapper">
    <div class="bottom-toolbar">
      <!-- <div 
        class="footer-button theme floating" 
        id="floating-button"
        @mouseenter="hover = true" 
        @mouseleave="hover = false" 
        @click="open = true;">
        Select theme
      </div>-->
      <!-- <div class="style-section">
        <div
          v-if="shouldThemeChange"
          class="footer-button theme"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="open = true"
        >
          Change app theme
        </div>
        <div v-else />
      </div>-->
      <div class="footer-message">
        <!-- <div class="footer-anno">
          by Adam Plouff and Tom Scharstein
        </div>-->
        <div class="footer-button flat" @click="goToHomepage">
          <Icon size="30px" name="github-circle" />
        </div>
      </div>
      <!-- <Theme-Drawer v-click-outside="handleToggle" :open="open" /> -->
      <!-- <div></div> -->
    </div>
  </div>
</template>

<script>
import { openURL } from "brutalism";
export default {
  data: () => ({
    open: false,
    hover: false
  }),
  watch: {
    hover(val) {
      // console.log(val)
    }
  },
  computed: {
    // shouldThemeChange() {
    //   return !/home|utils/i.test(this.$route.name);
    // }
  },
  components: {
    "Theme-Drawer": require("./ThemeDrawer.vue").default
  },
  methods: {
    goToHomepage() {
      openURL("https://github.com/battleaxedotco/brutalism");
    }
  }
};
</script>

<style>
.bottom-toolbar-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  user-select: none;
}

.bottom-toolbar {
  box-sizing: border-box;
  width: 760px;
  height: 50px;
  /* border-style: solid;
  border-width: 2px 0px 0px 0px;
  border-color: var(--border); */
  display: flex;
  /* position: fixed; */
  bottom: 0px;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  /* z-index: 14; */
  /* background-color: red; */
}
.footer-message {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.footer-anno {
  margin-right: 20px;
}
</style>
