import React, { Component,createRef } from 'react';
import {Map, Marker, NavigationControl, InfoWindow,Polygon,Polyline} from 'react-bmap'
import {GetOrderDetail} from '../../api/admin' 
import {store} from '../../store/index.js'
class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { pageData:{}}
        this.map = null;
        this.info = createRef(null);
    }
    componentDidMount() {
        this.getOrderDetail()
        store.dispatch({type:"SET_LOCATION",
        location:[
            {name:"首页",path:"/admin/city"},
            {name:"订单列表",path:"/admin/orderlist"},
            {name:"订单详情",path:"/admin/orderDetail/"+this.props.match.params.id}]})
    }
    getOrderDetail(){
        GetOrderDetail({id:this.props.match.params.id})
        .then(res=>{
            this.setState({pageData:res.result})
        })
        .catch(err=>console.log(err))
    }
    render() { 
        const position_list = this.state.pageData.position_list||[];
        var str =  this.state.pageData.user_name+"<br/>";
        str+=this.state.pageData.total_time+"m<br/>";
        var centerP = position_list[Math.floor(position_list.length/2)]||{lng: 116.402544, lat: 39.928216}
        return ( 
            <div>
                <h3>订单详情-{this.props.match.params.id}</h3>
                {position_list.length&&<Map center={centerP} zoom="14" style={{height:"600px"}} >
                    <Marker position={{lng: 116.402544, lat: 39.928216}} />
                    <NavigationControl /> 
                    <Polygon 
                        fillColor='red' 
                        strokeColor='green' 
                        fillOpacity="0.1"
                        path={this.state.pageData.area}
                    />
                    {/* ref={ref => {this.infoWindow = ref.infoWindow}} */}
                    <InfoWindow position={centerP} text={str} title="骑行信息" ref={this.info}/>

                    <Polyline 
                        strokeColor='red' 
                        path={position_list}
                    />
                    <Marker position={position_list[0]} icon="start" events={{"click":e=>{
                        this.info.current.initialize();
                       
                        // this.map.openInfoWindow(this.infoWindow,new window.BMap.Point(centerP.lng, centerP.lat))
                        // this.map.openInfoWindow(this.infoWindow,new window.BMap.Point(position_list[0].lng,position_list[0].lat))
                    }}}/>
                    <Marker position={position_list[position_list.length-1]} icon="end"
                         events={{"click":e=>{
                     
                        // this.map.openInfoWindow(this.infoWindow,new window.BMap.Point(centerP.lng, centerP.lat))
                        // this.map.openInfoWindow(this.infoWindow,new window.BMap.Point(position_list[position_list.length-1].lng,position_list[position_list.length-1].lat))
                    }}}
                    />
                </Map>
                }
            </div>
         );
    }
}
 
export default OrderDetail;