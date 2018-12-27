<template>
    <div>
      <header-vue v-bind:title="title"></header-vue>
      <div class="userBody">
        <div>
          <div class="container">
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right" href="#account">
                  <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../../static/assets/images/user.jpg">
                  <div class="mui-media-body">
                    {{username}}<p class="mui-ellipsis">{{mobile}}</p>
                  </div>
                </a>
              </li>
              <li class="mui-table-view-cell">
                <router-link to="/password" class="mui-navigate-right">账号与安全</router-link>
              </li>
              <li class="mui-table-view-cell">
                <router-link to="/address" class="mui-navigate-right">收货地址管理</router-link>
              </li>
            </ul>
            <div class="out_login">
              <a @click.prevent="loginOut" class="mui-btn btn_outLogin">退出登录</a>
            </div>
          </div>
        </div>
      </div>
      <footer-vue></footer-vue>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '个人中心',
      username: '',
      mobile: ''
    }
  },
  methods: {
    // 退出账号
    loginOut: function () {
      this.$axios.get('http://localhost:3000/user/logout')
        .then(res => {
          if (res.data.success) {
            document.cookie = 'u_uuid='
            this.$router.push('/login')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.$axios({
      method: 'get',
      url: 'http://localhost:3000/user/queryUserMessage'
    })
      .then(res => {
        this.username = res.data.username || res.data.mobile
        this.mobile = res.data.mobile
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  .userBody{
    margin-top: 44px;
    margin-bottom: 50px;
  }
  .out_login{
    margin-top: 15px;
    text-align: center;
  }
  .out_login a{
    width: 80%;
  }
</style>
