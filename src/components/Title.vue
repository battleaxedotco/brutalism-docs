<template>
  <div class="title-wrapper">
    <h1 class="title">{{ $route.name || 404 }}</h1>
  </div>
</template>

<script></script>

<style>
.title-wrapper {
  cursor: default;
  user-select: none;
  z-index: 4;
  left: 80px;
  top: 0px;
  position: absolute;
  max-width: 800px;
  width: 100%;
  display: none;
}

.title {
  color: var(--text-faded);
  margin: 0px 0px 0px 30px;
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: 0.25ch;
  font-weight: 400;
}

@media screen and (max-width: 950px) {
  .title {
    display: none;
    margin: -2px 0px 0px 20px;
    font-size: 40px;
  }
  .title-wrapper {
    left: 40px;
  }
}
</style>
