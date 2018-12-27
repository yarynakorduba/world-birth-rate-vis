(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,e,a){},149:function(t,e,a){},151:function(t,e,a){},166:function(t,e,a){},168:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),i=a(46),c=a.n(i),o=(a(104),a(86)),h=a(87),l=a(96),b=a(88),d=a(97),u=a(71),m=a(65),s=a.n(m),f=a(89),w=a(173),g=a(13),p=a(174),x=a(175),O=a(178),j=a(177),y=a(25),k=Object(g.c)().domain(["Africa","America","Asia","Oceania","Europe"]).range(["#f5e11b","#000095","#95278a","#059594","#95040f"]),v=(a(149),a(172)),E=(a(151),function(){return n.a.createElement("div",{className:"Legend"},n.a.createElement(v.a,{scale:k}))}),S=a(176),I=function(t){var e=t.xScale,a=t.minItem,r=t.maxItem,i=t.yMax,c=t.currentInfo;return n.a.createElement(n.a.Fragment,null,n.a.createElement(S.a,{from:{x:e("show death rate"===c?a.birth:a.death),y:0},to:{x:e("show death rate"===c?a.birth:a.death),y:i},stroke:"black",strokeWidth:1,label:"".concat(a.country," ").concat("show death rate"===c?a.birth:a.death),labelStroke:"none",strokeDasharray:"2 2 2",labelDx:6,labelDy:15}),n.a.createElement(S.a,{from:{x:e("show death rate"===c?r.birth:r.death),y:0},to:{x:e("show death rate"===c?r.birth:r.death),y:i},stroke:"black",strokeWidth:1,strokeDasharray:"2 2 2",label:"".concat(r.country," ").concat("show death rate"===c?r.birth:r.death),labelStroke:"none",labelDx:6,labelDy:15}))},D=Object(y.b)(Object(y.c)({margin:{top:120,right:120,bottom:150,left:120}}),w.a,Object(y.f)("data","setData"),Object(y.e)(function(){var t=Object(f.a)(s.a.mark(function t(e){var a,r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.data,r=e.setData,a){t.next=6;break}return t.next=4,Object(g.a)("birth_rate.csv",function(t){var e=t.country,a=t.birth,r=t.death,n=t.code,i=t.region,c=t.id;return{country:e,birth:Number(a),death:Number(r),code:n,region:i,id:c}});case 4:n=t.sent,r(n);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),Object(y.a)(function(t){return!t.data},Object(y.d)(function(){return"Generating chart..."})),Object(y.g)(function(t){var e=t.data,a=t.margin,r=t.parentWidth;return{margin:a,parentWidth:r,beeswarmData:e.map(function(t){return Object(u.a)({},t,{x:t.birth})}),data:e,maxItem:e[Object(g.d)(e,function(t,e){return e.birth-t.birth})],minItem:e[Object(g.d)(e,function(t,e){return t.birth-e.birth})],buttonText:"show death rate",xScale:Object(g.b)().domain([0,Math.ceil(e[Object(g.d)(e,function(t,e){return e.birth-t.birth})].birth)]).range([0,r-2*a.left]),xSizeScale:Object(g.b)().domain([0,Math.ceil(e[Object(g.d)(e,function(t,e){return e.birth-t.birth})].birth)]).range([2,15])}},{toggleHandler:function(t){var e=t.data,a=(t.beeswarmData,t.buttonText),r=t.parentWidth,n=t.margin;return function(){return{beeswarmData:e.map(function(t){return Object(u.a)({},t,{x:"show death rate"===a?t.death:t.birth})}),buttonText:"show death rate"===a?"show birth rate":"show death rate",maxItem:e[Object(g.d)(e,function(t,e){return"show death rate"===a?e.death-t.death:e.birth-t.birth})],minItem:e[Object(g.d)(e,function(t,e){return"show death rate"===a?t.death-e.death:t.birth-e.birth})],xScale:Object(g.b)().domain([0,Math.ceil("show death rate"===a?e[Object(g.d)(e,function(t,e){return e.death-t.death})].death:e[Object(g.d)(e,function(t,e){return e.birth-t.birth})].birth)]).range([0,r-n.right-n.left]),xSizeScale:Object(g.b)().domain([0,Math.ceil("show death rate"===a?e[Object(g.d)(e,function(t,e){return e.death-t.death})].death:e[Object(g.d)(e,function(t,e){return e.birth-t.birth})].birth)]).range([2,15])}}}}))(function(t){t.data;var e=t.beeswarmData,a=t.margin,r=t.parentWidth,i=t.parentHeight,c=t.xScale,o=t.xSizeScale,h=t.maxItem,l=t.minItem,b=t.toggleHandler,d=t.buttonText;return n.a.createElement("div",{className:"BeeswarmChart"},n.a.createElement("h2",{className:"BeeswarmChart__header"},"Birth rate per 1000 persons for 2013"," ",n.a.createElement("button",{className:"BeeswarmChart__button",onClick:b},d)),n.a.createElement(p.a,{ariaLabel:"Beeswarm chart showing the birth rate for different countries for the year 2013",width:r,height:i,margin:a,xScale:{type:"linear",range:[0,r-a.left-a.right],domain:[0,Math.ceil("show death rate"===d?h.birth:h.death)]},yScale:{type:"linear",domain:[0,Math.ceil("show death rate"===d?h.birth:h.death)]},renderTooltip:function(t){t.event,t.data;var e=t.datum;return n.a.createElement("div",null,n.a.createElement("div",null,e.country),n.a.createElement("div",null,"show birth rate"===d?e.death:e.birth))}},n.a.createElement(I,{currentInfo:d,xScale:c,minItem:l,maxItem:h,yMax:i-a.bottom-a.top}),n.a.createElement(x.a,{data:e,fill:function(t){return k(t.region)},size:function(t){return o(t.x)}}),n.a.createElement(O.a,{data:e,showHorizontalLine:!1,fullHeight:!0,fullWidth:!0,stroke:"#343a40",strokeWidth:1,circleFill:"transparent",circleSize:6,showCircle:!0,circleStroke:"black"}),n.a.createElement(j.a,{data:e,label:"Birth rate",numTicks:20})),n.a.createElement(E,null))}),W=(a(166),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(D,{className:"App"}))}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},99:function(t,e,a){t.exports=a(168)}},[[99,2,1]]]);
//# sourceMappingURL=main.9f585af5.chunk.js.map