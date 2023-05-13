1.创建项目,安装vue-router,vuex模块.

# npm install vue-router@4 --save
# npm install vuex@next --save


2.在components文件夹下创建home和login文件夹,并分别创建Home.vue和Login.vue文件.

3.由于此后台系统的任何功能都需要登录后操作,因此要使用路由进行全局的页面管理,每次跳转都要核验
  登录状态,如为未登录,则要页面重定向到登录页面.在src下新建一个tools的文件夹,并创建Storage.js
  文件.
  #
  import { createStore } from "vuex";

const Store = createStore({
    //共享的数据
    state() {
        return {
            userName: "",
            userPassword: ""
        }
    },
    //相当于计算属性
    getters: {
        isLogin: (state) => {
            return state.userName.length > 0
        }
    },
})
  #

4.模拟登录后,我们将用户输入的用户名和密码进行存储,当用户名存在时,默认用户完成登录.

5.在tools文件夹新建一个Router.js的文件,用来配置路由.
#
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
#

6.先展示配置主页和登录的页面的路由,并使用全局的前置守卫进行页面跳转的登录状态的校验

7.在App.vue中添加渲染出口,并且在main.js中导入相关模块

8.安装element-plusUI库,并引入ccs文件

# npm install element-plus@2.3.1 --save

9.在Storage.js在添加两个修改状态的方法,后面通过store对象提交clearUserInfo,regisUserInfo
来模拟用户的登录和注销
#
mutations: {
        //清空用户信息
        clearUserInfo(state) {
            state.userName = ''
            state.userPassword = ''
        },
        registUserInfo(state, { name, password }) {
            //注册用户信息
            state.userName = name
            state.userPassword = password
        }
    }
#
10.完成Login页的搭建和布局