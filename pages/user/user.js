// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: new Date().getTime(),
    toast: {
      title: '个人中心tost',
      time: 3000,
      mask: true,
    },
    title: "个人中心头部组件",
    msg: '我是微信小程序',
    flag: false,
    aid: 123,
    lists: [1, 2, 3, 4, 5],
    src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1751507185,4240564185&fm=26&gp=0.jpg"
  },
  test() {
    console.log('无遮罩，可以点击');
  },
  toast() {
    var toast = this.selectComponent('#toast');
    toast.show();
  },

  // 监听子组件事件
  msg(data) {
    console.log(data.detail)
  },
  // 自定义事件
  run() {
    console.log('事件运行');
  },
  getMsg() {
    console.log('获取msg的值--' + this.data.msg);
  },
  setMsg() {
    this.setData({ 'msg': '修改的值' })
    console.log('修改msg的值--' + this.data.msg);
  },
  // event事件对象，获取自定义属性值
  doEvent(event) {
    console.log(event.currentTarget.dataset.aid);
  },
  // 执行方法传值,只能通过事件对象传值
  requestData(id) {
    console.log(id);
  },
  // 事件冒泡 bindtap
  // 非冒泡事件  catchtap

  // 图片预览
  preview(e) {
    let current = e.currentTarget.dataset.src;
    let urls = [this.data.src, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1311372035,2116093689&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1225714138,1466146804&fm=26&gp=0.jpg'];
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.run();
  }
})