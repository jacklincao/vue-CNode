<template>
  <div id="load-index">
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0;margin-top: 10px;">
      <el-col :span="17" :offset="1">
        <div class="boxnav">
          <ul class="childNav">
            <li><span @click="getAppointArticle" val="all" :class="currentTab==='all'? 'special' : ''">全部</span></li>
            <li><span @click="getAppointArticle" val="good" :class="currentTab==='good'? 'special' : ''">精华</span></li>
            <li><span @click="getAppointArticle" val="share" :class="currentTab==='share'? 'special' : ''">分享</span>
            </li>
            <li><span @click="getAppointArticle" val="ask" :class="currentTab==='ask'? 'special' : ''">问答</span></li>
            <li><span @click="getAppointArticle" val="job" :class="currentTab==='job'? 'special' : ''">招聘</span></li>
            <li><span @click="getAppointArticle" val="dev" :class="currentTab==='dev'? 'special' : ''">客户端测试</span></li>
          </ul>

        </div>
        <div style="background-color: #fff;">
          <Articles :articles="articles" :tab="currentTab"></Articles>
          <el-pagination
            background
            @current-change="getArticle"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
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
              <span @click="toPublishTopic" style="color: white;letter-spacing: 2px;">
                发布话题
              </span>
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
import Articles from './articles'
import {ArticleApi} from '@/tools/api'

export default {
  data () {
    return {
      time: '',
      articles: [],
      currentPage: 1,
      pageSize: 20,
      currentTab: 'all'
    }
  },
  created () {
    this.getArticle()
  },
  components: {
    Articles
  },
  mounted () {

  },
  methods: {
    getArticle: function (val = 1, tab = 'all') {
      let requestParam = {
        'page': val,
        'limit': this.pageSize,
        tab
      }
      ArticleApi.getArticles(requestParam).then((res) => {
        this.articles = res.data
      }).catch((err) => {
        alert('发生错误:' + err)
      })
    },
    getAppointArticle (event) {
      this.currentTab = event.target.attributes.val.value
      this.getArticle(1, this.currentTab)
    },
    toPublishTopic () {
      this.$router.push({path: '/publishtopic'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-body {
    margin-top: 30px;
  }

  .boxnav {
    background-color: #f6f6f6;
    padding: 10px;
    .childNav {
      margin-top: 0px;
      margin-bottom: 0px;
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

  .login {
    background-color: #5bc0de;
    color: white;
    height: 40px;
    border-radius: 4px;
    margin-right: 10px;
    display: flex;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }
</style>
