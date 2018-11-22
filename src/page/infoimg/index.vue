 <template>
    <div class="photoimg-container">
        <div class="photoimg-title">{{photoimg.title}}</div>
        <p class="photoimg-subtitle">
            <span>发表时间:{{photoimg.add_time|dateTime}}</span>
            <span>点击:{{photoimg.click}}</span>
        </p>
        <hr/>

        <div class="photoimg-content" v-html="photoimg.content" > </div>
    <!-- 缩略图 -->
      <div class="he">
        <img :src="item.src" v-for="(item,index) in getimg" :key="item.src" @click="$preview.open(index,getimg)" class="preview-img">

      </div>

        <!-- 评论区内容 -->
        <newComment :id="this.id">
            
        </newComment>
    </div>
</template>
<script>
import comment from "../../component/common/comment"
  export default {
    data(){
      return {
        photoimg:[],
        getimg:[],
        id:this.$route.params.id
        
      }
    },
    created(){
      this.getimginfo();
      this.getsmallimg();
    },
    methods:{
      getimginfo(){
        this.$http.get("api/getimageInfo/"+this.id).then(res=>{
        if(res.body.status===0){
          console.log(res)
          this.photoimg=res.body.message[0]
        }
        })
      },
      
      getsmallimg(){
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if(res.body.status===0){
          console.log(res)
          res.body.message.forEach(item=>{
            item.w = 400;
            item.h = 600;
          });
          this.getimg = res.body.message
          var arr=[
            "https://qlogo4.store.qq.com/qzone/2664347902/2664347902/100?1368933116",
            "https://pgdt.gtimg.cn/gdt/0/DAAAaWTACgADSAAYBbqg7UA8HObT8I.jpg/0?ck=44415128babdc163ab3efd0ff09c86f6",
            "http://qlogo2.store.qq.com/qzone/644132586/644132586/50",
            "https://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2331_2018_11/1542791309787_616738.gif",
            "https://qlogo2.store.qq.com/qzone/1429851421/1429851421/50?1534263577"
          ]
          for(var i = 0;this.getimg.length;i++){
            this.getimg[i].src=arr[i]
          }
        }
          
        })
      }
    },
    components:{
           "newComment":comment
       }
  }
   
</script>
<style lang="less">
   .photoimg-container{
       padding:  5px;
       .photoimg-title{
           padding-top: 10px;
           margin-bottom: 10px;
           text-align: center;
           font-size: 16px;
       }
       .photoimg-subtitle{
           font-size: 14px;
           color: rgb(44, 165, 212);
           display: flex;
           justify-content: space-between;
       }
       .preview-img{
         width: 33%;
         height: 180px;

       }
   }
</style>


