<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="nav-center">购物街</div>
    </navBar>
    <scroll class="scroll-content"
            ref='scroll'
            :probeType='3'
            :pullUpLoad='true'
            @scrollPosition='contralScroll'
            @pullingUp='loadingMove'>
      <homeSwiper :banner="banner" />
      <recommendView :recommend="recommend" />
      <featureView />
      <tabControl class="tab-control"
                  :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick" />
      <goodsList :goodsList="showGoods" />
    </scroll>
    <backTop @click.native="backClick"
             v-show="ishowTop " />
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
import tabControl from "@/components/content/tabControl";
import scroll from "@/components/common/scroll";
import backTop from "@/components/content/backTop";

import {
  homeSwiper,
  recommendView,
  featureView
} from "@/views/home/childe/index.js";
import goodsList from "@/components/content/goods";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { getRandomNum } from "@/commons/utils.js";

export default {
  name: "home",
  components: {
    goodsList,
    navBar,
    homeSwiper,
    recommendView,
    featureView,
    tabControl,
    scroll,
    backTop
  },
  props: {},
  data() {
    return {
      //图片地址
      srcList: [
        "https://s11.mogucdn.com/mlcdn/c45406/190729_0l0228189805b58i45056ckihc917_1000x1500.jpg_468x468.jpg",
        "https://s11.mogucdn.com/mlcdn/c45406/190729_0l0228189805b58i45056ckihc917_1000x1500.jpg_468x468.jpg",
        "https://s11.mogucdn.com/mlcdn/c45406/190304_298j17ee3efhg82649ef6f1ca049l_1000x1500.jpg_468x468.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/190807_682kbcl4917hah9ehjef06b073489_640x960.jpg_468x468.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/190807_682kbcl4917hah9ehjef06b073489_640x960.jpg_468x468.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/190320_35ggb3f6i4k36l1hf5bgefh6e468i_640x960.jpg_468x468.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/190806_5kj89cck1fj2efb76iad4eb7a2g4d_1000x1500.jpg_468x468.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/190806_5kj89cck1fj2efb76iad4eb7a2g4d_1000x1500.jpg_468x468.jpg"
      ],
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      ishowTop: false
    };
  },
  watch: {},
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
    getHomeGoodsList(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        window.console.log(res, "88888888889");
        //有数据的处理方式
        // this.goods[type].list.push(...res.data.list);
        let ram = getRandomNum(25, 35);
        for (let i = 0; i < ram; i++) {
          console.log(ram);
          let srcNum = getRandomNum(0, 7);
          this.goods[type].list.push({
            title: `${type}列表${i + 1}我测试的数据`,
            src: this.srcList[srcNum],
            price: ram * 10,
            cfav: getRandomNum(10, 50)
          });
        }

        this.goods[type].page += 1;
        this.$refs.scroll.finishPullingUp();
      });
    },

    /**
     * 回到顶部
     * ref的使用和组件监听事件添加native
     */
    backClick() {
      // console.log("9909000");
      this.$refs.scroll.scrollTo(0, 0);
    },
    /**位置相关 */
    contralScroll(position) {
      this.ishowTop = -position.y > 800;
      // console.log(position);
    },
    /**
     * 上啦加载更多事件
     */
    loadingMove() {
      this.getHomeGoodsList(this.currentType);
    }
  },
  created() {
    this.getBannerAndRecommendData();
    this.getHomeGoodsList("pop");
    this.getHomeGoodsList("new");
    this.getHomeGoodsList("sell");
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
#home {
  padding-top: 44px;
  height: 100vh;

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
  .scroll-content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
}
</style>
