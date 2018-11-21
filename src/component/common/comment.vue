<template>
    <div class="comment-container">
        <h1>发表评论</h1>
        <hr/>
        <textarea placeholder="120字不能再多了" maxlength="120" class="wordText"></textarea>
        <mt-button  type="primary" size="large">发表评论</mt-button>
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
        <mt-button  type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            pageIndex:1,
            comments:[]
        }
    },
    created(){
        this.getcomment()
    },
    methods:{
        getcomment(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(res=>{
                if(res.body.status===0){
                    this.comments=res.body.message;
                    console.log(res)
                }else{
                    Toast("请重新加载评论")
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
