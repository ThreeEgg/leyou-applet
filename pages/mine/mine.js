// pages/mine/mine.js
const app = getApp()

Page({
  data:{
    nickName:null,
    avatar:"",
    companyList:[
      {id:1,name:'xxx1',time:'2020/11/01'},
      {id:2,name:'xxx2',time:'2020/12/03'}
    ],
  },
  onLoad:function(){
    console.log('app1',app);
    const {globalData:{userInfo:{avatarUrl,nickName}}} = app;
    this.setData({
      nickName:nickName,
      avatar:avatarUrl,
    })
  },
  onLaunch:function(){
    console.log('app2',app);
  }
})
