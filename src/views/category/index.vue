<template>
  <div id="categroy">
    <navBar class="category_nav">
      <div slot="nav-center">商品分类</div>
    </navBar>
    <div class="main">
      <category-left ref="left"></category-left>
      <category-right ref="right" :list_item="rightList"></category-right>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";

import CategoryLeft from "./childCmp/CategoryLeft.vue";
import CategoryRight from "./childCmp/CategoryRight.vue";

import { getCategoryInfo } from "network/category.js";
export default {
  name: "categroy",
  components: { navBar, CategoryLeft, CategoryRight },
  props: {},
  data() {
    return {
      rightList: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getCategoryInfo(maitKey) {
      console.log(res, "??????????/");
      let res = await getCategoryInfo(maitKey);
      if (res) {
        this.rightList = res.list;
      }
    }
  },
  created() {},
  mounted() {
    this.getCategoryInfo();
  }
};
</script>
<style lang="less" scoped>
#categroy {
  height: 100vh;
  .category_nav {
    background-color: var(--color-high-text);
    color: white;
  }
  .main {
    display: flex;
    font-size: 0.6rem;
    height: calc(100% - 93px);
  }
}
</style>
