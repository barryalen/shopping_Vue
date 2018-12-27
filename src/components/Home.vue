<template>
  <div>
    <div class="homeBody">
      <header class="mui-bar mui-bar-nav header">
        <a class="mui-icon mui-icon-bars" href="category.html"></a>
        <router-link to="/search" class="search"><input type="text" title="search"></router-link>
      </header>
      <!-- 轮播部分 -->
      <div id="slider" class="mui-slider" >
        <div class="mui-slider-group mui-slider-loop">
          <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="../../static/assets/images/banner4.png">
            </a>
          </div>
          <!-- 第一张 -->
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/assets/images/banner1.png">
            </a>
          </div>
          <!-- 第二张 -->
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/assets/images/banner2.png">
            </a>
          </div>
          <!-- 第三张 -->
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/assets/images/banner3.png">
            </a>
          </div>
          <!-- 第四张 -->
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/assets/images/banner4.png">
            </a>
          </div>
          <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="../../static/assets/images/banner1.png">
            </a>
          </div>
        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
      <!-- 商品展示 -->
      <div class="productShow" id="grid">
        <!-- 商品九宫格 -->
        <div class="mui-content" >
          <!--第一栏-->
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
              <a href=""><img src="../../static/assets/images/nav1.png" alt="nav1"></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
              <a href=""><img src="../../static/assets/images/nav2.png" alt="nav2"></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
              <a href=""><img src="../../static/assets/images/nav3.png" alt="nav3"></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
              <a href=""><img src="../../static/assets/images/nav4.png" alt="nav4"></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
              <a href=""><img src="../../static/assets/images/nav5.png" alt="nav5"></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
              <a href=""><img src="../../static/assets/images/nav6.png" alt="nav6"></a>
            </li>
          </ul>
        </div>
        <!--品牌专区-->
        <div class="pinpai">
          <h3>品牌专区</h3>
          <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand1.png" alt="brand1"></a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand2.png" alt="brand2"></a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand3.png" alt="brand3"></a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand4.png" alt="brand4"></a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand5.png" alt="brand5"></a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand6.png" alt="brand6"></a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand7.png" alt="brand7"></a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href=""><img src="../../static/assets/images/brand8.png" alt="brand8"></a>
              </li>
            </ul>
          </div>
        </div>
        <!--运动生活专区-->
        <div class="sport">
          <h3>运动生活专区</h3>
          <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式劳动纪律时代峰峻 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div class="female">
          <div class="titlePic">
            <img src="../../static/assets/images/title2.png" alt="">
          </div>
          <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式劳动纪律时代峰峻 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div class="male">
          <div class="titlePic">
            <img src="../../static/assets/images/title3.png" alt="">
          </div>
          <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式劳动纪律时代峰峻 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
                <div class="mui-card">
                  <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/assets/images/product.jpg)"></div>
                  <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                      <p class="mui-ellipsis-2 content">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p class="price"><span class="newPrice">￥560.00</span> <span class="oldPrice" >￥888.00</span></p>
                      <p><button type="button" class="mui-btn mui-btn-primary">立即购买</button></p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
  .homeBody{
    margin-bottom: 50px;
    .header{
      height: 44px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #006699;
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
    #slider{
      margin-top: 44px;
    }
    .productShow{
      padding: 5px 3px 0 3px;
    }
    .productShow .titlePic{
      padding: 0 5px;
    }
    #grid ul.mui-table-view{
      margin-top: 0px;
    }
    #grid li.mui-table-view-cell{
      padding: 0px;
    }
    #grid ul li a{
      padding: 0px;
    }
    #grid img{
      height: 100%;
      width: 100%;
    }
    .pinpai{
      padding-top: 5px;
    }
    .pinpai h3{
      height: 50px;
      text-align: center;
      background-color: #000;
      color: #fff;
      line-height: 50px;
      margin: 0 10px;
    }

    /*home page sport part*/
    .sport h3{
      height: 50px;
      text-align: center;
      background-color: #000;
      color: #fff;
      line-height: 50px;
      margin: 0 10px;
    }
    .sport p{
      margin-top: 10px;
    }
    #grid .price .newPrice{
      color:red;
    }
    #grid .price .oldPrice{
      text-decoration: line-through;
    }
  }
</style>
