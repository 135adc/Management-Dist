import { createApp } from 'vue'
import Router from './tools/Router'
import Store from './tools/Storage'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
const app=createApp(App)
app.use(Router)
app.use(Store)
app.use(ElementPlus)
app.mount('#app')
