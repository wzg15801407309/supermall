<template>
    <tab-bar>
        <tab-bar-item path='/home'>
          <img slot="item-icon" src="@/assets/img/tabbar/navbar_zhuye.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/navbar_zhuye_fill.svg" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/category'>
          <img slot="item-icon" src="@/assets/img/tabbar/act_liebiaozongxiang.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/act_liebiaohengxiang_fill.svg" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>      
        <tab-bar-item path='/cart'>
          <img slot="item-icon" src="@/assets/img/tabbar/show_goumai.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/show_goumai_fill.svg" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>      
        <tab-bar-item path='/profile'>
          <img slot="item-icon" src="@/assets/img/tabbar/navbar_wode.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/navbar_wode_fill.svg" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
</template>
<script>
import TabBar from '@/components/common/TabBar'
import TabBarItem from '@/components/common/TabBar/TabBarItem'
export default {
    name: 'mainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
}
</script>