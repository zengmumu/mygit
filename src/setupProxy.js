// 导入中间件
const { createProxyMiddleware } = require('http-proxy-middleware')
// 导出配置
module.exports = function (app) {
    // 标识符 /member
    app.use("/member",
        createProxyMiddleware({
            // 代理地址
            target: 'https://www.520mg.com',
            changeOrigin: true
           
        })
    );
    app.use("/start",
        createProxyMiddleware({
            // 代理地址
            target: 'https://www.520mg.com',
            changeOrigin: true
           
        })
    );
    app.use("/plus",
    createProxyMiddleware({
        // 代理地址
        target: 'https://www.520mg.com',
        changeOrigin: true
       
    })
)
}
// 当去请求 http://localhost:3000/memeber/xxx.php
// 当去请求 /memeber/xxx.php
// 本地服务器先 检测请求地址 有/member 标识符，
// 向真正服务器 https://www.520mg.com/memeber/xxx.php 请求数据
// 返回给浏览器