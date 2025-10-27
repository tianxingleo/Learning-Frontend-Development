<template>
  <div>
    姓名：<input v-model="username">{{ username }}<br>
    薪水：<input type="number" v-model="sallary">{{ sallary }}<br/>
    <button v-on:click="addsalary">提交</button>
  </div>

</template>


<script lang="ts">
  export default{
    data(){
      return{
        username:'roy',
        sallary:15000
      }
    },
    methods:{
      addsalary(){
        this.sallary+=1000
      }
    }
  }
</script>



<style scoped>

</style>
