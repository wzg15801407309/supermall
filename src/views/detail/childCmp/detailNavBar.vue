<template>
  <div class="detailNavBar">
    <navBar>
      <div slot="nav-left" class="back" @click="backClick">
        <img src="@/assets/common/back.svg" alt="" />
      </div>
      <div slot="nav-center" class="detail-nav">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="nav-item"
          :class="{ active: index == currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
  name: "detailNavBar",
  components: { navBar },
  props: {},
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  created() {},
  mounted() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      //两个都是回到上一页
      // this.$router.go(-1);
      this.$router.back();
    }
  },
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
.detailNavBar {
  .detail-nav {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    .nav-item {
      flex: 1;
    }
  }
  .back {
    margin-top: 6px;
  }
}
.active {
  color: var(--color-height-text);
}
</style>
