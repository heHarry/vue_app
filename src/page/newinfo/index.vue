 <template>
    <div class="newinfo-container">
        <div class="newinfo-title">{{newinfo.title}}</div>
        <p class="newinfo-subtitle">
            <span>发表时间:{{newinfo.add_time|dateTime}}</span>
            <span>点击:{{newinfo.click}}</span>
        </p>
        <div class="newinfo-content" v-html="newinfo.content"> </div>
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
               id: this.$route.params.id,
               newinfo:{}
           }
       },
       created(){
           this.gtenewinfo()
       },
       methods:{
           gtenewinfo(){
               this.$http.get("api/getnew/"+this.id).then(res=>{
                   console.log(res)
                   if(res.body.status ===0){
                       this.newinfo=res.body.message[0]
                    //   this.newsinfo = res.body.message[0]
                       console.log(this.newinfo)
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
   .newinfo-container{
       padding:  5px;
       .newinfo-title{
           padding-top: 10px;
           margin-bottom: 10px;
           text-align: center;
           font-size: 16px;
       }
       .newinfo-subtitle{
           font-size: 14px;
           color: rgb(44, 165, 212);
           display: flex;
           justify-content: space-between;
       }
   }
</style>


