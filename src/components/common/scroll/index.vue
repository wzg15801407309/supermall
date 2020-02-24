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
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  },
  created() {},
  mounted() {
    //创建scroll对像
    this.scroll = new Bscroll(this.$refs.swrapper, {
      //在组件能的点击才能生效（不为button）
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    /**
     * 监听滚动位置
     * 要在创建对象的时：设置probeType(0、1:都是不监听，2:只监听到松开时，3:监听到后自动滑动的位置)
     */
    this.scroll.on("scroll", positon => {
      this.$emit("scrollPosition", positon);
      // console.log("ppppppp");
    });

    /**
     * 监听上拉事件
     * (用于 一页数据加载完成加载下一页数据)
     * 和属性pulluUpLoad相结合使用
     */
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载");
      this.$emit("pullingUp");
    });
  }
};
</script>
<style lang="less" scoped>
</style>
