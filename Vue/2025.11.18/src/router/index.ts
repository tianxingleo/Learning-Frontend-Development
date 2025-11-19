//创建一个路由器并暴露出去
import {createRouter,createWebHistory} from 'vue-router'

//引入组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

import Detail from '@/pages/Detail.vue'

//创建路由器
const router =createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[//路由规则
        {
            name:'zhuye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    name:'das',
                    path:'detail/:id/:title/:content',
                    component:Detail
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        }
    ]
})

//暴露出去
export default router