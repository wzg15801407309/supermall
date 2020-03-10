<template>
  <div id="chart">
    <navBar class="chart-nav">
      <div slot="nav-center">购物车({{ cartLength }})</div>
    </navBar>
    <chartList :cartList="cartList" />
    <cartTotal />
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";

import { chartList, cartTotal } from "./childCmp/index";

import { mapGetters } from "vuex";
export default {
  name: "chart",
  components: { navBar, chartList, cartTotal },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
#chart {
  height: 100vh;
  .chart-nav {
    background-color: var(--color-high-text);
    color: white;
  }
}
</style>
