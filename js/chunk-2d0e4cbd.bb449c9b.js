(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4cbd"],{"926d":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"system-settings"},[e("Nav",{attrs:{showSearch:!1,showUserIcon:!1,showMsgBtn:!1,showHeadIcon:!1,showBackIcon:!0,showThemeBtn:!1,pageTitle:"系统设置"}}),e("div",{staticClass:"content"},[e("div",{staticClass:"content-wrapper"},[e("van-cell-group",{staticClass:"link_user top"},[e("van-cell",{attrs:{center:"",title:"语言设置"},on:{click:function(n){t.showLang=!0}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("span",{staticClass:"value"},[t._v(t._s(t.currLang))]),e("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})]},proxy:!0}])}),e("van-cell",{attrs:{center:"",title:"官方邮箱"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("span",{staticClass:"value"},[t._v(t._s(t.userDetails.email))]),e("span",{staticClass:"btn"},[t._v(t._s("复制"))])]},proxy:!0}])}),e("van-cell",{attrs:{center:"",title:"清除缓存"},on:{click:function(n){return t.showClearCache()}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("span",{staticClass:"value no-arrow"},[t._v(t._s("0.00K"))])]},proxy:!0}])}),e("van-cell",{attrs:{center:"",title:"版本号"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("span",{staticClass:"value no-arrow"},[t._v(t._s("1.0.0"))])]},proxy:!0}])})],1),e("div",{staticClass:"btn-submit"},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("退出登录")])],1)],1)]),e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showLang,callback:function(n){t.showLang=n},expression:"showLang"}},[e("div",{staticClass:"lang-settings"},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.langItems,"item-height":"45"},on:{confirm:t.onConfirm,cancel:t.onCancel,change:t.onChange},scopedSlots:t._u([{key:"cancel",fn:function(){return[e("div",{staticClass:"left-text"},[t._v("取消")])]},proxy:!0},{key:"title",fn:function(){return[e("div",{staticClass:"center-text"},[t._v("选择语言")])]},proxy:!0},{key:"confirm",fn:function(){return[e("div",{staticClass:"right-text"},[t._v("确定")])]},proxy:!0}])})],1)])],1)},a=[],o=e("9ab4"),c=e("1b40"),r=e("36e1"),i=e("cdaa"),l=e("2241"),u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.showLang=!1,n.showCLearCache=!1,n.currLang="",n.selectedLang="",n.userDetails={email:"XXXXXXXX@gmail.com"},n.langItems=["简体中文","English"],n}return Object(o["c"])(n,t),Object.defineProperty(n.prototype,"getThemeColor",{get:function(){return this.$store.state.themeColor},enumerable:!1,configurable:!0}),n.prototype.mounted=function(){this.currLang=this.langItems[0]},n.prototype.onCancel=function(){this.currLang=this.currLang,this.showLang=!1},n.prototype.onConfirm=function(){this.currLang=this.selectedLang,this.showLang=!1},n.prototype.onChange=function(t,n){this.selectedLang=n},n.prototype.showClearCache=function(){l["a"].confirm({title:"提示",message:"是否清除缓存？",cancelButtonText:"取消",confirmButtonText:"清除",className:"clear-cache "+this.getThemeColor,width:"calc(100% - 120px)"}).then((function(){})).catch((function(){}))},n=Object(o["b"])([Object(c["a"])({components:{Nav:r["a"],Footer:i["a"]}})],n),n}(c["d"]),h=u,p=h,f=e("2877"),g=Object(f["a"])(p,s,a,!1,null,null,null);n["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0e4cbd.bb449c9b.js.map