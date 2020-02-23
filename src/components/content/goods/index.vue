<template>
  <div class="goods">
    <goods-item v-for='(item,index) in goodsList'
                :key="index"
                :goodsitem='item' />
  </div>
</template>

<script>
import goodsItem from "./goodsItem.vue";
export default {
  components: { goodsItem },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
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
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>