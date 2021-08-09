<template>
  <div id="app" class="full-height">
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./router";
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    // console.log('this.$route.path--->>>', this.$route.path);
    // if (this.$route.path !== '/home') {
    //     this.$router.replace('/home')
    // }
  },
};
</script>

<style>
</style>
