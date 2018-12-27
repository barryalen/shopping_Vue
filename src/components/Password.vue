<template>
    <div>
      <header-vue v-bind:title="title"></header-vue>
      <div class="passwordBody">
          <div class="mui-input-row">
            <input v-model="oldPassword" type="password" placeholder="原密码" class="mui-input-password">
            <span class="mui-icon mui-icon-eye"></span>
          </div>
          <div class="mui-input-row">
            <input v-model="newPassword" type="password" placeholder="新密码" class="mui-input-password">
            <span class="mui-icon mui-icon-eye"></span>
          </div>
          <div class="mui-input-row">
            <input v-model="reNewPassword" type="password" placeholder="确认新密码" class="mui-input-password">
            <span class="mui-icon mui-icon-eye"></span>
          </div>
          <a @click="updatePw()" class="mui-btn mui-btn-primary btn_updatePass">确认修改</a>
      </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      title: '密码管理',
      oldPassword: '',
      newPassword: '',
      reNewPassword: ''
    }
  },
  methods: {
    updatePw: function () {
      if (!this.oldPassword.trim()) {
        console.log(this.oldPassword.trim())
        Toast('请输入旧密码')
        return false
      }
      if (!this.newPassword.trim()) {
        Toast('请输入新密码')
        return false
      }
      if (!this.reNewPassword.trim()) {
        Toast('请输入确认密码')
        return false
      }
      if (this.newPassword.trim() !== this.reNewPassword.trim()) {
        Toast('新密码和确认密码不一致')
        return false
      }
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/user/updatePassword',
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          reNewPassword: this.reNewPassword
        }
      })
        .then(res => {
          if (res.errorCode === 400) {
            this.$router.push('/login')
          }
          if (res.errorCode === 1) {
            Toast('原密码输入错误')
            return false
          }
          if (res.data.success) {
            Toast('密码修改成功，请重新登录')
            document.cookie = 'u_uuid='
            this.$router.push('/login')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .passwordBody{
    padding: 0 10px;
    margin-top: 50px;
  }
  .btn_updatePass{
    margin-top: 15px;
    width: 100%;
  }
</style>
