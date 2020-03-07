<template>
  <div id="detail">
    <detailNavBar class="detail-nav" />
    <Scroll class="scroll-content" ref="scroll">
      <detailSwiper :topImages="topImages" />
      <detailBaseInfo :goods="goods" />
      <detailShopInfo :shop="shop" />
      <detailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detailParamInfo :paramInfo="paramInfo" />
    </Scroll>
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
import { getDetailData, Goods, Shop, GoodsParam } from "@/network/detail.js";
import {
  detailNavBar,
  detailSwiper,
  detailBaseInfo,
  detailShopInfo,
  detailGoodsInfo,
  detailParamInfo
} from "./childCmp/index";
import Scroll from "@/components/common/scroll";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    Scroll
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
      paramInfo: {}
    };
  },
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
    });
  },
  mounted() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    }
  },
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
  .scroll-content {
    height: calc(100% - 44px);
  }
  .detail-nav {
    position: relative;
    z-index: 12;
    background-color: #fff;
  }
}
</style>
