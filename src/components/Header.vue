<template>
    <div>
      <header class="mui-bar mui-bar-nav header">
        <a @click="back" class="arrowLeft"><i class="iconfont icon-arrow-left"></i></a>
        <span class="title">{{title}}</span>
      </header>
    </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    back: function () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<style scoped>
  .header{
    height: 44px;
    background-color: #006699;

  }
  .header .arrowLeft {
    line-height: 44px;
  }
  .header .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    line-height: 44px;
    color: #fff;
    font-size: 18px;
    font-family: 微软雅黑;
  }
</style>
