<template>
  <div class="detailGoodsInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <!-- <div class="info-key">{{ detailInfo.key }}</div> -->
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  components: {},
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  watch: {
    detailInfo() {
      // this.imagesLength = this.detailInfo.list.length;
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  },
  computed: {},
  methods: {
    imgLoad() {
      if (++this.counter == this.imagesLength) {
        this.$emit("imgLoad");
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.detailGoodsInfo {
  padding-top: 20px;
  border-bottom: 5px solid #f2f5f8;
  .info-desc {
    padding: 0 15px;
    .start {
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      position: relative;
      float: left;
      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
      }
    }
    .end {
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      position: relative;
      float: right;
      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
      }
      &::after {
        right: 0;
      }
    }
    .desc {
      padding: 15px 0;
      font-size: 14px;
    }
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list {
    img {
      width: 100%;
    }
  }
}
</style>
