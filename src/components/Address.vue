<template>
    <div>
      <header-vue v-bind:title="title"></header-vue>
      <div class="addressBody">
        <div class="addAddr">
          <a @click="addAddr">添加收货地址</a>
        </div>
        <div class="listAddr">
          <div class="mui-content">
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell mui-media"
              v-for="(item, index) in addrList" :key="index">
                <div class="mui-slider-right mui-disabled">
                  <a class="mui-btn mui-btn-red"
                  @click="deleteAddr(item.id)">删除</a>
                </div>
                <div class="mui-slider-handle">
                  <a class="mui-navigate-right">
                    <div class="mui-media-body">
                      <p class='mui-ellipsis'>
                        <span style="color: black">收货人：</span>
                        <span style="color: black" class="recipients">{{item.recipients}}</span></p>
                      <p class='mui-ellipsis'>
                        <span style="font-size: 12px;">地址：</span>
                        <span style="font-size: 12px;" class="address">{{item.address}}</span></p>
                      <p class='mui-ellipsis'>
                        <span style="font-size: 12px;">详细地址：</span>
                        <span style="font-size: 12px;" class="addressDetail">{{item.addressDetail}}</span></p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="addLayer" :class="show ? 'active' : 'hide'">
         <div class="editHead">
           地址编辑
           <a @click="close">X</a>
         </div>
          <div class="form_box">
            <div class="mui-input-row">
              <input v-model="recipients" type="text" placeholder="收货人">
            </div>
            <div class="mui-input-row">
              <input v-model="postcode" type="text" placeholder="邮编">
            </div>
            <div class="mui-input-row">
              <input v-model="address" type="text" readonly placeholder="省市区">
            </div>
            <div class="mui-input-row">
              <textarea v-model="addressDetail" id="textarea" rows="5" placeholder="详细地址"></textarea>
            </div>
            <a @click="addAddrConfirm" class="mui-btn mui-btn-primary btn_submit">确认</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      title: '收货地址管理',
      addrList: [],
      recipients: '',
      postcode: '',
      address: '',
      addressDetail: '',
      show: false
    }
  },
  methods: {
    addAddr: function () {
      this.show = true
    },
    addAddrConfirm: function () {
      if (!this.recipients.trim()) {
        Toast('请输入收件人')
        return false
      }
      if (!this.postcode.trim()) {
        Toast('请输入邮编')
        return false
      }
      // if (!this.address.trim()) {
      //   Toast('请输入地址')
      //   return false
      // }
      if (!this.addressDetail.trim()) {
        Toast('请输入详细地址')
        return false
      }
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/address/addAddress',
        data: {
          recipients: this.recipients,
          postcode: this.postcode,
          address: this.address,
          addressDetail: this.addressDetail
        }
      })
        .then(res => {
          if (res.data.success) {
            this.close()
            this.getList()
          }
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteAddr: function (id) {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/address/deleteAddress',
        data: 'id=' + id,
        header: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then(res => {
          if (res.data.success) {
            this.getList()
          }
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    close: function () {
      this.show = false
    },
    getList: function () {
      this.$axios({
        method: 'get',
        url: 'http://localhost:3000/address/queryAddress'
      })
        .then(res => {
          this.addrList = res.data
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
  .addressBody {
    margin-top: 44px;
  }
  .addressBody .addAddr{
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .addressBody .addAddr a{
    color: black;
    display: block;
    height: 30px;
    line-height: 30px;
  }
  .mui-content > .mui-table-view:first-child {
    margin-top: 0px;
  }
  .mui-table-view-cell > .mui-slider-handle.mui-navigate-right:after, .mui-table-view-cell > .mui-slider-handle .mui-navigate-right:after {
    right: -45px;
  }
  .active{
    display: block;
  }
  .hide{
    display: none;
  }
  .addLayer{
    position: absolute;
    width: 80%;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #aaa;
    .editHead{
      position: relative;
      text-align: center;
    }
    .editHead a{
      position: absolute;
      right: 5px;
    }
    .form_box{
      text-align: center;
    }
     .btn_submit{
      width: 80%;
    }
  }
</style>
