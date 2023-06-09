import Index from '../views/Index.vue'
import VueRouter from "vue-router";
import ShopList from '../views/ShopList.vue'
import Message from '../views/Message.vue';
import Me from '../views/Me.vue';
import Login from '../views/Login.vue'
import Login2 from '../views/Login2.vue'
import ShopDetail from '../views/ShopDetail.vue'
import AddBlog from '../views/AddBlog.vue'
import InfoEdit from '../views/InfoEdit.vue'
import ShopEdit from '../views/ShopEdit.vue'
import OtherInfo from '../views/OtherInfo.vue'

 
// 创建一个路由并暴露出去
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/shop-list',
      name: 'ShopList',
      component: ShopList
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login2',
      name: 'Login2',
      component: Login2
    },
    {
      path: '/shop-detail:id',
      name: 'ShopDetail',
      component: ShopDetail
    },
    {
      path: '/blog-add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/info-edit',
      name: 'InfoEdit',
      component: InfoEdit
    },
    {
      path: '/shop-edit:id',
      name: 'ShopEdit',
      component: ShopEdit
    },
    {
      path: '/other-info:id',
      name: 'OtherInfo',
      component: OtherInfo
    },
  ]
})
