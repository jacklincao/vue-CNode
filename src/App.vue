<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    font-family: "Microsoft YaHei UI", serif;
    user-select: none;
    cursor: default;
    font-size:14px;
  }

  ul li {
    list-style: none;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #e1e1e1;
  }
</style>
