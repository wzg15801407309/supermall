<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image"  @load="imageLoad"/>
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "homeswiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      //只要有一张图片加载完成就能获取到高度
      isLoad:false
    };
  },
  watch: {},
  computed: {},
  methods: {
    imageLoad(){
      if(!this.isLoad)
      {
        this.$emit('swiperImageLoad');
        this.isLoad=true;
      }

    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped></style>
