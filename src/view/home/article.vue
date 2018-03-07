<template>
  <div style="    padding: 15px;
    height: 20px;">
    <a :title="article.author.loginname" style="float: left;">
      <img :src="article.author.avatar_url" class="author">
    </a>
    <div style="float: left;width: 80px;font-size: 14px;text-align: center;">
      <span title="回复次数">{{article.reply_count}}</span><span title="点击次数">/{{article.visit_count}}</span>
    </div>
    <span style="display: inline; float: right;">{{getTimeLong}}</span>
    <div style="float: left;">
      <span :class="[isSpecial ? 'special' : 'ordinary', isNoClass ? 'noTab' : '']">{{getArticleTab}}</span>
      <a :href='"https://cnodejs.org/api/v1/topic/"+article.id'>{{article.title}}</a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
  data: function () {
    return {
      isSpecial: false,
      isNoClass: false,
      tab: ''
    }
  },
  props: ['article', 'tabType'],
  computed: {
    getTimeLong : function () {
      if(this.article.last_reply_at) {
        let last_replyTime = new Date(this.article.last_reply_at)
        let now = new Date()
        let hoursAgo
        let minuteAgo
        let timesLong = now - last_replyTime
        let daysAgo = Math.floor(timesLong / 86400000)

        if(daysAgo < 1) {
          hoursAgo = Math.floor(timesLong / 3600000)
          if(hoursAgo < 1) {
            minuteAgo = Math.floor(timesLong / 60000)
            return minuteAgo + "分钟前"
          }
          else {
            return hoursAgo + "小时前"
          }
        }
        else {
          return daysAgo + "天前"
        }
      }
    },
    getArticleTab: function () {
      if(this.tabType === 'all' || this.tabType === 'good') {
        this.isNoClass = false
        if(this.article.top) {
          this.isSpecial = true
          return "置顶"
        }
        else if(this.article.good) {
          this.isSpecial = true
          return "精品"
        }
        else {
          this.isSpecial = false
          switch (this.article.tab) {
            case 'ask' :
              return "问答"
              break
            case 'share' :
              return "分享"
              break
            case 'job' :
              return "求职"
              break
            case 'dev' :
              return "测试"
          }
        }
      }
      else {
        this.isSpecial = false
        this.isNoClass = true
        return ""
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.author {
  width: 30px;
  height: 30px;
}
  .special {
    background-color: #80bd01;
    color: white;
    padding: 2px;
    border-radius: 5px;
  }

  .ordinary {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px;
    border-radius: 5px;
  }

  .noTab {
    border-radius: 0px;
    padding: 0px;
    color: inherit;
    background-color: inherit;
  }
</style>
