<template>
  <div class="userInfo">
    姓名：<input v-model="userName" /><br />
    薪水：<input type="number" v-model="salary" /> 当前的薪水值: {{ salary }}<br />
    <button @click="addSalary">提交</button>
  </div>
</template>

<script setup lang="ts">
import MySalary from '@/components/MySalary'
let {userName,salary,addSalary}=MySalary()
</script>

<style scoped>
.userInfo {
  background-color: aqua;
  width: 80%;
  padding: 20px;
  border-radius: 5px;
}
/* ... 样式代码省略 ... */
</style>
