(this["webpackJsonpazure-mern-client"]=this["webpackJsonpazure-mern-client"]||[]).push([[0],{19:function(e,t,n){e.exports=n(41)},3:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),s=n(12),r=n.n(s),c=(n(3),n(13)),i=n(14),l=n(17),u=n(15),h=n(18),d=n(16),m=n.n(d),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bestShows:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount success"),m.a.get("/api/data").then((function(t){console.log("data recieved: ",t.data),e.setState({bestShows:t.data[0]})})).catch(alert)}},{key:"render",value:function(){var e=this;return console.log("render bestShows: ",this.state.bestShows),a.a.createElement("div",null,"azure-mern-demo",a.a.createElement("ul",null,Object.keys(this.state.bestShows).map((function(t,n){return a.a.createElement("li",null,t," - ",e.state.bestShows[t]," ")}))))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.fbf90640.chunk.js.map