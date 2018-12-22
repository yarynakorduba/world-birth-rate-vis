(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(46),c=a.n(i),o=(a(104),a(85)),l=a(86),u=a(95),m=a(87),h=a(96),b=a(97),s=a(65),d=a.n(s),f=a(88),p=a(172),g=a(23),w=a(173),v=a(174),x=a(177),y=a(176),O=a(25),j=Object(g.d)().domain(["Africa","America","Asia","Oceania","Europe"]).range(["#f5e11b","#000095","#95278a","#059594","#95040f"]),E=(a(149),a(171)),k=(a(151),function(){return n.a.createElement("div",{className:"Legend"},n.a.createElement(E.a,{scale:j}))}),B=a(175),S=function(e){var t=e.xScale,a=e.minBirthItem,r=e.maxBirthItem,i=e.yMax;return n.a.createElement(n.a.Fragment,null,n.a.createElement(B.a,{from:{x:t(a.birth),y:0},to:{x:t(a.birth),y:i},stroke:"black",strokeWidth:1,label:"".concat(a.country," ").concat(a.birth),labelStroke:"none",labelDx:6,labelDy:15}),n.a.createElement(B.a,{from:{x:t(r.birth),y:0},to:{x:t(r.birth),y:i},stroke:"black",strokeWidth:1,label:"".concat(r.country," ").concat(r.birth),labelStroke:"none",labelDx:6,labelDy:15}))},I=Object(O.b)(Object(O.c)({margin:{top:60,right:120,bottom:200,left:120}}),p.a,Object(O.f)("data","setData"),Object(O.e)(function(){var e=Object(f.a)(d.a.mark(function e(t){var a,r,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.data,r=t.setData,a){e.next=6;break}return e.next=4,Object(g.a)("birth_rate.csv",function(e){var t=e.country,a=e.birth,r=e.code,n=e.region,i=e.id;return{country:t,birth:Number(a),code:r,region:n,id:i}});case 4:n=e.sent,r(n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(O.a)(function(e){return!e.data},Object(O.d)(function(){return"Generating chart..."})),Object(O.e)(function(e){var t=e.data,a=e.margin,r=e.parentWidth;return console.log(r)||{beeswarmData:t.map(function(e){return Object(b.a)({x:e.birth},e)}),xScale:Object(g.c)().domain([0,Math.ceil(Object(g.b)(t,function(e){return e.birth}))]).range([0,r-a.left-a.right]),maxBirthItem:t[Object(g.e)(t,function(e,t){return t.birth-e.birth})],minBirthItem:t[Object(g.e)(t,function(e,t){return e.birth-t.birth})]}}))(function(e){var t=e.data,a=e.beeswarmData,r=e.margin,i=e.parentWidth,c=e.parentHeight,o=e.xScale,l=e.maxBirthItem,u=e.minBirthItem;return n.a.createElement("div",{className:"BeeswarmChart"},n.a.createElement("h2",{className:"BeeswarmChart__header"},"Birth rate per 1000 persons for 2013"),console.log(l,u),n.a.createElement(w.a,{ariaLabel:"Beeswarm chart showind the birth rate for different countries for the year 2013",width:i,height:c,xScale:{type:"linear",domain:[0,Math.ceil(Object(g.b)(t,function(e){return e.birth}))]},yScale:{type:"linear"},margin:r,renderTooltip:function(e){e.event,e.data;var t=e.datum;return n.a.createElement("div",null,n.a.createElement("div",null,t.country),n.a.createElement("div",null,t.birth))}},n.a.createElement(S,{xScale:o,minBirthItem:u,maxBirthItem:l,yMax:c-r.top-r.bottom}),n.a.createElement(v.a,{data:a,fill:function(e){return j(e.region)},size:function(e){return 5}}),n.a.createElement(x.a,{data:a,showHorizontalLine:!1,fullHeight:!0,fullWidth:!0,stroke:"#343a40",strokeWidth:1,circleFill:"transparent",circleSize:6,showCircle:!0,circleStroke:"black"}),n.a.createElement(y.a,{data:a,label:"Birth rate",numTicks:20})),n.a.createElement(k,null))}),D=(a(166),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(I,{className:"App"}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){e.exports=a(168)}},[[99,2,1]]]);
//# sourceMappingURL=main.f4a86788.chunk.js.map