import { createStore,applyMiddleware} from "redux"
// 异步处理方法 在redux中
import thunk  from 'redux-thunk'

import {GetUser,LogOut} from '../api/user'

function reducer(state={user:{},location:[{name:'首页',path:"/admin/city"}]},action){
    switch(action.type){
        case "SET_USER":
            return {...state,user:action.user}
        case "SET_LOCATION":
            return {...state,location:action.location}
        default:
            return state;
    }
}



// 导出带异步 action操作的仓库
export const store = createStore(reducer,applyMiddleware(thunk));

// 导出动作
export const actions= {
    setUser:user=>({type:"SET_USER",user})
}

// 异步获取用户信息 并更新user  （vuex 里面actions）
export function setUser(callback){
    return dispatch => GetUser().then(res=>{
        dispatch(actions.setUser(res))
        // 如果存在回调函数，就执行回调函数
        if(callback){callback()}
    })
    .catch(err=>console.error(err))
}

export function singOut(callback){
    return dispatch => LogOut().then(res=>{
        dispatch(actions.setUser({}))
        // 如果存在回调函数，就执行回调函数
        if(callback){callback()}
    })
    .catch(err=>console.error(err))
}