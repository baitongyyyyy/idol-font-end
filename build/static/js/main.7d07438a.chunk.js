(this["webpackJsonpreact-redux-i18n"]=this["webpackJsonpreact-redux-i18n"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},46:function(e,t,a){e.exports=a(67)},63:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),s=a(17),l=a(18),i=a(24),u=(a(63),a(64),a(5)),m=a(6),p=a(8),d=a(9),h=a(10),f=a(19),v=a(43),b=a.n(v),E="FAILURE",g="LOG_IN";var j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={data:"user"},a.display=function(e){console.log(e),a.props.addUser(e)},a.renderButton=function(){return r.a.createElement("button",{onClick:function(e){return a.display(Math.random())}},"Button")},a.changeLanguage=function(e){var t=a.props;t.t;t.i18n.changeLanguage(e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.t;t.i18n;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,a("hello")),r.a.createElement("p",null,a("footer:address")),r.a.createElement("p",null,this.props.user),r.a.createElement("p",null,this.props.login),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),this.renderButton(),r.a.createElement("button",{onClick:function(){return e.changeLanguage("th")}},"th"),r.a.createElement("button",{onClick:function(){return e.changeLanguage("en")}},"en"),r.a.createElement(s.b,{to:"/example"},"example"),r.a.createElement(s.b,{to:"/test"},"test")))}}]),t}(n.Component);var O=Object(l.b)((function(e){return{user:e.user,login:e.login}}),(function(e){return{addUser:function(t){return e((a=t,console.log("actions",a),{type:g,payload:a}));var a}}}))(Object(i.c)(["home","footer"])(j)),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state,this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Example Component"),r.a.createElement("div",{className:"card-body"},this.props.user)),r.a.createElement(s.b,{to:"/test"},"Test"))))}}]),t}(n.Component);var N=Object(l.b)((function(e){return{user:e.user}}),(function(e){return{}}))(y),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"TEST Component"),r.a.createElement("div",{className:"card-body"},"I'm an Test component!"),r.a.createElement("div",{className:"card-body"},this.props.user)))))}}]),t}(n.Component);var w=Object(l.b)((function(e){return{user:e.user}}),(function(e){return{}}))(k),x=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Page not Found")))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={role:""},a.renderRolePage=function(){return"test"===a.state.role?r.a.createElement(f.a,{path:"/test",component:w}):r.a.createElement(f.a,{exact:!0,path:"/",component:N})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:O}),r.a.createElement(f.a,{path:"/example",component:N}),r.a.createElement(f.a,{path:"/test",component:w}),r.a.createElement(f.a,{component:x})))}}]),t}(n.Component),C=a(21),L=a(45),B={user:"no"};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return t.type===g?Object.assign({},e,{user:t.payload}):e},T=a(27),R=a.n(T),U=a(31),F=R.a.mark(M),J=R.a.mark(P);function M(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.b)(g,P);case 2:case"end":return e.stop()}}),F)}function P(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("saga",e),t.next=4,Object(U.a)({payload:e});case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),t.next=10,Object(U.a)({type:E,payload:t.t0});case 10:case"end":return t.stop()}}),J,null,[[0,6]])}var S=Object(L.a)(),W=Object(C.d)(I,Object(C.a)(S));S.run(M);var _=W,D=a(36),G={en:{home:{hello:"Hello"},footer:{address:"Address"}},th:{home:{hello:"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35"},footer:{address:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"}}};D.a.use(i.b).init({resources:G,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});var H=D.a;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{store:_},r.a.createElement(i.a,{i18n:H},r.a.createElement(s.a,null,r.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.7d07438a.chunk.js.map