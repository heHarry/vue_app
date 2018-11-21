// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 导入vue-resource
import VueResource from "vue-resource"
// 注册vue-resource
Vue.use(VueResource)
// 配置路由地址
Vue.http.options.root = "http://www.lovegf.cn:8899/";


// 导入mint-ui组件
import { Header,Swipe, SwipeItem ,Button } from "mint-ui"
// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 导入mui样式
import "./lib/mui/css/mui.min.css"
// 导入mui字体图标
import "./lib/mui/css/icons-extra.css"
//  引入模板
import moment from "moment"
// 定义全局过滤器
Vue.filter("dateTime",function(datestr,pattern= "YYYY-MM-DD HH:mm:ss"){
  return moment(datestr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 render:h => h(App)
})
