(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(46),i=a.n(c),o=(a(104),a(86)),h=a(87),l=a(96),u=a(88),b=a(97),d=a(71),m=a(65),s=a.n(m),f=a(89),w=a(172),p=a(16),g=a(173),x=a(174),O=a(177),j=a(176),y=a(24),v=Object(p.d)().domain(["Africa","America","Asia","Oceania","Europe"]).range(["#f5e11b","#000095","#95278a","#059594","#95040f"]),k=(a(149),a(171)),E=(a(151),function(){return n.a.createElement("div",{className:"Legend"},n.a.createElement(k.a,{scale:v}))}),D=a(175),S=function(e){var t=e.xScale,a=e.minItem,r=e.maxItem,c=e.yMax,i=e.currentInfo;return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{from:{x:t("show death rate"===i?a.birth:a.death),y:0},to:{x:t("show death rate"===i?a.birth:a.death),y:c},stroke:"black",strokeWidth:1,label:"".concat(a.country," ").concat("show death rate"===i?a.birth:a.death),labelStroke:"none",strokeDasharray:"2 2 2",labelDx:6,labelDy:15}),n.a.createElement(D.a,{from:{x:t("show death rate"===i?r.birth:r.death),y:0},to:{x:t("show death rate"===i?r.birth:r.death),y:c},stroke:"black",strokeWidth:1,strokeDasharray:"2 2 2",label:"".concat(r.country," ").concat("show death rate"===i?r.birth:r.death),labelStroke:"none",labelDx:6,labelDy:15}))},I=Object(y.b)(Object(y.c)({margin:{top:100,right:120,bottom:150,left:120}}),w.a,Object(y.f)("data","setData"),Object(y.e)(function(){var e=Object(f.a)(s.a.mark(function e(t){var a,r,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.data,r=t.setData,a){e.next=6;break}return e.next=4,Object(p.a)("birth_rate_data.csv",function(e){var t=e.country,a=e.birth,r=e.death,n=e.region,c=e.id,i=e.GDP;return console.log(Number(i))||{country:t,birth:Number(a),death:Number(r),GDP:Number(i),region:n,id:c}});case 4:n=e.sent,r(n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(y.a)(function(e){return!e.data},Object(y.d)(function(){return"Generating chart..."})),Object(y.g)(function(e){var t=e.data,a=e.margin,r=e.parentWidth;return{margin:a,parentWidth:r,beeswarmData:t.map(function(e){return Object(d.a)({},e,{x:e.birth,y:0})}),data:t,maxItem:t[Object(p.e)(t,function(e,t){return t.birth-e.birth})],minItem:t[Object(p.e)(t,function(e,t){return e.birth-t.birth})],buttonText:"show death rate",xScale:Object(p.c)().domain([0,Math.ceil(t[Object(p.e)(t,function(e,t){return t.birth-e.birth})].birth)]).range([0,r-2*a.left])}},{toggleHandler:function(e){var t=e.data,a=(e.beeswarmData,e.buttonText),r=e.parentWidth,n=e.margin;return function(){return{beeswarmData:t.map(function(e){return Object(d.a)({},e,{x:"show death rate"===a?e.death:e.birth})}),buttonText:"show death rate"===a?"show birth rate":"show death rate",maxItem:t[Object(p.e)(t,function(e,t){return"show death rate"===a?t.death-e.death:t.birth-e.birth})],minItem:t[Object(p.e)(t,function(e,t){return"show death rate"===a?e.death-t.death:e.birth-t.birth})],xScale:Object(p.c)().domain([0,Math.ceil("show death rate"===a?t[Object(p.e)(t,function(e,t){return t.death-e.death})].death:t[Object(p.e)(t,function(e,t){return t.birth-e.birth})].birth)]).range([0,r-n.right-n.left])}}}}),Object(y.e)(function(e){var t=e.data;return{xSizeScale:Object(p.c)().domain([0,Object(p.b)(t,function(e){return e.GDP})]).range([3,15])}}))(function(e){e.data;var t=e.beeswarmData,a=e.margin,r=e.parentWidth,c=e.parentHeight,i=e.xScale,o=e.xSizeScale,h=e.maxItem,l=e.minItem,u=e.toggleHandler,b=e.buttonText;return n.a.createElement("div",{className:"BeeswarmChart"},n.a.createElement("h2",{className:"BeeswarmChart__header"},"show death rate"===b?"Birth":"Death"," rate per 1000 persons for 2017",n.a.createElement("button",{className:"BeeswarmChart__button",onClick:u},b)),n.a.createElement(g.a,{ariaLabel:"Beeswarm chart showing the birth rate for different countries for the year 2013",width:r,height:c,margin:a,xScale:{type:"linear",domain:[0,Math.ceil("show death rate"===b?h.birth:h.death)]},yScale:{type:"linear",range:[c-a.top-a.bottom,0]},renderTooltip:function(e){e.event,e.data;var t=e.datum;return n.a.createElement("div",null,n.a.createElement("div",null,t.country),n.a.createElement("div",null,"show birth rate"===b?t.death:t.birth))}},n.a.createElement(S,{currentInfo:b,xScale:i,minItem:l,maxItem:h,yMax:c-a.bottom-a.top}),n.a.createElement(x.a,{data:t,fill:function(e){return v(e.region)},size:function(e){return console.log(e.GDP)||o(e.GDP)}}),n.a.createElement(O.a,{data:t,showHorizontalLine:!1,fullHeight:!0,fullWidth:!0,stroke:"#343a40",strokeWidth:1,circleFill:"transparent",circleSize:6,showCircle:!0,circleStroke:"black"}),n.a.createElement(j.a,{data:t,label:"Birth rate",numTicks:20})),n.a.createElement(E,null))}),N=(a(166),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(I,{className:"App"}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){e.exports=a(168)}},[[99,2,1]]]);
//# sourceMappingURL=main.1bd5029c.chunk.js.map