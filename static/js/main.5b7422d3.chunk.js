(this.webpackJsonptext2tag=this.webpackJsonptext2tag||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/github.aac90947.svg"},,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(15),n(16),n(4)),l=n.n(c),s=n(5),u=n(6),d=n(8),p=n(7),h=n(1),m=n(9),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={showMenu:!1,app:r.a.createElement("div",null,"Wait Click App")},e.showMenu=e.showMenu.bind(Object(h.a)(e)),e.closeMenu=e.closeMenu.bind(Object(h.a)(e)),e.selectApp=e.selectApp.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},(function(){document.addEventListener("click",t.closeMenu)}))}},{key:"closeMenu",value:function(e){var t=this;this.dropdownMenu.contains(e.target)||this.setState({showMenu:!1},(function(){document.removeEventListener("click",t.closeMenu)}))}},{key:"selectApp",value:function(e){var t=e.target.id,n=this.props.apps[t].cmp;this.setState({app:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.showMenu},"Apps"),this.state.showMenu?r.a.createElement("div",{ref:function(t){e.dropdownMenu=t}},this.props.apps.map((function(t,n){return r.a.createElement("button",{key:n,id:n,onClick:e.selectApp},t.name)}))):null,r.a.createElement("hr",null),this.state.app)}}]),t}(r.a.Component);var v=function(){return r.a.createElement("h1",null,"Iury Adones")};var g,w=r.a.createElement("h1",null,"Hello, ",(g={firstName:"Iury",lastName:"Adones"}).firstName+" "+g.lastName,"!");var E=function(){return w};function b(e){return Object.keys(e).length?r.a.createElement("h1",null,"Hi, ",function(e){return e.firstName+" "+e.lastName}(e),"!"):r.a.createElement("h1",null,"Hi, Stranger.")}var k=function(){var e=b({}),t=b({firstName:"Iury",lastName:"Adones"});return r.a.createElement("div",null,r.a.createElement("div",null,e,r.a.createElement("p",null,"Case user null -> response Stranger")),r.a.createElement("div",null,t,r.a.createElement("p",null,"Case user with user.firstName and user.lastName")))};var y=function(){var e=[{name:"App 1 - Name",cmp:r.a.createElement(v,null)},{name:"App 2 - NameDict",cmp:r.a.createElement(E,null)},{name:"App 3 - NameConditional",cmp:r.a.createElement(k,null)}];return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"10%",float:"left","text-align":"center"}},r.a.createElement("a",{href:"https://github.com/iuryadones/react-getting-started/"},r.a.createElement("img",{src:l.a,alt:"GitHub",width:"80%"}))),r.a.createElement("div",{style:{width:"90%",float:"right"}},r.a.createElement(f,{apps:e})))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-getting-started",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-getting-started","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.5b7422d3.chunk.js.map