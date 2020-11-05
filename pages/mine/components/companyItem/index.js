// pages/mine/components/companyItem/index.js
const app = getApp()

const { $Toast } = require('../../../../dist/base/index');
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
    if (this.data.modalD == 1) {
      this.setData({
        context: "子组件初始化加载中获取到父组件值--modal-d"
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(){
      $Toast({
        content: '成功的提示',
        type: 'success'
    });
    }
  }
})
