import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

// export const useTalkStore = defineStore('talk', {
//     actions:{
//         async getATalk(){
//             try {
//                 // 原 API (api.uomg.com) 证书已过期，更换为韩小韩 API
//                 let result = await axios.get('https://api.vvhan.com/api/love');
//                 // 构造对象，使用时间戳作为 ID
//                 let obj = { id: nanoid(), title: result.data.content }
//                 // 添加到数组头部
//                 this.talkList.unshift(obj);
//             } catch (error) {
//                 console.error('获取失败', error);
//                 alert('获取情话失败，请检查网络');
//             }
//         }
//     },
//     //真正存储数据的地方
//     state() {
//         return {
//             talkList: localStorage.getItem('talkList') ? JSON.parse(localStorage.getItem('talkList') || '[]') : []  
//         }
//     }
// })
import { reactive } from 'vue'
export const useTalkStore = defineStore('talk', () => {
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') || '[]'))

    async function getATalk() {
        try {
            // 原 API (api.uomg.com) 证书已过期，更换为韩小韩 API
            let result = await axios.get('https://api.vvhan.com/api/love');
            // 构造对象，使用时间戳作为 ID
            let obj = { id: nanoid(), title: result.data.content }
            // 添加到数组头部
            talkList.unshift(obj);
        } catch (error) {
            console.error('获取失败', error);
            alert('获取情话失败，请检查网络');
        }
    }

    // //真正存储数据的地方
    // state() {
    //     return {
    //         talkList: localStorage.getItem('talkList') ? JSON.parse(localStorage.getItem('talkList') || '[]') : []  
    //     }
    // }
    return { talkList, getATalk }
})
