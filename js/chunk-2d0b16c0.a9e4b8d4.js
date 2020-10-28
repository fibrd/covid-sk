(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b16c0"],{"207c":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"app-pane-lgray py-2"},[l("b-container",[l("h1",[e._v("Management testovacích miest")])])],1),l("b-container",[l("h2",[e._v("Nové miesto")]),l("b-row",[l("b-col",{attrs:{cols:"12",md:"6"}},[l("label",{attrs:{for:"name"}},[e._v("Názov miesta")]),l("b-input",{ref:"name",attrs:{id:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),l("b-col",{attrs:{cols:"12",md:"6"}},[l("label",{attrs:{for:"address"}},[e._v("Adresa")]),l("b-input",{ref:"address",attrs:{id:"address"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),l("b-col",{attrs:{cols:"12",md:"12"}},[l("label",{attrs:{for:"description"}},[e._v("Popis")]),l("b-input",{ref:"description",attrs:{id:"description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),l("b-col",{attrs:{cols:"12",md:"6"}},[l("label",{attrs:{for:"lat"}},[e._v("GPS Lat")]),l("b-input",{ref:"lat",attrs:{id:"lat"},model:{value:e.lat,callback:function(t){e.lat=t},expression:"lat"}})],1),l("b-col",{attrs:{cols:"12",md:"6"}},[l("label",{attrs:{for:"lng"}},[e._v("GPS Lng")]),l("b-input",{ref:"lng",attrs:{id:"lng"},model:{value:e.lng,callback:function(t){e.lng=t},expression:"lng"}})],1),l("b-col",{attrs:{cols:"12",md:"6"}},[l("b-form-checkbox",{attrs:{id:"isDriveIn",name:"isDriveIn"},model:{value:e.isDriveIn,callback:function(t){e.isDriveIn=t},expression:"isDriveIn"}},[e._v(" Drive in ")])],1),l("b-col",{attrs:{cols:"12",md:"6"}},[l("b-form-checkbox",{attrs:{id:"isWalkIn",name:"isWalkIn"},model:{value:e.isWalkIn,callback:function(t){e.isWalkIn=t},expression:"isWalkIn"}},[e._v(" Walk in ")])],1)],1),l("b-row",[l("button",{staticClass:"govuk-button govuk-!-margin-right-3 govuk-button--start my-4",on:{click:e.clickCreate}},[e._v(" Vytvoriť "),l("svg",{staticClass:"govuk-button__start-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[l("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])],1),e.$store.state.place.places?l("div",[l("b-table",{attrs:{items:Object.values(e.$store.state.place.places),fields:e.fields},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[l("b-link",{staticClass:"govuk-button m-2",attrs:{to:"/place/"+t.value}},[e._v(" Vybrať ")]),l("button",{staticClass:"govuk-button m-2",on:{click:function(l){return e.editPlaceClick(t)}}},[e._v(" Edit ")]),l("button",{staticClass:"govuk-button m-2",on:{click:function(l){return e.deletePlaceClick(t)}}},[e._v(" Delete ")])]}}],null,!1,3107091834)})],1):e._e()],1)},n=[],s=l("2f62");function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var c={data:function(){return{name:"",description:"",address:"",lat:48.289218275462225,lng:17.272996902465824,isDriveIn:!1,isWalkIn:!0,fields:[{label:"Akcia",key:"id"},{label:"Názov miesta",key:"name",sortable:!0},{label:"Adresa",key:"address",sortable:!0},{key:"isDriveIn",label:"Možnosť prísť autom",sortable:!0},{key:"isWalkIn",label:"Možnosť prísť pešo",sortable:!0},{label:"GPS Lat",key:"lat",sortable:!0},{label:"GPS Lng",key:"lng",sortable:!0},{label:"Registrácií",key:"registrations",sortable:!0},{label:"Počet zdravých",key:"healthy",sortable:!0},{label:"Počet nakazených",key:"sick",sortable:!0}]}},mounted:function(){this.ReloadPlaces().then((function(e){console.log("r",e)}))},methods:i(i(i({},Object(s["b"])({ReloadPlaces:"place/ReloadPlaces",InsertOrUpdate:"place/InsertOrUpdate",Delete:"place/Delete"})),Object(s["b"])({openSuccess:"snackbar/openSuccess"})),{},{deletePlaceClick:function(e){var t,l,a=this;(console.log("deletePlaceClick",e),null===(t=e.item)||void 0===t?void 0:t.id)&&this.Delete({id:null===(l=e.item)||void 0===l?void 0:l.id}).then((function(e){a.ReloadPlaces().then((function(e){console.log("r",e)}))}))},clickCreate:function(){var e=this;this.InsertOrUpdate({name:this.name,description:this.description,address:this.address,lat:this.lat,lng:this.lng,isDriveIn:this.isDriveIn,isWalkIn:this.isWalkIn}).then((function(t){t&&e.openSuccess("Uložené"),e.ReloadPlaces().then((function(e){console.log("r",e)}))}))},editPlaceClick:function(e){}})},d=c,b=l("2877"),u=Object(b["a"])(d,a,n,!1,null,null,null);t["default"]=u.exports}}]);