(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20732b"],{a006:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"app-pane-lgray py-2"},[n("b-container",[n("h1",[e._v("Pozvanie ďalších administrátorov")])])],1),n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12",md:"6"}},[n("label",{attrs:{for:"name"}},[e._v("Meno")]),n("b-input",{ref:"name",attrs:{id:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("label",{attrs:{for:"email"}},[e._v("Email")]),n("b-input",{ref:"email",attrs:{id:"email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),n("b-row",[n("b-col",{attrs:{cols:"12",md:"12"}},[n("p",[e._v("Na tejto stránke môžete pridať ďalších administrátorov")]),n("button",{staticClass:"btn btn-primary my-4",on:{click:e.inviteUserClick}},[e._v(" Pozvať ")]),n("b-link",{staticClass:"btn btn-light m-4",attrs:{to:"/admin/users"}},[e._v(" Správa iných rolí ")])],1)],1)],1)],1)},a=[],i=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={data:function(){return{name:"",email:"",roles:["Admin"],rolesList:["Admin","PasswordProtected"]}},methods:s(s(s({},Object(i["b"])({InviteUser:"user/InviteUser"})),Object(i["b"])({openSuccess:"snackbar/openSuccess"})),{},{inviteUserClick:function(){var e=this;this.InviteUser({name:this.name,email:this.email,roles:this.roles}).then((function(t){t&&e.openSuccess("Užívateľ pozvaný"),e.email="",e.name=""}))}})},b=l,m=n("2877"),u=Object(m["a"])(b,r,a,!1,null,null,null);t["default"]=u.exports}}]);