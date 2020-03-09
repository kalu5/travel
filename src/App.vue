<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  height: 100%;
}

div,li {
  box-sizing: border-box;
}
</style>
