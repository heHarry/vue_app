<template>
    <div class="newList-container">
       <ul class="mui-table-view" v-for='item in newlist' :key="item.id" >
				<li class="mui-table-view-cell mui-media" >
					<router-link :to="'/home/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time | dateTime }}</span>
                                <span>点击:{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			

			</ul>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
    export default {
        data(){
            return {
                newlist:[]
            }      
              },
        created(){
        this.getNewlist()
        },
        methods:{
            getNewlist(){
                this.$http.get("api/getnewslist").then(res=>{
                    // console.log(res)
                    if(res.body.status===0){
                        this.newlist = res.body.message
                    }else{
                        Toast("哎哟不错 加油")
                    }
                })
            }
        }
    }
</script>
<style lang="less">
    .newList-container{
        .mui-table-view{
            .mui-table-view-cell{
                h1{
                    font-size: 16px;
                }
                .mui-ellipsis{
                    font-size: 13px;
                    color: rgb(44, 165, 212);
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>


