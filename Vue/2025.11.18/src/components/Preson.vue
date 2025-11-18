

<template>
    <!-- html -->
     <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点位+1</button>
     </div>
</template>

<!-- <script lang="ts">
//js/ts
    export default{
        name:'Person',
        
    }
    
</script> -->

<script lang="ts" setup name="Preson">
    import {type PersonInter,type Persons} from '@/types'
    import { s ,withDefaults,ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';

    let sum=ref(0)
    function add(){
        sum.value += 1
    }

    onBeforeMount(()=>{})//挂载前调用里面的函数
    onMounted(()=>{})
    onBeforeUpdate(()=>{})//更新前
    onUpdated(()=>{})//更新完毕
    onBeforeUnmount(()=>{})
    onUnmounted(()=>{})

</script>

<style scoped>
    /* 样式 */
    .person{
        background-color: #66ccff;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px; /* 您可以随意调整 20px 这个值 */
    }
    button {
        margin: 0 5px;
    }
</style>