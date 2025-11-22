import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    actions:{
        increment(value:number){
            this.sum += value
        }
    },
    //真正存储数据的地方
    state() {
        return {
            sum: 6
        }
    },
    getters:{
        bigSum(state){
            return state.sum * 100
        },
        bigSum2:state=> state.sum * 100
        // upperSchool(state){

        // }
    }
})
