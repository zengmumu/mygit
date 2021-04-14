/**权限页面
 * 当有权限跳转到子（children）
 * 没有权限则重定向到登录页面
 */
import {store} from '../../store'
import {Redirect, Route} from 'react-router-dom'
export default function Private({children,...res}){
    
    // 获取的用户信息的键名集合object.keys() 有长度
    return <Route {...res} render={({location})=>Object.keys(store.getState()["user"]).length?(children):<Redirect to={{pathname:"/",state:{redirect:location.pathname}}}></Redirect>}></Route>
}