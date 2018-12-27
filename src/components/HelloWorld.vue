<template>
  <div>
    <div class="page-loadmore-wrapper" ref="wrapper">
      <mt-loadmore :top-method="loadTop"
                   @top-status-change="handleTopChange"
                   :bottom-method="loadBottom"
                   @bottom-status-change="handleBottomChange"
                    ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="(item, index) in list" :key="index" class="page-loadmore-listitem">{{ item }}</li>
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
</template>

<script>
export default {
  data () {
    return {
      list: [],
      allLoaded: false,
      bottomStatus: '',
      topStatus: '',
      // translate: 0,
      moveTranslate: 0
    }
  },
  methods: {
    handleBottomChange (status) {
      console.log(status)
      this.bottomStatus = status
    },
    loadBottom () {
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1]
        if (lastValue < 40) {
          for (let i = 1; i <= 10; i++) {
            this.list.push(lastValue + i)
          }
        } else {
          this.allLoaded = false
        }
        this.$refs.loadmore.onBottomLoaded()
      }, 1500)
    },
    handleTopChange (status) {
      this.topStatus = status
    },
    loadTop () {
      setTimeout(() => {
        let firstValue = this.list[0]
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(firstValue - i)
        }
        this.$refs.loadmore.onTopLoaded()
      }, 1500)
    }
  },
  created () {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i)
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
