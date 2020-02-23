<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="nav-center">购物街</div>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
import { getHomeMultidata } from "@/network/home.js";
export default {
  name: "home",
  components: { navBar },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    window.console.log("345677888");
    getHomeMultidata().then(res => {
      window.console.log(res, "99999999999");
    });
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
#home {
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
