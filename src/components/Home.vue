<template>
  <div class="home">
    <el-button type="info" @click="back">后退</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
