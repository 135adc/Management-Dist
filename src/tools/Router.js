import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
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
            name:"home"

        }
    ]
})

Router.beforeEach((from)=>{
    console.log(from);
    let isLogin=Store.getters.isLogin
    //isLogin:state.userName.length>0是否为真
    if(isLogin||from.name=='login'){
        return true
    }else{
        return {name:'login'}
    }
})

export default Router