// index.js
Page({

  data:{
    checked:true,
    tabs:[
      {
        id:0,
        value:"最新",
        isActive:true
    },
      {
          id:1,
          value:"投稿",
          isActive:false,
          content:['全部','校园趣事','创作分享','烦恼解决','时事新闻']
      },
      {
          id:2,
          value:"订单",
          isActive:false,
          content:['全部','谁在附近','与你同行','找人帮忙','学业疑难']
      },
      {
          id:3,
          value:"帮转",
          isActive:false,
          content:['全部','活动','问卷']
      }
  ],
  indexl:-1
  },

  handleTabsItemChange(e){
    //获取被点击的标题索引
    const {index}=e.detail;
    //修改原数组
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    //赋值到data中
    this.setData({
        tabs:tabs,
        indexl:-1
    })
},
  selecttap:function(){
    this.setData({
      checked:false
    })
  },
  modalCancel(){
    wx.showToast({
      title: '取消筛选',
      icon:'none'
    })
    this.setData({
      checked:true,
    })
  },
  modalConfirm(){
    wx.showToast({
      title: '筛选成功',
      icon:'success'
    })
    this.setData({
      checked:true,
    })
  },
  changeColor(e){
    this.setData({
      indexl:e.target.dataset['index']
    })
  }

})
