// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
   // 属性定义（详情参见下文）
   /* properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  }, */
  properties: {
    title:String, 
  },

  /**
   * 组件的初始数据
   */
  data: {
    message:'子组件给父组件传值'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    logOut(){
      console.log('退出');
      this.triggerEvent('message',this.data.message)
    }
  }
})
