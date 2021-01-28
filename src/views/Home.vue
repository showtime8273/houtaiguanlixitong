<template>
  <div class="homediv">
    <p>斯嘉丽约翰逊</p>
    <span>贾斯汀比伯</span>
    <el-button type="warning" plain @click="loginout">警告按钮</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
