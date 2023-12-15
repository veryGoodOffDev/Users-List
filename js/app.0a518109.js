(function(){"use strict";var t={4389:function(t,e,n){var o=n(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Users")])],1),e("router-view")],1)},s=[],u=n(629),i={methods:(0,u.nv)(["fetchPhotos"]),computed:(0,u.Se)(["getStatus"]),mounted(){}},a=i,c=n(1001),l=(0,c.Z)(a,r,s,!1,null,null,null),d=l.exports,f=n(8345),p=function(){var t=this,e=t._self._c;return e("div",[e("UsersList",{attrs:{users:t.users}})],1)},h=[],m=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"user-list"},t._l(t.users,(function(t){return e("UserItem",{key:t.id,attrs:{user:t}})})),1)},v=[],g=function(){var t=this,e=t._self._c;return e("li",{on:{click:function(e){return t.openUserPage(t.user.id,t.user.name)}}},[t._v(" "+t._s(t.user.name)+" ")])},b=[],y=(n(560),{name:"UserItem",props:{user:{type:Object,required:!0}},components:{},methods:{openUserPage(t,e){this.$router.push({name:"user",params:{id:t,userName:e}})}}}),P=y,w=(0,c.Z)(P,g,b,!1,null,"7e20e208",null),_=w.exports,k={name:"HelloWorld",components:{UserItem:_},props:["users"],methods:{...(0,u.OI)(["clearPhotos"])},mounted(){this.clearPhotos()}},O=k,j=(0,c.Z)(O,m,v,!1,null,"f1b589ce",null),A=j.exports,L=n(5121),C={name:"HomeView",data(){return{users:[]}},components:{UsersList:A},async mounted(){const t=await L.Z.get("https://jsonplaceholder.typicode.com/users"),e=await t.data;this.users=e}},S=C,Z=(0,c.Z)(S,p,h,!1,null,null,null),x=Z.exports;o["default"].use(f.ZP);const E=[{path:"/",name:"home",component:x},{path:"/user/:id",name:"user",component:()=>n.e(681).then(n.bind(n,6681)),props:!0}],I=new f.ZP({mode:"history",base:"/",routes:E});var N=I,T={state:{photos:{},isLoading:!0,filteredPhotos:[]},mutations:{setPhotos(t,e){Object.prototype.hasOwnProperty.call(t.photos,e.id)?t.photos={...t.photos,[e.id]:[...t.photos[e.id],...e.data]}:t.photos={...t.photos,[e.id]:[...e.data]}},setIsLoading(t,e){t.isLoading=e},clearPhotos(t){t.photos={}}},getters:{getAllPhotos(t){return t.photos},getStatus(t){return t.isLoading}},actions:{async fetchPhotos(t,e){L.Z.get("https://jsonplaceholder.typicode.com/photos?albumId="+e+"&_limit=5").then((n=>{t.commit("setPhotos",{data:n.data,id:e}),t.commit("setIsLoading",!1)}))}}},U={state:{posts:[],albums:[],isLoading:!0},mutations:{setPosts(t,e){t.posts=e},setAlbums(t,e){t.albums=e},setIsLoading(t,e){t.isLoading=e},deletePost(t,e){t.posts=t.posts.filter((t=>t.id!==e))}},getters:{getPosts(t){return t.posts},getAlbums(t){return t.albums},getFilterdPosts(t,e){return t.posts=t.posts.filter((t=>t.id!==e))}},actions:{async fetchPosts(t,e){await L.Z.get("https://jsonplaceholder.typicode.com/posts?userId="+e).then((e=>{t.commit("setPosts",e.data)}))},async fetchAlbums(t,e){await L.Z.get("https://jsonplaceholder.typicode.com/albums?userId="+e).then((e=>{t.commit("setAlbums",e.data)}))}}};o["default"].use(u.ZP);var F=new u.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{photoModule:T,postModule:U}}),M=n(9657),B=n(3017);n(7024);o["default"].config.productionTip=!1,o["default"].use(M.XG7,B.A7),new o["default"]({router:N,store:F,render:t=>t(d)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,s){if(!o){var u=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],s=t[l][2];for(var i=!0,a=0;a<o.length;a++)(!1&s||u>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(i=!1,s<u&&(u=s));if(i){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[o,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".4cdbac43.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".61e84d54.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-testtask:";n.l=function(o,r,s,u){if(t[o])t[o].push(r);else{var i,a;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(a=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+s),i.src=o),t[o]=[r];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(p);var r=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),a&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var u=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var u=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=i,s.parentNode&&s.parentNode.removeChild(s),r(a)}};return s.onerror=s.onload=u,s.href=e,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===t||s===e))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],s=r.getAttribute("data-href");if(s===t||s===e)return r}},o=function(o){return new Promise((function(r,s){var u=n.miniCssF(o),i=n.p+u;if(e(u,i))return r();t(o,i,null,r,s)}))},r={143:0};n.f.miniCss=function(t,e){var n={681:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var s=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=s);var u=n.p+n.u(e),i=new Error,a=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+u+")",i.name="ChunkLoadError",i.type=s,i.request=u,r[1](i)}};n.l(u,a,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,u=o[0],i=o[1],a=o[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(a)var l=a(n)}for(e&&e(o);c<u.length;c++)s=u[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},o=self["webpackChunkvue_testtask"]=self["webpackChunkvue_testtask"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4389)}));o=n.O(o)})();
//# sourceMappingURL=app.0a518109.js.map