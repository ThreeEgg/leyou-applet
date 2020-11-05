//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('this',this,app)
  },
  onLaunch:function(){

  },
  getUserInfo: function(e) {
    console.log('getUserInfo',e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.getPhoneNumber()
  },
  getPhoneNumber:function(e){
    console.log('getPhoneNumber',e)
  },
  handleClick:function(){
    wx.navigateTo({
      url: '../mine/mine',
    })
  }
})
