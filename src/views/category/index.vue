<template>
  <div id="categroy">
    <navBar class="category_nav">
      <div slot="nav-center">商品分类</div>
    </navBar>
    <div class="content">
      <TabMenu
        :categories="categories"
        @selectItem="selectItem"
        @rightScroll="rightScroll"
      />
      <scroll id="tab-content" :data="[categoryData]" ref="scroll">
        <tab-content-category
          :subcategories="showSubcategory"
        ></tab-content-category>
      </scroll>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
import TabMenu from "./childCmp/TabMenu";
import TabContentCategory from "./childCmp/TabContentCategory.vue";

import scroll from "@/components/common/scroll";

import { getCategory, getSubcategory } from "network/category.js";
export default {
  name: "categroy",
  components: { navBar, TabMenu, scroll, TabContentCategory },
  props: {},
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  watch: {},
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        console.log(res, "Category");
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {}
          };
        }
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        console.log(res, "Subcategory");
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
    rightScroll() {
      this.$refs.scroll.refresh();
    }
  },
  created() {
    //分类数据的请求
    this._getCategory();
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
#categroy {
  height: 100vh;
  .category_nav {
    background-color: var(--color-high-text);
    color: white;
  }
  .content {
    display: flex;
    height: calc(100% - 44px - 49px);
    #tab-content {
      height: 100%;
      flex: 1;
    }
  }
}
</style>
