module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // plugins: [
    //   'vue',
    //   'html'
    // ],
    // 0或’off’：关闭规则。
    // 1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。
    // 2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。

    // 参数说明：
    // 参数1 ： 错误等级
    // 参数2 ： 处理方式
    // 'space-before-function-paren': [
    //   'error',
    //   {
    //     anonymous: 'always',
    //     named: 'always',
    //     asyncArrow: 'always',
    //   },
    // ]
  },
};
