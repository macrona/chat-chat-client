import { combineReducers } from 'redux';
import {AUTH_SUCCESS,ERROR_MSG,RESET_USER,RECEIVE_USER ,RECEIVE_USER_LIST} from './actiontypes';

import {getRedirectTo} from "../utils";

const initUser={
    username:'1',
    type:'',
    msg:'',//存错误信息
    redirectTo:'',
}
const initUsers=[]
 function newstate(state=initUser,action){
    switch(action.type){
        case AUTH_SUCCESS :
            const {type,header}=action.data
            return {...action.data,redirectTo: getRedirectTo(type,header)}
        case ERROR_MSG:
            return {...state,msg:action.data}
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return {...initUser,msg:action.data}
        default:
            return state
    }
 }
 function userList(state=initUsers,action){
    switch(action.type){
        case RECEIVE_USER_LIST:
            return action.data
        default:
            return state
    }
}

// export default {newstate,newstate1}
export default combineReducers({
    newstate,userList
})