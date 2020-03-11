import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./network/index.js";
import toast from "@/components/common/toast";
Vue.config.productionTip = false;
//new 一个vue实例作为事件总线
Vue.prototype.$bus = new Vue();
//安装toast插件
Vue.use(toast);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
