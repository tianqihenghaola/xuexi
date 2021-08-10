module.exports = {
  // extends: ['airbnb', 'prettier', 'prettier/react'],
  // printWidth: 200, // 超过最大值换行
  // htmlWhitespaceSensitivity: 'ignore',
  // semi: false, // 结尾不用分号
  // disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  // 字符串使用单引号
  //   singleQuote: true,
  // // 每行末尾自动添加分号
  // semi: true,
  // // tab缩进大小,默认为2
  // tabWidth: 2,
  // // 使用tab缩进，默认false
  // useTabs: false,
  // // 对象中打印空格 默认true
  // // true: { foo: bar }
  // // false: {foo: bar}
  // bracketSpacing: true,
  // // 箭头函数参数括号 默认avoid 可选 avoid| always
  // // avoid 能省略括号的时候就省略 例如x => x
  // // always 总是有括号
  // arrowParens: 'avoid',
  // // 换行长度，默认80
  // printWidth: 80,
  // 设置为true时,将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
  /* 
              <button
                 className="prettier-class"
                 id="prettier-id"
                 onClick={this.handleClick}>
                 Click Here
              </button> 
               */
  // 设置为false时
  /*
              <button
                  className="prettier-class"
                  id="prettier-id"
                  onClick={this.handleClick}
              >
                  Click Here
              </button>
               */
  // jsxBracketSameLine: true

  //   singleQuote: true, // 使用单引号
  arrowParens: "always", // 给箭头函数加入括号
  semi: true, // 在末尾是否加分号
  endOfLine: "auto", // 行尾换行样式
  printWidth: 130, // 单行代码的最大长度
};
