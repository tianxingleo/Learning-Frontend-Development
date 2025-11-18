

<template>
    <!-- html -->
     <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点位+1</button>
        <hr>   </hr>
        <img v-for="(dog,index) in doglist" :src="dog" :key="index">
        <button @click="getDog">111</button>
     </div>
</template>

<!-- <script lang="ts">
//js/ts
    export default{
        name:'Person',
        
    }
    
</script> -->

<script lang="ts" setup name="Preson">
    import useSum from '@/hooks/useSum'
    import useSDog from '@/hooks/useDog'
import useDog from '@/hooks/useDog'

    const {sum,add,bigSum}=useSum()
    const {doglist,getDog}=useDog()

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
    img{
        width:100px;
    }
</style>