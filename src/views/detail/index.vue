<template>
  <div id="detail">
    <detailNavBar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <Scroll
      class="scroll-content"
      ref="scroll"
      @scrollPosition="contentScroll"
      :probeType="3"
    >
      <detailSwiper :topImages="topImages" />
      <detailBaseInfo :goods="goods" />
      <detailShopInfo :shop="shop" />
      <detailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detailParamInfo :paramInfo="paramInfo" ref="param" />
      <detailCommentInfo :commentInfo="commentInfo" ref="comment" />
      <goodsList :goodsList="recomment" ref="recomment" />
    </Scroll>
    <detailBottomBar @addEvent="addEvent" />
    <backTop @click.native="backClick" v-show="ishowTop" />
  </div>
</template>

<script>
//数据的
const topImages = [
  "https://s11.mogucdn.com/mlcdn/c45406/190729_0l0228189805b58i45056ckihc917_1000x1500.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190807_682kbcl4917hah9ehjef06b073489_640x960.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190320_35ggb3f6i4k36l1hf5bgefh6e468i_640x960.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190806_5kj89cck1fj2efb76iad4eb7a2g4d_1000x1500.jpg_468x468.jpg"
];
//商品信息板块数据
const itemInfo = {
  title: "【春茶预售】竹叶青茶叶2020新茶峨眉高山绿茶特级(品味)礼盒60g",
  desc: "2020年春茶上市，抢鲜预售中",
  price: "¥1024",
  oldPrice: "¥2024",
  disCountDesc: "活动价"
};
const columns = ["销量 1580", "收藏33人", "退货补差价"];
const services = [
  {
    icon:
      "https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png",
    name: "7天无理由"
  },
  {
    icon:
      "https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png",
    name: "72小时发货"
  },
  {
    icon:
      "https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png",
    name: "全国包邮"
  }
];
const shopInfos = {
  fans: 17145,
  cGoods: 99,
  shopLogo:
    "https://s5.mogucdn.com/b7/avatar/131114/h3po3_kqywmq3imjbgercugfjeg5sckzsew_200x200.jpg_100x100.jpg",
  name: "花树果",
  cSells: 57876,
  score: [
    { isBetter: false, name: "描述相符", score: 4.64 },
    { isBetter: true, name: "价格合理", score: 5.12 },
    { isBetter: false, name: "质量满意", score: 4.64 }
  ]
};
const info = {
  anchor: "product_info",
  key: "商品参数",
  set: [
    { key: "图案", value: "宫廷复古/名族复古图，字母/文字" },
    { key: "厂名", value: "艾米服饰有限公司" },
    { key: "颜色", value: "黑白拼接" },
    { key: "袖型", value: "常规袖" },
    { key: "上衣厚度", value: "适中" },
    { key: "尺码", value: "xs,s,l,xl,xxl" },
    { key: "衣长", value: "常规款（51-65cm）" },
    { key: "版型", value: "宽松" },
    { key: "季节", value: "春秋" },
    { key: "材质", value: "棉" },
    { key: "厂址", value: "广东省揭阳市普林市" },
    { key: "领型", value: "圆领" },
    { key: "元素", value: "面料拼接，平秀" },
    { key: "袖长", value: "长袖" },
    { key: "风格", value: "元宿" },
    { key: "潮流", value: "韩系" }
  ]
};
const rule = {
  anchor: "size_info",
  disclaimer:
    "🌟上面的尺寸为人工测量，因测量方式的不同会有1-3cm的误差，相关数据仅供参考，以收到的实物为准✨",
  tables: [
    ["尺码", "s", "m", "l", "xl"],
    ["胸围", "100", "104", "108", "112"],
    ["袖长", "61", "62", "63", "64"],
    ["裤长", "96", "97", "98", "99"],
    ["肩宽", "36", "37", "38", "39"],
    ["衣长", "54", "55", "56", "57"]
  ]
};
const comment = {
  cRate: 125,
  Ilist: {
    canExplain: false,
    conten: "刚好合适，物美价廉，穿着舒服，版型好看，非常棒",
    created: "",
    explain: "颜色分类：米白[现货]  尺码：M码",
    user: {
      avatar:
        "https://wwc.alicdn.com/avatar/getAvatar.do?userId=2816685380&width=160&height=160&type=sns",
      uname: "wzg冰凌花的花期"
    },
    content:
      "每天都看快递跟踪，期待早点看到！终于收到了，果然就像收到了一份礼物一样！袖子里面加了一层是为了防止刺绣扎，但是我觉得如果身上也加一层就更加完美了！虽然料子不算薄，但毕竟是白色系，对了，不是纯白是米白棉麻，非常满意！袖子上的绣花太好看了，收到才发现袖口绣花颜色还不一样，小惊喜！生活中的小确幸！",
    images: [
      "https://img.alicdn.com/imgextra/i1/0/O1CN01YWSpAm1Nq0DF0yz7P_!!0-rate.jpg_40x40.jpg",
      "https://img.alicdn.com/imgextra/i3/0/O1CN01ogmiKc1Nq0DI1s4CM_!!0-rate.jpg_40x40.jpg",
      "https://img.alicdn.com/imgextra/i4/0/O1CN01mO7mQF1Nq0DIZVX8G_!!0-rate.jpg_40x40.jpg"
    ]
  }
};
const srcList = [
  "https://s11.mogucdn.com/mlcdn/c45406/190729_0l0228189805b58i45056ckihc917_1000x1500.jpg_468x468.jpg",
  "https://s11.mogucdn.com/mlcdn/c45406/190729_0l0228189805b58i45056ckihc917_1000x1500.jpg_468x468.jpg",
  "https://s11.mogucdn.com/mlcdn/c45406/190304_298j17ee3efhg82649ef6f1ca049l_1000x1500.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190807_682kbcl4917hah9ehjef06b073489_640x960.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190807_682kbcl4917hah9ehjef06b073489_640x960.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190320_35ggb3f6i4k36l1hf5bgefh6e468i_640x960.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190806_5kj89cck1fj2efb76iad4eb7a2g4d_1000x1500.jpg_468x468.jpg",
  "https://s5.mogucdn.com/mlcdn/c45406/190806_5kj89cck1fj2efb76iad4eb7a2g4d_1000x1500.jpg_468x468.jpg"
];
import {
  getDetailData,
  Goods,
  getDetailRecomment,
  Shop,
  GoodsParam
} from "@/network/detail.js";
import { getRandomNum, debounce } from "@/commons/utils.js";
import { itemListerMixin, backTopMixin } from "@/commons/mixins.js";
import {
  detailNavBar,
  detailSwiper,
  detailBaseInfo,
  detailShopInfo,
  detailGoodsInfo,
  detailParamInfo,
  detailCommentInfo,
  detailBottomBar
} from "./childCmp/index";
import Scroll from "@/components/common/scroll";
import goodsList from "@/components/content/goods";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    detailBottomBar,
    Scroll,
    goodsList
  },
  props: {},
  data() {
    return {
      iid: null,
      //顶部轮播图的数据
      topImages,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recomment: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    };
  },
  mixins: [itemListerMixin, backTopMixin],
  created() {
    //ijw0sr2
    //保存商品id
    this.iid = this.$route.params.iid;
    //根据商品id获取商品的信息
    getDetailData("ijw0sr2").then(res => {
      console.log(res);
      //获取顶部的图片的轮播图 已做
      // console.log(this.topImages);4
      this.goods = new Goods(itemInfo, columns, services);
      this.shop = new Shop(shopInfos);
      this.detailInfo = {
        desc: "新款上市",
        key: "穿着效果",
        list: [
          "https://gjusp.alicdn.com/img/img1583208621327-996.jpg@1000y-0ic_100Q.jpg_Q75.jpg_.webp",
          "https://img.alicdn.com/imgextra/i4/356060330/O1CN01fsp8mo1EJBHolH5LV_!!356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i1/356060330/O1CN018mn9Mo1EJBHwvgOHJ_!!356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i2/356060330/O1CN01qrpoI01EJBHpCoDZF-356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i3/356060330/O1CN013HSeNE1EJBHnV3abn-356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i4/356060330/O1CN01FQpEKR1EJBHrvug8N_!!356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i3/356060330/O1CN018UceCc1EJBHnAJp1m-356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i2/356060330/O1CN01XVo3lt1EJBHrbABJ6-356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i4/356060330/O1CN0186PEWk1EJBHpYHLWG_!!356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i4/356060330/O1CN01l80DqV1EJBHp0JHX9-356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i3/356060330/O1CN01v2dx961EJBHn0T2d6-356060330.jpg_2200x2200Q90s50.jpg_.webp",
          "https://img.alicdn.com/imgextra/i3/356060330/O1CN01fzZn1A1EJBHpzbV62-356060330.jpg_2200x2200Q90s50.jpg_.webp"
        ]
      };
      this.paramInfo = new GoodsParam(info, rule);
      //评论信息
      if (comment.cRate != 0) {
        this.commentInfo = comment.Ilist;
      }
      //推荐数据
      getDetailRecomment().then(res => {
        console.log(res, "000");
        let ram = getRandomNum(15, 25);
        for (let i = 0; i < ram; i++) {
          // console.log(ram);
          let srcNum = getRandomNum(0, 7);
          this.recomment.push({
            title: `列表${i + 1}我测试的数据`,
            src: srcList[srcNum],
            price: ram * 10,
            cfav: getRandomNum(10, 50),
            iid: this.recomment.length + i
          });
        }
        // console.log(this.recomment, "??????");
      });
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);

        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recomment.$el.offsetTop);
      }, 100);
      /**
       * 这个函数就是上面的数据渲染完了（dom），但是不包括图片是否加载完成
       */
      //   this.$nextTick(() => {
      //     this.themeTopYs = [];
      //     this.themeTopYs.push(0);

      //     this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.recomment.$el.offsetTop);
      //   });
      //   console.log(this.themeTopYs);
    });
  },
  mounted() {
    //监听goodsitem中图片是否加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 20);
    // this.itemImgListener = () => {
    //   refresh();
    // };
    // this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  update() {},
  beforeRouteUpdate() {},
  methods: {
    imgLoad() {
      // this.$refs.scroll.refresh();
      this.newRefresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 200);
    },
    contentScroll(position) {
      // console.log(position);
      this.ishowTop = -position.y > 800;
      const positionY = -position.y + 44;
      let length = this.themeTopYs.length;
      // console.log(positionY);
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i) {
          if (
            (i < length - 1 &&
              positionY >= this.themeTopYs[i] &&
              positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i])
          ) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
            // console.log(this.currentIndex);
          }
        }
      }
    },
    addEvent() {
      //商品数据
      const product = {};
      product.images = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //将商品添加到购物车里

      console.log("///////");
    }
  },
  computed: {},
  watch: {},
  destroyed() {
    //离开的时候 取消全局的事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  }
};
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
  .scroll-content {
    height: calc(100% - 93px);
  }
  .detail-nav {
    position: relative;
    z-index: 12;
    background-color: #fff;
  }
}
</style>
