/**登录和注册两个异步action */



import { AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER,RECEIVE_USER_LIST} from './actiontypes';
import { reqLogin,reqRegister,reqUpdateUser,reqUser,reqUserList} from '../api/index';


const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user})
const receiveUser=(user)=>({type:RECEIVE_USER,data:user})
const receiveUserList=(users)=>({type:RECEIVE_USER_LIST,data:users})
export const resetUser=(msg)=>({type:RESET_USER,data:msg})
export const register=(user)=>{
    const {username,password,password2,type}=user
    if(password!==password2){
        return errorMsg('两次密码要一致！')
    }
    if(!username){
        return errorMsg('用户名必须指定！')
    }
    return async dispatch=>{
        const response=await reqRegister({username,password,type})
        const result=response.data
        if(result.code===0){
            dispatch(authSuccess(result.data))
        }
        else{
            dispatch(errorMsg(result.msg))
        }
    }
}
export const login=(user)=>{

    const {username,password}=user
    if(!password){
        return errorMsg('密码必须指定！')
    }
    if(!username){
        return errorMsg('用户名必须指定！')
    }
    return async dispatch=>{
        const response=await reqLogin(user)
        console.log(response.data);
        const result=response.data
        if(result.code===0){
            dispatch(authSuccess(result.data))
        }
        else{
            dispatch(errorMsg(result.msg))
        }
    }
}
export const update=(user)=>{
return async dispatch=>{
    const response=await reqUpdateUser(user)
    const result=response.data
    if(result.code===0){
        dispatch(receiveUser(result.data))
    }else{
        dispatch(resetUser(result.msg))
    }

}
}
export const getUser=()=>{
    return async dispatch=>{
        const response=await reqUser()
        const result=response.data
        if(result.code===0){
            dispatch(receiveUser(result.data))
        }else{
            dispatch(resetUser(result.msg))
        }


    }
}
export const getUserList=(type)=>{
    return async dispatch=>{
        const response= await reqUserList(type)
        const result=response.data
        if(result.code===0){
            dispatch(receiveUserList(result.data))
        }
    }
}