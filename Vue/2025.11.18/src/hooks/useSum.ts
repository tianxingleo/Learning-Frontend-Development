import {type PersonInter,type Persons} from '@/types'
import { computed,withDefaults,ref,reactive,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
import axios from 'axios';
export default function(){

    let sum = ref(0)
    let bigSum=computed(()=>{
        return sum.value*10
    })
    // let doglist = reactive([
    //     'https://images.dog.ceo//breeds//pembroke//n02113023_1785.jpg'
    // ])
    function add() {
        sum.value += 1
    }
    // async function getDog() {
    //     try {
    //         let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    //         doglist.push(result.data.message)
    //     } catch (error) {
    //         alert(error)
    //     }
    return {sum,add,bigSum}
    

}
// onBeforeMount(()=>{})//挂载前调用里面的函数
// onMounted(()=>{})
// onBeforeUpdate(()=>{})//更新前
// onUpdated(()=>{})//更新完毕
// onBeforeUnmount(()=>{})
// onUnmounted(()=>{})
