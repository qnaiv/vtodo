(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(t,e,n){"use strict";n(46);var o=n(0),r=n(82),c=n.n(r);o.a.filter("moment",(function(t,e){var n=c()(t),o=null==e?"YYYY/MM/DD HH:mm":e;return console.log(n+o),n.format(o)}))},146:function(t,e,n){"use strict";var o=n(5),r=n(13),c=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"setTodos",value:function(t){localStorage.todos=JSON.stringify(t)}},{key:"getTodos",value:function(){return JSON.parse(localStorage.todos)}},{key:"isEmpty",value:function(){return void 0===localStorage.todos||null===localStorage.todos||0===JSON.parse(localStorage.todos).length}}]),t}(),l=function(){function t(){Object(o.a)(this,t),this.MaxCatSize=151}return Object(r.a)(t,[{key:"init",value:function(){localStorage.cats=JSON.stringify([])}},{key:"addCat",value:function(t){void 0!==localStorage.cats&&null!==localStorage.cats||this.init();var e=JSON.parse(localStorage.cats);e.unshift(t),localStorage.cats=JSON.stringify(e)}},{key:"getCats",value:function(){return void 0!==localStorage.cats&&null!==localStorage.cats||this.init(),JSON.parse(localStorage.cats)}},{key:"setCats",value:function(t){localStorage.cats=JSON.stringify(t)}},{key:"getLatestCat",value:function(){return JSON.parse(localStorage.cats)[0]}},{key:"isEmpty",value:function(){return console.log(localStorage.cats),void 0===localStorage.cats||null===localStorage.cats||0===JSON.parse(localStorage.cats).length}}]),t}(),f=(n(155),n(40),n(156),n(161)),d=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"setIngredients",value:function(t){localStorage.ingredients=JSON.stringify(t)}},{key:"getIngredients",value:function(){return JSON.parse(localStorage.ingredients).map((function(t){return new f.a(t)}))}},{key:"updateIngredient",value:function(t){var e=this.getIngredients(),n=e.findIndex((function(e){return e.id===t.id}));return e[n]=t,this.setIngredients(e),e}},{key:"deleteIngredient",value:function(t){var e=this.getIngredients(),n=e.findIndex((function(e){return e.id===t}));return e.splice(n,1),this.setIngredients(e),e}},{key:"isEmpty",value:function(){return void 0===localStorage.ingredients||null===localStorage.ingredients||0===JSON.parse(localStorage.ingredients).length}}]),t}(),v=n(205),h=n.n(v),S=n(200),y=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"initialize",value:function(){var t;null!==(t=localStorage.ingredientSettings)&&void 0!==t||(localStorage.ingredientSettings=JSON.stringify(new S.a))}},{key:"getIngredientSetting",value:function(){return this.initialize(),h()(JSON.parse(localStorage.ingredientSettings))}},{key:"updateIngredientSetting",value:function(t){this.initialize(),localStorage.ingredientSettings=JSON.stringify(t)}}]),t}();e.a=function(t,e){e("TodoRepository",new c),e("CatRepository",new l),e("IngredientRepository",new d),e("SettingRepository",new y)}},161:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(29);var o=n(5),r=n(197),c=function t(e){var n,c,l;Object(o.a)(this,t),this.id=null!==(n=e.id)&&void 0!==n?n:Object(r.v4)(),this.name=null!==(c=e.name)&&void 0!==c?c:"不明な食材",this.amount=null!==(l=e.amount)&&void 0!==l?l:5,this.expirationDate=e.expirationDate?e.expirationDate:"",this.createdAt=null!=e.createdAt?new Date(e.createdAt):new Date}},186:function(t,e,n){var content=n(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6570a8f6",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("0f5ff9bf",content,!0,{sourceMap:!1})},200:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(5),r=function t(e){Object(o.a)(this,t),this.orderCondition=null!=e?e:"sortByCreatedAt"}},207:function(t,e,n){"use strict";n(208),n(122);var o=n(5),r=n(19),c=n(16),l=n(9),f=n(12),d=n(117);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},S=function(t){Object(r.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).clipped=!1,t.drawer=!1,t.fixed=!1,t.items=[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],t.miniVariant=!1,t.right=!0,t.rightDrawer=!1,t.title="Vuetify.js",t}return n}(d.c),y=S=h([d.a],S),O=(n(251),n(64)),m=n(86),k=n.n(m),j=n(305),N=n(306),_=n(298),x=n(307),w=n(297),J=n(308),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-main",{staticClass:"mb-12"},[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1),t._v(" "),n("v-bottom-navigation",{attrs:{color:"teal",grow:"",fixed:""}},[n("v-btn",{attrs:{to:"/"}},[n("span",[t._v(" Todo ")]),t._v(" "),n("v-icon",[t._v("mdi-text-box-check")])],1),t._v(" "),n("v-btn",{attrs:{to:"ingredients"}},[n("span",[t._v("食材")]),t._v(" "),n("v-icon",[t._v("mdi-food")])],1),t._v(" "),n("v-btn",{attrs:{to:"neko"}},[n("span",[t._v("neko")]),t._v(" "),n("v-icon",[t._v("mdi-cat")])],1)],1)],1)}),[],!1,null,"70e58d71",null);e.a=component.exports;k()(component,{VApp:j.a,VBottomNavigation:N.a,VBtn:_.a,VContainer:x.a,VIcon:w.a,VMain:J.a})},221:function(t,e,n){n(222),t.exports=n(223)},245:function(t,e,n){"use strict";n(186)},246:function(t,e,n){(e=n(20)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},251:function(t,e,n){"use strict";n(188)},252:function(t,e,n){(e=n(20)(!1)).push([t.i,"#app-menu a[data-v-70e58d71]{text-decoration:none}.v-application[data-v-70e58d71]{background-color:#e2b078!important}",""]),t.exports=e},287:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=287},53:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(245),n(64)),c=n(86),l=n.n(c),f=n(305),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[221,8,3,9]]]);