<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="nav-center">购物街</div>
    </navBar>
    <homeSwiper :banner="banner" />
    <recommendView :recommend="recommend" />
    <featureView />
    <tabControl class="tab-control" :titles="['流行', '新款', '精选']" />
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
import tabControl from "@/components/content/tabControl";

import {
  homeSwiper,
  recommendView,
  featureView
} from "@/views/home/childe/index.js";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  name: "home",
  components: { navBar, homeSwiper, recommendView, featureView, tabControl },
  props: {},
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    window.console.log("345677888");
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      window.console.log(res, "99999999999");
    });
    getHomeGoods("pop", 1).then(res => {
      window.console.log(res, "88888888889");
    });
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
#home {
  padding-top: 44px;
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  // 实现吸顶的效果
  .tab-control {
    position: sticky;
    top: 44px;
  }
}
</style>
