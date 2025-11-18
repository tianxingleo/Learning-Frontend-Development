

<template>
    <!-- html -->
     <div class="person">
        <li v-for="abc in list" :key="abc.id">{{abc.name}}--{{ abc.age }}</li>
     </div>
</template>

<!-- <script lang="ts">
//js/ts
    export default{
        name:'Person',
        
    }
    
</script> -->

<script lang="ts" setup name="Person">
    import {type PersonInter,type Persons} from '@/types'
    import { defineProps } from 'vue';

    defineProps(['a','list'])
    //defineProps<{list:Persons}>()
    //defineProps<{list?:Persons}>(){list:()=>[]}


    //let person:PersonInter = {id:'asyud7asfd01',name:'zhangsan',age:60}
    let personlist:Persons = [
        {id:'asyud7asfd01',name:'zhangsan',age:60},
        {id:'asyud7asfd02',name:'zhangsan1',age:6},
        {id:'asyud7asfd03',name:'zhangsan2',age:600}
    ]

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