<template>
  <div class="navbar full-height">
    <div class="navbar-toggle text-center" @click="toggleCollapse()">
      <i
          class="navbar-toggle-icon el-icon-d-arrow-left"
          :class="{ active: isCollapse }"
      ></i>
    </div>
    <el-menu
        class="navbar-menu full-height"
        :collapse="isCollapse"
        background-color="#2f3a4c"
        text-color="white"
        active-text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router
        :default-active="menus[0].path"
    >
      <span v-for="menu in menus" :key="menu.path">
        <el-submenu v-if="menu.children" :index="menu.path">
          <template slot="title">
            <i class="navbar-menu-icon el-icon-menu" :class="menu.meta.icon"></i>
            <span>{{ menu.meta.label }}</span>
          </template>
          <el-menu-item
            v-for="subMenu in menu.children"
            :key="subMenu.path"
            :index="subMenu.path"
          >
            <i :class="subMenu.meta.icon"></i>
            <span slot="title">{{ subMenu.meta.label }}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="menu.path">
          <i class="navbar-menu-icon el-icon-menu" :class="menu.meta.icon"></i>
          <span slot="title">{{ menu.meta.label }}</span>
        </el-menu-item>
      </span>
    </el-menu>
  </div>
</template>

<script>
import { subRoutes } from '../router/index.js';

export default {
  data() {
    const menus = (function recursive(arr) {
      const result = [];
      arr.forEach(item => {
        if (item.path && item.meta && !item.meta.isNotMenu) {
          result.push(item);
          const children = item.children;
          if (children && children.length) {
            item.children = recursive(children);
          }
          if (!item.children || !item.children.length) {
            delete item.children;
          }
        }
      });
      return result;
    })(subRoutes);
    return {
      isCollapse: false,
      menus
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 水平折叠菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  $toggleHeight: 40px;

  .navbar-toggle {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: $toggleHeight;
    line-height: $toggleHeight;
    font-size: 16px;
    padding: 0 22px;
    cursor: pointer;
    color: white;
    background: rgb(45, 52, 66);
  }

  .navbar-toggle-icon {
    transition: transform 0.3s;

    &.active {
      transform: rotate(180deg);
    }
  }

  .navbar-menu {
    overflow: hidden auto;
    padding-top: $toggleHeight;
    // 整个导航栏的宽度
    &:not(.el-menu--collapse) {
      width: 200px;
    }
    // 收起时，隐藏导航标题
    &.el-menu--collapse .el-submenu__title > span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
  }

  // 收起时，隐藏小箭头
  /deep/ .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}
// 修改导航每一行的颜色
/deep/ .el-menu {
  border: none;

  /deep/ .is-active {
    background-color: #1781e4 !important;
    color: #ffffff !important;
  }
}

/deep/ .navbar-menu-icon {
  font-size: 16px;
  margin-left: 3px;
  margin-right: 8px;
}

.el-menu-item {
  background-color: #27303f !important;
  border-bottom: 1px #3b475b solid;
}

/deep/ i {
  color: #fff !important;
}
</style>