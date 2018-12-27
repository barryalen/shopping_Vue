<template>
    <div>
      <nav class="bar bar-tab">
        <router-link class="tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="tab-label">首页</span>
        </router-link>
        <router-link class="tab-item " to="/category">
          <span class="mui-icon mui-icon-bars"></span>
          <span class="tab-label">分类</span>
        </router-link>
        <router-link class="tab-item" to="/cart">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="tab-label">购物车</span>
        </router-link>
        <router-link class="tab-item" to="/user">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="tab-label">会员中心</span>
        </router-link>
      </nav>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .bar{
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    height: 44px;
    padding-right: 10px;
    padding-left: 10px;
    border-bottom: 0;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .bar-tab{
    bottom: 0;
    display: table;
    width: 100%;
    height: 50px;
    padding: 0;
    table-layout: fixed;
    border-top: 0;
    border-bottom: 0;
    -webkit-touch-callout: none;
  }
  .tab-item{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .tab-label{
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .footer-active{
    color: #007aff;
  }
</style>
