(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c(2),n=c.n(s),i=c(26),r=c.n(i),o=(c(64),c(13)),j=(c(65),c(93)),d=c(91),l=(c(66),c(49)),h=c.n(l),b=c(37),u=c.n(b),m=c(36),O=c.n(m),p=c(50),x=c.n(p),f=c(51),v=c.n(f),g=c(9),_=c(28),N=_.a.initializeApp({apiKey:"AIzaSyAEfwGryAI5ahH-bZUSuJifF9DpSd3CLKE",authDomain:"whatsapp-web-clone-2c2e0.firebaseapp.com",databaseURL:"https://whatsapp-web-clone-2c2e0.firebaseio.com",projectId:"whatsapp-web-clone-2c2e0",storageBucket:"whatsapp-web-clone-2c2e0.appspot.com",messagingSenderId:"1086092460615",appId:"1:1086092460615:web:084c06f72cd938f4152762",measurementId:"G-EK9QPCZDXY"}).firestore(),S=_.a.auth(),w=new _.a.auth.GoogleAuthProvider,C=N,y=Object(s.createContext)(),E=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(a.jsx)(y.Provider,{value:Object(s.useReducer)(t,c),children:n})},I=function(){return Object(s.useContext)(y)};var D=function(){var e,t,c=I(),n=Object(o.a)(c,2),i=n[0].user,r=(n[1],Object(s.useState)("")),l=Object(o.a)(r,2),b=l[0],m=l[1],p=Object(s.useState)(),f=Object(o.a)(p,2),N=f[0],S=f[1],w=Object(g.f)().roomId,y=Object(s.useState)(""),E=Object(o.a)(y,2),D=E[0],k=E[1],A=Object(s.useState)([]),M=Object(o.a)(A,2),P=M[0],T=M[1];return Object(s.useEffect)((function(){w&&(C.collection("rooms").doc(w).onSnapshot((function(e){return k(e.data().name)})),C.collection("rooms").doc(w).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return T(e.docs.map((function(e){return e.data()})))})))}),[w]),Object(s.useEffect)((function(){S(Math.floor(5e3*Math.random()))}),[w]),Object(a.jsxs)("div",{className:"chat",children:[Object(a.jsxs)("div",{className:"chat__header",children:[P.length>0||""!==D?Object(a.jsx)(j.a,{src:"https://avatars.dicebear.com/api/human/".concat(N,".svg")}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"chat__default",children:"WhatsApp Web"}),Object(a.jsx)("span",{className:"chat__default_mobile",children:"Open in Desktop Mode"})]}),Object(a.jsxs)("div",{className:"chat__headerInfo",children:[Object(a.jsx)("h3",{children:D}),Object(a.jsxs)("p",{children:[P.length>0?"last seen ":"",P.length>0?new Date(null===(e=P[P.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString():""]})]}),Object(a.jsxs)("div",{className:"chat__headerRight",children:[Object(a.jsx)(d.a,{children:Object(a.jsx)(O.a,{})}),Object(a.jsx)(d.a,{children:Object(a.jsx)(h.a,{})}),Object(a.jsx)(d.a,{children:Object(a.jsx)(u.a,{})})]})]}),Object(a.jsx)("div",{className:"chat__body",children:P.map((function(e){var t;return Object(a.jsxs)("p",{className:"chat__message ".concat(e.name===i.displayName&&"chat__receiver"," "),children:[Object(a.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(a.jsx)("span",{className:"chat__timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]},e.id)}))}),P.length>0?Object(a.jsxs)("div",{className:"chat__footer",children:[Object(a.jsx)(x.a,{}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",value:b,onChange:function(e){return m(e.target.value)},placeholder:"Type a message"}),Object(a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),b&&C.collection("rooms").doc(w).collection("messages").add({name:i.displayName,message:b,timestamp:_.a.firestore.FieldValue.serverTimestamp()}),m("")},children:"Send a message"})]}),Object(a.jsx)(v.a,{})]}):""]})},k=c(52),A=c.n(k),M=c(53),P=c.n(M),T=(c(76),c(77),c(30));var B=function(e){var t,c=e.id,n=e.name,i=e.addNewChat,r=Object(s.useState)(""),d=Object(o.a)(r,2),l=d[0],h=d[1],b=Object(s.useState)([]),u=Object(o.a)(b,2),m=u[0],O=u[1];return Object(s.useEffect)((function(){c&&C.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return O(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(s.useEffect)((function(){h(Math.floor(5e3*Math.random()))}),[]),i?Object(a.jsx)("div",{className:"sidebarChat",onClick:function(){var e=prompt("Please enter name for chat room");e?C.collection("rooms").add({name:e}):alert("No Name entered")},children:Object(a.jsx)("h2",{children:"Add New Chat"})}):Object(a.jsx)(T.b,{to:"/rooms/".concat(c),children:Object(a.jsxs)("div",{className:"sidebarChat",children:[Object(a.jsx)(j.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),Object(a.jsxs)("div",{className:"sidebarChat__info",children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:m.length>0?null===(t=m[0])||void 0===t?void 0:t.message:""})]})]})})};var F=function(){var e=I(),t=Object(o.a)(e,2),c=t[0].user,n=(t[1],Object(s.useState)([])),i=Object(o.a)(n,2),r=i[0],l=i[1];return Object(s.useEffect)((function(){return C.collection("rooms").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})),function(){}}),[]),Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"sidebar__header",children:[Object(a.jsx)(j.a,{src:null===c||void 0===c?void 0:c.photoURL}),Object(a.jsxs)("div",{className:"sidebar__headerRight",children:[Object(a.jsx)(d.a,{children:Object(a.jsx)(A.a,{})}),Object(a.jsx)(d.a,{children:Object(a.jsx)(P.a,{})}),Object(a.jsx)(d.a,{children:Object(a.jsx)(u.a,{})})]})]}),Object(a.jsx)("div",{className:"sidebar__search",children:Object(a.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(a.jsx)(O.a,{}),Object(a.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(a.jsxs)("div",{className:"sidebar__chats",children:[Object(a.jsx)(B,{addNewChat:!0}),r.map((function(e){return Object(a.jsx)(B,{id:e.id,name:e.data.name},e.id)}))]})]})},R=c(54),U=c(92),W=(c(78),"SET_USER");var L=function(){var e=I(),t=Object(o.a)(e,2);Object(R.a)(t[0]);var c=t[1];return Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("img",{src:"https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png",alt:"login"}),Object(a.jsx)("div",{className:"login__text",children:Object(a.jsx)("h1",{children:"Sign in to Whatsapp"})}),Object(a.jsx)(U.a,{onClick:function(){S.signInWithPopup(w).then((function(e){c({type:W,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign  In With Google"})]})})};var G=function(){var e=I(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(a.jsxs)("div",{className:"app",children:[c?Object(a.jsx)("div",{className:"app__body",children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(F,{}),Object(a.jsxs)(g.c,{children:[Object(a.jsx)(g.a,{path:"/rooms/:roomId",children:Object(a.jsx)(D,{})}),Object(a.jsx)(g.a,{path:"/",children:Object(a.jsx)(D,{})})]})]})}):Object(a.jsx)(L,{}),Object(a.jsx)("span",{className:"made_by",children:"Made By Shihas"})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(E,{initialState:{user:null},reducer:function(e,t){switch(console.log(t),t.type){case W:return{user:t.user};default:return e}},children:Object(a.jsx)(G,{})})}),document.getElementById("root")),J()}},[[79,1,2]]]);
//# sourceMappingURL=main.4262500c.chunk.js.map