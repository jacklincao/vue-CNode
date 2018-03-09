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

/**
 * 首页
 */
export class Home {

}
