<template>
  <div id="load-index">
    <el-row :gutter="25" style="margin-left: 0; margin-right: 0;margin-top: 10px;">
      <el-col :span="17" :offset="1">
          <div class="boxnav">
            <ul class="childNav">
              <li><router-link to="/" style="color: #80bd01;">主页</router-link>&nbsp;<span>/&nbsp;API</span></li>
            </ul>
          </div>
          <div class="box-content">
            <div class="message-item">
              以下 api 路径均以 https://cnodejs.org/api/v1 为前缀
              <h1 class="message-item" style="margin: 20px 0px 0px 0px;border-bottom: 1px solid #eee;padding: 10px 0px;">主题</h1>
              <h2 class="apititle">get /topics 主题首页</h2>
              <p class="remark">接收 get 参数</p>
              <ul>
                <li>page <code>Number</code> 页数</li>
                <li>tab <code>String</code> 主题分类。目前有<code>ask</code><code>share</code><code>job</code><code>good</code></li>
                <li>limit <code>Number</code> 每一页的主题数量</li>
                <li>mdrender <code>String</code> 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
              </ul>
              <p class="example">示例：<a href="https://cnodejs.org/api/v1/topics" class="link">/api/v1/topics</a></p>

              <h2 class="apititle">get /topic/:id 主题详情</h2>
              <p class="remark">接收 get 参数</p>
              <ul>
                <li>mdrender <code>String</code> 当为<code>false</code>时，不渲染。默认为<code>true</code>，渲染出现的所有 markdown 格式文本。</li>
                <li>accesstoken <code>String</code> <span>当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的<code>is_collect</code>以及<code>replies</code>列表中的<code>is_uped</code>值。</span></li>
              </ul>
              <p class="example">示例：<a href="https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312" class="link">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>

              <h2 class="apititle">post /topics 新建主题</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> <span>用户的 accessToken</span></li>
                <li>title <code>String</code> 标题</li>
                <li>tab <code>String</code> 目前有<code>ask</code><code>share</code><code>job</code><code>dev</code>。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
                <li>content <code>String</code> 主体内容</li>
              </ul>
              <p class="example">返回值示例</p>
              <p>{success: true, topic_id: '5433d5e4e737cbe96dcef312'}</p>

              <h2 class="apititle">post /topics/update 编辑主题</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> <span>用户的 accessToken</span></li>
                <li>topic_id <code>String</code> 主题id</li>
                <li>title <code>String</code> 标题</li>
                <li>tab <code>String</code> 目前有<code>ask</code><code>share</code><code>job</code></li>
                <li>content <code>String</code> 主体内容</li>
              </ul>
              <p class="example">返回值示例</p>
              <p>{success: true, topic_id: '5433d5e4e737cbe96dcef312'}</p>

              <h1 class="message-item" style="margin: 0px;border-bottom: 1px solid #eee;padding: 10px 0px;">主题收藏</h1>
              <h2 class="apititle">post /topic_collect/collect 收藏主题</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> <span>用户的 accessToken</span></li>
                <li>topic_id <code>String</code> 主题id</li>
              </ul>
              <p class="example">返回值示例</p>
              <p>{"success": true}</p>

              <h2 class="apititle">post /topic_collect/de_collect 取消主题</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> <span>用户的 accessToken</span></li>
                <li>topic_id <code>String</code> 主题id</li>
              </ul>
              <p class="example">返回值示例</p>
              <p>{success: true}</p>

              <h2 class="apititle">get /topic_collect/:loginname 用户所收藏的主题</h2>
              <p class="example">示例：<a href="https://cnodejs.org/api/v1/topic_collect/alsotang" class="link">/api/v1/topic_collect/alsotang</a></p>

              <h1 class="message-item" style="margin: 0px;border-bottom: 1px solid #eee;padding: 10px 0px;">评论</h1>
              <h2 class="apititle">post /topic/:topic_id/replies 新建评论</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> <span>用户的 accessToken</span></li>
                <li>content <code>String</code> 评论的主体</li>
                <li>reply_id <code>String</code>  如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。</li>
              </ul>
              <p class="example">返回值示例</p>
              <p>{success: true, reply_id: '5433d5e4e737cbe96dcef312'}</p>

              <h2 class="apititle">post /reply/:reply_id/ups 为评论点赞</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> <span>用户的 accessToken</span></li>
              </ul>
              <p>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的<code>action</code>字段中，<code>up</code>or<code>down</code>。</p>
              <p class="example">返回值示例</p>
              <p>{"success": true, "action": "down"}</p>

              <h1 class="message-item" style="margin: 0px;border-bottom: 1px solid #eee;padding: 10px 0px;">用户</h1>
              <h2 class="apititle">get /user/:loginname 用户详情</h2>
              <p class="example">示例：<a href="https://cnodejs.org/api/v1/topic_collect/alsotang" class="link">/api/v1/topic_collect/alsotang</a></p>

              <h2 class="apititle">post /accesstoken 验证 accessToken 的正确性</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> <span>用户的 accessToken</span></li>
              </ul>
              <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
              <p class="example">返回值示例</p>
              <p>{success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}</p>

              <h1 class="message-item" style="margin: 0px;border-bottom: 1px solid #eee;padding: 10px 0px;">消息通知</h1>
              <h2 class="apititle">get /message/count 获取未读消息数</h2>
              <p class="remark">接收 get 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p class="example">返回值示例</p>
              <p>{ data: 3 }</p>

              <h2 class="apititle">get /messages 获取已读和未读消息</h2>
              <p class="remark">接收 get 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
                <li>mdrender <code>String</code> 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
              </ul>
              <p class="example">返回值示例</p>
              <pre>
                {
                  data: {
                    has_read_messages: [],
                    hasnot_read_messages: [
                      {
                        id: "543fb7abae523bbc80412b26",
                        type: "at",
                        has_read: false,
                        author: {
                        loginname: "alsotang",
                        avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"
                      },
                      topic: {
                        id: "542d6ecb9ecb3db94b2b3d0f",
                        title: "adfadfadfasdf",
                        last_reply_at: "2014-10-18T07:47:22.563Z"
                      },
                      reply: {
                        id: "543fb7abae523bbc80412b24",
                        content: "[@alsotang](/user/alsotang) 哈哈",
                        ups: [ ],
                        create_at: "2014-10-16T12:18:51.566Z"
                      }
                      },
                    ...
                    ]
                  }
                }
              </pre>

              <h2 class="apititle">post /message/mark_all 标记全部已读</h2>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p class="example">返回值示例</p>
              <pre>{ success: true,
    marked_msgs: [ { id: '544ce385aeaeb5931556c6f9' } ] }</pre>

              <h2 class="apititle">post /message/mark_one/:msg_id 标记单个消息为已读</h2>
              <p>请求示例：<a href="https://cnodejs.org/message/mark_one/58ec7d39da8344a81eee0c14" class="link">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
              <p class="remark">接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p class="example">返回值示例</p>
              <pre>{
  success: true,
  marked_msg_id: "58ec7d39da8344a81eee0c14"
}
              </pre>

              <h1 class="message-item" style="margin: 0px;border-bottom: 1px solid #eee;padding: 10px 0px;">知识点</h1>
              <p>1.如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用<code>/accesstoken</code>接口，登录后长期保存 accessToken。</p>
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
