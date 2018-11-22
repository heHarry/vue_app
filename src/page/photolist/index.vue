<template>
    <div class="home-container">
       	<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class='{"mui-control-item":true,"mui-active":item.id==0}' v-for="item in photoCateory" :key="item.id" @click="getimg(item.id)">
							{{item.title}}
						</a>
					
					</div>
				</div>

			</div>
        <!-- 所有图片 -->
  <ul class="photoList">
       <router-link v-for="item in allImg" :key="item.id" tag='li' :to="'/home/infophoto/'+item.id" class="photoImg">
         <img v-lazy="item.img_url">
         <div class="subtitle">
           <span>{{item.title}}</span>
           <span>{{item.zhaiyao}}</span>
         </div>
       </router-link>
</ul>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      photoCateory: [],
      allImg: []
    };
  },
  created() {
    this.getCategory();
    this.getimg(0);
  },
  methods: {
    getCategory() {
      this.$http.get("api/getimgcategory").then(res => {
        console.log(res);
        if (res.body.status === 0) {
          this.photoCateory = res.body.message;
          this.photoCateory.unshift({ title: "全部", id: 0 });
        }
      });
    },
    getimg(id) {
      this.$http.get("api/getimages/" + id).then(res => {
        console.log(res);
        if (res.body.status === 0) {
          this.allImg = res.body.message;
        }
      });
    }
  },
  mouthed() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
};
</script>
<style lang="less">
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img[lazy="error"] {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  margin: auto;
}
.photoList {
  list-style: none;
  padding: 0;
  margin: 5px;
  box-shadow: 0 0 5px #cccccc;
  .photoImg {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .subtitle {
      font-size: 12px;
      position: absolute;
      bottom: 5px; 
      background-color:rgba(0,0,0.3,rgb(88, 84, 84));
      span:first-child{
        display:inline-block;
        text-indent: 2em;
        // color: red;
      }
    }
  }
}
</style>




