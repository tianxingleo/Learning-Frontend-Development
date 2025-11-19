<template>
  <div class="news">
    <ul>
      <li v-for="news in NewsList" :key="news.id">
        
        <button @click="shouNewsDetail(news)">查看新闻</button>

        <!-- <RouterLink to="/news/detail/哈哈/你好/嘿嘿">{{ news.title }}</RouterLink> -->
        <RouterLink 
        :to="{
          name:'das',
          query:{
            id:news.id,
            title:news.title,
            content:news.content
          }


        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>

  <div class="news-content">
    <RouterView></RouterView>
  </div>
  </div>
</template>

<script setup lang="ts" name="News">
// 脚本内容 (此处根据截图是空的)
  import {ref,reactive} from 'vue'
import { RouterLink ,useRouter} from 'vue-router';

  const NewsList =reactive([
    {id:'asfdtrfay01',title:'十种抗癌植物',content:'xilanhua'},
    {id:'asfdtrfay02',title:'how to yiyebaofu',content:'xue it'}
  ])

  const router=useRouter()
  interface NewsInter{
    id:string,
    title:string,
    content:string
  }
  function shouNewsDetail(news:any){
    router.push(
      {
          name:'das',
          query:{
            id:news.id,
            title:news.title,
            content:news.content
          }}
    )
  }
</script>

<style scoped>
/* 样式内容 (此处根据截图是空的) */
</style>