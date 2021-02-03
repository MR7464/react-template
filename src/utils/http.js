import local from './local'
import qs from 'qs'
// import { Toast } from 'antd'
import axios from 'axios'

const baseURL = process.env.APP_baseURL;
const setting = require('./../../package.json')
const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'api-version': setting.version
  }
})

//请求拦截处理
instance.interceptors.request.use(
  async function(config) {
    config.headers['Authorization'] = 'Bearer ' + (await local.get('token'))
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // Toast.fail('网络错误')
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

//返回拦截处理
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    const { data } = response

    return data
  },
  function(error) {
    if (!error.response) return Promise.reject(error)
    const serverResData = error.response.data
    if (serverResData.code === 406) window.location.href = '/login'
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 调用接口
function request(url, params, type, method) {
  const config = {
    url,
    method
  }
  let data = params
  const targetFilds = ['get', 'delete'].includes(method) ? 'params' : 'data'
  if (type === 'form') {
    data = qs.stringify(data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  config[targetFilds] = data
  return instance(config)
}

const http = {
  get: (url, params, type = 'json') => {
    return request(url, params, type, 'get')
  },
  post: (url, params, type = 'json') => {
    return request(url, params, type, 'post')
  },
  patch: (url, params, type = 'json') => {
    return request(url, params, type, 'patch')
  },
  delete: (url, params, type = 'json') => {
    return request(url, params, type, 'delete')
  }
}

export default http;
