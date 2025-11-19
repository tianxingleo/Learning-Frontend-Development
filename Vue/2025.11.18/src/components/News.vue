<template>
  <div class="news">
    <ul>
      <li v-for="news in NewsList" :key="news.id">
        
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->

        <RouterLink 
        :to="{
          path:'/news/detail',
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

  const NewsList =reactive([
    {id:'asfdtrfay01',title:'十种抗癌植物',content:'xilanhua'},
    {id:'asfdtrfay02',title:'how to yiyebaofu',content:'xue it'}
  ])
</script>

<style scoped>
/* 样式内容 (此处根据截图是空的) */
</style>