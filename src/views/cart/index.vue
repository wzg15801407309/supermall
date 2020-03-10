<template>
  <div id="chart">
    <navBar class="chart-nav">
      <div slot="nav-center">购物车({{ cartLength }})</div>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
import { mapGetters } from "vuex";
export default {
  name: "chart",
  components: { navBar },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["cartLength"])
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
#chart {
  .chart-nav {
    background-color: var(--color-high-text);
    color: white;
  }
}
</style>
