import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueLazyload from "vue-lazyload";

import fastclick from "fastclick";

import "./network/index.js";
import toast from "@/components/common/toast";
Vue.config.productionTip = false;
//new 一个vue实例作为事件总线
Vue.prototype.$bus = new Vue();
//解决移动端的300ms的延迟的问题
fastclick.attach(document.body);
//图片懒加载
Vue.use(vueLazyload, {
  //图片还没有加载出来是显示的图片
  loading: require("./assets/common/placeholder.png")
});
//安装toast插件
Vue.use(toast);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
