<template>
  <div>
    <div>测试页一</div>
    <div>true：{{ zhengque }}</div>
    <div>false：{{ cuowu }}</div>
    <el-button @click="sunjibuerzhi" type="primary" size="small"
      >按钮</el-button
    >
    <el-button @click="chongzhi" size="small">重置</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhengque: 0,
      cuowu: 0,
    };
  },
  methods: {
    sunjibuerzhi() {
      const randomBoolean = () => Math.random() >= 0.5;
      console.log(randomBoolean());
      if (randomBoolean()) {
        this.zhengque++;
      } else {
        this.cuowu++;
      }
    },
    chongzhi() {
      this.zhengque = 0;
      this.cuowu = 0;
    },
    handleOpen() {
      console.log('111')
    }
  },
};
</script>

<style>
</style>