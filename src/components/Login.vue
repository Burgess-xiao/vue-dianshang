<template>
  <div class="login">
    <div class="login_box">
      <!-- 头像 -->
      <img src="../assets/d.png" alt class="login_avatar" />
      <!-- 登录表单区 -->
      <el-form label-width="80px" class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!-- 用户名 -->
        <el-form-item label="用户名：" prop="username">
          <el-input prefix-icon="iconfont icon-touxiang" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码框 -->
        <el-form-item label="密码：" prop="password">
          <el-input type="password" prefix-icon="iconfont icon-icon_suo-" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="loginFormCZ">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 数据对象，提交表单用到，与form动态绑定
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 验证规则对象 参数看官网api
      loginFormRules: {
        // 验证用户名
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginFormCZ () {
      // 指向Login组件实例  然后调用官网form表单api里的resetFields方法重置表单
      // console.log(this)
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      // valide就是第一个参数，布尔值
      this.$refs.loginFormRef.validate(async valide => {
        // console.log(valide)
        // 如果为false就return，true就发送请求
        if (!valide) return

        // const result = await this.$http.post('login', this.loginForm)
        // 将result里面的data解构给res，通过res就能直接拿到数据
        // const { data: res } = await this.$http.post('login', {
        //   username: this.username,
        //   password: this.password
        // })

        // loginForm是需要传递参数的数据对象，所以传参时可以直接将这个数据对象传递过去
        const { data: res } = await this.$http.post('login', this.loginForm)
        // 如果不加async，返回的是promise对象，使用async简化promise，更加直观
        console.log(res)
        // status为200，登录成功，否则失败  调用message这个组件，并在全局挂载，就能通过this访问
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
        window.sessionStorage.setItem('token', res.data.token)
        // 然后通过编程式导航跳到后台主页home
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #86c0ed;
  position: relative;
}
.login_box {
  width: 500px;
  height: 350px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  // box-shadow: 0 0 20px #626372;
}
.login_avatar {
  width: 200px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -60px;
  transform: translate(-50%);
  box-shadow: 0 0 10px #626372;
}
.login_form {
  width: 350px;
  position: absolute;
  left: 50%;
  top: 115px;
  transform: translateX(-50%);
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
