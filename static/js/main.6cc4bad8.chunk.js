(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(4),s=n.n(o),r=n(2),c=n(5),i=n(6),a=n(8),u=n(7),l=n(1),b=n.n(l),h=(n(13),n(0)),j=function(t){var e=t.goods;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={goods:[].concat(d),showList:!1},t.isVisible=function(){t.setState((function(){return{showList:!0}}))},t.reverseList=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).reverse()}}))},t.sortAlphabet=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.resetList=function(){t.setState((function(){return{goods:[].concat(d)}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.showList;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{goods:e}),Object(h.jsx)("button",{type:"button",onClick:this.reverseList,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sortAlphabet,children:"Sort A-Z"}),Object(h.jsx)("button",{type:"button",onClick:this.resetList,children:"Reset"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"})]}):Object(h.jsx)("button",{type:"button",onClick:this.isVisible,children:"Start"})]})}}]),n}(b.a.Component),f=g;s.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6cc4bad8.chunk.js.map