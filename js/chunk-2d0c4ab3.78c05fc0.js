(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4ab3"],{"3c8e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"app-pane-lgray py-2"},[a("b-container",[a("h1",[t._v(t._s(t.$t("ppTitle")))])])],1),a("b-container",{staticClass:"py-3"},[a("b-row",[a("b-col",{attrs:{"offset-md":"2"}},[a("b-form-checkbox",{attrs:{id:"agreement"},model:{value:t.agreement,callback:function(e){t.agreement=e},expression:"agreement"}},[t._v(" "+t._s(t.$t("ppAgreement"))+" ")]),a("p",[a("a",{staticClass:"btn bg-light text-dark p-1",attrs:{href:"#/terms-and-conditions",target:"_blank"}},[t._v("Obchodné podmienky")]),a("br"),a("a",{staticClass:"btn bg-light text-dark p-1",attrs:{href:"#/pricing",target:"_blank"}},[t._v("Cenník")])])],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"Country"}},[t._v(t._s(t.$t("ppCountry")))])]),a("b-col",{attrs:{md:"10"}},[a("b-form-select",{ref:"Country",staticClass:"mb-3",attrs:{options:t.CountryOptions,"value-field":"item","text-field":"name",id:"Country",disabled:!t.agreement},model:{value:t.pp.Country,callback:function(e){t.$set(t.pp,"Country",e)},expression:"pp.Country"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"CompanyId"}},[t._v(t._s(t.$t("ppCompanyId")))])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"CompanyId",attrs:{id:"CompanyId",disabled:!t.agreement},model:{value:t.pp.CompanyId,callback:function(e){t.$set(t.pp,"CompanyId",e)},expression:"pp.CompanyId"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"CompanyName"}},[t._v(t._s(t.$t("ppCompanyName")))])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"CompanyName",attrs:{id:"CompanyName",disabled:!t.agreement},model:{value:t.pp.CompanyName,callback:function(e){t.$set(t.pp,"CompanyName",e)},expression:"pp.CompanyName"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"VAT"}},[t._v(t._s(t.$t("ppVAT")))])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"VAT",attrs:{id:"VAT",disabled:!t.agreement},model:{value:t.pp.VAT,callback:function(e){t.$set(t.pp,"VAT",e)},expression:"pp.VAT"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"MainEmail"}},[t._v(t._s(t.$t("ppMainEmail")))])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"MainEmail",attrs:{id:"MainEmail",disabled:!t.agreement},model:{value:t.pp.MainEmail,callback:function(e){t.$set(t.pp,"MainEmail",e)},expression:"pp.MainEmail"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"PrivatePhone"}},[t._v(t._s(t.$t("ppPrivatePhone")))])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"PrivatePhone",attrs:{id:"PrivatePhone",disabled:!t.agreement},model:{value:t.pp.PrivatePhone,callback:function(e){t.$set(t.pp,"PrivatePhone",e)},expression:"pp.PrivatePhone"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"PublicEmail"}},[t._v(t._s(t.$t("ppPublicEmail")))])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"PublicEmail",attrs:{id:"PublicEmail",disabled:!t.agreement},model:{value:t.pp.PublicEmail,callback:function(e){t.$set(t.pp,"PublicEmail",e)},expression:"pp.PublicEmail"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"PublicPhone"}},[t._v(t._s(t.$t("ppPublicPhone")))])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"PublicPhone",attrs:{id:"PublicPhone",disabled:!t.agreement},model:{value:t.pp.PublicPhone,callback:function(e){t.$set(t.pp,"PublicPhone",e)},expression:"pp.PublicPhone"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{"offset-md":"2"}},[a("button",{staticClass:"govuk-button govuk-!-margin-right-3 govuk-button--start my-4",on:{click:t.clickRegister}},[t._v(" "+t._s(t.$t("ppRegister"))+" "),a("svg",{staticClass:"govuk-button__start-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[a("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])],1)],1)],1)},n=[],o=a("2f62");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={data:function(){return{agreement:!1,pp:{CompanyName:"",CompanyId:"",VAT:"",Country:"SK",MainEmail:"",PrivatePhone:"",PublicEmail:"",PublicPhone:"",Web:""},CountryOptions:[{item:"SK",name:"Slovensko"},{item:"CZ",name:"Česko"},{item:"AT",name:"Rakúsko"},{item:"DE",name:"Nemecko"}]}},methods:i(i({},Object(o["b"])({Register:"placeProvider/Register"})),{},{clickRegister:function(){var t=this;this.Register({pp:this.pp}).then((function(e){e&&t.$router.push("/login")}))}})},c=p,b=a("2877"),m=Object(b["a"])(c,r,n,!1,null,null,null);e["default"]=m.exports}}]);