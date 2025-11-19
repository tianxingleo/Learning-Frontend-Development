import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//引入路由器
import router from './router'
//创建应用
const app= createApp(App)

//使用路由
app.use(router)
//挂载
app.mount('#app')
