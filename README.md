# 5.13
1.创建项目,安装vue-router,vuex模块.
 npm install vue-router@4 --save  
 npm install vuex@next --save

2.在components文件夹下创建home和login文件夹,并分别创建Home.vue和Login.vue文件.

3.由于此后台系统的任何功能都需要登录后操作,因此要使用路由进行全局的页面管理,每次跳转都要核验登录状态,如为未登录,则要页面重定向到登录页面.在src下新建一个tools的文件夹,并创建Storage.js文件.

4.模拟登录后,我们将用户输入的用户名和密码进行存储,当用户名存在时,默认用户完成登录.

5.在tools文件夹新建一个Router.js的文件,用来配置路由.

6.先展示配置主页和登录的页面的路由,并使用全局的前置守卫进行页面跳转的登录状态的校验

7.在App.vue中添加渲染出口,并且在main.js中导入相关模块

8.安装element-plusUI库,并引入ccs文件
npm install element-plus@2.3.1 --save

9.在Storage.js在添加两个修改状态的方法,后面通过store对象提交clearUserInfo,regisUserInfo来模拟用户的登录和注销

10.完成Login页的搭建和布局


# 5.15
修改Router.js,为home配置子路由 order/type,type=0&&1.
redirect:"home/order/0"重定向到普通订单页面.

完成home页面布局,一个侧边菜单栏和主功能模块,以及一个公用的头视图.

为保证导航栏选择的栏目和当前页面相匹配,我们将导航的itme的index设置为路由的path
,并将el-menu组件的default-active属性绑定到当前路由的path上.自动实现了联动效果,
新建Order.vue.

# 5.16
订单模块的开发,安装mockjs模拟数据




# 7.5

### 订单导出
---
const Tools = {
    // 导出文件
    exportJson(name, data) {
        var blob = new Blob([data]); //  创建 blob 对象
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob); //  创建一个 URL 对象并传给 a 的 href
        link.download = name; //  设置下载的默认文件名
        link.click(); 
    }
}
export default Tools;


这段代码定义了一个名为 Tools 的对象，其中包含了一个 exportJson 方法，用于导出文件。具体步骤如下：

创建一个 Blob 对象，将传入的 data 参数作为数据传递给 Blob 构造函数。这将创建一个包含给定数据的二进制大对象。
创建一个 <a> 元素，并将 Blob 对象的 URL（通过 URL.createObjectURL(blob)）赋值给 href 属性。这样可以在浏览器中生成一个可下载的链接。
设置下载的默认文件名为 name 参数的值，通过将其赋值给 <a> 元素的 download 属性。
模拟用户点击 <a> 元素，触发文件下载。
这个 exportJson 方法可以用于将 JSON 数据导出为文件。调用方式为 Tools.exportJson(name, data)，其中 name 是要设置的文件名，data 是要导出的 JSON 数据。

需要注意的是，这段代码使用了 URL.createObjectURL() 方法来创建一个临时的 URL 对象，用于表示 Blob 对象的地址。在使用完毕后，为了释放内存，你应该调用 URL.revokeObjectURL(url) 来撤销该 URL 对象。这可以在文件下载完成后的适当时机执行。

另外，这段代码似乎是为浏览器环境下编写的，因为它依赖于 document.createElement 和 link.click() 方法。如果你在其他环境下使用，可能需要对代码进行适当的修改或添加相关环境的支持。

---


### 点击按钮,提示信息

---
<el-btn @click=requestData></el-btn>
requestData() {
          this.$message({
              type:'success',
              message:'筛选请求参数：' + JSON.stringify(this.queryParam)
          })
      },

---


# 商品管理模块的开发
