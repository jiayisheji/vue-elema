# vue-elema

> 这是一个vue项目，仿饿了么招聘页面

## 开始

``` bash
# clone project
git clone https://github.com/jiayisheji/vue-elema.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 介绍

1. 使用vue-cli构建项目
2. 使用eslint代码检测
3. 使用webpack打包
4. 使用es2015编写
5. 使用vue-router页面切换
6. 使用vue-resource数据加载
7. 使用vuex数据管理
8. 未使用任何css预处理器（本机编译有问题）


## 资料
1. vue中文网        http://cn.vuejs.org/
2. vue社区          http://www.vue-js.com/
3. vue-router文档   http://router.vuejs.org/zh-cn/index.html
4. vuex文档         http://vuex.vuejs.org/zh-cn/intro.html
5. vue表单验证      https://github.com/vuejs/vue-validator

## 迭代
### 1.0.1 项目搭建
> 开始不熟悉eslint遇到很多坑（吐槽一下，看到控制台报错，一脸懵逼）


#### 目前进度：

1. 增加一个欢迎页面
2. 首页已经完成
3. 正在做招聘列表页面

### 1.0.2 页面搭建
> 整好了eslint现在写代码顺手多了



#### 目前进度：

1. fix 路由bug 不能回退
2. 招聘列表页面已经完成（数据来自饿了么）
3. 招聘详情页面也底部分享未做
4. 公司介绍页面基本完成，细节未完善
5. 做了一个登陆页面，模拟一下登陆。考虑运用vue验证插件。
6. 路由基本配置完成

### 1.0.3 页面基本搭建完成
> 捣鼓路由钩子配置，弄了好久才明白，一开始把route写成router死活不起作用



#### 目前进度：

1. fix about页面banner图和文字可以随下面tab切换
2. 整合了数据（数据来自饿了么）
3. 新写了几个过滤器
4. 最近在看vuex文档，还没有整明白

### 1.0.4 组件之间数据通信
> 今天捣鼓vuex解决搜索和首页分类跳转问题



#### 目前进度：

1. fix index页面分类跳转问题
2. fix 社会招聘列表显示问题
3. 新写vuex相关文件管理数据
4. 搜索框还有一个bug，目标是首页输入内容提交到社会招聘页面带输入内容，其他页面输入内容只在当前显示，切换页面以后不再显示，明天在研究一下。
5. 接下来要写社会招聘里面筛选

### 1.0.4 做一个登陆页面表单验证
> 最近工作忙，vue-validator有中英版本的文档，栗子很全，写的很多，很快都写



#### 目前进度：

1. 新写了几个自定义表单验证器
2. 写一个登陆页面