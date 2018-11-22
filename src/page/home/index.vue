<template>
    <div class="home-container">
        <mt-swipe :auto="4000" class="binner-container">
        <mt-swipe-item v-for="(item) in bannerList" :key="item.img" >
          <a :href="item.url">
            <img :src="item.img">
          </a>
        </mt-swipe-item>
</mt-swipe>
 <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul> 
    </div>
</template>

<script>
import { Toast } from "mint-ui"
  export default {
    data(){
      return{
        bannerList:[]
      };
    },
    created(){
      this.getBannerData()
    },

    methods:{
      getBannerData(){
        this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(res=>{
          console.log(res.body)
          if(res.body.status==0){
            this.bannerList = res.body.message
          }else{
            Toast("数据加载失败")
          }
        })
      }
    }

  }

</script>
<style lang="less">
.home-container {
  .binner-container {
    height: 200px;
.mint-swipe-item{
 
  &:nth-child(1){
    background-color: skyblue;
  }
   &:nth-child(2){
    background-color: yellow;
  }
   &:nth-child(3){
    background-color: red;
  }
  a{
    display: block;
    width: 100%;
    height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
  }
}
  }
  // 列表样式
   .mui-grid-view{
      background-color: #fff;
      border:none;
      .mui-table-view-cell{
      border:none;
        img{
        width: 60px;
        height: 60px;
     }
      .mui-media-body{
        font-size: 13px;
      }
      }
    
  }
 
}

</style>




