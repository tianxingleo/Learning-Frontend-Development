import {type PersonInter,type Persons} from '@/types'
import { withDefaults,ref,reactive,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
import axios from 'axios';

// let sum=ref(0)
export default function (){
    let doglist=reactive([
        'https://images.dog.ceo//breeds//pembroke//n02113023_1785.jpg'
    ])
    // function add(){
    //     sum.value += 1
    // }
    async function getDog(){
        try{
            let result=await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            doglist.push(result.data.message)
        }catch(error){
            alert (error)
        }
        
    }

    //向外部提供
    return {doglist,getDog}
}

// onBeforeMount(()=>{})//挂载前调用里面的函数
// onMounted(()=>{})
// onBeforeUpdate(()=>{})//更新前
// onUpdated(()=>{})//更新完毕
// onBeforeUnmount(()=>{})
// onUnmounted(()=>{})
