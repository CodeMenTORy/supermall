import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import toast from "components/common/toast";

Vue.config.productionTip = false;

// 给原型添加事件总线（event bus）
Vue.prototype.$bus = new Vue();
// 安装自定义toast插件
Vue.use(toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
