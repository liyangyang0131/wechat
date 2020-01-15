import http from "../../utils/api"

// pages/news/index.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'新闻头部组件',
    foodLists: [],
    url: getApp().globalData.baseUrl,
  },

  goDetails(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../newsDetails/newsDetails?id=' + id,
    })
  },

  listApi() {
    const _this = this;
    http({
      url: app.globalData.baseUrl+'api/productlist',
      method: 'GET'
    }, function (data) {
      if (data.result) {
        data.result.map(item => {
          item.list.map(k => {
            k.img_url = k.img_url.replace(/\\/g, '/')
          })
        })
        _this.setData({
          foodLists: data.result
        })
      } else {
        console.log(data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listApi();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})