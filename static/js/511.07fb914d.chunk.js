"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[511],{511:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,u,c,i=r(439),o=r(791),s=r(39),p=r(689),f=r(168),h=r(444),v=h.ZP.li(e||(e=(0,f.Z)(["\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid grey;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),\n    inset 0 0 40px rgba(0, 0, 0, 0.1);\n"]))),d=h.ZP.h2(a||(a=(0,f.Z)(["\n  margin-bottom: 20px;\n  font-weight: 700;\n"]))),x=h.ZP.p(u||(u=(0,f.Z)(["\n  margin-bottom: 20px;\n  font-weight: 500;\n"]))),g=h.ZP.div(c||(c=(0,f.Z)(["\n  width: 200px;\n  height: 300px;\n  font-weight: 700;\n  color: #9c27b0;\n"]))),l=r(184);function m(){var n=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),r=(0,i.Z)(t,2),e=r[0],a=r[1];return(0,o.useEffect)((function(){(0,s.sv)(n).then(a)}),[n]),e}();return(0,l.jsx)(l.Fragment,{children:0!==n.length?(0,l.jsx)("ul",{children:n.map((function(n,t){return(0,l.jsxs)(v,{children:[(0,l.jsxs)(d,{children:["Author: ",n.author]}),(0,l.jsx)(x,{children:n.content})]},t)}))}):(0,l.jsx)(g,{children:"We don`t have any reviews for this movie"})})}},39:function(n,t,r){r.d(t,{I2:function(){return o},fU:function(){return p},l2:function(){return s},rQ:function(){return i},sv:function(){return f}});var e=r(861),a=r(757),u=r.n(a),c=r(388).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"58ada184fb3121c1b6ebca2f5648a978"}}),i=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=511.07fb914d.chunk.js.map