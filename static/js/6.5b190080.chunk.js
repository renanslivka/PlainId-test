(this["webpackJsonpplainid-junior-assignment"]=this["webpackJsonpplainid-junior-assignment"]||[]).push([[6],{131:function(e,t,a){"use strict";a.r(t);var n=a(79),r=a(94),i=a(96),l=a(1),c=a.n(l),o={qa:["Junior QA","QA Manager"],development:["Junior Developer","Senior Developer","Development Manager"]},u=a(124),m=a(132),s=a(120),f=a(133),v=a(127),b=a(123),d=a(136),g=function(){return c.a.createElement("span",null,"Loading...")};a(95),t.default=function(){var e=Object(l.useState)(),t=Object(i.a)(e,2),a=t[0],p=t[1],E=Object(l.useState)(),N=Object(i.a)(E,2),j=N[0],h=N[1],O=Object(l.useState)(),S=Object(i.a)(O,2),q=S[0],C=S[1],D=Object(l.useState)({firstName:"Loading...",lastName:"Loading..."}),T=Object(i.a)(D,2),w=T[0],J=T[1],L=Object(l.useState)(!0),y=Object(i.a)(L,2),F=y[0],W=y[1];Object(l.useEffect)((function(){new Promise((function(e){setTimeout((function(){e({firstName:"Steve",lastName:"Jobs"})}),2e3)})).then((function(e){J(e)}))}),[]);var k=function(e){var t=e.target.value;J(Object(r.a)(Object(r.a)({},w),{},Object(n.a)({},e.target.name,t)))};return c.a.createElement(s.a,{maxWidth:"xs"},c.a.createElement("div",{className:"formContainer"},c.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),(t=w,new Promise((function(e,a){setTimeout((function(){e({success:!!t.title})}),2e3),setTimeout((function(){a("somthing wrong try again")}),3e3)}))).then((function(e){alert("Success!!\n          First Name: ".concat(w.firstName," \n          Last Name: ").concat(w.lastName,"\n          Department: ").concat(j,"\n          Title: ").concat(q))}))}},c.a.createElement(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:w.firstName,label:"First Name",name:"firstName",onChange:k}),c.a.createElement(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Last Name",value:w.lastName,name:"lastName",onChange:k}),c.a.createElement("br",null),c.a.createElement(b.a,{required:!0,variant:"outlined",className:"FormControl"},c.a.createElement(d.a,null,"Department"),c.a.createElement(v.a,{onChange:function(e){h(e.target.value),W(!1),function(e){return new Promise((function(t){setTimeout((function(){t(o[e])}),2e3)}))}(e.target.value).then((function(e){p(e)}))},label:"Department"},c.a.createElement(f.a,{value:"qa"},"qa"),c.a.createElement(f.a,{value:"development"},"development"))),c.a.createElement(b.a,{required:!0,variant:"outlined",className:"FormControl"},c.a.createElement(d.a,null,"Title"),c.a.createElement(v.a,{onChange:function(e){return C(e.target.value)},disabled:F,label:"Title"},void 0===a?c.a.createElement(g,null):a.map((function(e,t){return c.a.createElement(f.a,{key:t,value:e},e)})))),c.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:"btn"},"Register"))))}},95:function(e,t,a){}}]);
//# sourceMappingURL=6.5b190080.chunk.js.map