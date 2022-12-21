"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[612],{612:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,u,c,o,i,s=r(439),p=r(689),f=r(39),d=r(87),x=r(791),l=r(168),h=r(444),v=h.ZP.form(e||(e=(0,l.Z)(["\n  display: flex;\n  padding: 15px;\n  gap: 20px;\n"]))),b=h.ZP.input(a||(a=(0,l.Z)(["\n  width: 400px;\n  font-size: 15px;\n"]))),g=h.ZP.button(u||(u=(0,l.Z)(["\n  display: block;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-weight: 700;\n  font-size: 15px;\n  border: 1px solid grey;\n  color: black;\n  &:hover,\n  &:focus {\n    color: #9c27b0;\n  }\n"]))),m=h.ZP.ul(c||(c=(0,l.Z)(["\n  display: block;\n  padding: 15px;\n"]))),Z=h.ZP.li(o||(o=(0,l.Z)(["\n  margin-bottom: 10px;\n"]))),w=(0,h.ZP)(d.OL)(i||(i=(0,l.Z)(["\n  color: black;\n  font-weight: 700;\n  &:hover,\n  &:focus {\n    color: #9c27b0;\n  }\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),\n    inset 0 0 40px rgba(0, 0, 0, 0.1);\n  text-decoration: none;\n"]))),y=r(184);function k(){var n=(0,x.useState)([]),t=(0,s.Z)(n,2),r=t[0],e=t[1],a=(0,d.lr)(),u=(0,s.Z)(a,2),c=u[0],o=u[1],i=c.get("query");(0,x.useEffect)((function(){""!==i&&null!==i&&(0,f.I2)(i).then(e)}),[i]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(v,{onSubmit:function(n){n.preventDefault(),o({query:n.currentTarget.elements.query.value.trim()}),n.target.reset()},children:[(0,y.jsx)(b,{name:"query",type:"text"}),(0,y.jsx)(g,{type:"submit",children:"Search"})]}),r&&(0,y.jsx)(m,{children:r.map((function(n){return(0,y.jsx)(Z,{children:(0,y.jsx)(w,{to:"".concat(n.id),children:n.title})},n.id)}))}),(0,y.jsx)(p.j3,{})]})}},39:function(n,t,r){r.d(t,{I2:function(){return i},fU:function(){return p},l2:function(){return s},rQ:function(){return o},sv:function(){return f}});var e=r(861),a=r(757),u=r.n(a),c=r(388).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"58ada184fb3121c1b6ebca2f5648a978"}}),o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=612.f7dda612.chunk.js.map