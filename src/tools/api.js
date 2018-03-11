/**
 * 项目api
 */
import { server } from './servers'

/**
 * 登陆
 */
export class LoginApi {
  static login (params) {
    return server.connection('POST', 'https://cnodejs.org/api/v1/accesstoken', params)
  }

  static logout () {
    // return server.connection('POST', 'https://cnodejs.org/signout')
  }
}

export class ArticleApi {
  static getArticles (params) {
    return server.connection('GET', 'https://cnodejs.org/api/v1/topics', params)
  }
  static publishTopic (params) {
    return server.connection('POST', 'https://cnodejs.org/api/v1/topics', params)
  }
}

/**
 * 首页
 */
export class Home {

}
