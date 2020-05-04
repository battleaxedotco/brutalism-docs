<template>
  <div class="landing-header">
    <div class="logo">
      <div class="logo-wrapper-title">
        <a href="https://battleaxe.co" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106 106"
            class="svg-wrapper-title"
          >
            <g>
              <circle class="battleaxe-logo-2" cx="7.75" cy="53" r="5" />
              <circle class="battleaxe-logo-2" cx="30.37" cy="30.37" r="5" />
              <circle class="battleaxe-logo-2" cx="53" cy="7.75" r="5" />
              <circle class="battleaxe-logo-2" cx="30.37" cy="75.63" r="5" />
              <circle class="battleaxe-logo-2" cx="53" cy="53" r="5" />
              <circle class="battleaxe-logo-2" cx="75.63" cy="30.37" r="5" />
              <circle class="battleaxe-logo-2" cx="53" cy="98.25" r="5" />
              <circle class="battleaxe-logo-2" cx="75.63" cy="75.63" r="5" />
              <circle class="battleaxe-logo-2" cx="98.25" cy="53" r="5" />
              <polyline
                class="battleaxe-logo-1"
                points="75.63 75.63 7.75 53 75.63 30.37 53 7.75 53 98.25 30.37 75.63 98.25 53 30.37 30.37"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="landing-title">brutalism</div>
    <!-- <h3 class="landing-anno">
      Battleaxe's component library for Adobe CEP panels
    </h3> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    width: 50,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");

.landing-title {
  font-family: "Space Mono", monospace;
  margin-top: 40px;
  font-size: 48px;
  padding-bottom: 30px;
  font-weight: 600;
}

.landing-header {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  flex-direction: column;
  align-items: center;
}

.svg-wrapper-title {
  margin-top: 30px;
  width: 200px;
}

.battleaxe-logo-1,
.battleaxe-logo-2 {
  fill: none;
}
.battleaxe-logo-1 {
  stroke: #231f20;
  stroke-miterlimit: 10;
  stroke-width: 3px;
}
.battleaxe-logo-2 {
  fill: #231f20;
}
.logo-wrapper-title {
  padding-top: 10px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  width: 200px;
  cursor: pointer;
}

@media screen and (max-width: 950px) {
  .svg-wrapper {
    width: 30px;
  }
  .logo-wrapper {
    padding-top: 5px;
    padding-left: 0px;
  }
}
</style>
