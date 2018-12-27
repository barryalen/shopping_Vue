<template>
    <div>
      <header-vue v-bind:title="title"></header-vue>
      <div class="productBody">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <div id="product_content">
              <div class="mui-slider">
                <div class="mui-slider-group">
                  <div class="mui-slider-item" v-for="(item, index) in productDetail.pic" :key="index">
                    <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                    <img v-if="index === productDetail.pic.length" src="item.picAddr" alt="">
                    <img :src="item.picAddr">
                    <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                    <img v-if="index ===0 " src="item.picAddr" alt="">
                  </div>
                </div>
              </div>
              <div class="title">
                {{productDetail.proName}}
              </div>
              <div class="price">
                <span>价格：</span><span class="priceNow">￥{{productDetail.price}}</span>
                <span class="oldPrice"><del>￥{{productDetail.oldPrice}}</del></span>
              </div>
              <div class="size">尺码：<ul>
                <li v-for="(item, index) in productDetail.size" :key="index"
                    :class="selectedSize === item ? 'active' : ''"
                @click="selectSize(item)">{{item}}</li>
              </ul></div>
              <div class="kuCun">
                <span>数量：</span>
                <div class="numbox">
                  <button class="numbox-btn numbox-btn-numbox-minus" type="button"
                          @click="buyMin">-</button>
                  <input class="input-numbox" type="number" v-model="buyNum" />
                  <button class="numbox-btn numbox-btn-numbox-plus" type="button"
                  @click="buyMax">+</button>
                </div>
                <span>剩余库存：{{productDetail.num}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="productFooter">
        <span class="iconfont icon-gouwuche"></span>
        <div class="btn">
          <button class="addCart" @click="addCart">加入购物车</button>
          <button class="buy">立即购买</button>
        </div>
      </div>
    </div>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
export default {
  data () {
    return {
      title: '商品详情',
      productId: null,
      productDetail: {},
      buyNum: 0,
      selectedSize: null
    }
  },
  methods: {
    // 添加购物车并判断
    addCart: function () {
      if (!this.buyNum) {
        Toast({
          message: '购买数量不能小于0'
        })
        return false
      }
      if (!this.selectedSize) {
        Toast({
          message: '请选择尺码'
        })
        return false
      }
      // this.$router.push('/cart')
      this.$axios({
        method: 'POST',
        url: 'http://localhost:3000/cart/addCart',
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
          productId: this.productId,
          num: this.buyNum,
          size: this.selectedSize
        }
      })
        .then(res => {
          if (res.data.error) {
            this.$store.commit('updateRouterPath', '/product?id=' + this.productId)
            this.$router.push('/login')
            return false
          }
          if (res.data.success) {
            MessageBox({
              title: '提示',
              showCancelButton: true
            })
            MessageBox.confirm('添加成功，到购物车？').then(action => {
              this.$router.push('/cart')
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 尺码选择
    selectSize: function (value) {
      this.selectedSize = value
    },
    // 最大购买值
    buyMax: function () {
      if (this.buyNum >= this.productDetail.num) {
        Toast({
          message: '不能超过库存哦'
        })
        return false
      }
      this.buyNum++
    },
    // 最小购买值
    buyMin: function () {
      if (this.buyNum <= 0) {
        Toast({
          message: '购买数量不能小于0'
        })
        return false
      }
      this.buyNum--
    }
  },
  created () {
    console.log(document.cookie)
    this.productId = this.$route.query.id
    // 商品详情渲染
    this.$axios.get('http://localhost:3000/product/queryProductDetail?id=' + this.productId)
      .then(res => {
        this.productDetail = res.data
        let tempArr = this.productDetail.size.split('-')
        let sizeArr = []
        for (let i = tempArr[0]; i <= tempArr[1]; i++) {
          sizeArr.push(i)
        }
        this.productDetail.size = sizeArr
        this.productDetail.pic.map(item => {
          // 处理图片路径
          item.picAddr = '../../static/assets' + item.picAddr.slice(7)
          return item
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  updated () {
    // 手动输入购买值判断
    if (this.buyNum > this.productDetail.num) {
      Toast({
        message: '不能超过库存哦'
      })
      this.buyNum = this.productDetail.num
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
  .productBody{
    margin-top: 44px;
    .title {
      font-size: 18px;
      border-bottom: 1px solid #e6e6e6;
      text-align: center;
      padding: 5px 5px;
    }
    .price{
      border-bottom: 1px solid #e6e6e6;
      padding: 10px 5px;
    }
    .price .priceNow{
      color: red;
      font-size: 22px;
    }
    .size ul,li{
      margin: 0;
      padding:0;
    }
    .size ul{
      display: flex;
      flex-direction: row;
    }
    .size {
      border-bottom: 1px solid #e6e6e6;
      padding: 10px 5px;
    }
    .size ul li{
      list-style: none;
      border: 1px solid gray;
      height: 24px;
      width: 24px;
      text-align: center;
      line-height: 24px;
      margin-left: 10px;
    }
    .size li.active{
      background-color: #fa672d;
    }
    .numbox {
      position: relative;
      display: inline-block;
      overflow: hidden;
      width: 120px;
      height: 35px;
      padding: 0 40px 0 40px;
      /*vertical-align: top;*/
      vertical-align: middle;
      border: solid 1px #bbb;
      border-radius: 3px;
      background-color: #efeff4;
    }
    .numbox-btn {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42;
      position: absolute;
      display: inline-block;
      margin-bottom: 0;
      padding: 6px 12px;
      cursor: pointer;
      -webkit-transition: all;
      transition: all;
      -webkit-transition-timing-function: linear;
      transition-timing-function: linear;
      -webkit-transition-duration: .2s;
      transition-duration: .2s;
      text-align: center;
      vertical-align: top;
      white-space: nowrap;
      color: #333;
      border-radius: 3px;
      background-color: #fff;
      background-clip: padding-box;
    }
    .numbox-btn-numbox-minus{
      left: 0;
      top: 0;
      width: 40px;
      border-right: 1px solid #ccc;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .numbox-btn-numbox-plus{
      right: 0;
      top: 0;
      width: 40px;
      border-left: 1px solid #ccc;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    .input-numbox{
      display: inline-block;
      overflow: hidden;
      width: 100% !important;
      height: 100%;
      margin: 0;
      padding: 0 3px !important;
      text-align: center;
      text-overflow: ellipsis;
      word-break: normal;
      border: none !important;
      border-right: solid 1px #ccc !important;
      border-left: solid 1px #ccc !important;
      border-radius: 0 !important;
    }

  }
  .productFooter {
    height: 40px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 888;
    span{
      margin: 0 20px;
    }
    .btn button {
      margin: 0 5px;
    }
    .btn button:first-child {
      background-color: #991020;
      color: #fff;
    }
    .btn button:last-child{
      background-color: #fa672d;
      color: #fff;
    }
  }
</style>
