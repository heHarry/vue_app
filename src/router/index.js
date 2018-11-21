import Vue from 'vue'
import Router from 'vue-router'
// 引入主页组件
import homeComponent from "../page/home"
import memberComponent from "../page/member/index.vue"
import searchComponent from "../page/search/index.vue"
import shopcarComponent from "../page/shopcar/index.vue"
import newListComponent from "../page/newList"
import newinfoComponent from "../page/newinfo"

Vue.use(Router)


export default new Router({
  routes: [{path:"/",redirect:"/home"},
  {path:"/home",component:homeComponent},
  {path:"/member",component:memberComponent},
  {path:"/search",component:searchComponent},
  {path:"/shopcar",component:shopcarComponent},
  {path:"/home/newlist",component:newListComponent},
  {path:"/home/newinfo/:id",component:newinfoComponent}],
  linkActiveClass:"mui-active"
})
