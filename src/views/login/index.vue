<template>
  <div class="login-container full-height flex-center">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="用户：" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="确认密码：" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item> -->
      <div class="flex-center">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    // let checkAge = (rule, value, callback) => {
    //     setTimeout(() => {
    //         if (!Number.isInteger(value)) {
    //             callback(new Error('请输入数字值'));
    //         } else {
    //             if (value < 18) {
    //                 callback(new Error('必须年满18岁'));
    //             } else {
    //                 callback();
    //             }
    //         }
    //     }, 1000);
    // };
    // let validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入密码"));
    //   } else {
    //     if (this.ruleForm.checkPass !== "") {
    //       this.$refs.ruleForm.validateField("checkPass");
    //     }
    //     callback();
    //   }
    // };
    // let validatePass2 = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        // pass: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log("formName--->>>", formName);
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #6be9ff;
  .demo-ruleForm {
    background-color: #fff;
    // width: 600px;
    // height: 400px;
    padding: 30px;
    border-radius: 8px;
    .el-input {
      width: 300px;
    }
  }
}
</style>
