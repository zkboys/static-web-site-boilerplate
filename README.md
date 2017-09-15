# 服务端渲染
> 基于[react](https://facebook.github.io/react/) + [next.js](https://github.com/zeit/next.js) + [Bootstrap](http://getbootstrap.com/)服务端渲染架构

## 安装 & 启动

```
# 安装依赖
$ npm install

# 开发
$ npm run dev

# 生产部署
$ npm start

# 生成静态文件

$ npm run export
```

## 注意事项

1. render中不能使用浏览器中相关的对象，比如jQuery，window对象等，componentDidMount 中可以
1. 样式引入有些特殊
1. 页面被访问一次之后，再次访问只是前端跳转，页面不会整体刷新，要使用componentWillMount释放当前页面占用的资源；主要是一些事件等
    如果组件被卸载，jQuery绑定的事件也会自动被清除，但是window，document上绑定的事件要手动清除；