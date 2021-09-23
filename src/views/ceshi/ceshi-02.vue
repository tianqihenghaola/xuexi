<template>
  <div>
    <div>ceshi-02</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    init() {
      // let pattern1 = /at/g;
      // console.log(pattern1);
      let text = "000-00-0000";
      let pattern = /\d{3}-\d{2}-\d{4}/;
      if (pattern.test(text)) {
        console.log("The pattern was matched.");
      }
    },
  },
  created() {
    this.init();
  },
};
</script>

<style></style>
