"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[456],{7659:function(e,a,l){l.r(a);var t=l(2982),u=l(7294),r=l(4805),s=l(1380),n=l(8628),c=l(9220),m=l(2199),o=l(8985),b=l(7851);a.default=function(){const{0:e,1:a}=(0,u.useState)([]),{0:l,1:v}=(0,u.useState)({}),{0:g,1:p}=(0,u.useState)([]),{0:d,1:h}=(0,u.useState)(0),[i,C]=(0,s.Z)("semsters",[]),{0:P,1:A}=(0,u.useState)(0),{0:E,1:f}=(0,u.useState)("");return(0,u.useEffect)((()=>{h((e=>{let a=e.map((e=>e.credit)),l=e.map((e=>e.grade));return(a.reduce(((e,a,t)=>e+a*l[t]),0)/a.reduce(((e,a)=>e+a),0)).toFixed(2)})(g)),A((e=>{let a=e.map((e=>parseFloat(e.avgGPA)));return(a.reduce(((e,a)=>e+a),0)/a.length).toFixed(2)})(i))})),u.createElement(u.Fragment,null,u.createElement("h2",{className:"fw-normal"},"GPA Tracker ",u.createElement("button",{className:"btn btn-success",onClick:()=>{C([])}},"Clear")," "),l.length?u.createElement("h3",null,"Major : ",E):u.createElement(r.ZP,{options:[{value:"cs",label:"CS"},{value:"it",label:"IT"}],placeholder:"Choose Major",onChange:e=>{"cs"==e.value?(a(b.x[0].r.map((e=>({value:e.groupName,label:e.groupName,subjects:e.subjects})))),f("CS")):(a(b.x[1].r.map((e=>({value:e.groupName,label:e.groupName,subjects:e.subjects})))),f("IT"))}}),u.createElement(r.ZP,{options:e,placeholder:"Choose Group",onChange:e=>{v(e.subjects.map((e=>({value:e.code,label:e.name,credit:e.credit}))))}}),l.length&&u.createElement(r.ZP,{options:l,placeholder:"Choose Subject",onChange:e=>{let a=i.filter((a=>a.myGPA.map((e=>e.sub)).includes(e.label)));g.length<7&&!g.map((e=>e.sub)).includes(e.label)&&0==a.length&&p((a=>[].concat((0,t.Z)(a),[{sub:e.label,code:e.value,credit:e.credit,grade:0}])))}}),u.createElement(o.Z,{myGPA:g,GPA:[{value:4,label:"A"},{value:3.75,label:"A-"},{value:3.25,label:"B+"},{value:2.75,label:"B-"},{value:2.25,label:"C+"},{value:2,label:"C"},{value:1.75,label:"C-"},{value:1,label:"D"},{value:0,label:"F"},{value:null,label:"W"}],selectGPA:e=>a=>{e.grade=a.value,p(g.map((a=>a.sub==e.sub?e:a)))}}),u.createElement(n.Z,{myGPA:g,result:d}),u.createElement(c.Z,{myGPA:g,createSemster:e=>{e.preventDefault(),e.target.name.value.length>=3&&(C([].concat((0,t.Z)(i),[{sem:e.target.name.value,avgGPA:d,myGPA:g}])),p([]),e.target.name.value="")}}),u.createElement(m.Z,{semsters:i}),0!=i.length&&u.createElement("h2",null,"Overall GPA - ",P," "))}}}]);
//# sourceMappingURL=component---src-pages-gpa-gpa-js-313ea92a94f718468138.js.map