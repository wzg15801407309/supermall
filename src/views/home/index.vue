<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="nav-center">购物街</div>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
  name: "home",
  components: { navBar },
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
#home {
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
}
</style>
