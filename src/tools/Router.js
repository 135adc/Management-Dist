import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import Order from '../components/Order/Order.vue'
import Goods from '../components/goods/Goods.vue'
import AddGood from '../components/goods/AddGood.vue'
import GoodCategory from '../components/goods/GoodCategory.vue'
import ManagerList from '../components/manager/ManagerList.vue'
import ManagerOrder from '../components/manager/ManagerOrder.vue'
import ManagerReqList from '../components/manager/ManagerReqList.vue'
import TradeInfo from '../components/financial/TradeInfo.vue'
import TradeList from '../components/financial/TradeList.vue'
import DataCom from '../components/financial/DataCom.vue'

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
                },
                {
                    path:'goods/:type',   //0是普通商品,1是秒杀商品,2是今日推荐
                    component:Goods,
                    name:"Goods"

                },
                {
                    path:'addGood/:type',   //0是普通商品,1是秒杀商品,2是今日推荐
                    component:AddGood,
                    name:"AddGood"

                },
                {
                    path:'category',
                    component:GoodCategory,
                    name:"GoodCategory"
                },
                {
                    path:'ownerlist',
                    component:ManagerList,
                    name:"ManagerList"
                },
                {
                    path:'ownerreq',
                    component:ManagerReqList,
                    name:"ManagerReqList"
                },
                {
                    path:'ownerorder',
                    component:ManagerOrder,
                    name:"ManagerOrder"
                },
                {
                    path:'tradeinfo',
                    component:TradeInfo,
                    name:'TradeInfo'
                },
                {
                    path:'tradelist',
                    component:TradeList,
                    name:'TradeList'
                },
                {
                    path:'data',
                    component:DataCom,
                    name:'DataCom'
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