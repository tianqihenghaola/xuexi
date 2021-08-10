<template>
  <el-container class="full-height">
    <el-header class="flex-center-align" height="100px">
      <Header />
    </el-header>
    <el-container>
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./Header";
import Aside from "./Aside";

export default {
  name: "index",
  components: {
    Header,
    Aside,
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #27303f;
  color: #fff;
}

// .el-aside {
//   background-color: pink;
// }
</style>
