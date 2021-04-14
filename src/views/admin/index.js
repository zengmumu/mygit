import { useHistory,NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react'
/*管理界面 */
import React, { Component } from 'react';
// 导入状态和退出方法
import { store, singOut } from '../../store'
//  导入布局，菜单，按钮
import { Layout, Menu, Button,Breadcrumb } from 'antd';
// 导入图标
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined
} from '@ant-design/icons';
// 导入logo
import logo from '../../assets/images/logo.svg'

 
// 从布局解析相关模块
const { Header, Footer, Sider, Content } = Layout;
const {SubMenu} =  Menu;

function Admin (props){
    console.log(props,"Admin")
    const [collapsed,setCollapsed] = useState(false)
    const [location,setLocation]=useState(store.getState().location);
    store.subscribe(()=>{
        setLocation(store.getState().location)
    })
    const history = useHistory()
        // css设置全屏
        return (<Layout style={{ width: "100vw", height: "100vh" }}>
            {/* 
             trigger={null}  折叠默认触发器 没有 
             collapsible 允许折叠
              collapsed 值为true 折叠，false 展开
             */}
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" >
                {/* 如果折叠就不显示文字 */}
                {!collapsed&&<span>单车管理</span>}
                <img src={logo} alt=""/>
            </div>
            {/* 菜单   theme="dark"  主题深色  " mode="inline" 模式行内 defaultSelectedKeys={['1']} 默认选项 */}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/city">城市管理</NavLink>
                </Menu.Item>
                <Menu.Item key="/admin/orderlist" icon={<VideoCameraOutlined />}>
                <NavLink to="/admin/orderlist">订单列表</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                <NavLink to="/admin/comment">评论管理</NavLink>
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
        <Layout>
            {/* 头部 */}
            <Header style={{ backgroundColor: "#fff" }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: ()=>{setCollapsed(!collapsed)},
            })}
                <span style={{marginLeft:"24px"}}>{store.getState().user.M_UserName}
                    <Button type="text" onClick={
                        () => {
                            singOut(() => { history.push("/") })(store.dispatch)
                        }
                    }>退出</Button>
                </span>
            </Header>
            <Layout style={{overflow:"auto"}}>
                    <Breadcrumb style={{ margin: '16px',marginBottom:'0' }}>
                        {location&&location.map(item=><Breadcrumb.Item key={item.path}> <NavLink to={item.path}>{item.name}</NavLink></Breadcrumb.Item>)}
                    </Breadcrumb>
                <Content style={{backgroundColor:"#fff",margin:"16px",padding:"8px"}}>
                    {props.children}
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </Layout> );
   
}
 
export default Admin;

 