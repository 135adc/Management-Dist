<template>
 <div id="container">
        <div id="title">
            <h1>电商后台管理系统</h1>
        </div>
        <div class="input">
            <el-input v-model="name" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </div>
        <div class="input">
            <el-input v-model="password" prefix-icon="el-icon-lock" placeholder="请输入密码" auto-complete="new-password" show-password></el-input>
        </div>
        <div class="input">
            <el-button @click="login" style="width:300px" type="primary" :disabled="disabled">登录</el-button>
        </div>
    </div>
</template>

<script>
    import Storage from '../../tools/Storage'
    //消息提示
    import { ElMessage } from 'element-plus';
export default {
    name:'Login',
    data() {
        return {
            name:"",
            password:""
        }
    },
    mounted () {
        this.name = ""
        this.password = ""
    },
    computed: {
        disabled(){
            return this.name.length == 0 || this.password.length == 0;
            
        }
    },
    methods: {
        login() {
            //
            Storage.commit("registUserInfo",{
                name:this.name,
                password:this.password
            })
            ElMessage({
                message:'登录成功', 
                type:'success', 
                duration:1500
            })
            setTimeout(() => {
                this.$router.push({name:"home"})
            }, 1500);
        }
    }
}
</script>

<style scoped>

#container {
    margin: 100px auto;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    width: 500px;
    height: 300px;
    border-radius: 15px;
  
}

#title {
    text-align: center;
    color: azure;
}

.input {
    margin: 20px auto;
    width: 300px;
}
</style>