import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// 插件
import './plugins/element.js';

// 样式
import './styles/index.scss';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
