import React, { Component } from 'react';
import {GetCity} from '../../api/admin'
import { Table, Button } from 'antd';
import {store} from '../../store'
class CidyAdmin extends Component {
    constructor(props) {
        super(props);
        // cityList 表格数据，pagination 分页，选择的行key
        this.state = { cityList:[],pagination:{},selectedRowKeys: []}
    }
    // 组件挂载完毕获取城市
    componentDidMount(){
        this. getCity();
        store.dispatch({type:"SET_LOCATION",location:[{name:"首页",path:"/admin/city"}]})
    }
    getCity = num => {
        GetCity({page:num})
        .then(res=>{
            // 更新数据
            this.setState({cityList:res.result.item_list,pagination:res.result.pagination})
            console.log(res)
        })
        .catch(err=>console.log(err))
    }
    // 行选择
   
    //   当选择时候
      onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      };
    //   当表格发送变化（分页，过滤，排序）
      tabChange = (pagination, filters, sorter)=>{
          if(pagination.current!==this.state.pagination.current){
            this.getCity(pagination.current)
          }
        //   console.log(pagination,this.state.pagination)
      }
      delGroup = ()=>{
        console.log(this.state.selectedRowKeys)
        // 获取到选择的行
        var rowkeys = this.state.selectedRowKeys;
        // 获取到当前城市
        var cityList = [...this.state.cityList];
        // 遍历所有的cityList
        for(var i=0;i<cityList.length;i++){
          // 遍历所有选择的行
          for(var j=0;j<rowkeys.length;j++){
            if(cityList[i].key===rowkeys[j]){
              // 如果行对应的数据等于cityList当前行的key，那么就删除当前行
              cityList.splice(i,1);

            }
          }
        }
      //  更新cityList城市列表
        this.setState({cityList:cityList})
      
      }
    render() { 
        var rowSelection = {
            selectedRowKeys:this.selectedRowKeys,
            onChange: this.onSelectChange,
          };
       //  列表数据
        const columns = [
            {
              title: '城市id',
              dataIndex: 'id',
              sorter: (a, b) => a.id - b.id,
              
            },
            {
              title: '城市名称',
              dataIndex: 'name',
            },
            {
              title: '用车模式',
              dataIndex: 'mode',
              render:item=>{
                  if(item===1){return "禁停区"}
                  else{return "停车点"}
              }
            },
            {
            title: '营运模式',
            dataIndex: 'op_mode',
            filters: [
              {
                text: '自营',
                value: 1,
              },
              {
                text: '加盟',
                value: 2,
              }],
            onFilter: (value, record) => record.op_mode=== value,
            render:item=>{
              if(item===1){return "自营"}
              else{return "加盟"}
             }
            },
            {
            title: '授权加盟商',
            dataIndex: 'franchisee_name',
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render:item=>{
                     var  str = "";
                     for(var i=0;i<item.length;i++){
                         str += item[i].user_name +" ";
                     }
                     return str;
                }
                },
            {
            title: '城市开通时间',
            dataIndex: 'open_time',
            },
            {
                title: '操作时间',
                dataIndex: 'update_time',
             },
             ,
            {
                title: '操作人',
                dataIndex: 'sys_user_name',
             }
          ];
        return (
            <div>
                <h1>城市管理</h1>
                <Button onClick={this.delGroup}>批量删除</Button>
                {/* onChange表格发送变化，rowSelection 表格选中 columns表头  pagination 分页 */}
                <Table 
                onChange={(pagination, filters, sorter)=>{this.tabChange(pagination, filters, sorter)}} 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={this.state.cityList} 
                pagination={this.state.pagination} />
            </div>
         );
    }
}
 
export default CidyAdmin;