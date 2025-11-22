import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


//创建应用
const app = createApp(App)

//引入pinia
import { createPinia } from 'pinia'
//第二步，创建pinia
const pinia = createPinia()
//安装pinia
app.use(pinia)



//挂载
app.mount('#app')
