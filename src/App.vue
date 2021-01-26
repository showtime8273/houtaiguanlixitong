<template>
  <div id="app">
    <router-link to="/login">连接测试</router-link>
    <router-link to="/home">连接测试</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
</style>
