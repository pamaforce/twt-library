(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a3d24c"],{"5b14":function(t,a,s){"use strict";s("961d")},"961d":function(t,a,s){},"9f52":function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{ref:"justfather",staticClass:"justfather"},[s("div",{ref:"maincontainer",staticClass:"maincontainer"},[s("a",{staticStyle:{cursor:"pointer"},domProps:{textContent:t._s(t.backText)},on:{click:function(a){return t.$router.back()}}}),s("div",{staticClass:"baseInfo"},[s("div",{staticClass:"bookIcon"}),s("p",{staticClass:"bookInfo"},[t._v("基本信息")]),s("div",{staticClass:"bookCover"}),s("p",{staticClass:"bookTitle",domProps:{textContent:t._s(t.bookData.title)}}),s("p",{staticClass:"bookAuthor"},[t._v("作者：")]),s("p",{staticClass:"bookPress"},[t._v("出版社：")]),s("p",{staticClass:"bookNote"},[t._v("编者按：")]),s("p",{staticClass:"bookAuthors",domProps:{textContent:t._s(t.bookData.author)}}),s("p",{staticClass:"bookPresses",domProps:{textContent:t._s(t.bookData.publisher)}}),s("p",{staticClass:"bookNotes",domProps:{textContent:t._s(t.bookData.note)}}),t._m(0),s("p",{staticClass:"baseData"},[t._v("图书简介：")]),s("p",{staticClass:"baseDatas",domProps:{textContent:t._s(t.bookData.introduce)}})]),s("div",{staticClass:"toLove"})]),s("Footers")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"division"},[s("p",[t._v(" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ")])])}],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{ref:"thefooter",staticClass:"thefooter"},[t._m(0),s("p",{domProps:{textContent:t._s(t.copyright)}})])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("a",{attrs:{href:"https://recruit.twt.edu.cn/",target:"_blank"}},[t._v("加入我们")]),t._v(" - "),s("a",{attrs:{href:"#"}},[t._v("联系方式")]),t._v(" - "),s("a",{attrs:{href:"https://www.twt.edu.cn/",target:"_blank"}},[t._v("天外天")])])}],i={name:"Footers",data:function(){return{copyright:"Powered by TWT STUDIO Copyright © 2000-"+(new Date).getFullYear()}}},c=i,u=(s("5b14"),s("2877")),l=Object(u["a"])(c,n,r,!1,null,"f5b2f9d0",null),f=l.exports,b=s("bc3a"),p={name:"Details",data:function(){return{backText:"<  返回上一级",bookData:{}}},created:function(){this.fetchData("/api/bookDetail/"+this.$route.params.id)},watch:{$route:"fetchData"},methods:{fetchData:function(t){var a=this;b.get(t).then((function(t){a.bookData=t.data.data}))}},components:{Footers:f}},d=p,h=(s("f16f"),Object(u["a"])(d,o,e,!1,null,"3ba2ff90",null));a["default"]=h.exports},d2e8:function(t,a,s){},f16f:function(t,a,s){"use strict";s("d2e8")}}]);
//# sourceMappingURL=chunk-69a3d24c.d152af67.js.map