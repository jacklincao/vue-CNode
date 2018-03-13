<template>
  <div id="load-index">
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0;margin-top: 10px;">
      <el-col :span="17" :offset="1">
        <el-row>
        <div class="boxnav">
          <ul class="childNav">
            <li><router-link to="/" style="color: #80bd01;">主页</router-link>&nbsp;<span>/&nbsp;新消息</span></li>
          </ul>
        </div>
        <div class="box-content">
          <div class="message-item">无消息</div>
        </div>
        </el-row>
        <el-row :gutter="25" style="margin-left: 0; margin-right: 0;margin-top: 10px;">
            <div class="boxnav">
              <ul class="childNav">
                <li><span>过往信息</span></li>
              </ul>
            </div>
            <div class="box-content">
              <div class="message-item">无消息</div>
            </div>
        </el-row>
      </el-col>
      <el-col :span="5" :offset="0">
        <div style="display: flex; flex-direction: column" v-if="this.$store.state.user.auth.isLogin">
          <div class="boxnav">
            个人信息
          </div>
          <div class="userbox ">
            <div class="item" style="margin-top: 10px">
              <a href="" style="line-height: 0;display: inline-block;vertical-align: middle;">
                <img :src="this.$store.state.user.auth.user.avatar_url"
                     :alt="this.$store.state.user.auth.user.loginname" style="width: 48px;height: 48px;">
              </a>
              <span style="vertical-align: middle;">{{this.$store.state.user.auth.user.loginname}}</span>
            </div>
            <div class="item">
              积分: 0
            </div>
            <div class="item" style="font-style: italic;">“ 这家伙很懒，什么个性签名都没有留下。 ”</div>
          </div>
          <div class="userbox">
            <div class="topicBox">
              <router-link to="/publishtopic" style="color: white;letter-spacing: 2px;text-decoration: none;">
                发布话题
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="!this.$store.state.user.auth.isLogin">
          <div class="boxnav">
            CNode：Node.js专业中文社区
          </div>
          <div class="userbox ">
            <div class="item" style="padding-top: 10px;padding-bottom: 10px;">
              您可以 登录 或 注册 , 也可以
              <div style="margin-top: 10px;">
                <span class="login">通过github登录</span>
              </div>
            </div>
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
