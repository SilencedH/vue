import axios from "axios";
import {Message} from "element-ui"
const axiosInstance = axios.create({
  baseURL: '/youzule-blog-service'
});

/*配置拦截器*/
//请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
  	
    //在发送请求之前做些什么
    return config;
  },
  (error) => {
	
    //对请求错误做些什么
    return Promise.reject(error);
  }
);
//响应拦截
axiosInstance.interceptors.response.use(
  (response) => {
  	//响应之前
    if(response.status == 200){
      let {code,msg,data} = response.data;
      if(code == 0){
        return data;
      }else{
        Message({
          message:msg,
          type:"error"
        });
      }
    }else{
      Message({
        message:"出错了,代码: " + response.status,
        type:"error"
      })
    }
  },
  //响应错误，404之类
  (error) => {
  	Message({
  		type:"error",
  		message:error
  	});
  }
);
export default axiosInstance;
