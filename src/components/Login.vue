<template>
    <div>
      <header-vue v-bind:title="title"></header-vue>
      <div class="loginBody">
        <div class="mui-input-group" id="loginForm">
          <div class="mui-input-row">
            <input name="username" v-model="username" type="text" class="mui-input-clear" placeholder="用户名/邮箱/手机号">
          </div>
          <div class="mui-input-row">
            <input name="password" v-model="password" type="password" class="mui-input-password" placeholder="请输入密码">
            <span class="mui-icon mui-icon-eye"></span>
          </div>
          <div class="mui-button-row">
            <a id='login' @click="login">登录</a>
          </div>
          <div class="operatBtn">
            <a to="/register" id='reg'>注册账号</a>
            <span>|</span>
            <a id='forgetPassword'>忘记密码</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '登录',
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // console.log(this.$store.state.targetRouterPath)
      if (!this.username) {
        this.mui.toast('请输入用户名')
        return false
      }
      if (!this.password) {
        this.mui.toast('请输入密码')
        return false
      }
      this.$axios({
        method: 'POST',
        url: 'http://localhost:3000/user/login',
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          console.log(res)
          if (res.data.error) {
            this.mui.toast('用户名或密码错误')
            return false
          }
          if (res.data.success) {
            document.cookie = 'u_uuid=1'
            // this.$store.commit('loginStatus')
            this.$router.push(this.$store.getters.getHisPath)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    console.log(document.cookie)
  }
}
</script>

<style scoped>
  .loginBody{
    margin-top: 44px;
  }
  #loginForm .mui-input-row{
    margin-bottom: 15px;
    border:1px solid rgba(0,0,0,.2);
  }
  #loginForm {
    padding: 10px;
    text-align: center;
  }
  #loginForm .mui-button-row{
    margin-bottom: 10px;
  }
  #loginForm .mui-button-row a{
    display: block;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    background-color: #007aff;
    border-radius: 30px;
    color: #fff;
    border:1px solid gray;
  }
</style>
