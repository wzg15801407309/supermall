<template>
  <div id="chart-list">
    <scroll class="scroll-content" ref="scrollC">
      <chartListItem
        v-for="(item, index) in cartList"
        :key="index"
        :item="item"
      />
    </scroll>
  </div>
</template>

<script>
import scroll from "@/components/common/scroll";
import chartListItem from "./cartListItem";

export default {
  name: "chartLÍist",
  components: { scroll, chartListItem },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  activated() {
    this.$refs.scrollC.refresh();
  }
};
</script>
<style lang="less" scoped>
#chart-list {
  //记住 calc函数的中间一定要有空
  height: calc(100% - 93px - 40px);
  .scroll-content {
    height: 100%;
  }
}
</style>
