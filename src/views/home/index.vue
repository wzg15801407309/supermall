<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="nav-center">购物街</div>
    </navBar>
    <homeSwiper :banner="banner" />
    <recommendView :recommend="recommend" />
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";

import { homeSwiper, recommendView } from "@/views/home/childe/index.js";

import { getHomeMultidata } from "@/network/home.js";

export default {
  name: "home",
  components: { navBar, homeSwiper, recommendView },
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
}
</style>
