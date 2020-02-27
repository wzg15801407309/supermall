<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="nav-center">购物街</div>
    </navBar>
     <tabControl :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick" 
                  ref='taContorl1'
                  class="tabZindex" 
                  v-show="isTabFixed"/>
    <scroll class="scroll-content"
            ref='scroll'
            :probeType='3'
            :pullUpLoad='true'
            @scrollPosition='contralScroll'
            @pullingUp='loadingMove'>
      <homeSwiper :banner="banner" @swiperImageLoad='swiperImageLoad' />
      <recommendView :recommend="recommend" />
      <featureView />
      <tabControl :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick" 
                  ref='taContorl2'/>
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
import { getRandomNum, debounce } from "@/commons/utils.js";

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
      ishowTop: false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
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
      this.$refs.taContorl1.currentIndex=index;
      this.$refs.taContorl2.currentIndex=index;
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
          // console.log(ram);
          let srcNum = getRandomNum(0, 7);
          this.goods[type].list.push({
            title: `${type}列表${i + 1}我测试的数据`,
            src: this.srcList[srcNum],
            price: ram * 10,
            cfav: getRandomNum(10, 50)
          });
        }

        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
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
      //监听的是backTop(回到顶部按钮)是否显示
      this.ishowTop = -position.y > 800;
      //监听tabControl是否吸顶（position:fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
      // console.log(-position.y);
    },
    /**
     * 上啦加载更多事件
     */
    loadingMove() {
      this.getHomeGoodsList(this.currentType);
    },
    // /**
    //  * 防抖函数的实现：主要是让加载的图片刷新没有那么频繁
    //  * 参数一：要执行的函数回调 
    //  * 参数二：回调时间
    //  * 
    //  * 函数放到一个js文件中以后的项目可以用
    //  */
    // debounce(fn,wait){
    //   //设置一个定时器
    //   let timer=null;
    //   return (...arge)=>{
    //     if(timer) clearTimeout(timer);
    //     timer=setTimeout(() =>{
    //       fn.apply(this,arge);
    //     },wait);
    //   }
    // }
    swiperImageLoad(){
      //获取到taContorl 距离顶部的距离：offestTop
      //$el是组件的一个属性，让其拿到元素（Dom对象）
      this.tabOffsetTop=this.$refs.taContorl2.$el.offsetTop;
      // console.log(this.tabOffsetTop,"tabOffsetTop");
    }
  },
  created() {
    this.getBannerAndRecommendData();
    this.getHomeGoodsList("pop");
    this.getHomeGoodsList("new");
    this.getHomeGoodsList("sell");

    //监听goodsitem中图片是否加载完成
    //在这里拿到Dom对象有可能是undifind所以不能在这里拿
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.refresh();
    // });
  },
  mounted() {
    //监听goodsitem中图片是否加载完成
    const refresh=debounce(this.$refs.scroll.refresh,20);
    this.$bus.$on('itemImageLoad',()=>{
      refresh();
    });
  },
  /**
   * activated,deactivated这两个生命周期函数一定是要在使用了keep-alive组件后才会有的，否则则不存在
   */
  activated(){
    // console.log('activated');
    //回来时设置滚动的y值
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    // console.log('deactivated');
    //离开时保存滚动的距离
    this.saveY=this.$refs.scroll.getScrollY();
  }
};
</script>
<style lang="less" scoped>
#home {
  // padding-top: 44px;
  height: 100vh;
  position: relative;
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    //使用原生滚动的时候需要使用这个，滚动使用的better-scroll就不需要使用这个了
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // z-index: 9;
  }
  // // 实现吸顶的效果
  // .tab-control {
  //   //使用better-scroll后这个方法就不管用了
  //   // position: sticky;
  //   // top: 44px;
  //   // z-index: 9;
  // }
  .tabZindex{
    position: relative;
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
  .fixed{
    position:fixed;
    left: 0;
    right: 0;
    top:44px;
    z-index: 9;
  }
</style>
