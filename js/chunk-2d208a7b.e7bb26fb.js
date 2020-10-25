(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208a7b"],{a65e:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[e._v("Posledný krok registrácie - Osobné údaje")]),r("p",[e._v(" Údaje o Vašom testovaní, vrátane osobných údajov môžete vymazať zo stránky výsledky testu ak sa preukáže, že ochorenie covid19 nemáte. V prípade pozitívne nálezu budú postúpené hygiene. Po dobu testovania budú Vaše osobné údaje chránené šifrovaním AES256. Všetky osobné údaje budú z tejto databáze odstránené najneskôr do 2 pracovných dní od posledného dňa testovania. ")])])],1),e.$store.state.place.currentPlace?r("div",{staticClass:"app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6"},[r("b-container",[r("h2",[e._v(" Vybrali ste si "+e._s(e.$store.state.place.currentPlace.name)+", dňa "+e._s(e.$store.state.slot.slotDCurrent.description)+" medzi "+e._s(e.$store.state.slot.slotMCurrent.description)+" ")]),r("b-link",{staticClass:"govuk-button m-0",attrs:{to:"/place/"+e.$route.params.placeId+"/"+e.$route.params.dayId+"/"+e.$route.params.hourId}},[e._v(" Zmeniť ")])],1)],1):e._e(),r("b-container",{staticClass:"my-4"},[r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-form-group",{attrs:{label:"Identifikácia registrovanej osoby"}},[r("b-form-radio",{attrs:{name:"person-type",value:"rc"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v("Mám občiansky preukaz")]),r("b-form-radio",{attrs:{name:"person-type",value:"child"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v("Registrácia dieťaťa zákonným zástupcom")]),r("b-form-radio",{attrs:{name:"person-type",value:"foreign"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v("Som cudzinec")])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("label",{attrs:{for:"firstName"}},[e._v("Meno")]),r("b-input",{ref:"firstName",attrs:{firstName:"name"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("label",{attrs:{for:"lastName"}},[e._v("Priezvisko")]),r("b-input",{ref:"lastName",attrs:{id:"lastName"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),"rc"===e.personType||"child"===e.personType?r("b-col",{attrs:{cols:"12",md:"4"}},["rc"===e.personType?r("label",{attrs:{for:"rc"}},[e._v("Rodné číslo")]):r("label",{attrs:{for:"rc"}},[e._v("Rodné číslo dieťaťa")]),r("b-input",{ref:"rc",attrs:{id:"rc"},model:{value:e.rc,callback:function(t){e.rc=t},expression:"rc"}})],1):r("b-col",{attrs:{cols:"12",md:"4"}},[r("label",{attrs:{for:"passport"}},[e._v("Číslo cestovného dokladu")]),r("b-input",{ref:"passport",attrs:{id:"passport"},model:{value:e.passport,callback:function(t){e.passport=t},expression:"passport"}})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"12"}},[r("label",{attrs:{for:"address"}},[e._v("Adresa miesta pobytu")]),r("b-input",{ref:"address",attrs:{id:"address"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("label",{attrs:{for:"phone"}},[e._v("Telefón bez medzier s predvoľbou štátu")]),r("b-input",{ref:"phone",attrs:{id:"phone"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),r("b-col",{attrs:{cols:"12",md:"6"}},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("b-input",{ref:"email",attrs:{id:"email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("p",[e._v(" Cieľom registrácie pred návštevou odberného miesta je minimalizovať čas potrebný pre výkon testu. V ideálnom prípade doktor nascanuje čiarový kód Vašej registrácie, čiarový kód na testovacej súprave, a vykoná odobratie vzorky. Stlačením tlačítka nižšie vytvoríte svoj jedinečný kód registrácie, ktorý s kombináciou posledných 4 čísel rodného čísla (cestovného dokladu pre cudzincov) použijete aj na zistenie výsledku testu na tejto stránke. ")]),r("p",[e._v(" Ďalšiu osobu (partnera/ku, deti) budete môcť pridať po Vašej registrácii k vybranému termínu. Každá osoba má svoj unikátny kód registrácie. ")]),r("b-link",{staticClass:"govuk-button",on:{click:e.registerForTest}},[e._v(" Zaregistrovať ")])],1)],1)],1)],1)},a=[],s=r("2f62");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={data:function(){return{personType:"rc",passport:"",rc:"",firstName:"",lastName:"",address:"",email:"@",phone:"+421"}},mounted:function(){var e=this;this.GetPlace({id:this.$route.params.placeId}).then((function(e){return e})).then((function(t){return e.setCurrentPlace(t),t})).then((function(t){return e.GetSlotD({placeId:e.$route.params.placeId,daySlotId:e.$route.params.dayId}).then((function(t){e.setSlotDCurrent(t)})),t})).then((function(t){return e.GetSlotH({placeId:e.$route.params.placeId,daySlotId:e.$route.params.dayId,hourSlotId:e.$route.params.hourId}).then((function(t){return e.setSlotHCurrent(t)}))})).then((function(t){return e.GetSlotM({placeId:e.$route.params.placeId,hourSlotId:e.$route.params.hourId,minuteSlotId:e.$route.params.minuteId}).then((function(t){return console.log("r2",t,{placeId:e.$route.params.placeId,hourSlotId:e.$route.params.hourId,minuteSlotId:e.$route.params.minuteId}),e.setSlotMCurrent(t)}))}))},methods:l(l(l(l({},Object(s["c"])({setCurrentPlace:"place/setCurrentPlace",setSlotDCurrent:"slot/setSlotDCurrent",setSlotHCurrent:"slot/setSlotHCurrent",setSlotMCurrent:"slot/setSlotMCurrent"})),Object(s["b"])({GetPlace:"place/GetPlace"})),Object(s["b"])({GetSlotD:"slot/GetSlotD",GetSlotH:"slot/GetSlotH",GetSlotM:"slot/GetSlotM",ReloadSlotsM:"slot/ReloadSlotsM",Register:"slot/Register"})),{},{registerForTest:function(){var e=this,t=this;this.Register({personType:this.personType,passport:this.passport,rc:this.rc,firstName:this.firstName,lastName:this.lastName,address:this.address,email:this.email,phone:this.phone,chosenSlot:this.$route.params.minuteId,chosenPlaceId:this.$route.params.placeId}).then((function(r){t.$router.push("/place/".concat(e.$route.params.placeId,"/").concat(e.$route.params.dayId,"/").concat(e.$route.params.hourId,"/").concat(e.$route.params.minuteId,"/done"))}))}})},p=c,u=r("2877"),d=Object(u["a"])(p,o,a,!1,null,null,null);t["default"]=d.exports}}]);