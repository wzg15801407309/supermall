<template>
  <div id="app">
    <!-- 排除详情页  详情页每次进入都要是新的 exclude="Detail"-->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar";
export default {
  name: "app",
  components: {
    mainTabBar
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
