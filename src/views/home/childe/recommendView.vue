<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommend: {
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
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 14px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
  .recommend-item {
    flex: 1;
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }
  }
}
</style>
