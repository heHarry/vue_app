<template>
    <div class="comment-container">
        <h1>发表评论</h1>
        <hr/>
        <textarea placeholder="120字不能再多了" maxlength="120" class="wordText" v-model="msg"></textarea>
        <mt-button  type="primary" size="large" @click="publishComment">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item,i) in comments" :key="item.add_time" >
                <div class="commnet-title">
                   <div class="ct-title">
                       第{{ i+1 }}楼&nbsp;&nbsp;
                   用户:{{item.user_name}}&nbsp;&nbsp;
                   发表时间:{{item.add_time|dateTime}}
                </div>
                <div class="comment-conent">
                    {{item.content==='undefined'?'比较懒':item.content}}
                    </div>
                </div>
            </div>
        </div>
        <mt-button  type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
            msg:""
        }
    },
    created(){
        this.getcomment()
    },
    methods:{
        getcomment(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(res=>{
                
                if(res.body.status===0){
                    this.comments=this.comments.concat(res.body.message);
                    console.log(res)
                }else{
                    Toast("请重新加载评论")
                }
            })
        },
        // 加载评论
        getmore(){
            this.pageIndex++;
            this.getcomment()
        },
        // 发表评论
        publishComment(){
            if(this.msg.length===0) return Toast('输入内容为空')
            this.$http.post("api/postcomment/"+ this.id,{content:this.msg.trim()}).then(res=>{
                if(res.body.status===0){
                    console.log(res)
                    var mt = {
                        user_name:"匿名用户",
                        add_time:Date.now(),
                        content:this.msg.trim()
                    };
                    this.comments.unshift(mt);
                    // window.reload()
                //   this.getcomment();
                  this.msg=""
                }
            })
        }
    },
    props:['id']
}
</script>

<style lang="less">
.comment-container{
    .wordText{
        height: 150px;
    }
            .comment-list{
                .comment-item{
                    .ct-title{
                        text-align: center;
                    font-size: 12px;
                        line-height: 40px;
                        background-color: #ccc;
                    }
                    .comment-conent{
                        line-height: 30px;
                        text-indent: 2em;
                    }
                }
            }
}
</style>
