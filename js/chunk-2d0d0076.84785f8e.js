(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0076"],{"65de":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[t._v("Správca dokumentov")]),r("p",[t._v("Správca dokumentov vypisuje certifikáty.")])])],1),r("b-container",[t.visitor&&t.visitor.id?r("b-table-simple",[r("b-tr",[r("b-th",[t._v("Typ")]),r("b-th",[t._v("Hodnota")])],1),r("b-tr",[r("b-th",[t._v("Meno")]),r("b-td",[t._v(t._s(t.visitor.firstName)+" "+t._s(t.visitor.lastName))])],1),r("b-tr",[r("b-th",[t._v("Dátum narodenia / Doklad cudzinca")]),r("b-td",[t._v(t._s(t.parseRC())+" "+t._s(t.visitor.passport))])],1),r("b-tr",[r("b-th",[t._v("Výsledok testu")]),"positive"===t.visitor.result?r("b-td",[r("div",{staticClass:"badge badge-danger"},[t._v("Pozitívny")])]):t._e(),"negative"===t.visitor.result?r("b-td",[r("div",{staticClass:"badge badge-danger"},[t._v("Negatívny")])]):t._e()],1)],1):t._e(),r("button",{staticClass:"btn btn-primary my-4",on:{click:t.nextTestClick}},[t._v(" Načítať údaje ďalšieho testu "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[r("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1)],1)},s=[],n=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={data:function(){return{visitor:{}}},methods:a(a(a({},Object(n["b"])({GetNextTest:"result/GetNextTest",RemoveFromDocQueue:"result/RemoveFromDocQueue"})),Object(n["b"])({openSuccess:"snackbar/openSuccess"})),{},{nextTestClick:function(){var t=this;console.log("click"),this.visitor.testingSet?this.RemoveFromDocQueue({testId:this.visitor.testingSet}).then((function(e){e&&t.openSuccess("Test bol odobraný z fronty"),t.GetNextTest().then((function(e){e?t.visitor=e:(t.visitor={},t.openSuccess("Zatiaľ nie je dostupný žiadny ďalší test. Skúste znovu neskôr."))}))})):this.GetNextTest().then((function(e){e?t.visitor=e:(t.visitor={},t.openSuccess("Zatiaľ nie je dostupný žiadny ďalší test"))}))},parseRC:function(){return this.visitor&&this.visitor.rc?this.visitor.rc.substring(0,6):""}})},v=u,b=r("2877"),l=Object(b["a"])(v,i,s,!1,null,null,null);e["default"]=l.exports}}]);