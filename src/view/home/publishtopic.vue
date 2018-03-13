<template>
  <div id="load-index">
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0;margin-top: 10px;">
      <el-col :span="17" :offset="1">
        <div class="boxnav">
          <ul class="childNav">
            <li><router-link to="/" style="color: #80bd01;">主页</router-link>&nbsp;<span>/&nbsp;发布话题</span></li>
          </ul>
        </div>
        <div class="box-content">
          <form class="form-padding" name="contentForm">
            <div class="item-top">
              <label>选择板块：</label>
              <el-select v-model="topic.tab" placeholder="请选择">
                <el-option
                  v-for="item in topicOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="item-top">
              <el-input v-model="topic.title" placeholder="标题字数10字以上"></el-input>
            </div>
            <div class="item-top">
              <!--<quill-editor v-model="content">-->
              <!--</quill-editor>-->
              <RichTextEditor :content="topic.content" @on-content-change="onContentChange"></RichTextEditor>
            </div>
            <div class="item-top">
              <el-button type="primary" @click="submitTopic">提交</el-button>
            </div>
          </form>
        </div>
      </el-col>
      <el-col :span="5" :offset="0">
        <div style="display: flex; flex-direction: column">
          <div class="boxnav">
            Markdown 语法参考
          </div>
          <div class="userbox ">
            <div class="item" style="margin-top: 15px;">### 单行的标题</div>
            <div class="item">**粗体**</div>
            <div class="item">`console.log('行内代码')`</div>
            <div class="item">```js\n code \n``` 标记代码块</div>
            <div class="item">[内容](链接)</div>
            <div class="item">![文字说明](图片链接)</div>
            <div class="item"><a class="a" target="_blank" href="https://segmentfault.com/markdown">Markdown 文档</a></div>
          </div>
          <div class="userbox">
            <div class="boxnav">
              话题发布指南
            </div>
            <div class="userbox ">
              <div class="item" style="margin-top: 15px;">尽量把话题要点浓缩到标题里</div>
              <div class="item">代码含义和报错可在 <a class="a" href="http://segmentfault.com/t/node.js">SegmentFault 提问</a></div>
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
import RichTextEditor from '@/components/common/RichTextEditor.vue'
import {ArticleApi} from '@/tools/api'
export default {
  components: {RichTextEditor},
  data () {
    return {
      topic: {
        title: '',
        tab: '',
        content: ''
      },
      topicOptions: [{
        value: 'dev',
        label: '客户端测试'
      }]
    }
  },
  methods: {
    submitTopic: function () {
      let params = {
        title: this.topic.title,
        tab: this.topic.tab,
        content: this.topic.content,
        accesstoken: 'd96dfd3e-a9a7-47cd-8356-31c4fbb4ba6d'
      }
      ArticleApi.publishTopic(params).then((res) => {
        this.$router.push({path: '/'})
      }).then((err) => {
        alert('发生错误:' + err)
      })
    },
    onContentChange: function (val) {
      this.topic.content = val
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-body {
    margin-top: 30px;
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

  .a {
    color: #778087;
    text-decoration: none;
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
