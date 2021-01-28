<template>
  <div class="login_box">
    <div class="login-form">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单 -->
      <el-form class="from_box" :model="loginForm" :rules="loginrules" ref="loginForm">
        <el-form-item prop="username">
          <el-input  type="text" placeholder="请输入账号" prefix-icon="el-icon-user-solid" v-model="loginForm.username" ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input onkeyup="value=value.replace(/[^\w./]/ig,'')" placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="but-form">
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button @click="resetFormLogin()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据绑定
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则
      loginrules: {
        username: [
          { required: true, message: '请输入正确的ID', trigger: 'blur' },
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        userpassword: [
          { required: true, message: '请输入正确的密码', trigger: 'blur' },
          { min: 4, max: 18, message: '长度在 4 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置表单数据方法
    resetFormLogin () {
      this.$refs.loginForm.resetFields()
    },
    // 表单登录
    login () {
      this.$refs.loginForm.validate(async (flag) => {
        if (!flag) {
        } else {
          const { data: res } = await this.$http.post('login', this.loginForm)
          console.log(res.meta.status)
          if (res.meta.status !== 200) {
            // 输入错误提醒用户输错扎账号密码
            return this.$message.error('确认账号密码是否正确')
          }
          // 输入正确
          this.$message.success('登录成功')
          // 保存token值
          window.sessionStorage.setItem('token', res.data.token)
          // 登录成功后延迟一秒跳转页面
          setTimeout(() => {
            this.$router.push('/home')
          }, 1000)
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login_box {
  position: relative;
  height: 100%;
  background-color: rgb(75, 77, 211);
  p {
    color: aqua;
  }
}
.login-form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  border-radius: 4px;
  background-color: #fff;
  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 0 10px #dedede;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.from_box {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.el-form {
  position: absolute;
  bottom: 0;
}
.but-form {
  display: flex;
  justify-content: flex-end;
}
</style>
