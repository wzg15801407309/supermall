<template>
  <div class="backTop">
    <img src="@/assets/common/up.png">
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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
.backTop {
  background-color: #fff;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 35px;
  box-shadow: 0px 2px 2px rgba(100, 100, 100, 0.2);

  position: fixed;
  bottom: 60px;
  right: 7px;
  img {
    vertical-align: middle;
    width: 80%;
    height: 80%;
  }
}
</style>