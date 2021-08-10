<template>
  <div id="app" class="full-height">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    // console.log('this.$route.path--->>>', this.$route.path);
    // 每次刷新重定向到首页
    // if (this.$route.path !== '/home') {
    //     this.$router.replace('/home')
    // }
  },
};
</script>

<style></style>
