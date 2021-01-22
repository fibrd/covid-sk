(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed08"],{"0c54":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[e._v("Registrácia nového návštevníka")])])],1),r("ValidationObserver",[r("b-container",{staticClass:"my-4"},[r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-form-group",{attrs:{label:"Identifikácia registrovanej osoby"}},[r("b-form-radio",{attrs:{name:"person-type",value:"idcard"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v("Dospelá osoba s občianskym preukazom")]),r("b-form-radio",{attrs:{name:"person-type",value:"child"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v("Registrácia dieťaťa zákonným zástupcom")]),r("b-form-radio",{attrs:{name:"person-type",value:"foreign"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v("Cudzinec")])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4",lg:"3"}},[r("validation-provider",{attrs:{name:"Meno",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"firstName-group-1",label:"Meno","label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstName",name:"firstName",state:e.getValidationState(t),"aria-describedby":"firstName-feedback","data-vv-as":"Name"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4",lg:"3"}},[r("validation-provider",{attrs:{name:"Priezvisko",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"lastName-group-1",label:"Priezvisko","label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",name:"lastName",state:e.getValidationState(t),"aria-describedby":"lastName-feedback","data-vv-as":"Priezvisko"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),"idcard"===e.personType||"child"===e.personType?r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{attrs:{name:"Rodné číslo",rules:{required:!0,rc:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"rc-group-1",label:"idcard"===e.personType?"Rodné číslo bez lomítka":"Rodné číslo dieťaťa bez lomítka","label-for":"rc"}},[r("b-form-input",{attrs:{id:"rc",name:"rc",state:e.getValidationState(t),"aria-describedby":"rc-feedback","data-vv-as":"Rodné číslo"},model:{value:e.rc,callback:function(t){e.rc=t},expression:"rc"}}),r("b-form-invalid-feedback",{attrs:{id:"rc-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,4230461159)})],1):r("b-col",{attrs:{cols:"12",lg:"2",sm:"4"}},[r("validation-provider",{attrs:{name:"Číslo cestovného dokladu",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"passport-group-1",label:"Číslo cestovného dokladu","label-for":"passport"}},[r("b-form-input",{attrs:{id:"passport",name:"passport",state:e.getValidationState(t),"aria-describedby":"passport-feedback","data-vv-as":"Číslo cestovného dokladu"},model:{value:e.passport,callback:function(t){e.passport=t},expression:"passport"}}),r("b-form-invalid-feedback",{attrs:{id:"passport-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{attrs:{name:"Deň narodenia",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayDay-group-1",label:e.$t("registrationFormBirthDayDay"),"label-for":"birthDayDay"}},[r("b-form-input",{attrs:{id:"birthDayDay",name:"birthDayDay",type:"number",min:"1",max:"31",state:e.getValidationState(t),"aria-describedby":"birthDayDay-feedback","data-vv-as":"Priezvisko"},model:{value:e.birthday.day,callback:function(t){e.$set(e.birthday,"day",t)},expression:"birthday.day"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{attrs:{name:"Mesiac narodenia",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayMonth-group-1",label:e.$t("registrationFormBirthDayMonth"),"label-for":"birthDayMonth"}},[r("b-form-input",{attrs:{id:"birthDayMonth",name:"birthDayMonth",type:"number",min:"1",max:"12",state:e.getValidationState(t),"aria-describedby":"birthDayMonth-feedback"},model:{value:e.birthday.month,callback:function(t){e.$set(e.birthday,"month",t)},expression:"birthday.month"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{attrs:{name:"Rok narodenia",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayYear-group-1",label:e.$t("registrationFormBirthDayYear"),"label-for":"birthDayYearh"}},[r("b-form-input",{attrs:{id:"birthDayYear",name:"birthDayYear",type:"number",min:"1900",max:"2021",state:e.getValidationState(t),"aria-describedby":"birthDayYear-feedback"},model:{value:e.birthday.year,callback:function(t){e.$set(e.birthday,"year",t)},expression:"birthday.year"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("validation-provider",{attrs:{name:"Adresa - Ulica",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"street-group-1",label:e.$t("registrationFormAddressStreet"),"label-for":"street"}},[r("b-form-input",{attrs:{id:"street",name:"street",state:e.getValidationState(t),"aria-describedby":"street-feedback"},model:{value:e.address.street,callback:function(t){e.$set(e.address,"street",t)},expression:"address.street"}}),r("b-form-invalid-feedback",{attrs:{id:"address-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"1"}},[r("validation-provider",{attrs:{name:"Číslo",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"streetNo-group-1",label:e.$t("registrationFormAddressStreetNo"),"label-for":"streetNo"}},[r("b-form-input",{attrs:{id:"streetNo",name:"streetNo",state:e.getValidationState(t),"aria-describedby":"streetNo-feedback"},model:{value:e.address.streetNo,callback:function(t){e.$set(e.address,"streetNo",t)},expression:"address.streetNo"}}),r("b-form-invalid-feedback",{attrs:{id:"streetNo-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"2"}},[r("validation-provider",{attrs:{name:"PSČ",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"zip-group-1",label:e.$t("registrationFormAddressZIP"),"label-for":"zip"}},[r("b-form-input",{attrs:{id:"zip",name:"zip",state:e.getValidationState(t),"aria-describedby":"zip-feedback"},model:{value:e.address.zip,callback:function(t){e.$set(e.address,"zip",t)},expression:"address.zip"}}),r("b-form-invalid-feedback",{attrs:{id:"zip-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"3"}},[r("validation-provider",{attrs:{name:"Mesto",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"city-group-1",label:e.$t("registrationFormAddressCity"),"label-for":"city"}},[r("b-form-input",{attrs:{id:"city",name:"city",state:e.getValidationState(t),"aria-describedby":"city-feedback"},model:{value:e.address.city,callback:function(t){e.$set(e.address,"city",t)},expression:"address.city"}}),r("b-form-invalid-feedback",{attrs:{id:"city-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Telefón",rules:{required:!0,phone:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"phone-group-1",label:"Telefón bez medzier s predvoľbou štátu","label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",name:"phone",state:e.getValidationState(t),"aria-describedby":"phone-feedback"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),r("b-form-invalid-feedback",{attrs:{id:"phone-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"email-group-1",label:"Email","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",name:"email",state:e.getValidationState(t),"aria-describedby":"email-feedback"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("label",{attrs:{for:"insurance"}},[e._v("Poisťovňa")]),r("b-form-select",{attrs:{options:e.insuranceOptions,id:"insurance"},model:{value:e.insurance,callback:function(t){e.insurance=t},expression:"insurance"}})],1)],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("button",{staticClass:"btn btn-primary",on:{click:e.registerForTest}},[e._v(" Zaregistrovať klienta ")])])],1)],1)],1)],1)},s=[],i=r("039f"),o=r("70d1"),n=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=0;try{if(0==e.length)return!1;if(e.length<9)throw 1;var r=parseInt(e.substr(0,2),10),a=parseInt(e.substr(2,2),10),s=parseInt(e.substr(4,2),10);if(9==e.length&&r<54)return!0;var i=0;10==e.length&&(i=parseInt(e.substr(9,1)));var o=parseInt(e.substr(0,9))%11;if(10==o&&(o=0),o!=i)throw 1;r+=r<54?2e3:1900,a>70&&r>2003?a-=70:a>50?a-=50:a>20&&r>2003&&(a-=20);var n=new Date;if(r+t>n.getFullYear())throw 1;if(0==a)throw 1;if(a>12)throw 1;if(0==s)throw 1;if(s>31)throw 1}catch(l){return!1}return!0}Object(i["localize"])("sk",o),Object(i["extend"])("rc",{validate:function(e){return u(e)}}),Object(i["extend"])("phone",{validate:function(e){var t=e.replace(/\s+|\s+/g,"");if("+"!==t.substr(0,1))return!1;t=t.substr(1);var r=t.match(/^\d{12}$/);return console.log("valTrim",t,r),r}});var b={components:{ValidationProvider:i["ValidationProvider"],ValidationObserver:i["ValidationObserver"]},data:function(){return{personType:"idcard",passport:"",rc:"",firstName:"",lastName:"",email:"@",phone:"+421",insurance:"25",address:{street:"",streetNo:"",zip:"",city:""},birthday:{day:"",month:"",year:""},gdpr:!1,insuranceOptions:[{value:"24",text:"Dôvera"},{value:"25",text:"VšZP"},{value:"27",text:"Union"},{value:"98",text:"EÚ poistenec"},{value:"99",text:"Cudzinec"}]}},mounted:function(){this.$store.state.result.lastVisitor&&(this.personType=this.$store.state.result.lastVisitor.personType,this.passport=this.$store.state.result.lastVisitor.passport,this.rc=this.$store.state.result.lastVisitor.rc,this.firstName=this.$store.state.result.lastVisitor.firstName,this.lastName=this.$store.state.result.lastVisitor.lastName,this.address=this.$store.state.result.lastVisitor.address,this.email=this.$store.state.result.lastVisitor.email,this.phone=this.$store.state.result.lastVisitor.phone,this.insurance=this.$store.state.result.lastVisitor.insurance,this.address={street:this.$store.state.result.lastVisitor.street,streetNo:this.$store.state.result.lastVisitor.streetNo,zip:this.$store.state.result.lastVisitor.zip,city:this.$store.state.result.lastVisitor.city})},methods:d(d(d({},Object(n["c"])({setRegistration:"slot/setRegistration"})),Object(n["b"])({RegisterByManager:"slot/RegisterByManager"})),{},{registerForTest:function(){var e=this,t=this;this.setRegistration({}),this.RegisterByManager({personType:this.personType,passport:this.passport,rc:this.rc,firstName:this.firstName,lastName:this.lastName,address:this.address.street+" "+this.address.streetNo+", "+this.address.zip+" "+this.address.city,email:this.email,phone:this.phone,insurance:this.insurance,chosenSlot:this.$route.params.minuteId,chosenPlaceId:this.$route.params.placeId,birthDayDay:this.birthday.day,birthDayMonth:this.birthday.month,birthDayYear:this.birthday.year,street:this.address.street,streetNo:this.address.streetNo,zip:this.address.zip,city:this.address.city}).then((function(r){r&&t.$router.push("/tester/registeredVisitor/".concat(e.$store.state.slot.registration.id))}))},getValidationState:function(e){var t=e.dirty,r=e.validated,a=e.valid,s=void 0===a?null:a;return t||r?s:null}})},p=b,f=r("2877"),m=Object(f["a"])(p,a,s,!1,null,null,null);t["default"]=m.exports}}]);