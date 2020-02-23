<template>
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "navbar"
  };

</script>
<style lang="less" scoped>
  .nav-bar {
    display: flex;
    /* 使用这个设置高度，他可以直接撑起高度切文字还能居中显示 */
    line-height: 44px;
    height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.05);
    text-align: center;

    .nav-left,
    .nav-right {
      width: 60px;
    }

    .nav-center {
      flex: 1;
    }
  }

</style>
