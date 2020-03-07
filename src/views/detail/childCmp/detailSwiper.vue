<template>
  <Swiper class="detail-swiper">
    <SwiperItem v-for="(item, index) in topImages" :key="index">
      <!-- <img :src="item.image" @load="imageLoad" /> -->
      <img :src="item" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  name: "detailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { Swiper, SwiperItem },
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
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
