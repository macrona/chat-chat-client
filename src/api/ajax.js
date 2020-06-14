/*能发送ajax请求的模块，返回值为Promise对象 */
import  axios from 'axios';

axios.defaults.withCredentials=true;
export default function ajax(url,data={},type='GET') {

  if (type==='GET'){
      //data的所有属性 数组
      let paramStr=''
      
      Object.keys(data).forEach(key=>{
            paramStr+=key+'='+data[key]+'&'
      })
      if(paramStr){
          paramStr=paramStr.substring(0,paramStr.length-1)
      }
      url=url+'?'+paramStr
      return axios.get(url)
  }
  else{
      return axios.post(url,data)
  }
};
