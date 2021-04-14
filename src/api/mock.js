var Mock = require('mockjs')

Mock.mock( /\order\/list/,{
  "code": '0',
  "result": {
     
 
    pagination:{
      "current|1-5": 1 ,
      "pageSize": 10,
      "total": 120,
      "page_count": 9,
    }, 
    "item_list|10": [{
      "id": 2959165,
      "key|100-500":1,
      "order_sn": /T180[0-9]{6}/,
      "bike_sn": "800116090",
      "user_id": 908352,
      "user_name": "@cname",
      "mobile": /1[0-9]{10}/,
      "distance": 2000,
      "total_time": 4000,
      "status|1-2": 1,
      "start_time": "@datetime",
      "end_time": "@datetime",
      "total_fee": 1000,
      "user_pay": 300
    }]
  }
})


Mock.mock( /\order\/detail/g,{
  "code":'0',
  "msg":'',
  "result": {
    "status": 2,
    "order_sn": "T1803244422704080JGJI",
    "bike_sn": "802410001",
    "mode|1-2": 1,
    "start_location": "北京市昌平区回龙观东大街",
    "end_location": "北京市海淀区奥林匹克公园",
    "city_id": 1,
    "mobile": "13597482075",
    "user_name": "@cname",
    "distance": 10000,
    "bike_gps": "116.398806,40.008637",
    "start_time": 1521865027000,
    "end_time": 1521865251000,
    "total_time": 224,
    "position_list": [{
      "lng": 116.361221,
      "lat": 40.043776
    }, {
      "lng": 116.363736,
      "lat": 40.038086
    }, {
      "lng": 116.364599,
      "lat": 40.036484
    }, {
      "lng": 116.373438,
      "lat": 40.03538
    }, {
      "lng": 116.377966,
      "lat": 40.036263
    }, {
      "lng": 116.379762,
      "lat": 40.03654
    }, {
      "lng": 116.38084,
      "lat": 40.033225
    }, {
      "lng": 116.38084,
      "lat": 40.029413
    }, {
      "lng": 116.381343,
      "lat": 40.021291
    }, {
      "lng": 116.381846,
      "lat": 40.015821
    }, {
      "lng": 116.382637,
      "lat": 40.008084
    }, {
      "lng": 116.398806,
      "lat": 40.008637
    }],
    "area": [{
        "lng": "116.274737",
        "lat": "40.139759",
        "ts": null
      },
      {
        "lng": "116.316562",
        "lat": "40.144943",
        "ts": null
      },
      {
        "lng": "116.351631",
        "lat": "40.129498",
        "ts": null
      },
      {
        "lng": "116.390582",
        "lat": "40.082481",
        "ts": null
      },
      {
        "lng": "116.38742",
        "lat": "40.01065",
        "ts": null
      },
      {
        "lng": "116.414297",
        "lat": "40.01181",
        "ts": null
      },
      {
        "lng": "116.696242",
        "lat": "39.964035",
        "ts": null
      },
      {
        "lng": "116.494498",
        "lat": "39.851306",
        "ts": null
      },
      {
        "lng": "116.238086",
        "lat": "39.848647",
        "ts": null
      },
      {
        "lng": "116.189454",
        "lat": "39.999418",
        "ts": null
      },
      {
        "lng": "116.244646",
        "lat": "39.990574",
        "ts": null
      },
      {
        "lng": "116.281441",
        "lat": "40.008703",
        "ts": null
      },
      {
        "lng": "116.271092",
        "lat": "40.142201",
        "ts": null
      },
      {
        "lng": "116.271092",
        "lat": "40.142201",
        "ts": null
      }
    ],
    "area_list": null,
    "npl_list": [{
      "id": 8265,
      "name": "北辰世纪中心-a座",
      "city_id": 1,
      "type": 3,
      "status": 0,
      "map_point": "116.39338796444|40.008120315215;116.39494038009002|40.008177258745;116.39496911688|40.006268094213;116.39512457763|40.004256795877;116.39360214742|40.004222412241;116.39357190147|40.005075745782;116.39351397873|40.005836165232;116.39338796444|40.008120315215",
      "map_point_array": ["116.39338796444|40.008120315215", "116.396053|40.008273", "116.396448|40.006338", "116.396915|40.004266", "116.39192|40.004072", "116.391525|40.004984", "116.391381|40.005924", "116.391166|40.007913"],
      "map_status": 1,
      "creator_name": "赵程程",
      "create_time": 1507863539000
    }]
  }
})

 


Mock.mock( /\/order\/finish_order/g,{
  "code":'0',
  "result": 'Ok'
})

Mock.mock( /\/order\/ebike_info/g,{
  "code":'0',
  "result": {
    "id": 27296,
    "bike_sn": "800116116",
    "battery": 100,
    "start_time": "@datetime",
    "location": "北京市海淀区奥林匹克公园"
  }
})

