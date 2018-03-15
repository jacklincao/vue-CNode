<template>
  <div id="load-index">
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0;margin-top: 10px;">
      <el-col :span="17" :offset="1">
        <div class="boxnav">
          <ul class="childNav">
            <li><router-link to="/" style="color: #80bd01;">主页</router-link>&nbsp;<span>/&nbsp;关于</span></li>
          </ul>
        </div>
        <div class="box-content">
          <div class="message-item">
            <h1 class="message-item title">关于</h1>
            <p class="remark">CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
            <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
            <p>社区目前由<a href="http://cnodejs.org/user/alsotang" class="link">@alsotang</a>在维护，有问题请联系<a href="https://github.com/alsotang" class="link">https://github.com/alsotang</a></p>
            <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" class="link">http://weibo.com/cnodejs</a></p>

            <h1 class="message-item title">移动客户端</h1>
            <p>客户端由<a href="https://cnodejs.org/user/soliury" class="link">@soliury</a>开发维护。</p>
            <p>源码地址：<a href="https://github.com/soliury/noder-react-native 。" class="link">https://github.com/soliury/noder-react-native 。</a></p>
            <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
            <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" class="link">https://github.com/TakWolf/CNode-Material-Design</a>，这是 Java 原生开发的安卓客户端。</p>

            <h1 class="message-item title">LOGO</h1>
            <p>白底: <a href="https://cnodejs.org/public/images/cnodejs.svg" class="link">/public/images/cnodejs.svg</a></p>
            <p>黑底: <a href="https://cnodejs.org/public/images/cnodejs_light.svg" class="link">/public/images/cnodejs_light.svg</a></p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .content-body {
    margin-top: 30px;
  }

  code {
    color: #000;
    background-color: #fcfafa;
    padding: 4px 6px;
  }

  .remark,.example {
    font-size:15px;
  }

  .link {
    color: #08c;
  }

  .message-item > ul >li {
    list-style-type: disc;
    margin: 10px 0px;
    font-size:14px;
  }

  .title {
    margin: 20px 0px 0px 0px;
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
    padding-left: 0px !important;
  }

  .apititle {
    font-weight:bold;
    border-bottom:1px solid #eee;

  }

  .userbox {
    margin-bottom: 20px;
    background-color: #fff;
    .item {
      margin-left: 10px;
      margin-bottom: 10px;
    }
  }

  .topicBox {
    height: 40px;
    background-color: #80bd01;
    width: 100px;
    border-radius: 5px;
    margin: 4px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-content {
    background-color: #fff;
  }

  .form-padding {
    padding: 10px;
  }

  .item-top {
    padding-top: 10px;
  }

  .boxnav {
    background-color: #f6f6f6;
    padding: 10px;
    .childNav {
      margin-top: 0px;
      margin-bottom: 0px;
      padding-left: 0px;
      li {
        display: inline;
      }
    }
  }

  .special {
    background-color: #80bd01;
    color: white;
    padding: 2px;
    border-radius: 5px;
  }

  .userbox {
    margin-bottom: 20px;
    background-color: #fff;
    .item {
      margin-left: 10px;
      margin-bottom: 10px;
    }
  }

  .message-item {
    padding:10px;
  }
</style>
