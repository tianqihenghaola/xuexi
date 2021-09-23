// import Vue from 'vue';

const requireContext = require.context("../components", true, /index\.vue$/);
// console.log('requireContext--->>>', requireContext)
console.log("123");
console.log("requireContext", requireContext);

let arr = []
requireContext.keys().forEach((key) => {
    arr = arr.concat(requireContext(key).default);
});
console.log(arr);
console.log("keys", requireContext.keys());
console.log("id", requireContext.id);
