// pages/home/home.js
import http from '../../utils/api'

// 解决问题
/* 1.下拉过程中若数据没有请求响应，则不请求下一页
2.没有数据的时候，不请求 */

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    curPage: 1,
    pageSize: 20,
    windowHeight: 800,
    loading: true,   //true：loading隐藏
    flag: true,      // 防止重复请求,网络慢时，防止请求响应延迟，一直向后请求
  },
  // 下拉加载更多
  loadMore() {
    console.log('加载更多');
    if (this.data.flag) {
      this.setData({
        loading: false
      })
      this.newsListApi(++this.data.curPage);
    }
  },
  // 新闻列表http请求
  newsListApi(page) {
    const _this = this;
    this.setData({
      curPage: page,
      flag: false
    })
    http({
      url: 'http://www.phonegap100.com/appapi.php',
      methods: 'GET',
      data: {
        a: "getPortalList",
        catid: _this.data.pageSize,
        page: _this.data.curPage
      }
    }, function (res) {
      let f;
      if (res.result.length < 20) {
        f = false;
      } else {
        f = true;
      }
      let data = _this.data.lists.concat(res.result)
      _this.setData({
        lists: data,
        loading: true,
        flag: f
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.newsListApi(1);

    // 获取屏幕高度
    const _this = this;
    wx.getSystemInfo({
      success(res) {
        console.log('windowHeight', res.windowHeight)
        _this.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  }
})