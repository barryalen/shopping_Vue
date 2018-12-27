<template>
    <div>
      <header-vue  v-bind:title="title"></header-vue>
      <div class="searchBody">
        <div class="search">
          <input type="text" v-model="value" placeholder="爱生活，就要搜">
          <button @click="search(null)" class="mui-btn mui-btn-primary">搜索</button>
        </div>
        <div class="searchResult">
          <p v-if="historyFlag" class="nothing">
            <span>没有历史搜索记录</span>
          </p>
          <p v-else class="something">
            <span>最近搜索记录</span>
            <span class="mui-icon mui-icon-trash" @click="deleteHis"></span>
          </p>
          <ul>
            <li v-for="(item, index) in searchHistoryList" :key="index">
              <a @click="search(item)">{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
      <footer-vue></footer-vue>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '搜索中心',
      searchHistoryList: [],
      historyFlag: true,
      value: ''
    }
  },
  methods: {
    search: function (key) {
      if (!key) {
        if (!this.value) {
          this.mui.toast('请输入搜索内容')
          return false
        }
      }
      key = key || this.value
      console.log(key)
      this.historyHandle(key)
      this.$router.push('/searchDetail' + '?key=' + this.value)
    },
    // 查询搜索历史
    getSearchData: function () {
      return JSON.parse(localStorage.getItem('SearchHistory') || '[]')
    },
    // 处理搜索历史storage
    historyHandle: function (value) {
      let searchHisArr = this.getSearchData()
      // 搜索记录重复，当前值靠前
      let searchIndex = searchHisArr.findIndex(item => item === value.trim())
      if (searchIndex !== -1) {
        searchHisArr.splice(searchIndex, 1)
      }
      searchHisArr.unshift(value.trim())
      localStorage.setItem('SearchHistory', JSON.stringify(searchHisArr))
    },
    // 删除历史记录
    deleteHis: function () {
      localStorage.setItem('SearchHistory', JSON.stringify([]))
      this.searchHistoryList = []
      this.historyFlag = true
      this.$forceUpdate()
    }

  },
  beforeCreate () {
    console.log('beforcreate')
  },
  created () {
    console.log('created')
    this.searchHistoryList = this.getSearchData()
    if (this.searchHistoryList !== 0) {
      this.historyFlag = false
    }
  },
  beforeMount () {
    console.log('beforMonut')
  },
  mounted () {
    console.log('mount')
  },
  beforeUpdate () {
    console.log('beforupdate')
  },
  updated () {
    console.log('updateed')
  }
}
</script>

<style lang="scss" scoped>
  .searchBody{
    .search{
      height: 44px;
      display: flex;
      flex-direction: row;
      margin: 55px 10px 10px;
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
    .searchResult{
      margin: 0 10px;
    }
    .something{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    ul,li{
    }
    li{
      list-style: none;
      float: left;
      padding: 5px 10px;
    }

  }
</style>
