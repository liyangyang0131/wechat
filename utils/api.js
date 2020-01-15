function http({ url, type, data }, callback) {
  wx.request({
    url: url,
    method: type,
    data: data,
    success: function (res) {
      callback(res.data);
    },
    fail: function (err) {
      callback(err)
    }
  })
}

module.exports = http;