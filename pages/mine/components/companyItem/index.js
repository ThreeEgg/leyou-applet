// pages/mine/components/companyItem/index.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached: function() {
    //
    console.log('item.this',this,app)
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
