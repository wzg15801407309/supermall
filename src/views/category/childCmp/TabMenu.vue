<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div
        class="menu-list-item"
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import scroll from "@/components/common/scroll";
export default {
  name: "TabMenu",
  components: { scroll },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return { currentIndex: 0 };
  },
  watch: {},
  computed: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
      this.$emit("rightScroll");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  z-index: 8;
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    &.active {
      font-weight: 700;
      color: var(--color-high-text);
      background-color: #fff;
      border-left: 3px solid var(--color-high-text);
    }
  }
}
</style>
