import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import Order from '../components/Order/Order.vue'
import Store from "./Storage";

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: Login,
            name: "login"
        },
        {
            path: '/home',
            component:Home,
            name:"home",
            children:[     //字路由
                {
                    path:'order/:type',  //type=0为普通订单,type=1为秒杀订单
                    component:Order,
                    name:"Order"
                }
            ],
            redirect:'/home/order/0'  //重定向,登录到系统主页时,默认定向到普通订单页面

        }
    ]
})

//路由前置守卫
Router.beforeEach((from)=>{
    // console.log(from);
    let isLogin=Store.getters.isLogin
    //isLogin:state.userName.length>0是否为真
    if(isLogin||from.name=='login'){
        return true
    }else{
        return {name:'login'}
    }
})

export default Router