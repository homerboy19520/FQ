(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1424:function(t,e,n){"use strict";n("425c")},"425c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"faq-wrapper"},[n("div",{staticClass:"faq"},[n("img",{staticClass:"faq__img faq__img_mobile",attrs:{src:"/backgroundWoman-mobile.png",alt:"woman"}}),t._m(0),n("div",{staticClass:"main"},[n("section",{staticClass:"section"},[n("h1",{staticClass:"section__title"},[t._v("FAQ")]),n("div",{staticClass:"section__container"},t._l(t.mokData,(function(e,a){return n("dropdown",{key:a,attrs:{index:a,question:e.question,answer:e.answer,isOpen:e.active},on:{click:t.toggle}})})),1)])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"faq__box"},[n("div",{staticClass:"faq__background"},[n("img",{staticClass:"faq__img faq__img_woman",attrs:{src:"/backgroundWoman.png",alt:"woman"}}),n("img",{staticClass:"faq__img faq__img_box",attrs:{src:"/backgrowndBox.png",alt:"figure"}}),n("img",{staticClass:"faq__img faq__img_line",attrs:{src:"/backgrowndLine.png",alt:"figure"}}),n("img",{staticClass:"faq__img faq__img_square",attrs:{src:"/backgrowndSquare.png",alt:"figure"}})])])}],r=(n("d3b7"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:{"m-open":t.isOpen}},[n("div",{staticClass:"dropdown__header",on:{click:function(e){return t.postAtFaq(t.index)}}},[n("p",{staticClass:"dropdown__question"},[t._v(t._s(t.question))]),n("svg",{staticClass:"dropdown__icon",attrs:{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 0.798645L5 4.79865L9 0.798645",stroke:"#F47B56","stroke-width":"2"}})])]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"dropdown__answer"},[t._v(t._s(t.answer))])])}),s=[],c=(n("a9e3"),{props:{index:{type:Number,required:!0},isOpen:{type:Boolean,required:!0},question:{type:String,required:!0},answer:{type:String,required:!0}},methods:{postAtFaq:function(t){this.$emit("click",t)}}}),u=c,l=(n("1424"),n("2877")),p=Object(l["a"])(u,r,s,!1,null,null,null),d=p.exports,f={name:"Faq",components:{dropdown:d},data:function(){return{mokData:[{id:0,question:"How many team members can I invite?",answer:"You can invite many people",active:!1},{id:1,question:"What is the maximum file upload size?",answer:"No more than 2GB. All files in your account must fit your allotted storage space.",active:!1},{id:2,question:"How do I reset my password?",answer:"Log into your personal account and click the button with the text reset",active:!1},{id:3,question:"Can I cancel my subscription?",answer:"Of course, you must follow the links and unsubscribe",active:!1},{id:4,question:"Do you provide additional support?",answer:"Аt the end of the landing page there is a form with support requests",active:!1}]}},methods:{toggle:function(t){0==this.mokData[t].active?this.mokData[t].active=!0:this.mokData[t].active=!1,this.mokData.forEach((function(e,n){n!==t&&(e.active=!1)}))}}},m=f,_=(n("c966"),Object(l["a"])(m,i,o,!1,null,null,null)),g=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(g)}}).$mount("#app")},c966:function(t,e,n){"use strict";n("cf75")},cf75:function(t,e,n){}});
//# sourceMappingURL=app.fe37ab6f.js.map