Mock.mock(/open_city.*/,
  function(options) {
    // 拿到？后面等于号的值
    let num =  options.url.split("?").pop().split("=").pop()*1||1;
  
    return Mock.mock({
  'code':'0',
  "result": {
    pagination:{
      "current": function(){return num;},
      "pageSize": 10,
      "total": 120,
      "page_count": 9,
    },   
    "item_list|10": [{
      "key|+1":1,
      "id|+1": 1,
      "name|1":['上海','北京','郑州'],
      // @city
      "mode|1-2": 1,
      "op_mode|1-2": 1,
      "franchisee_id": 77,
      "franchisee_name": "松果自营",
      "city_admins|1-2": [{
        "user_name": "@cname",
        "user_id|+1": 10001
      }],
      "open_time": "@datetime",
      "sys_user_name": "@cname",
      "update_time": '@datetime'
    }]
  }
})})
Mock.mock(/\/city\/open/,{
  "code":0,
  "result": "开通成功"
})

Mock.mock(/\/table\/list1/,{
  result:{
  "code":0,
  "result": "ok",
  "page_size": 10,
  "total_count": 85,
  "page_count": 9,
  "list|10": [
    {"id": /[0-9]{6}/,
    "username": "@cname",
    "sex": /[0-1]/,
    "state": /[1-5]/,
    "interest": /[1-8]/,
    "isMarried": /[0-1]/,
    "birthday": "@datetime",
    "address": "@county(true)",
    "time": "@time('H:m:s')"
  }     
  ]
}
})

Mock.mock(/\/user\/delete/,{
  "code":0
})
Mock.mock(/\/user\/add/,{
  "code":0,
  "result": "Ok"
})
Mock.mock(/\/user\/edit/,{
  "code":0,
  "result": "Ok"
})
// 输出结果
// console.log(JSON.stringify(data, null, 4),"beauty")


Mock.mock(/\/map\/bike_list/,{
  "code":0,
  "result": {
    "total_count": 100,
    "bike_list": ['116.356619,40.017782', '116.437107,39.975331', '116.34972,40.070808', '116.323849,39.964714', '116.404912,40.015129', '116.365243,39.958078'],
    "route_list": ['116.353101,40.067835', '116.357701,40.053699', '116.374086,40.027626', '116.397801,40.01641'],
    "service_list": [{
        "lng": "116.274737",
        "lat": "40.139759",
        "ts": null
      },
      {
        "lng": "116.316562",
        "lat": "40.144943",
        "ts": null
      },
      {
        "lng": "116.351631",
        "lat": "40.129498",
        "ts": null
      },
      {
        "lng": "116.390582",
        "lat": "40.082481",
        "ts": null
      },
      {
        "lng": "116.38742",
        "lat": "40.01065",
        "ts": null
      },
      {
        "lng": "116.414297",
        "lat": "40.01181",
        "ts": null
      },
      {
        "lng": "116.696242",
        "lat": "39.964035",
        "ts": null
      },
      {
        "lng": "116.494498",
        "lat": "39.851306",
        "ts": null
      },
      {
        "lng": "116.238086",
        "lat": "39.848647",
        "ts": null
      },
      {
        "lng": "116.189454",
        "lat": "39.999418",
        "ts": null
      },
      {
        "lng": "116.244646",
        "lat": "39.990574",
        "ts": null
      },
      {
        "lng": "116.281441",
        "lat": "40.008703",
        "ts": null
      },
      {
        "lng": "116.271092",
        "lat": "40.142201",
        "ts": null
      },
      {
        "lng": "116.271092",
        "lat": "40.142201",
        "ts": null
      }
    ]
  }
})


Mock.mock(/\/role\/list/,{
  "code": 0,
  "result": {
    "page": 1,
    "page_size": 10,
    "total_count": 25,
    "page_count": 3,
    "item_list|7": [{
      "id|+1": 1,
      "role_name": /(管理人员)|(客服专员)|(财务专员)|(市场专员)|(人力专员)|(研发)|(测试)|(系统管理员)/,
      "status|0-1": 1,
      "authorize_user_name": "@cname",
      "authorize_time": 1521270166000,
      "create_time": 1499305790000,
      "menus": ["/home", "/ui/buttons", "/ui/modals", "/ui/loadings", "/ui/notification", "/ui/messages", "/ui/tabs", "/ui/gallery", "/ui/carousel", "/ui"]
    }]
  }
})

Mock.mock(/\/role\/create/,{
  "code": 0
})
Mock.mock(/\/permission\/edit/,{
  "code": 0
})
Mock.mock(/\/role\/user_list/,{
  "code": 0,
  "result|20": [{
    "status|0-1": 0,
    "user_id|+1": 1,
    "user_name": "@cname"
  }]
})
 