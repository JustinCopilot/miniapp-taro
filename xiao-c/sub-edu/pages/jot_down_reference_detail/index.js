"use strict";require("../../app"),(wx["subeduWebpackJsonp"]=wx["subeduWebpackJsonp"]||[]).push([[443],{1394:function(e,t,r){var n=r(6619),a=r(6603),o=r(6978),u=r(1479),i=r(7463),s=r(4537),d=r(4275),v=r(8597),c=r(1204),l=r(5404),f=function(){var e=(0,i.useRouter)(),t=(0,u.useState)(),r=(0,o.Z)(t,2),n=r[0],f=r[1],m=(0,u.useState)(),p=(0,o.Z)(m,2),b=p[0],g=p[1],I=(0,s.Z)(d.KQ,{manual:!0}),L=I.data,U=void 0===L?[]:L,x=I.run,y=(0,s.Z)(d.Ds,{manual:!0}),N=y.data,Z=y.run;return(0,u.useEffect)((function(){e.params.observeId&&Z({observeId:Number(e.params.observeId)})}),[e]),(0,u.useEffect)((function(){if(N){var e,t,r,n={tag:c.UR.BehaviorRecord,flag:!!N.flag,resultType:"\u76ee\u6807\u95ee\u9898",observeId:N.observeId,student:N.studentList.map((function(e){var t=e.birthday,r=e.studentId,n=e.sex,a=e.studentName,o=e.avatar;return{birthday:t,studentId:r,sex:n,avatar:o,studentName:a}})),extractInfo:{date:N.observeDate,input:N.content,situationList:null===(e=N.situationList)||void 0===e?void 0:e.map((function(e){return e.situationName})),photo:{imgUrl:N.imgUrl,aiImgUrl:N.aiImgUrl,videoCoverUrl:N.videoCoverUrl,videoUrl:N.videoUrl},sectorList:null===(t=N.sectorTypeList)||void 0===t?void 0:t.map((function(e){return{area:e.typeName,sub:e.sectorList.map((function(e){return e.sectorName}))}}))}};f(n);var o=N.studentList.map((function(e){return e.studentId})).join(",");x({studentIds:o,observeDate:N.observeDate});var u=null===(r=N.sectorTypeList)||void 0===r?void 0:r.map((function(e){return e.sectorList.map((function(e){var t;return(null===(t=e.module)||void 0===t?void 0:t.split(","))||[]}))})).flat(2);console.log("=modules",u),g((0,a.Z)(new Set(u)))}}),[N]),(0,l.jsx)(v.ZP,{modules:b,data:U,observationdetail:n})},m=f,p={navigationBarTitleText:"\u6570\u636e\u5f15\u7528\u8be6\u60c5"};Page((0,n.createPageConfig)(m,"pages/jot_down_reference_detail/index",{root:{cn:[]}},p||{}))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[107,216,592],(function(){return t(1394)}));e.O()}]);