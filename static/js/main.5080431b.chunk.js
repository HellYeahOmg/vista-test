(this["webpackJsonpvista-test"]=this["webpackJsonpvista-test"]||[]).push([[0],{15:function(n,e,t){n.exports=t(26)},26:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(10),o=t.n(c),i=t(1),u=t(2);function l(){var n=Object(i.a)(['\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    font-family: "Montserrat", sans-serif;\n    background-color: #EAEFF0;\n    -webkit-font-smoothing: antialiased;\n\n    .draggable-item {\n      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n\n']);return l=function(){return n},n}var s=Object(u.a)(l()),f=t(4),m=t.n(f),d=t(8),b=t(3);function p(){var n=Object(i.a)(["\n  min-width: 10rem;\n  margin-left: 1.4rem;\n  border-bottom: 1px solid #dddddd;\n"]);return p=function(){return n},n}function v(){var n=Object(i.a)(["\n  padding: 0.6rem 0.6rem;\n  display: flex;\n"]);return v=function(){return n},n}function g(){var n=Object(i.a)(["\n  display: flex;\n  background-color: #3398cc;\n  align-items: center;\n  padding: 1rem 1rem;\n  color: #fff;\n"]);return g=function(){return n},n}function h(){var n=Object(i.a)(["\n  height: calc(100vh - 2rem);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  width: 49%;\n  background-color: #fff;\n"]);return h=function(){return n},n}var E=function(n){var e=n.patient;return a.a.createElement(x,null,a.a.createElement(j,null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0435"),a.a.createElement(O,null,"\u0424\u0418\u041e",a.a.createElement(y,null,e.historyNumber?"".concat(e.firstName," ").concat(e.lastName):"")),a.a.createElement(O,null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",a.a.createElement(y,null,e.historyNumber?function(n){var e=Date.now()-n,t=new Date(e);return Math.abs(t.getUTCFullYear()-1970)}(new Date(e.birthDate)):"")),a.a.createElement(O,null,"\u0414\u0438\u0430\u0433\u043d\u043e\u0437",a.a.createElement(y,null,e.historyNumber?e.diagnosis:"")))},x=u.c.div(h()),j=u.c.div(g()),O=u.c.div(v()),y=u.c.div(p());function w(){var n=Object(i.a)(['\n      background-color: #d3cece;\n      &::before {\n        content: "";\n        height: 100%;\n        background-color: #3398cc;\n        width: 0.2rem;\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    ']);return w=function(){return n},n}function k(){var n=Object(i.a)(["\n  display: flex;\n  padding: 0.6rem 0.6rem;\n  border-bottom: 1px solid #dddddd;\n  cursor: pointer;\n  position: relative;\n  &:hover {\n    background-color: #d3cece;\n  }\n  ","\n"]);return k=function(){return n},n}function N(){var n=Object(i.a)(["\n  flex: 1;\n"]);return N=function(){return n},n}function C(){var n=Object(i.a)(["\n  flex: 1;\n  color: #a8a8a8;\n"]);return C=function(){return n},n}function F(){var n=Object(i.a)(["\n  display: flex;\n  padding: 0.6rem 0.6rem;\n  border-top: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n"]);return F=function(){return n},n}function q(){var n=Object(i.a)(["\n  padding: 1rem 1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  ","\n"]);return q=function(){return n},n}function D(){var n=Object(i.a)(["\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  width: 49%;\n  background-color: #fff;\n  height: calc(100vh - 2rem);\n"]);return D=function(){return n},n}function L(){var n=Object(i.a)(["\n  display: flex;\n  background-color: #fafafa;\n  align-items: center;\n"]);return L=function(){return n},n}var P=function(n){var e=n.presentList,t=n.quittingList,c=n.setPatient,o=n.activePatientNumber,i=Object(r.useState)("present"),u=Object(b.a)(i,2),l=u[0],s=u[1];return a.a.createElement(z,null,a.a.createElement(S,null,a.a.createElement(J,{active:"present"===l,onClick:function(){return s("present")}},"\u041f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442(",e.length,")"),a.a.createElement(J,{active:"quitting"===l,onClick:function(){return s("quitting")}},"\u0412\u044b\u0431\u044b\u0432\u0448\u0438\u0435(",t.length,")")),"present"===l?a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null,a.a.createElement(A,null,"\u2116 \u0418\u0411"),a.a.createElement(A,null,"\u0424\u0418\u041e"),a.a.createElement(A,null,"\u041f\u0430\u043b\u0430\u0442\u0430")),e.map((function(n){return a.a.createElement(I,{active:o===n.historyNumber,key:n.historyNumber,onClick:function(){return c(n)}},a.a.createElement(B,null,n.historyNumber),a.a.createElement(B,null,"".concat(n.firstName," ").concat(n.lastName)),a.a.createElement(B,null,n.patrName))}))):a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null,a.a.createElement(A,null,"\u2116 \u0418\u0411"),a.a.createElement(A,null,"\u0424\u0418\u041e"),a.a.createElement(A,null,"\u041f\u0440\u0438\u0447\u0438\u043d\u0430 \u0432\u044b\u0431\u044b\u0442\u0438\u044f")),t.map((function(n){return a.a.createElement(I,{active:o===n.historyNumber,key:n.historyNumber,onClick:function(){return c(n)}},a.a.createElement(B,null,n.historyNumber),a.a.createElement(B,null,"".concat(n.firstName," ").concat(n.lastName)),a.a.createElement(B,null,n.cause))}))))},S=u.c.div(L()),z=u.c.div(D()),J=u.c.span(q(),(function(n){return n.active&&"color: #3398CC; border-bottom: 2px solid #3398CC"})),M=u.c.div(F()),A=u.c.div(C()),B=u.c.div(N()),I=u.c.div(k(),(function(n){return n.active&&Object(u.b)(w())}));function T(){var n=Object(i.a)(["\n  display: flex;\n  padding: 1rem 0.4rem;\n  justify-content: space-between;\n"]);return T=function(){return n},n}var U=u.c.div(T());o.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement((function(){var n=Object(r.useState)([]),e=Object(b.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)([]),i=Object(b.a)(o,2),u=i[0],l=i[1],s=Object(r.useState)({}),f=Object(b.a)(s,2),p=f[0],v=f[1];Object(r.useEffect)((function(){g(),h()}),[]);var g=function(){var n=Object(d.a)(m.a.mark((function n(){var e,t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://www.mocky.io/v2/5db69fb52f000058007fe8dc");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,c(t),console.log(t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(d.a)(m.a.mark((function n(){var e,t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://www.mocky.io/v2/5db6a0342f000070007fe8e1");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,l(t),console.log(t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return console.log(p),a.a.createElement(U,null,a.a.createElement(E,{patient:p}),a.a.createElement(P,{setPatient:v,presentList:t,quittingList:u,activePatientNumber:p.historyNumber}))}),null),a.a.createElement(s,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5080431b.chunk.js.map