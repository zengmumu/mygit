/* 路由配置页面 */
import {Redirect, Route,Switch, useHistory} from 'react-router-dom'
import Login from '../views/user/Login'
import Admin from '../views/admin'
import Private from '../views/user/Private'
import {useEffect} from 'react'
import {store,setUser} from '../store'
import CityAdmin from '../views/city'
import OrderList from '../views/order/OrderList'
import OrderDetail from '../views/order/OrderDetail'
import Comment from '../views/comment'
export default function RouterView (props){
    console.log(props,"view")
    const history = useHistory();
    useEffect(()=>{
        setUser(()=>{
         history.push("/admin")
        })(store.dispatch)
      },[])
    return(<Switch>
        <Route path="/" exact component={Login}></Route>
        <Private path="/admin" >
            <Admin  history={history}>
                <Switch>
                    <Route path="/admin/city" component={CityAdmin}></Route>
                    <Route path="/admin/orderlist" component={OrderList}></Route>
                    <Route path="/admin/orderDetail/:id" component={OrderDetail}></Route>
                    <Route path="/admin/comment" component={Comment}></Route>
                    <Redirect from="/admin" to="/admin/city"></Redirect>
                </Switch>
            </Admin>
        </Private>
         
    </Switch>)
}