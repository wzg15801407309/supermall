<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="nav-center">购物街</div>
    </navBar>
    <homeSwiper :banner="banner" />
    <recommendView :recommend="recommend" />
    <featureView />
    <tabControl class="tab-control"
                :titles="['流行', '新款', '精选']"
                @tabClick='tabClick' />
    <goodsList :goodsList="showGoods" />
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
import tabControl from "@/components/content/tabControl";

import {
  homeSwiper,
  recommendView,
  featureView
} from "@/views/home/childe/index.js";
import goodsList from "@/components/content/goods";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  name: "home",
  components: {
    goodsList,
    navBar,
    homeSwiper,
    recommendView,
    featureView,
    tabControl
  },
  props: {},
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  watch: {},
  //
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // window.console.log(index);
    },

    /**
     * 网络强求相关方法
     */
    getBannerAndRecommendData() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        window.console.log(res, "99999999999");
      });
    },
    getHomeGoodsList() {
      getHomeGoods("pop", 1).then(res => {
        window.console.log(res, "88888888889");
        //获取不到数据自己创建数据
        for (let i = 0; i < 30; i++) {
          this.goods.pop.list.push({
            title: `流行列表${i + 1}我测试的数据`,
            src:
              "https://gd3.alicdn.com/imgextra/i4/765641582/O1CN01qiWFCl1NYb3AJVhhP_!!765641582.jpg_400x400.jpg",
            price: "1000¥",
            cfav: "19"
          });
          this.goods.new.list.push({
            title: `新款列表${i + 1}我测试的数据`,
            src:
              "https://gd3.alicdn.com/imgextra/i3/765641582/O1CN01RETAm31NYb8i3JGmg_!!765641582.jpg_400x400.jpg",
            price: "1000¥",
            cfav: "19"
          });
          this.goods.sell.list.push({
            title: `热卖列表${i + 1}我测试的数据`,
            src:
              "https://img.alicdn.com/imgextra/i3/2206477550426/O1CN01Lr5h7Z1F19J4a2Yz6_!!2206477550426.jpg_430x430q90.jpg",
            price: "1000¥",
            cfav: "19"
          });
        }
      });
    }
  },
  created() {
    this.getBannerAndRecommendData();
    this.getHomeGoodsList();
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
  // 实现吸顶的效果
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
}
</style>
