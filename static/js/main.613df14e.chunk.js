(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{37:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(17),n=c.n(a),s=c(31),r=c.n(s),i=(c(37),c(10)),o=c(9);function j(e){var t=e.handlerLogin,c=void 0===t?Function.prototype:t,a=e.handlerLoginOut,n=void 0===a?Function.prototype:a,s=e.login;return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("div",{className:"header__container",children:[Object(o.jsxs)("div",{className:"header__decoration",children:[Object(o.jsx)("div",{className:"header__circle"}),Object(o.jsx)("div",{className:"header__circle"}),Object(o.jsx)("div",{className:"header__circle"})]}),Object(o.jsx)("div",{className:"header__nav",children:s?Object(o.jsx)("button",{className:"header__btn",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"}):Object(o.jsx)("button",{className:"header__btn",onClick:c,children:"\u041b\u043e\u0433\u0438\u043d"})})]})})}var d=c(0),l=c.n(d),h=c(2),b=c(20);function u(e){var t=e.user,c=Object(a.useState)(""),n=Object(i.a)(c,2),s=n[0],r=n[1],j=Object(a.useState)([]),d=Object(i.a)(j,2),u=d[0],O=d[1],p=Object(b.c)(),m=function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(Object(b.b)(p,"chat"),{uid:t.uid,user:t.displayName,photo:t.photoURL,text:s,createAt:Object(b.f)()});case 2:r("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=Object(b.e)(Object(b.b)(p,"chat"));Object(b.d)(e,(function(e){var t=[];e.forEach((function(e){console.log(e.data().createAt," => ",e.data()),t.push(e.data())})),t.sort((function(e,t){return e.createAt-t.createAt})),O(t)}))}),[p]),Object(o.jsxs)("section",{className:"chat",children:[Object(o.jsx)("div",{className:"chat__content",children:u.map((function(e){return Object(o.jsxs)("div",{className:"chat__item",id:e.createAt,children:[Object(o.jsx)("div",{className:"chat__item-photo",children:Object(o.jsx)("img",{src:e.photo,alt:e.user})}),Object(o.jsxs)("div",{className:"chat__item-content",children:[Object(o.jsx)("p",{className:"chat__item-title",children:e.user}),Object(o.jsx)("p",{className:"chat__item-text",children:e.text})]})]},e.createAt)}))}),Object(o.jsxs)("div",{className:"chat__logic",children:[Object(o.jsx)("textarea",{className:"chat__textarea",placeholder:"...",value:s,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("button",{className:"chat__send",onClick:m,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})}function O(e){var t=e.handlerLogin,c=void 0===t?Function.prototype:t,a=e.login,n=e.user;return Object(o.jsx)("main",{className:"main",children:a?Object(o.jsx)(u,{user:n}):Object(o.jsx)("button",{className:"main__btn",onClick:c,children:"\u041b\u043e\u0433\u0438\u043d"})})}var p=c.p+"static/media/video.1f2ae74d.mp4",m=c(32),_=c(24);Object(m.a)({apiKey:"AIzaSyDpwhpepw1f31gclJpDwp0UeIEJnBCeFsk",authDomain:"chat-react-32af1.firebaseapp.com",projectId:"chat-react-32af1",storageBucket:"chat-react-32af1.appspot.com",messagingSenderId:"713769401807",appId:"1:713769401807:web:e98fab4abf5a46539566ba"});var x=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(i.a)(s,2),d=r[0],l=r[1],h=Object(_.b)(),b=new _.a,u=function(){Object(_.c)(h,b).then((function(e){var t=e.user;n(!0),l(t||[])})).catch((function(e){console.error(e)}))},m=function(){Object(_.d)(h).then((function(){n(!1)})).catch((function(e){console.error(e)}))};return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("div",{className:"app__video",children:Object(o.jsx)("video",{loop:!0,muted:!0,autoPlay:!0,className:"app__video-content",children:Object(o.jsx)("source",{src:p,type:"video/mp4"})})}),Object(o.jsxs)("div",{className:"app__content",children:[Object(o.jsx)(j,{handlerLogin:u,login:c,handlerLoginOut:m}),Object(o.jsx)(O,{login:c,handlerLogin:u,handlerLoginOut:m,user:d})]})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.613df14e.chunk.js.map