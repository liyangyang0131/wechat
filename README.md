# wechat
微信小程序基础学习

#微信公众号和小程序的主要区别?

1.实现技术区别（公众号基于后h5，小程序必须用小程序的语法开发）
2.调用原生的能力（小程序比公众号调用原生的能力强，几乎能实现app的所有功能）


#基础知识

1.数据绑定  {{}}
2.条件逻辑 wx:if="{{}}"
3.属性绑定  data-aid="{{aid}}" 
4.列表渲染  改变默认下标、默认单体名称 
  wx:for="{{}}"  wx:for-idnex=""  wx:for-item=""
5.事件     bindtap  
  事件对象  event
  事件传递参数：通过属性绑定，用事件对象获取参数 :event.currentTarget.dataset  
6.app.json 中配置视图样式
7.底部tab页至少两个，至多5个
  配置过tab的，不能在其他页面实现跳转
8.页面跳转 wx.navigateTo
9.小程序中的单位用rpx  1px = 2rpx 以iphone6为准
  移动端开发过程中：宽度自适应，高度按设计稿的一半走
10.App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。

11.utils 模块化
  可以将一些公共的代码抽离成为一个单独的js文件，作为一个模块。
  模块里面的方法和属性默认是私有的，如果我们想在外部使用模块里面的属性和方法，在模块里面必须通过module.exports或exports暴露接口
  封装的脚本在js中使用
12.app.js  全局业务逻辑的属性或方法
  在其他页面使用全局的方式、属性
  1.在使用的页面获取应用实例  var app = getApp();
  2.app.方法()   app.属性
13.wxs脚本语言的使用
   封装的脚本在wxml中使用

14.自定义组件
  ①.公共代码封装，供其他页面使用
  ②.弥补wxml标签不足

  ③.父子组件传值

    父组件给子组件传值(WXML 数据绑定):
    父组件添加属性  title="{{title}}"
    子组件properties中接收传值 properties:{title:String}

    子组件给父组件传值(事件):
    子组件通过this.triggerEvent('myevent', myEventDetail, myEventDetail)发送数据，
    "myevent":事件名
    "myEventDetail":数据
    "myEventDetail":触发事件的选项  微信开发者文档-组件间通信与事件


  ④.组件间的基本通信方式有以下几种。

    WXML 数据绑定：用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容数据（自基础库版本 2.0.9 开始，还可以在数据中包含函数）。具体在 组件模板和样式 章节中介绍。
    事件：用于子组件向父组件传递数据，可以传递任意数据。
    如果以上两种方式不足以满足需要，父组件还可以通过 this.selectComponent 方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法。
    监听事件

  ⑤.<slot></slot>标签
    在子组件中写入<slot></slot>标签,在父组件中写入的标签内容会放在slot标签中

15.自定义toast组件

16.scroll-view使用

17.原生组件之上覆盖其他功能
   1.使用原始的方法进行覆盖---定位
   2.使用cover-view、cover-image覆盖在原生组件之上的组件使用

18.组件使用
  基础内容
  icon  text  rich-text progress
  表单组件
  input  type类型不同，手机上弹出的键盘内容不同
  picker 普通选择器、时间选择器、日期选择器、区域选择器、多列选择器
  媒体组件
  camera video live-player live-pusher
  camera 自定义拍照页面
  

19.images显示图片以及实现多图预览功能
  










#小程序解析html标签：wxParse的使用

1.在github上找到demo
2.下载demo
3.把demo中的wxparse目录拷贝到项目中
4.在用到页面引入js,css


