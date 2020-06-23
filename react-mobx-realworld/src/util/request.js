import axios from 'axios';
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status !== 200) {
    alert('ERROR')
  } else {
    return response.data;
  }
}, function (error) {
  // 对响应错误做点什么
  alert('ERROR');
  return Promise.reject(error);
});
// 超时 
axios.defaults.baseURL = 'https://conduit.productionready.io/api';