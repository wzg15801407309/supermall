import Vue from 'vue'
import VueRouter from 'vue-router'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const Home=()=>import('@/views/home')
const Cart=()=>import('@/views/cart')
const Category=()=>import('@/views/category')
const Profile=()=>import('@/views/profile')

Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    }
];

const router =new VueRouter({
    routes,
    mode:'history'
})
export default router;