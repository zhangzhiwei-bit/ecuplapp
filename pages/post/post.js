Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseImgs:[],
    // 文本域的内容
    textVal:"",
    position:"",
  },
  UpLoadImgs:[],
  user:'',
  handleChooseImg(){
    wx.chooseImage({
      count: 9,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:(result)=>{
        //   console.log(result);
        this.setData({
            chooseImgs:[...this.data.chooseImgs,...result.tempFilePaths]
        })
      }
    })
},
handleRemoveImg(e){
    const {index}=e.currentTarget.dataset;
    let {chooseImgs}=this.data;
    chooseImgs.splice(index,1);
    this.setData({
        chooseImgs
    })
},
//文本域的输入事件
handleTextInput(e){
    this.setData({
        textVal:e.detail.value
    })
},
handleFormSubmit(){
    // 获取文本域的内容
    const {textVal,chooseImgs,position}=this.data;
    // 合法性验证
    if(!textVal.trim()){
        //不合法的
        wx.showToast({
          title: '输入不合法',
          icon: 'none',
          mask:true
        })
        return;
    }
    wx.showLoading({
      title: '正在上传',
      mask:true
    })
    // if(chooseImgs.length!=0){
    //     chooseImgs.forEach((v,i)=>{
    //         // 上传文件
    //    wx.uploadFile({
    //        filePath: v,
    //        name: 'file',
    //        url: 'https://www.zzwwork.xyz:8081/upimages',
    //        header: {
    //         "Content-Type": "multipart/form-data"
    //       },    
    //        success:(result)=>{
    //           //  let {url}=JSON.parse(result.data).url
    //           var url=JSON.parse(result.data).url;
    //           //  console.log(result.data);
    //           //  console.log(url);
    //            this.UpLoadImgs.push(url);
    //            if(i===chooseImgs.length-1){
    //                // 所有图片上传完毕
    //                wx.hideLoading();
    //               //  console.log("提交文本");
    //               //  console.log(textVal);
    //               //  console.log(this.UpLoadImgs);
    //                wx.request({
    //                 url: 'https://www.zzwwork.xyz:8081/addcomments', 
    //                 data: {
    //                   content: textVal,
    //                   position:position,
    //                   imageurls: this.UpLoadImgs,
    //                   username:this.user.nickName,
    //                   userurl:this.user.avatarUrl,
    //                 },
    //                 header: {
    //                   'content-type': 'application/json' // 默认值
    //                 },
    //                 success (res) {
    //                   console.log(res.data)
    //                 }
    //               })
    //                //将所有数据提交到数据库
                  
    //                // 提交后重置页面
    //                this.setData({
    //                    textVal:"",
    //                    chooseImgs:[]
    //                })
    //                // 返回上一个页面
    //                wx.navigateBack({
    //                  delta: 1,
    //                })
    //            }
    //        }
    //      })
    //    })
    // }else{
    //   wx.request({
    //     url: 'https://www.zzwwork.xyz:8081/addcomments', 
    //     data: {
    //       content: textVal,
    //       position:position,
    //       username:this.user.nickName,
    //       userurl:this.user.avatarUrl,
    //     },
    //     header: {
    //       'content-type': 'application/json' // 默认值
    //     },
    //     success (res) {
    //       console.log(res.data)
    //       wx.hideLoading({
    //         success: (res) => {},
    //       })
    //     }
    //   })
    //     console.log("只提交了文本");
    //     wx.navigateBack({
    //       delta: 1,
    //     })
    // }
    
},
handleChoosePos(){
  wx.chooseLocation({
    success:(res)=>{
      console.log(res.name)
      this.setData({
        position:res.name
      })
    }
  })
},
identifytap(){
  wx.showModal({
    title: '需要认证',
    content: '需要校园身份认证并授权手机号后，才能获得该权限',
    cancelText:'稍后再说',
    confirmText:'前往认证'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.user=wx.getStorageSync('user')
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