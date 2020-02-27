<template>
  <div class="scroll-wrapper"
       ref='swrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    /**
     * 滚动按
     */
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    /**
     * 向上结束按钮
     */
    finishPullUp() {
      this.scroll &&  this.scroll.finishPullUp();
    },
    /**
     * 刷新页面
     */
    refresh(){
      // console.log('hjhjjh');
      this.scroll && this.scroll.refresh();
    },
    /**
     * 获取到滚动跳的y值
     */
    getScrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  },
  created() {},
  mounted() {
    /**
     * 创建scroll对像
    */
    this.scroll = new Bscroll(this.$refs.swrapper, {
      //在组件能的点击才能生效（不为button）
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    /**
     * 监听滚动位置
     * 要在创建对象的时：设置probeType(0、1:都是不监听，2:只监听到松开时，3:监听到后自动滑动的位置)
     * 
     * 0\1 监听没有意义  这样写是比较好的方式
     */
    if( this.probeType ==2 || this.probeType==3){
      this.scroll.on("scroll", positon => {
      this.$emit("scrollPosition", positon);
      // console.log("ppppppp");
      });
    }
    

    /**
     * 监听上拉事件
     * (用于 一页数据加载完成加载下一页数据)
     * 和属性pulluUpLoad相结合使用
     */
    if(this.pullUpLoad){
      this.scroll.on("pullingUp", () => {
        // console.log("滚动到地部了");
        this.$emit("pullingUp");
      });
    }
 
  }
};
</script>
<style lang="less" scoped>
</style>
