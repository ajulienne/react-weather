(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{29:function(e,t,n){e.exports=n(70)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),o=(n(34),n(35),n(3)),i=(n(36),function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}),u=n(13),s=n.n(u),d=s.a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),m=s.a.create({baseURL:"https://nominatim.openstreetmap.org/"}),f=function(e){return m.get("search",{params:{q:e,format:"json",addressdetails:1}}).then((function(e){return e.data.map((function(e){return{display_name:e.display_name,lat:e.lat,lon:e.lon,address:e.address}})).filter((function(e){var t=e.address;return null!==t.city&&void 0!==t.city||null!==t.village&&void 0!==t.vilage}))}))},E=(n(53),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),h=n(7),p=function(e){return{type:"[CITY] Set city",payload:e}},v=n(5),y=n(1),g=n(8),b=n.n(g),w=function(e){return[{id:"01d",icon:y.o,color:"#ffc845"},{id:"02d",icon:y.i,color:"#ffc845"},{id:"03d",icon:y.e,color:"#7C7E8D"},{id:"04d",icon:y.i,color:"#ffc845"},{id:"09d",icon:y.h,color:"#16132f"},{id:"10d",icon:y.j,color:"#16132f"},{id:"11d",icon:y.c,color:"#ffc845"},{id:"13d",icon:y.n,color:"#25A2D8"},{id:"50d",icon:y.m,color:"#cccccc"},{id:"01n",icon:y.k,color:"#4e4cac"},{id:"02n",icon:y.f,color:"#4e4cac"},{id:"03n",icon:y.e,color:"#7C7E8D"},{id:"04n",icon:y.f,color:"#4e4cac"},{id:"09n",icon:y.h,color:"#16132f"},{id:"10n",icon:y.g,color:"#4e4cac"},{id:"11n",icon:y.c,color:"#ffc845"},{id:"13n",icon:y.n,color:"#25A2D8"},{id:"50n",icon:y.m,color:"#cccccc"}].find((function(t){return t.id===e}))},O=function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*e).getDay()]},j=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(1e3*e),a="".concat(String(n.getHours()).padStart(2,"0"),"h");return t&&(a+=String(n.getMinutes()).padStart(2,"0")),a},N=function(e,t){return"celsius"===t?Math.round(e):Math.round(9*e/5+32)},k=function(e){return e.substr(0,1).toUpperCase()+e.slice(1)},S=function(e){return e?{cityName:e.city||e.municipality||e.town||e.village,countyName:e.region||e.state||e.state_district||e.county,countryName:e.country||e.country_code||e.continent}:null},T=function(e,t,n){return function(a,r){a({type:"[TOAST] Add toast",payload:{title:e,message:t,type:n}}),setTimeout((function(){a(C())}),3e3)}},C=function(){return{type:"[TOAST] Remove toast"}},W=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),s=u[0],d=u[1],g=Object(h.b)(),w=Object(h.c)((function(e){return e.cityReducer.city})),O=Object(a.useState)(!1),j=Object(o.a)(O,2),N=j[0],k=j[1],C=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)(null),u=Object(o.a)(i,2),s=u[0],d=u[1],m=Object(a.useState)(null),f=Object(o.a)(m,2),E=f[0],h=f[1],p=Object(a.useCallback)((function(){return l(!0),d(null),h(null),e.apply(void 0,arguments).then((function(e){return d(e)})).catch((function(e){return h(e)})).finally((function(){return l(!1)}))}),[e]);return Object(a.useEffect)((function(){t&&p()}),[p,t]),{execute:p,pending:c,value:s,error:E}}(f,!1),W=C.execute,R=C.pending,A=C.value,D=C.error,F=function(e,t){var n=Object(a.useState)(e),r=Object(o.a)(n,2),c=r[0],l=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){l(e)}),t);return function(){clearTimeout(n)}}),[e,t]),c}(n,500);Object(a.useEffect)((function(){F&&(g({type:"[CITY] Reset city"}),W(F))}),[F,W,g]);var H=Object(a.useRef)();return i(H,(function(){return d(!1)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"searchbar"},r.a.createElement("button",{title:"Search my location",onClick:function(){"geolocation"in navigator?(k(!0),navigator.geolocation.getCurrentPosition((function(e){var t,n;(t=e.coords.latitude,n=e.coords.longitude,m.get("reverse",{params:{lat:t,lon:n,format:"json",addressdetails:1}}).then((function(e){var t=e.data;return{display_name:t.display_name,lat:t.lat,lon:t.lon,address:t.address}}))).then((function(e){g(p(e)),k(!1)}))}),(function(e){k(!1),g(T("Unable to locate you.","Please type in your location manually.","error"))}))):(k(!1),g(T("Your browser doesn't support geolocation.","Please type in your location manually.","error")))}},N||R?r.a.createElement(v.a,{icon:y.d,spin:!0}):r.a.createElement(v.a,{icon:y.l})),s?r.a.createElement("input",{autoFocus:!0,ref:H,type:"text",placeholder:"City name",onChange:function(e){return c(e.target.value)}}):r.a.createElement("span",{onClick:function(){d(!0)},className:b()("placeholder",{empty:!(null===w||void 0===w?void 0:w.address)})},w&&S(null===w||void 0===w?void 0:w.address).cityName||"City name"),!w&&(null===A||void 0===A?void 0:A.length)>0&&r.a.createElement("div",{className:"query-results"},A.map((function(e,t){return r.a.createElement("button",{key:t,onClick:function(){return function(e){g(p(e))}(e)}},e.address.city,", ",e.address.state,","," ",e.address.country)})),R&&r.a.createElement(E,null),D&&r.a.createElement("div",{className:"error"},D))))},R=function(e,t){return function(n,a){n({type:"[WEATHER] Get Weather"}),function(e,t){return d.get("onecall",{params:{appid:"1fd63ed6b683a7512a417626e610f987",lat:e,lon:t,units:"metric"}}).then((function(e){var t=e.data,n=24-(new Date).getHours();return t.hourly=[t.hourly.slice(0,n+1),t.hourly.slice(n+1,25+n)],t}))}(e,t).then((function(e){n(A(e))})).catch((function(e){n(D(e))}))}},A=function(e){return{type:"[WEATHER] Get Weather - Success",payload:e}},D=function(e){return{type:"[WEATHER] Get Weather - Failure",payload:e}},F=(n(60),n(61),function(e){var t=e.onChange,n=e.unit,c=Object(a.useState)(!1),l=Object(o.a)(c,2),u=l[0],s=l[1],d=Object(a.useRef)();i(d,(function(){return s(!1)}));var m=function(e){s(!1),t(e)},f=r.a.createElement("button",{onClick:function(){return m("celsius")},className:b()({current:"celsius"===n})},"Celsius"),E=r.a.createElement("button",{onClick:function(){return m("farenheit")},className:b()({current:"farenheit"===n})},"Farenheit");return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{onClick:function(){s(!u)}},k(n)," ",r.a.createElement(v.a,{icon:u?y.b:y.a})),u&&r.a.createElement("div",{className:"options",ref:d},"celsius"===n?r.a.createElement(r.a.Fragment,null,f,E):r.a.createElement(r.a.Fragment,null,E,f)))}),H=function(e){var t=e.data,n=Object(a.useState)("celsius"),c=Object(o.a)(n,2),l=c[0],i=c[1],u=w(t.weather[0].icon);return r.a.createElement("div",{className:"current-weather"},r.a.createElement("div",{className:"controls"},r.a.createElement("div",null,r.a.createElement("h2",null,"".concat(O(t.dt)," ").concat(new Date(1e3*t.dt).getHours(),"h")),r.a.createElement("span",null,t.weather[0].description)),r.a.createElement(F,{onChange:function(e){return i(e)},unit:l})),r.a.createElement("div",{className:"temp"},r.a.createElement("strong",null,r.a.createElement(v.a,{icon:null===u||void 0===u?void 0:u.icon,color:null===u||void 0===u?void 0:u.color})," ",N(t.temp,l),"\xb0")),r.a.createElement("div",{className:"additionnal-infos"},r.a.createElement("ul",null,r.a.createElement("li",null,"Feels like: ",N(t.feels_like,l),"\xb0"),r.a.createElement("li",null,"Wind: ",Math.round(360*t.wind_speed)/100,"km/h"),r.a.createElement("li",null,"Humidity: ",t.humidity,"%"))))},M=(n(62),n(63),function(e){var t=e.hourData,n=e.unit,a=e.isOpen,c=e.onToggle,l=w(t.weather[0].icon);return r.a.createElement("div",{className:b()("hourly-tab",{open:a}),onClick:c},r.a.createElement("div",{className:"heading"},r.a.createElement("div",null,r.a.createElement("strong",null,"".concat(new Date(1e3*t.dt).getHours(),"h"))),r.a.createElement("div",null,N(t.temp,n),"\xb0"),r.a.createElement("div",null,r.a.createElement(v.a,{alt:"Precipitation icon",title:"".concat(Math.round(100*t.pop),"% chance of precipitations"),icon:t.pop>.15?y.q:y.r})),r.a.createElement("div",null,r.a.createElement(v.a,{icon:null===l||void 0===l?void 0:l.icon,color:l.color,alt:"Weather icon",title:k(t.weather[0].description)}))),r.a.createElement("div",{className:"body"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Feels like"),r.a.createElement("td",null,N(t.feels_like,n),"\xb0")),r.a.createElement("tr",null,r.a.createElement("th",null,"Wind"),r.a.createElement("td",null,Math.round(3.6*t.wind_speed)," km/h",t.wind_gust&&", with gusts up to ".concat(Math.round(3.6*t.wind_gust)," km/h"))),r.a.createElement("tr",null,r.a.createElement("th",null,"Humidity"),r.a.createElement("td",null,t.humidity,"%")),r.a.createElement("tr",null,r.a.createElement("th",null,"Atmospheric pressure"),r.a.createElement("td",null,t.pressure," hPa"))))))}),_=function(e){var t=e.data,n=Object(a.useState)("celsius"),c=Object(o.a)(n,2),l=c[0],i=c[1],u=Object(a.useState)(),s=Object(o.a)(u,2),d=s[0],m=s[1],f=function(e){m(d===e?null:e)};return r.a.createElement("div",{className:"two-days-weather"},r.a.createElement("div",{className:"controls"},r.a.createElement("h2",null,"Hourly weather"),r.a.createElement(F,{onChange:function(e){return i(e)},unit:l})),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"day-separator"},"Today"),t[0]&&t[0].filter((function(e,t){return t%3===0})).map((function(e,t){return r.a.createElement(M,{key:e.dt,onToggle:function(){return f(e.dt)},hourData:e,isOpen:d===e.dt,unit:l})})),r.a.createElement("span",{className:"day-separator"},O(t[1][0].dt)),t[1]&&t[1].filter((function(e,t){return t%3===0})).map((function(e,t){return r.a.createElement(M,{key:e.dt,onToggle:function(){return f(e.dt)},hourData:e,isOpen:d===e.dt,unit:l})}))))},x=(n(64),n(65),function(e){var t=e.dayData,n=e.unit,a=e.isOpen,c=e.onToggle,l=w(t.weather[0].icon);return r.a.createElement("div",{onClick:c,className:b()("tab",{open:a})},r.a.createElement("div",{className:"heading"},r.a.createElement("div",null,r.a.createElement("strong",null,O(t.dt)),r.a.createElement("br",null),k(t.weather[0].description)),r.a.createElement("div",{className:"precipitations"},t.pop>.15?r.a.createElement("span",{title:"Precipitation chances"},Math.round(100*t.pop),"%"):""),r.a.createElement("div",null,r.a.createElement(v.a,{alt:"Weather icon",title:t.weather[0].description,icon:l.icon,color:l.color,style:{width:"40px",fontSize:"40px"}})),r.a.createElement("div",{className:"min-max"},r.a.createElement("span",{title:"Maximum temperature"},N(t.temp.max,n),"\xb0"),r.a.createElement("span",{title:"Minimum temperature"},N(t.temp.min,n),"\xb0"))),r.a.createElement("div",{className:"body"},r.a.createElement("table",{className:"general-infos"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Wind"),r.a.createElement("td",null,Math.round(3.6*t.wind_speed)," km/h")),r.a.createElement("tr",null,r.a.createElement("th",null,"Humidity"),r.a.createElement("td",null,t.humidity,"%")),r.a.createElement("tr",null,r.a.createElement("th",null,"Sunrise"),r.a.createElement("td",null,j(new Date(t.sunrise)))),r.a.createElement("tr",null,r.a.createElement("th",null,"Sunset"),r.a.createElement("td",null,j(new Date(t.sunset)))))),r.a.createElement("div",{className:"day-temps"},r.a.createElement("div",{className:"morning"},r.a.createElement("span",null,"Morning"),r.a.createElement("br",null),r.a.createElement("strong",null,N(t.temp.morn,n),"\xb0")),r.a.createElement("div",{className:"day"},r.a.createElement("span",null,"Day"),r.a.createElement("br",null),r.a.createElement("strong",null,N(t.temp.day,n),"\xb0")),r.a.createElement("div",{className:"evening"},r.a.createElement("span",null,"Evening"),r.a.createElement("br",null),r.a.createElement("strong",null,N(t.temp.eve,n),"\xb0")),r.a.createElement("div",{className:"night"},r.a.createElement("span",null,"Night"),r.a.createElement("br",null),r.a.createElement("strong",null,N(t.temp.night,n),"\xb0")))))}),L=function(e){var t=e.data,n=Object(a.useState)("celsius"),c=Object(o.a)(n,2),l=c[0],i=c[1],u=Object(a.useState)(),s=Object(o.a)(u,2),d=s[0],m=s[1];return r.a.createElement("div",{className:"weekly"},r.a.createElement("div",{className:"controls"},r.a.createElement("h2",null,"Weekly weather"),r.a.createElement(F,{onChange:function(e){return i(e)},unit:l})),r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(x,{dayData:e,unit:l,key:e.dt,isOpen:d===t,onToggle:function(){var e;m(d===(e=t)?null:e)}})}))))},P=(n(66),function(e){var t=e.children;return r.a.createElement("div",{className:"block"},t)}),U=(n(67),function(e){var t=e.address,n=S(t),a=n.cityName,c=n.countyName,l=n.countryName;return r.a.createElement("div",{className:"address"},r.a.createElement("h1",null,a),r.a.createElement("h2",null,c),r.a.createElement("h2",null,l))}),G=(n(68),function(){var e=Object(h.c)((function(e){return e.toastReducer.toast})),t=Object(h.b)();return r.a.createElement("div",{className:b()("toast",null===e||void 0===e?void 0:e.type,{show:null!==e})},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){t(C())}},r.a.createElement(v.a,{icon:y.p,size:"2x"})),r.a.createElement("p",null,r.a.createElement("strong",null,e.title),r.a.createElement("br",null),e.message)))});var I=function(){var e=Object(h.c)((function(e){return e.cityReducer})),t=Object(h.c)((function(e){return e.weatherReducer})),n=Object(h.b)();return Object(a.useEffect)((function(){e.city&&n(R(e.city.lat,e.city.lon))}),[e.city,n]),r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement(W,null),e.city&&r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{address:e.city.address}),t.weather?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"side-by-side"},r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(H,{data:t.weather.current})),r.a.createElement(P,null,r.a.createElement(L,{data:t.weather.daily}))),r.a.createElement(P,null,r.a.createElement(_,{data:t.weather.hourly})))):r.a.createElement(E,null)))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=n(9),B=n(4),J={city:null,loading:!1,error:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[CITY] Set city":return Object(B.a)(Object(B.a)({},e),{},{city:t.payload});case"[CITY] Reset city":return Object(B.a)(Object(B.a)({},e),{},{city:null});default:return e}},K={weather:null,loading:!1,error:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[WEATHER] Get Weather":return Object(B.a)(Object(B.a)({},e),{},{loading:!0,error:null});case"[WEATHER] Get Weather - Success":return Object(B.a)(Object(B.a)({},e),{},{loading:!1,weather:t.payload});case"[WEATHER] Get Weather - Failure":return Object(B.a)(Object(B.a)({},e),{},{loading:!1,error:t.payload});default:return e}},V={toast:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[TOAST] Add toast":return Object(B.a)(Object(B.a)({},e),{},{toast:t.payload});case"[TOAST] Remove toast":return Object(B.a)(Object(B.a)({},e),{},{toast:null});default:return e}},Z=n(28),ee=(n(69),function(e){var t=Object(z.combineReducers)({cityReducer:$,weatherReducer:Q,toastReducer:X}),n=Object(z.applyMiddleware)(Z.a);return Object(z.createStore)(t,e,n)}());l.a.render(r.a.createElement(h.a,{store:ee},r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-weather","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.d81fb8aa.chunk.js.map