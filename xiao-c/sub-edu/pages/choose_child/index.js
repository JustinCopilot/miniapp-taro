"use strict";require("../../app"),(wx["subeduWebpackJsonp"]=wx["subeduWebpackJsonp"]||[]).push([[154],{416:function(e,n,s){var t=s(6619),c=s(6603),a=s(6978),i=s(1479),l=s(4537),u=s(7463),r=s.n(u),o=s(8190),d=s(4275),f=s(811),v=s(5404),h=function(){var e,n=(0,u.useRouter)(),s=(0,l.Z)((function(){return(0,d.RX)()})),t=s.data,h=(0,i.useMemo)((function(){var e;return(null===t||void 0===t||null===(e=t.gradeList)||void 0===e?void 0:e.flatMap((function(e){return e.classList})))||[]}),[t]),m=(0,i.useState)(),g=(0,a.Z)(m,2),x=g[0],p=g[1],N=(0,i.useState)([]),j=(0,a.Z)(N,2),C=j[0],G=j[1],k=function(e){e&&(C.includes(e)?G(C.filter((function(n){return n!==e}))):G([].concat((0,c.Z)(C),[e])))},I=function(){r().navigateBack({delta:1,success:function(){r().eventCenter.trigger("selectedChildData",C)}})},b=function(){G([]),r().navigateBack({delta:1,success:function(){r().eventCenter.trigger("selectedChildData",[])}})};return r().useDidShow((function(){var e,s=null===(e=n.params.selectedChildData)||void 0===e||null===(e=e.split(","))||void 0===e?void 0:e.filter(Boolean).map(Number);null!==s&&void 0!==s&&s.length&&G(s)})),(0,i.useEffect)((function(){var e;h.length&&p(null===(e=h[0])||void 0===e?void 0:e.classId)}),[h]),(0,v.jsxs)(o.G7,{className:"choose-child",children:[(0,v.jsxs)(o.G7,{className:"container",children:[(0,v.jsx)(o.G7,{className:"class-list",children:h.map((function(e){return(0,v.jsx)(o.G7,{className:"class-item ".concat(x===e.classId?"active":""),onClick:function(){return p(e.classId||0)},children:e.className},e.classId)}))}),(0,v.jsx)(o.G7,{className:"child-list",children:null===(e=h.find((function(e){return e.classId===x})))||void 0===e||null===(e=e.studentList)||void 0===e?void 0:e.map((function(e){return(0,v.jsxs)(o.G7,{className:"child ".concat(C.includes(e.studentId||0)?"active":""),onClick:function(){return k(e.studentId)},children:[(0,v.jsx)(o.Ee,{src:e.avatar||(1===e.sex?f.g:f.z),className:"avatar"}),(0,v.jsx)(o.G7,{className:"name",children:e.studentName})]},e.studentId)}))})]}),(0,v.jsxs)(o.G7,{className:"bottom",children:[(0,v.jsx)(o.G7,{className:"reset",onClick:b,children:"\u91cd\u7f6e"}),(0,v.jsxs)(o.G7,{className:"confirm",onClick:I,children:["\u786e\u5b9a",C.length?"(".concat(C.length,")"):""]})]})]})},m=h,g={navigationBarTitleText:"\u7b5b\u9009\u5e7c\u513f"};Page((0,t.createPageConfig)(m,"pages/choose_child/index",{root:{cn:[]}},g||{}))}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[107,216,592],(function(){return n(416)}));e.O()}]);