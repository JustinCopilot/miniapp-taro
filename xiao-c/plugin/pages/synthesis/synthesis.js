"use strict";require("../../app"),(wx["pluginWebpackJsonp"]=wx["pluginWebpackJsonp"]||[]).push([[277],{668:function(e,n,s){var c=s(6619),i=s(6603),a=s(6978),t=s(8190),r=s(1479),l=s(2525),o=s(7463),u=s.n(o),m=s(9645),g=s(4537),h=s(6171),d=s(5404),f=function(e){return e[e["NEXT"]=0]="NEXT",e[e["PREV"]=1]="PREV",e}({}),x=function(){var e=(0,r.useState)([]),n=(0,a.Z)(e,2),s=n[0],c=n[1],o=(0,r.useState)(0),x=(0,a.Z)(o,2),N=x[0],j=x[1],p=(0,r.useState)([]),v=(0,a.Z)(p,2),E=v[0],G=v[1],I=(0,g.Z)(h.LL),S=I.data,T=void 0===S?[]:S,y=function(e){E.splice(N,1,{mainImg:s[N],frameImg:T[e].url}),G((0,i.Z)(E))},k=function(e){j(e===f.NEXT?N+1:N-1)},w=function(){u().setStorageSync(m.Ig.EDU_SYNTHESIS_IMG_LIST,E),u().navigateBack({delta:2})};return(0,r.useEffect)((function(){var e=u().getStorageSync(m.Ig.EDU_FRAME_IMG_LIST);c(e)}),[]),(0,r.useEffect)((function(){s.length&&T.length&&G(s.map((function(e){return{mainImg:e,frameImg:T[0].url}})))}),[s,T]),(0,d.jsxs)(t.G7,{className:"synthesis",children:[(0,d.jsxs)(t.G7,{className:"synthesis-contenter",children:[(0,d.jsxs)(t.G7,{className:"main-img-container",children:[(0,d.jsx)(t.G7,{className:"icon-view",children:N>0?(0,d.jsx)(t.G7,{onClick:function(){return k(f.PREV)},className:"icon prev"}):null}),(0,d.jsx)(t.G7,{className:"img-container",children:(0,d.jsx)(t.tq,{className:"img-swiper",current:N,onChange:function(e){j(e.detail.current)},children:s.map((function(e,n){var s;return(0,d.jsxs)(t.t3,{children:[(0,d.jsx)(t.Ee,{mode:"aspectFill",src:e,className:"show-img"}),(0,d.jsx)(t.Ee,{src:null===(s=E[n])||void 0===s?void 0:s.frameImg,className:"cover-img"})]},n)}))})}),(0,d.jsx)(t.G7,{className:"icon-view",children:N<s.length-1?(0,d.jsx)(t.G7,{onClick:function(){return k(f.NEXT)},className:"icon next"}):null})]}),(0,d.jsxs)(t.G7,{className:"show-count",children:[N+1,"/",s.length]}),(0,d.jsx)(t.G7,{className:"cover-img-scroll",children:T.map((function(e,n){var s;return(0,d.jsxs)(t.G7,{onClick:function(){return y(n)},className:"model-item ".concat(e.url===(null===(s=E[N])||void 0===s?void 0:s.frameImg)?"selected":""),children:[(0,d.jsx)(t.G7,{className:"model-img",children:(0,d.jsx)(t.Ee,{mode:"aspectFill",src:e.thum,className:"img"})}),(0,d.jsx)(t.xv,{children:e.name})]},n)}))})]}),(0,d.jsx)(l.Z,{children:(0,d.jsx)(t.zx,{type:"primary",onClick:w,hoverClass:"none",children:"\u5b8c\u6210"})})]})},N=x,j={navigationBarTitleText:""};Page((0,c.createPageConfig)(N,"pages/synthesis/synthesis",{root:{cn:[]}},j||{}))}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[107,216,592],(function(){return n(668)}));e.O()}]);