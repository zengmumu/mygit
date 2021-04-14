import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {GetOrderList} from '../../api/admin' 
import {store} from '../../store/index.js'
import { Table } from 'antd';
class OrderList extends Component {
    constructor(props) {
        super(props);
        // 初始化列表和分页
        this.state = { pagination:{},item_list:[] }
    }
    componentDidMount() {
        // 获取内容
        this.getOrderList();
        store.dispatch({type:"SET_LOCATION",location:[{name:"首页",path:"/admin/city"},{name:"订单列表",path:"/admin/orderlist"}]})
    }
    getOrderList(data={page:1}){
        GetOrderList(data)
        .then(res=>{
            //  更新列表与分页
            this.setState({pagination:res.result.pagination,item_list:res.result.item_list})
        })
    }
    render() { 
        const columns = [
            {
              title: '订单编号',
              dataIndex: 'order_sn',
              key: 'order_sn',
              render: text => <NavLink to={'/admin/orderDetail/'+text}>{text}</NavLink>,
            },
            {
              title: '车辆编号',
              dataIndex: 'bike_sn',
              key: 'bike_sn',
            },
            {
              title: '用户名',
              dataIndex: 'user_name',
              key: 'user_name',
            },            
            {
              title: '手机号',
              dataIndex: 'mobile',
              key: 'mobile',
            },            
            {
              title: '里程',
              dataIndex: 'distance',
              key: 'distance',
            },            
            {
              title: '行驶时长',
              dataIndex: 'total_time',
              key: 'total_time',
            },            
            {
              title: '开始时间',
              dataIndex: 'start_time',
              key: 'start_time',
            },            
            {
              title: '结束时间',
              dataIndex: 'end_time',
              key: 'end_time',
            }
            ,            
            {
              title: '订单金额',
              dataIndex: 'total_fee',
              key: 'total_fee',
            }
            ,            
            {
              title: '实付金额',
              dataIndex: 'user_pay',
              key: 'user_pay',
            }
        ]
        return ( <div>
            <h3>订单列表</h3>
            <Table columns={columns} dataSource={this.state.item_list} />
        </div> );
    }
}
 
export default OrderList;