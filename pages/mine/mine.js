// pages/mine/mine.js
const app = getApp()

Page({
  data:{
    nickName:null,
    companyList:[
      {id:1,name:'xxx1'},
      {id:2,name:'xxx2'}
    ]
  },
  onLoad:function(){
    console.log('app1',app);
    const {globalData} = app
    this.setData({
      nickName:globalData.userInfo.nickName
    })
  },
  onLaunch:function(){
    console.log('app2',app);
  }
})
