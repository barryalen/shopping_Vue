<template>
    <div>
      <header class="mui-bar mui-bar-nav header clearFix">
        <a href="javascript:history.back()"><i class="iconfont icon-arrow-left"></i></a>
        <router-link to="/search" class="search"><input type="text" title="search"></router-link>
      </header>
      <div class="categoryBody">
        <div class="left">
          <div class="mui-scroll-wrapper">
            <div class="mui-scroll" >
              <ul >
                <li :class="index === idx ? 'active' : ''"
                  v-for="(item, index) in leftList" :key="index">
                  <a @click="getList(index,item.id)">{{item.categoryName}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="mui-scroll-wrapper">
            <div class="mui-scroll" >
              <div class="container">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                  <li v-if="rightList.length === 0">
                    <p>没有数据哦</p>
                  </li>
                  <li v-else class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"
                      v-for="(item, index) in rightList" :key="index">
                    <a><img :src="item.brandLogo">
                      <p>{{item.brandName}}</p>
                    </a>
                  </li>
                </ul>
              </div>
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
      leftList: [],
      rightList: [],
      idx: 0
    }
  },
  methods: {
    getList: function (index, value) {
      this.idx = index
      this.getRightListItem(value)
    },
    getRightListItem: function (data) {
      this.$axios.get('http://localhost:3000/category/querySecondCategory', {
        params: {
          id: data || null
        }
      })
        .then(res => {
          this.rightList = res.data.rows.map(item => {
            // 处理图片路径
            item.brandLogo = '../../static/assets' + item.brandLogo.slice(7)
            return item
          })
          // console.log(this.rightList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getLeftListItem: function () {
      this.$axios.get('http://localhost:3000/category/queryTopCategory')
        .then(res => {
          this.leftList = res.data.rows
          // console.log(res.data.rows)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getLeftListItem()
    this.getRightListItem(1)
    // console.log(this.$store)
  }

}
</script>

<style lang="scss" scoped>
  .header{
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #006699;
  }
  .header .mui-bar .mui-icon{
    font-size: 24px;
    font-weight: bold;
  }
  .header .search{
    height: 100%;
    width: 100%;
    display: inline-block;
    line-height: 44px;
    margin-left: 5px;
    padding: 0 5px;
  }
  .header input{
    height: 30px;
    border-radius:30px;
    background: url("../../static/assets/images/search.jpg") no-repeat 8px center #fff;
  }
  .header a{
    color: #fff;
  }
  .categoryBody{
  .left .mui-scroll-wrapper {
    margin-top: 44px;
    z-index: 9;
  }
  .left li{
    list-style: none;
    height: 35px;
    width: 80px;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
  }
  .left a{
    color: #333;
  }
  .left li.active a{
    color: red;
  }
  .right .container{
    padding-left: 80px;
    padding-top: 44px;
  }
  .right .mui-scroll-wrapper .mui-scroll img{
    width: 100%;
    height: 100%;
  }
}
</style>
