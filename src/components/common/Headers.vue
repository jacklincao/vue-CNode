<template>
  <div class="header">
    <el-row>
      <el-col :span="18" :offset="5">
        <div class="grid-content bg-purple">
          <div class="head-right">
            <div class="head-nav">
              <router-link class="head-link" to="/" :style="[path == '' ? active : '']">首页</router-link>
            </div>
            <div class="head-nav">
              <router-link class="head-link" to="/unreadmessage" :style="[path == 'unreadmessage' ? active : '']">未读消息</router-link>
            </div>
            <div class="head-nav">
              <router-link class="head-link" to="/newuser" :style="[path == 'newuser' ? active : '']">新手入门</router-link>
            </div>
            <div class="head-nav">
              <router-link class="head-link" to="/api" :style="[path == 'api' ? active : '']">API</router-link>
            </div>
            <div class="head-nav">
                <router-link class="head-link" to="/about" :style="[path == 'about' ? active : '']">关于</router-link>
            </div>
            <div class="head-child" v-if="!this.$store.state.user.auth.isLogin">
              <div class="head-nav">
                <router-link class="head-link" to="/user/register" :style="[path == 'loginout' ? active : '']">注册</router-link>
              </div>
              <div class="head-nav">
                <router-link class="head-link" to="/user/login" :style="[path == 'loginout' ? active : '']">登录</router-link>
              </div>
            </div>
            <div class="head-child"  v-if="this.$store.state.user.auth.isLogin">
              <div class="head-nav">
                <router-link class="head-link" to="/set" :style="[path == 'set' ? active : '']">设置</router-link>
              </div>
              <div class="head-nav">
                <a class="head-link" @click="loginout">退出</a>
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
  computed: {},
  data () {
    return {
      active: {
        'color': '#00b5ad',
        'border-bottom': '1px solid #00b5ad'
      },
      path: this.$route.path.split('/')[1]
    }
  },
  mounted () {
    // todo
  },
  methods: {
    loginout () {
      this.$store.dispatch('accountLogoutSubmit')
      this.$router.push('/')
    }
  },
  watch: {
    '$route': function () {
      this.path = this.$route.path.split('/')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: #ddd solid 1px;
    background-color: #444;
    color: lightyellow;
  }

  .head-right {
    float: right;
    line-height: 50px;
    .head-nav {
      float: left;
      color: #555;
      .head-link {
        font-size:13px;
        color: #ccc;
        padding: 10px 15px;
      }
    }
  }

  .head-child {
    padding-top: 1px;
    float: left;
    color: #555;
  }

  .icon {
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
    text-align: left;
  }

  .bg-purple-dark {
    background: #fff;
  }

  .grid-content {
    min-height: 50px;
  }

  .this-login {
    color: #ccc;
    font-weight: 600;
  }

  .this-login:hover {
    color: #00b5ad;
    border-bottom: 2px solid #00b5ad;
    margin-bottom: -2px;
  }

  .search-input {
    background-repeat: no-repeat;
    background-position: 9px;
    background-color: #f1f1f1;
    padding-left: 25px;
    border: 0px solid #c6c6c6;
    box-shadow: none;
    transition: all 0.15s ease-in 0.1s;
    margin-top: 1px;
    height: 35px;
    width: 200px;
    border-radius: 100px;
  }

  .search-input:focus,
  .search-input:hover,
  .search-input:active {
    border-radius: 100px;
    box-shadow: none;
    border: 0px solid #c6c6c6;
    background: no-repeat 0 0 scroll #f1f1f1;
    border: none;
    outline: medium;
  }

  .dropbtn {
    float: right;
    color: #555;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    padding-left: 50px;
  }

  .dropdown {
    padding-left: 20px;
    float: right;
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    z-index: 1;
    margin-top: 50px;
    font-size: 15px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-content a {
    padding-left: 30px;
    color: black;
    text-decoration: none;
    display: block;
    border: 1px solid #eee;
  }

  .dropdown-content a:hover {
    cursor: pointer;
    background-color: #f1f1f1;
    color: #00b5ad;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #fff;
  }

  img {
    position: absolute;
    width: 40px;
    border: 1px solid #aaa;
    border-radius: 100px;
    margin-top: 5px;
  }

  #btn-topic {
    background-color: tomato;
    font-size: 16px;
    padding: 10px 20px 10px 20px;
    border-radius: 100px;
    color: #fff;
    border: 1px solid tomato;
  }

  #btn-topic:hover {
    color: #00b5ad;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #00b5ad;
    box-shadow: none;
    text-decoration: none;
  }

  .label-warning {
    margin-right: 20px;
  }

  .notification {
    color: tomato;
  }
</style>
