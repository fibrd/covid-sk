(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225dc8"],{e5ce:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"app-pane-lgray py-2"},[s("b-container",[s("h1",[t._v("Zaregistrovaný návštevník")])])],1),"select"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",[s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="rc"}}},[t._v(" Načítať rodné číslo "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]),s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="regCode"}}},[t._v(" Načítať kód registrácie čiarovým kódom "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]),s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="regCodeQR"}}},[t._v(" Načítať kód registrácie QR kódom "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])],1)],1):t._e(),"rc"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" Zrušiť ")]),s("label",{attrs:{for:"codeRc"}},[t._v("Rodné číslo")]),s("b-input",{attrs:{id:"codeRc"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.loadByRC}},[t._v(" Overiť registráciu "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1)],1)],1):t._e(),"regCodeQR"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" Zrušiť ")]),s("label",{attrs:{for:"code1"}},[t._v("Kód registrácie")]),s("b-input",{attrs:{id:"code1"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("div",{staticClass:"m-4"}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.confirmCode}},[t._v(" Načítať kód registrácie "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("qrcode-stream",{on:{decode:t.onDecodeQR}})],1)],1)],1):t._e(),"regCode"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" Zrušiť ")]),s("label",{attrs:{for:"codeQR"}},[t._v("Kód registrácie")]),s("b-input",{attrs:{id:"codeQR"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("div",{staticClass:"m-4"}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.confirmCode}},[t._v(" Načítať kód registrácie "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("StreamBarcodeReader",{on:{decode:t.onDecode}})],1)],1)],1):t._e(),"verifyPerson"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" Zrušiť ")]),s("h2",[t._v("Overenie užívateľa")]),s("div",[t._v(" Kod: "),t.visitor.id?s("span",[t._v(t._s(t.visitor.id))]):s("span",{staticClass:"badge badge-danger ml-5"},[t._v("Chybný kód registrácie")])]),s("div",[t._v("Meno: "+t._s(t.visitor.firstName)+" "+t._s(t.visitor.lastName))]),s("div",[t._v("Poisťovňa: "+t._s(t.visitor.insurance))]),s("div",[t._v("RČ: "+t._s(t.visitor.rc)+" "+t._s(t.visitor.passport))]),s("div",[t._v("Adresa: "+t._s(t.visitor.address))]),s("div",[t._v("Email: "+t._s(t.visitor.email))]),s("div",[t._v("Tel: "+t._s(t.visitor.phone))]),t.visitor.id?s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="testSetCodeQR"}}},[t._v(" Osoba je overená, nascanovať QR kód "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]):t._e(),t.visitor.id?s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="testSetCode"}}},[t._v(" Osoba je overená, nascanovať čiarový kód "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]):t._e(),s("button",{staticClass:"btn btn-primary my-4",on:{click:function(e){return t.$router.push("/tester/unannouncedVisitor")}}},[t._v(" Chybné údaje "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])],1)],1):t._e(),"testSetCode"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" Zrušiť ")]),s("label",{attrs:{for:"testingset1"}},[t._v("Kód testovacej sady")]),s("b-input",{attrs:{id:"testingset1"},model:{value:t.testingset,callback:function(e){t.testingset=e},expression:"testingset"}}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.save}},[t._v(" Vykonať test "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("StreamBarcodeReader",{on:{decode:t.onDecode}})],1)],1)],1):t._e(),"testSetCodeQR"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" Zrušiť ")]),s("label",{attrs:{for:"testingset1"}},[t._v("Kód testovacej sady")]),s("b-input",{attrs:{id:"testingset1"},model:{value:t.testingset,callback:function(e){t.testingset=e},expression:"testingset"}}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.save}},[t._v(" Vykonať test "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("qrcode-stream",{on:{decode:t.onDecodeQR}})],1)],1)],1):t._e(),"old"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"4"}},[s("b-form-group",{attrs:{label:"Scanuje sa typ údaju"}},[s("b-form-radio",{attrs:{name:"person-type",value:"code"},model:{value:t.scanningData,callback:function(e){t.scanningData=e},expression:"scanningData"}},[t._v("Kód registrácie")]),s("b-form-radio",{attrs:{name:"person-type",value:"testingset"},model:{value:t.scanningData,callback:function(e){t.scanningData=e},expression:"scanningData"}},[t._v("Skúmavka")])],1)],1),s("b-col",{attrs:{cols:"8"}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("label",{attrs:{for:"code"}},[t._v("Kód registrácie")]),s("b-input",{ref:"code",attrs:{id:"code"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),"check"===t.state||"visitor-error"===t.state?s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:t.load}},[t._v(" Skontrolovať údaje "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])]):t._e(),"loading-data"===t.state?s("b-col",{attrs:{cols:"12"}},[s("div",[s("B",[t._v("Čítam dáta")]),t._v(" "),s("b-spinner")],1)]):t._e(),"visitor-loaded"===t.state?s("b-col",{attrs:{cols:"12"}},[s("div",[t._v("Meno: "+t._s(t.visitor.firstName)+" "+t._s(t.visitor.lastName))]),s("div",[t._v("Poisťovňa: "+t._s(t.visitor.insurance))])]):t._e(),s("b-col",{attrs:{cols:"12"}},[s("label",{attrs:{for:"testingset"}},[t._v("Skúmavka")]),s("b-input",{ref:"testingset",attrs:{id:"testingset"},model:{value:t.testingset,callback:function(e){t.testingset=e},expression:"testingset"}})],1),"visitor-loaded"===t.state?s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-primary my-4",on:{click:t.save}},[t._v(" Uložiť "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])]):t._e()],1)],1)],1),s("StreamBarcodeReader",{on:{decode:t.onDecode,loaded:t.onLoaded}})],1):t._e()],1)},i=[],r=s("bb6f"),a=s("f337"),n=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){d(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function d(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var v={components:{StreamBarcodeReader:a["a"],QrcodeStream:r["QrcodeStream"]},data:function(){return{action:"select",state:"check",visitor:{},scanningData:"code",code:"",lastCode:"",testingset:"",readerSize:{width:120,height:90},detecteds:[]}},mounted:function(){var t=this;console.log("this.$route.params.id",this.$route.params.id),this.$route.params.id&&(this.code=this.$route.params.id,this.GetVisitor({visitorCode:this.code}).then((function(e){e?(t.visitor=e,t.action="verifyPerson"):t.state="visitor-error"})))},methods:l(l({},Object(n["b"])({ConnectVisitorToTest:"result/ConnectVisitorToTest",GetVisitor:"result/GetVisitor",GetVisitorByRC:"result/GetVisitorByRC"})),{},{load:function(){var t=this;this.state="loading-data",this.lastCode=this.code,this.GetVisitor({visitorCode:this.code}).then((function(e){e?(t.visitor=e,t.action="verifyPerson"):t.state="visitor-error"}))},loadByRC:function(){var t=this;this.state="loading-data",this.GetVisitorByRC({rc:this.code}).then((function(e){e?(t.code=e.id,t.visitor=e,t.action="verifyPerson"):t.state="visitor-error"}))},save:function(){var t=this;this.ConnectVisitorToTest({visitorCode:this.code,testCode:this.testingset}).then((function(e){e&&(t.action="select",t.code="",t.testingset="")}))},onDecode:function(t){var e=this;t&&("regCode"==this.action?(this.code=t,this.lastCode!==this.code&&this.load().then((function(t){t&&(e.action="verifyPerson")}))):this.testingset=t)},onDecodeQR:function(t){var e=this;t&&("regCodeQR"==this.action?(this.code=t,this.lastCode!==this.code&&this.load().then((function(t){t&&(e.action="verifyPerson")}))):this.testingset=t)},confirmCode:function(){this.action="verifyPerson",this.load()},reset:function(){this.action="select",this.code="",this.testingset=""}})},b=v,h=s("2877"),u=Object(h["a"])(b,o,i,!1,null,null,null);e["default"]=u.exports}}]);