<template>
    <div>
      <header-vue  v-bind:title="title"></header-vue>
      <div class="cartBody">
        <div class="mui-content">
          <ul class="mui-table-view mui-table-view-chevron" id="test">
            <li class="mui-table-view-cell mui-media"
            v-for="(item, index) in cartList" :key="index">
              <div class="mui-slider-right mui-disabled">
                <a class="mui-btn mui-btn-blue editCart" @click="editCart">编辑</a>
                <a class="mui-btn mui-btn-red deleteCart" @click="deleteCart(item.id)">删除</a>
              </div>
              <div class="mui-slider-handle">
                <input type="checkbox" class="checkBox" @click="checkBox(index)" v-model="checks[index]">
                <div class="content">
                  <a class="mui-navigate-right" href="javascript:;">
                    <div class="posiLeft">
                      <img class="mui-media-object mui-pull-left" :src="item.pic[0].picAddr">
                    </div>
                    <div class="mui-media-body">
                      <p class='mui-ellipsis-2 title'>{{item.proName}}</p>
                      <p class="price">
                        <span>
                            ￥<span style="color: red;" class="priceNow">{{item.price}}</span>
                            <del style="font-size:12px;color: #ccc; margin-left: 5px">￥{{item.oldPrice}}</del>
                        </span>
                        <span>
                            x<span class="buyCount">{{item.num}}</span>
                        </span>
                      </p>
                      <p><span>size:</span><span class="buySize">{{item.size}}</span></p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="priceCount">
        <p><span>全选</span> <input type="checkbox" class="selectAll" @click="selectAll" v-model="flag"></p>
        <p><span>总价：￥</span><span class="total" v-html="price"></span></p>
        <a href="javascript:;">生成订单</a>
      </div>
      <footer-vue></footer-vue>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '购物车',
      cartList: [],
      checks: [],
      flag: false,
      price: 0.00
    }
  },
  methods: {
    editCart: function () {

    },
    deleteCart: function (id) {
      this.$axios.get('http://localhost:3000/cart/deleteCart?id=' + id)
        .then(res => {
          if (res.data.success) {
            this.getCartList()
          }
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkBox: function (index) {
      // var test = this.checks.filter(item => item === false)
      // console.log(this.checks)
      // for (var key in test) {
      //   console.log(key + '--' + test[key])
      // }
      // console.log('------------------------')
      // for (var keys in this.checks) {
      //   console.log(keys + '--' + this.checks[keys])
      // }
      this.checks[index] = !this.checks[index]
      if (this.checks.filter(item => item === false).length === 0) {
        this.flag = true
      } else {
        this.flag = false
      }
      console.log(this.checks)
    },
    selectAll: function () {
      this.checks = this.checks.map(() => !this.flag)
      if (!this.flag) {
        this.cartList.map(item => {
          this.price = this.price + item.num * item.price
          this.price = Number(this.price.toFixed(2))
        })
      } else {
        this.price = 0
      }
    },
    getCartList: function () {
      this.$axios.get('http://localhost:3000/cart/queryCart')
        .then(res => {
          this.checks = []
          this.cartList = res.data
          this.cartList = this.cartList.map(item => {
            this.checks.push(false)
            item.pic[0].picAddr = '../../static/assets' + item.pic[0].picAddr.slice(7)
            return item
          })
          console.log(this.cartList)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getCartList()
  }
}
</script>

<style scoped>
  .cartBody {
    margin-top: 44px;
    margin-bottom: 80px;
  }
  .priceCount{
    position: fixed;
    height: 30px;
    width: 100%;
    bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    background-color: #fff;
  }
  .priceCount p{
    margin: 0 10px;
    padding: 0;
  }
  .priceCount a{
    display: block;
    height: 30px;
    width: 100px;
    background-color: #ff3300;
    color: #fff;
    line-height: 30px;
    text-align: center;
  }
  .priceCount p span{
    line-height: 30px;
    color:red;
  }
  .posiLeft{
    position: relative;
  }
  .checkBox {
    position: absolute;
    bottom: 4px;
    z-index: 999;
  }
  .mui-media-body .price{
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .mui-media-body .title{
    font-size: 16px;
  }
  .mui-table-view-cell > .mui-slider-handle.mui-navigate-right:after, .mui-table-view-cell > .mui-slider-handle .mui-navigate-right:after {
    right: -20px;
  }
  .mui-table-view .mui-media-object {
    height: 60px;
  }
  .mui-table-view-chevron .mui-table-view-cell {
    padding-right: 40px;
  }
  .mui-popup-inner ul,li{
    margin: 0;
    padding: 0;
  }
  .mui-popup-inner ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 999;
  }
  .mui-popup-inner li{
    list-style: none;
    border: 1px solid gray;
    height: 24px;
    width: 24px;
    text-align: center;
    line-height: 24px;
    margin-right: 10px;
    margin-bottom: 5px;

  }
  .mui-popup-inner .kuCun{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }
  .selectFlag {
    background-color: #fa672d;
  }
</style>
