<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img :src="goodsitem.src" @load="imageLoad" /> -->
    <!-- <img v-lazy="goodsitem.src" @load="imageLoad" /> -->
    <!-- 接口修改后数据改变了 -->
    <img v-lazy="showImg" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsitem",
  components: {},
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    showImg() {
      return this.goodsitem.show
        ? this.goodsitem.show.img
        : this.goodsitem.image;
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
      // console.log('0000');
    },
    itemClick() {
      // console.log('详情页面');
      console.log(this.goodsitem.iid);
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.goods-item {
  margin-top: 3px;
  width: 47%;
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("~assets/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>
