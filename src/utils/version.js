const Version = {
  PROJECT_NAME: "学习练习系统1.0",
  PROJECT_VERSION: "v1.8.3.1",
  BUILD_TIME: "2021年8月3日16:48:07",
  BUILD_PERSIONNEL: "@yanglongbin",
  PrintVersionInfo() {
    console.group(
      "%c┏ ---------------------------------",
      "color: cornflowerblue;font-size:10px"
    );
    console.log(
      "%c【项目名称】:",
      "color: dodgerblue;font-size:12px",
      this.PROJECT_NAME
    );
    console.log(
      "%c【当前版本】:",
      "color: dodgerblue;font-size:12px",
      this.PROJECT_VERSION
    );
    console.log(
      "%c【打包时间】:",
      "color: dodgerblue;font-size:12px",
      this.BUILD_TIME
    );
    console.log(
      "%c【打包人员】:",
      "color: dodgerblue;font-size:12px",
      this.BUILD_PERSIONNEL
    );
    console.log(
      "%c--------------------------------- ┛",
      "color: cornflowerblue;font-size:10px"
    );
    console.groupEnd();
    // 输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。
    // console.error("Error: %s (%i)", "Server is not responding",500)

    // 将复合类型的数据转为表格显示。
    // var arr = [
    //     { num: "1" },
    //     { num: "2" },
    //     { num: "3" }
    // ];
    // console.table(arr);

    // var obj = {
    //     a: { num: "1" },
    //     b: { num: "2" },
    //     c: { num: "3" }
    // };
    // console.table(obj);

    // 计时开始计时结束
    // console.time('计时器1');
    // for (var i = 0; i < 100; i++) {
    //     for (var j = 0; j < 100; j++) { }
    // }
    // console.timeEnd('计时器1');
    // console.time('计时器2');
    // for (var i = 0; i < 1000; i++) {
    //     for (var j = 0; j < 1000; j++) { }
    // }
    // console.timeEnd('计时器2');

    // 追踪函数的调用过程
    // function d(a) {
    //     console.trace();
    //     return a;
    // }
    // function b(a) {
    //     return c(a);
    // }
    // function c(a) {
    //     return d(a);
    // }
    // var a = b('123');

    // 输出警告信息
    // console.warn("警告")
  },
};

export default Version;
