/* 登录页面 */
import React, { Component,createRef } from 'react';
import {Logins} from '../../api/user'
import {store,setUser} from '../../store'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        // 创建两个dom引用
        this.uname = createRef(null);
        this.upass = createRef(null); 
    }

    login(){
        console.log(this.uname)
        // 执行登录命令
        Logins({
            fmdo:"login",
            dopost:"login",
            userid:this.uname.current.value,
            pwd:this.upass.current.value,
        })
        .then(res=>{
            
            console.log("获取用户信息");
            // 状态为1表示登录成功
            if(res.status===1){
                this.uname.current.value="";
                this.upass.current.value="";
                window.localStorage.setItem("name","曾庆林");
                // 获取到状态中的重定向数据
                const redirect = (this.props.location.state&& this.props.location.state.reidrect) || "/admin"
                //    跳转到对应的页面
                setUser(()=> this.props.history.replace(redirect))(store.dispatch)
               
              
            }else{
                alert(res.msg);
            }
        })
        .catch(err=>console.error(err))
    }
 
    render() { 
        return ( <div>
            <h1>登录</h1>
            用户名: <input type="text" ref={this.uname}/> <br/>
            密码: <input type="password"  ref={this.upass}/> <br/>
            <button onClick={()=>this.login()}>登录</button>
            </div> );
    }
}
 
export default Login;