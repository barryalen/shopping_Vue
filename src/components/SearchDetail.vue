<template>
    <div>
      <header-vue v-bind:title="title"></header-vue>
      <div class="sort">
        <ul>
          <li :class="index === idx ? 'active' : ''"
            v-for="(item, index) in sortTitleArr" :key="index">
            <a @click.prevent="sortSelected(index)">{{item}}<span class="mui-icon mui-icon-arrowdown"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="searchDetail" id="detail">
        <div class="page-loadmore-wrapper" ref="wrapper">
          <mt-loadmore :top-method="loadTop"
                       @top-status-change="handleTopChange"
                       :bottom-method="loadBottom"
                       @bottom-status-change="handleBottomChange"
                       ref="loadmore">
            <ul class="mui-table-view mui-grid-view mui-grid-9" >
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6"
                  v-for="(item, index) in searchItems" :key="index"
                  @click="productDetail(item.id)">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media"
                       style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">{{item.proName}}</p>
                      <p class="price">
                        <span class="newPrice" style="color: red;">￥{{item.price}}</span>
                        <span class="oldPrice" ><del>￥{{item.oldPrice}}</del></span>
                      </p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
              <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
            </div>
            <div slot="bottom" class="mint-loadmore-bottom">
              <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
              <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
            </div>
          </mt-loadmore>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '搜索详情',
      sortTitleArr: ['综合', '价格', '销量', '折扣'],
      list: [],
      allLoaded: false,
      bottomStatus: '',
      topStatus: '',

      searchItems: [],
      idx: 0,
      queryKey: '', // 查询关键字
      pages: 1 // 查询页码
    }
  },
  methods: {
    // 跳转商品详情页
    productDetail: function (value) {
      this.$router.push('/product' + '?id=' + value)
    },
    // 选择排序
    sortSelected: function (index) {
      this.idx = index
      this.pages = 1
      this.searchItems = []
      this.getSortList(this.queryKey)
    },
    // 获取sort列表
    getSortList: function (key) {
      this.$axios.get('http://localhost:3000/product/queryProduct', {
        params: {
          proName: key,
          page: this.pages,
          pageSize: 2
        }
      })
        .then(res => {
          this.searchItems = this.searchItems.concat(res.data.data)
          // console.log(res.data.data)
        })
        .catch(err => {
          if (err) {
            this.$router.push('/error')
          }
        })
    },
    // 上拉处理
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom () {
      setTimeout(() => {
        ++this.pages
        this.getSortList(this.queryKey)
        this.$refs.loadmore.onBottomLoaded()
      }, 1500)
    },
    // 下拉处理
    handleTopChange (status) {
      this.topStatus = status
    },
    loadTop () {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 1500)
    }
  },
  created () {
    this.queryKey = this.$route.query.key
    this.getSortList(this.queryKey)
  },
  updated () {
    // console.log(this.page)
  }
}
</script>

<style lang="scss" scoped>
  .search{
    height: 44px;
    display: flex;
    flex-direction: row;
    margin: 50px 10px 10px;
  }
  .search button {
    height: 40px;
    width: 65px;
  }
  .search input{
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    background: url("../../static/assets/images/search.jpg") no-repeat 8px center #fff;
    padding-left: 30px;
  }
  .sort{
    margin-top: 44px;
    ul{
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 10px;
    }
    li{
      padding: 0 10px;
    }
    li.active a {
      color: red;
    }
  }

  .searchDetailBody .searchDetail{
    padding-top: 5px;
  }
  #detail{
    .mint-loadmore-top span {
      -webkit-transition: .2s linear;
      transition: .2s linear;
      display: inline-block;
      vertical-align: middle;
    }
    .mint-loadmore-top span.is-rotate {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg)
    }
    .mint-loadmore-bottom span {
      display: inline-block;
      -webkit-transition: .2s linear;
      transition: .2s linear;
      vertical-align: middle
    }
    .mint-loadmore-bottom span.is-rotate {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg)
    }
    ul.mui-table-view{
      margin-top: 0px;
    }
    li.mui-table-view-cell{
      padding: 0px;
    }
    ul li a{
      padding: 0px;
    }
    img{
      height: 100%;
      width: 100%;
    }
  }
</style>
