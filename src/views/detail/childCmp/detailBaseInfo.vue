<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPreice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.disCount" class="discount">{{ goods.disCount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.columns[2] }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>
          {{ goods.services[index - 1].name }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  components: {},
  props: {
    goods: {
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
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  .info-title {
    color: #222;
  }
  .info-price {
    margin-top: 10px;
    .n-price {
      font-size: 24px;
      color: var(--color-high-text);
      margin-left: 5px;
      // text-decoration: line-through;
    }
    .o-price {
      font-size: 12px;
      margin-left: 5px;
      text-decoration: line-through;
    }
    .discount {
      font-size: 12px;
      padding: 2px 5px;
      color: #fff;
      background-color: var(--color-high-text);
      border-radius: 8px;
      margin-left: 5px;

      //让元素上浮一些 使用相对定位即可
      position: relative;
      top: -8px;
    }
  }
  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    .info-service-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      img {
        width: 12px;
        height: 12px;
      }
      .span {
        font-size: 13px;
        color: #333;
      }
    }
  }
}
</style>
