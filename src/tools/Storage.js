
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
    mutations: {
        //清空用户信息
        clearUserInfo(state) {
            state.userName = ''
            state.userPassword = ''
        },
        registUserInfo(state, { name, password }) {
            //注册用户信息
            //存储用户登录信息
            state.userName = name
            state.userPassword = password
            // console.log(name,password);
        }
    }
})
export default Store