import request from '../utils/request.js'
import qs from 'qs';

// 登录
function Logins(data){
    return new Promise((resolve,reject)=>{
        request.post("/member/index_login.php",qs.stringify(data))
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })
}
function GetUser(){
    return new Promise((resolve,reject)=>{
        request.get("/member/ajax_login.php")
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })  
}
function LogOut(){
    return new Promise((resolve,reject)=>{
        request.post("/member/index_login.php",qs.stringify({dopost:"exit"}))
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })  
}
export {Logins,GetUser,LogOut}