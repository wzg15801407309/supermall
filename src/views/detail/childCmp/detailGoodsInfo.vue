<template>
  <div class="detailGoodsInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <!-- <div class="desc">{{ detailInfo.desc }}</div> -->
      <div class="end"></div>
    </div>
    <!-- <div class="info-key">{{ detailInfo.key }}</div> -->
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.list"
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
      this.imagesLength = this.detailInfo.list.length;
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
  padding-top: 5px;
  border-bottom: 5px solid #f2f5f8;
  .info-list {
    img {
      width: 100%;
    }
  }
}
</style>
