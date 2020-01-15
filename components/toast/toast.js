// components/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mask:{
      type:Boolean,
      value:false
    },
    title:{
      type:String,
      value:'toast内容'
    },
    time:{
      type:Number,
      value:2000
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hidden:true,
    timmer:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(){
      this.setData({
        hidden:false
      })

      if(this.data.timmer){
        clearTimeout(this.data.timmer);
      }

      this.setData({
        timmer:setTimeout(()=>{
          this.setData({
            hidden:true,
            timmer:null
          })
        },this.data.time)
      })

    }
  }
})
