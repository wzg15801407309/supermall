<template>
    <div class="tab-bar-item" @click='itemClick'>
        <div v-if='!isActive'>
            <slot name='item-icon'></slot>
        </div>
        <div v-else>
            <slot name='item-icon-active'></slot>
        </div>
        <div :class='{ active: isActive }'>
            <slot name='item-text'> </slot>
        </div>
    </div>
</template>

<script>
export default {
    props:['path'],
    data(){
        return{
            // isActive:false
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        }
       
    },
    methods:{
        itemClick(){
            // console.log(this.path)
            this.$router.replace(this.path);
        }
    }
}
</script>

<style lang="less" scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
  img{
    width: 20px;
    height: 20px;
    margin-top: 4px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
}
.active{
    color:#333;
    font-weight: bold;
}
</style>