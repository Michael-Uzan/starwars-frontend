(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(25),s=n.n(c),i=(n(38),n(39),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))}),o=n(11),u=n(2),l=n(1);function f(){return Object(l.jsx)("footer",{className:"footer full flex justify-center",children:Object(l.jsx)("p",{children:"\xa9 coffee rights"})})}var p=function(){return Object(l.jsx)("header",{className:" main-header full flex space-between",children:Object(l.jsx)("nav",{className:"flex justify-center",children:Object(l.jsx)(o.b,{activeClassName:"active",exact:!0,to:"/",children:"Films"})})})},d=n(28),h=n(29),v=n(33),j=n(31),m={on:function(t,e){var n=function(t){var n=t.detail;e(n)};return window.addEventListener(t,n),function(){window.removeEventListener(t,n)}},emit:function(t,e){window.dispatchEvent(new CustomEvent(t,{detail:e}))},showSuccessMsg:function(t){b(t,"success")},showErrorMsg:function(t){b(t,"danger")}};function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";m.emit("show-user-msg",{txt:t,type:e}),console.log("User MSG!!")}window.myBus=m,window.showUserMsg=b;var x=function(t){Object(v.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).removeEvent=void 0,t.state={msg:null},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.removeEvent=m.on("show-user-msg",(function(e){t.setState({msg:e}),setTimeout((function(){t.setState({msg:null})}),1500)}))}},{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"render",value:function(){var t=this;if(!this.state.msg)return Object(l.jsx)(l.Fragment,{});var e=this.state.msg.type||"";return Object(l.jsxs)("section",{className:"user-msg  flex direction-row align-center ".concat(e),children:[Object(l.jsx)("div",{className:" txt-msg flex direction-row align-center",children:this.state.msg.txt}),Object(l.jsx)("button",{onClick:function(){t.setState({msg:null})},children:"x"})]})}}]),n}(a.a.Component),w=n(3),O=n.n(w),g=n(7),y=n(32),k=function(t){var e=t.movie;return Object(l.jsxs)("section",{className:"film-preview",children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("h3",{children:e.director}),Object(l.jsx)("h4",{children:e.releaseDate}),Object(l.jsx)("p",{children:e.details})]})},S=function(t){var e=t.movies;return Object(l.jsx)("section",{className:"cart-list",children:e.map((function(t){return Object(l.jsx)(k,{movie:t},t._id)}))})},N=n.p+"static/media/bars-loader.8e56973c.svg";function E(){return Object(l.jsx)("div",{className:"loader flex align-center justify-center",children:Object(l.jsx)("img",{src:N,alt:"loading..."})})}var M=n(30),C=n.n(M),I=n(16),F={query:J,get:function(t,e){return B.apply(this,arguments)},post:function(t,e){return L.apply(this,arguments)},put:function(t,e){return T.apply(this,arguments)},remove:function(t,e){return A.apply(this,arguments)}};function J(t){return D.apply(this,arguments)}function D(){return D=Object(g.a)(O.a.mark((function t(e){var n,r,a=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1100,r=JSON.parse(localStorage.getItem(e)||"null"),t.abrupt("return",new Promise((function(t){return setTimeout(t,n,r)})));case 3:case"end":return t.stop()}}),t)}))),D.apply(this,arguments)}function B(){return(B=Object(g.a)(O.a.mark((function t(e,n){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(n);case 2:if(r=t.sent,a=r.find((function(t){return t.id===e}))){t.next=6;break}throw new Error("Cannot get, Item ".concat(e," of type: ").concat(n," does not exist"));case 6:return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=Object(g.a)(O.a.mark((function t(e,n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(I.a)(Object(I.a)({},e),{},{id:U()}),t.next=3,J(n);case 3:return(r=t.sent).push(e),P(r,n),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=Object(g.a)(O.a.mark((function t(e,n){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(n);case 2:if(r=t.sent,!((a=r.findIndex((function(t){return t.id===e.id})))<0)){t.next=6;break}throw new Error('Cannot update item, id "'.concat(e.id,'" was not found '));case 6:return r[a]=e,P(r,n),t.abrupt("return",e);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=Object(g.a)(O.a.mark((function t(e,n){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(n);case 2:if(r=t.sent,-1===(a=r.findIndex((function(t){return t.id===e})))){t.next=8;break}r.splice(a,1),t.next=9;break;case 8:throw new Error('Cannot remove, item id "'.concat(e,'"" of type: ').concat(n," does not exist"));case 9:return P(r,n),t.abrupt("return",!0);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t,e){localStorage.setItem(e,JSON.stringify(t))}function U(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",n="0123456789",r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return+e}var _={save:function(t,e){localStorage[t]=JSON.stringify(e)},load:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage[t]||e;return JSON.parse(n)}};var q={makeId:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}};var G={getMovies:function(){return H.apply(this,arguments)}},W="starwarsDB",z="https://swapi.dev/api/films/";function H(){return(H=Object(g.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.query(W);case 2:if(t.t0=t.sent,t.t0){t.next=7;break}return t.next=6,K();case 6:t.t0=t.sent;case 7:return e=t.t0,t.abrupt("return",e);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(){return Q.apply(this,arguments)}function Q(){return(Q=Object(g.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get(z);case 2:return e=t.sent,n=e.data.results.map((function(t){return{_id:q.makeId(),isFavorite:!1,title:t.title,director:t.director,releaseDate:t.release_date,details:t.opening_crawl}})),_.save(W,n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var R=[{path:"/",component:function(){var t=Object(r.useState)(null),e=Object(y.a)(t,2),n=e[0],a=e[1];Object(r.useEffect)((function(){c()}),[]);var c=function(){var t=Object(g.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getMovies();case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n?Object(l.jsx)("section",{className:"films-app",children:Object(l.jsx)(S,{movies:n})}):Object(l.jsx)(E,{})}}],V=R;var X=function(){return Object(l.jsx)("div",{className:"main-container",children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(p,{}),Object(l.jsx)("main",{children:Object(l.jsx)(u.c,{children:V.map((function(t){return Object(l.jsx)(u.a,{component:t.component,path:t.path},t.path)}))})}),Object(l.jsx)(f,{})]})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(X,{})}),document.getElementById("root")),i()}},[[68,1,2]]]);
//# sourceMappingURL=main.538b57e6.chunk.js.map