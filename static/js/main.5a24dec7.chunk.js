(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(12),i=n.n(r),s=n(4),o=n.n(s),u=n(6),l=n(3),p=n(8),d=(n(18),n(19),n(7)),b=n(5),j=n(0),h=function(e){var t=e.isPlaying,n=e.setIsPlaying,a=e.audioRef,r=e.songSpan,i=e.setSongSpan,s=e.songs,p=e.setSongs,h=e.currentSong,f=e.setCurrentSong;Object(c.useEffect)((function(){var e=s.map((function(e){return e.id===h.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));p(e)}),[h]);var g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(u.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=s.findIndex((function(e){return e.id===h.id})),"skip-forward"!==n){e.next=4;break}return e.next=4,f(s[(c+1)%s.length]);case 4:if("skip-back"!==n){e.next=12;break}if((c-1)%s.length!==-1){e.next=10;break}return e.next=8,f(s[s.length-1]);case 8:return t&&a.current.play(),e.abrupt("return");case 10:return e.next=12,f(s[(c-1)%s.length]);case 12:t&&a.current.play();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:g(r.currentTime)}),Object(j.jsx)("input",{className:"player-input-range",min:0,max:r.duration||0,value:r.currentTime,onChange:function(e){a.current.currentTime=e.target.value,i(Object(l.a)(Object(l.a)({},r),{},{currentTime:e.target.value}))},type:"range"}),Object(j.jsx)("p",{children:r.duration?g(r.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(d.a,{onClick:function(){return m("skip-back")},className:"play-back",size:"2x",icon:b.a}),Object(j.jsx)(d.a,{onClick:function(){t?(a.current.pause(),n(!t)):(a.current.play(),n(!t))},className:"play",size:"2x",icon:t?b.d:b.e}),Object(j.jsx)(d.a,{onClick:function(){return m("skip-forward")},className:"play-forward",size:"2x",icon:b.b})]})]})},f=function(e){var t=e.currentSong;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{alt:t.name,src:t.cover}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.audioRef,n=e.isPlaying,c=e.song,a=e.songs,r=e.setSongs,i=e.setCurrentSong,s=e.id,p=function(){var e=Object(u.a)(o.a.mark((function e(){var c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.filter((function(e){return e.id===s})),e.next=3,i(c[0]);case 3:u=a.map((function(e){return e.id===s?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),r(u),n&&t.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:p,className:"library-song-container ".concat(c.active?"selected":""),children:[Object(j.jsx)("img",{alt:c.name,src:c.cover}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h2",{children:c.name}),Object(j.jsx)("h3",{children:c.artist})]})]})},m=function(e){var t=e.audioRef,n=e.isPlaying,c=e.songs,a=e.setSongs,r=e.setCurrentSong,i=e.libraryStatus;return Object(j.jsxs)("div",{className:"library-container ".concat(i?"active-library":""),children:[Object(j.jsx)("h1",{children:"Library"}),Object(j.jsxs)("div",{className:"library",children:[c.map((function(e){return Object(j.jsx)(g,{isPlaying:n,song:e,songs:c,setSongs:a,setCurrentSong:r,id:e.id,audioRef:t},e.id)})),";"]})]})},O=n(28),v=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1}]},x=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Waves"}),Object(j.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(j.jsx)(d.a,{icon:b.c})]})]})},y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(v()),n=Object(p.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(a[0]),s=Object(p.a)(i,2),d=s[0],b=s[1],g=Object(c.useState)(!1),O=Object(p.a)(g,2),y=O[0],S=O[1],k=Object(c.useState)(!1),w=Object(p.a)(k,2),C=w[0],N=w[1],P=Object(c.useState)({currentTime:0,duration:0}),T=Object(p.a)(P,2),A=T[0],R=T[1],E=function(e){var t=e.target.currentTime,n=e.target.duration;R(Object(l.a)(Object(l.a)({},A),{},{currentTime:t,duration:n}))},L=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.findIndex((function(e){return e.id===d.id})),t.next=3,b(a[(n+1)%a.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{libraryStatus:C,setLibraryStatus:N}),Object(j.jsx)(f,{currentSong:d}),Object(j.jsx)(h,{audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:d,setCurrentSong:b,songSpan:A,setSongSpan:R,songs:a,setSongs:r}),Object(j.jsx)(m,{audioRef:e,isPlaying:y,songs:a,setSongs:r,setCurrentSong:b,libraryStatus:C}),Object(j.jsx)("audio",{onTimeUpdate:E,onLoadedMetadata:E,ref:e,src:d.audio,onEnded:L})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[26,1,2]]]);
//# sourceMappingURL=main.5a24dec7.chunk.js.map