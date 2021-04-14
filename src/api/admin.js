import request from '../utils/request.js'
import qs from 'qs';

export function GetCity(data){
    return new Promise((resolve,reject)=>{
        request.get("/open_city",{params:data})
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })
}

// 导出并定义api方法
export function GetOrderList(data){
    return new Promise((resolve,reject)=>{
        request.get("/order/list",{params:data})
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })
}

export function GetOrderDetail(data){
    return new Promise((resolve,reject)=>{
        request.get("/order/detail",{params:data})
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })
}

export function GetFeed(data={}){
    return new Promise((resolve,reject)=>{
        request.get("start/get_feed.php",{params:data})
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })
}
 
export function Feed(data={}){
    return new Promise((resolve,reject)=>{
        request.post("plus/feedback_ajax2.php",qs.stringify(data))
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })
}