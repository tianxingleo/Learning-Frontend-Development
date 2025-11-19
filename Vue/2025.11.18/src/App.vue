<script setup lang="ts">
import {RouterView,RouterLink} from 'vue-router'

</script>

<template>
  
  <div class="app">
    <h2>vue router test</h2>
    <!-- 导航区 -->
     <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{name:'xinwen'}" active-class="xiaozhupeiqi">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}"active-class="xiaozhupeiqi">关于</RouterLink>
     </div>
     <!-- 暂时区 -->
      <div class="main-content">
        <RouterView></RouterView>
      </div>
  </div>


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
