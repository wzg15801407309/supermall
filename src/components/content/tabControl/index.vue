<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
  span {
    padding: 3px;
  }
  .tab-control-item {
    flex: 1;
  }
}
.active {
  color: var(--color-high-text);
  span {
    border-bottom: 3px solid var(--color-high-text);
  }
}
</style>
