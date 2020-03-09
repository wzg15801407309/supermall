import { debounce } from "@/commons/utils.js";
//mixin叫混入 作用两个组件代码之间要使用相同的代码
export const itemListerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    //监听goodsitem中图片是否加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh, 20);
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
};
import backTop from "@/components/content/backTop";
export const backTopMixin = {
  data() {
    return {
      ishowTop: false
    };
  },
  components: { backTop },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
};
