(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bad01d5"],{"0748":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"table-container"},[n("div",{staticClass:"table-wrapper"},e._l(e.realFields,(function(t,a){return n("div",{key:a,staticClass:"table-column"},[n("div",{class:["table-column-label",t.toLowerCase(),a==e.realFields.length-1?"last":""]},[e._v(" "+e._s(t)+" ")]),e._l(e.getFieldsOf(t),(function(r,l){return n("div",{key:l,class:["table-column-cell",e.checkIfTodo(r,t,a,l),e.checkIfRequired(r,t,a,l),t.toLowerCase(),a==e.realFields.length-1?"last":""]},[n("span",{class:[t.toLowerCase()]},[e._v(e._s(r+" "+(e.checkIfRequired(r,t,a,l)?"*":"")))])])}))],2)})),0)]),e.hasTodos?n("div",{staticClass:"todo-anno"},[e._v("Fields marked in red are planned but not supported")]):e._e(),e.hasRequireds?n("div",{staticClass:"todo-anno"},[e._v("Fields with an asterisk are required")]):e._e()])},r=[],l=(n("7db0"),n("4160"),n("d81d"),n("159b"),{props:{content:{type:Object,default:null}},computed:{realFields:function(){return this.content?this.content.fields:null}},data:function(){return{hasTodos:!1,hasRequireds:!1}},mounted:function(){var e=this;this.content.data.forEach((function(t){t.todo&&(e.hasTodos=!0),t.required&&(e.hasRequireds=!0)}))},methods:{checkIfTodo:function(e,t,n,a){var r;return r=this.content.data.find((function(n){return n[t.toLowerCase()]==e})),r.todo&&"Property"==t?"todo":""},checkIfRequired:function(e,t,n,a){var r;return r=this.content.data.find((function(n){return n[t.toLowerCase()]==e})),r.required&&"param"==t?"required":""},getFieldsOf:function(e){return this.content?this.content.data.map((function(t){return t[e.toLowerCase()]})):""}}}),o=l,s=(n("76a5"),n("2877")),i=Object(s["a"])(o,a,r,!1,null,null,null);t["default"]=i.exports},"2adc":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"brutalism-wrapper"},[n("div",{staticClass:"display-header"}),n("div",{staticClass:"brutalism-display"},[n("Wrapper",[e._t("default")],2)],1),n("div",{staticClass:"display-footer"})])},r=[],l={},o=l,s=(n("9bad"),n("2877")),i=Object(s["a"])(o,a,r,!1,null,null,null);t["default"]=i.exports},"2ce9":function(e,t,n){"use strict";var a=n("5ef4"),r=n.n(a);r.a},"5ef4":function(e,t,n){},"65f3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Content",[n("h2",[e._v("Styles")]),n("Display",[n("Wrapper",[n("Input-Scroll",{attrs:{label:"default"}}),n("Input-Scroll",{attrs:{label:"flat",flat:""}}),n("Input-Scroll",{attrs:{label:"filled",filled:""}})],1)],1),n("UIFold",[n("Coder",{attrs:{content:e.getChildByName("Styles").data}})],1),n("Table",{attrs:{content:e.tableData.styles}}),n("h2",[e._v("Props")]),n("Display",[n("Input-Scroll",{attrs:{label:"default"}}),n("Input-Scroll",{attrs:{label:"set value",value:100}}),n("Input-Scroll",{attrs:{label:"auto-save","prefs-id":"inputScrollProp"}}),n("Input-Scroll",{attrs:{label:"min/max values",min:-100,max:100}}),n("Input-Scroll",{attrs:{label:"custom color",color:"red"}}),n("Input-Scroll",{attrs:{label:"disabled",value:20,disabled:""}}),n("Input-Scroll",{attrs:{label:"custom value increment",step:2}}),n("Input-Scroll",{attrs:{label:"custom increments per modifier key",steps:[2,5,25]}}),n("Input-Scroll",{attrs:{label:"specify decimal point",value:100.125,toFixed:3}}),n("Input-Scroll",{attrs:{label:"reset value if empty",value:446,"reset-value":100}}),n("Input-Scroll",{attrs:{label:"no validation",lazy:"",value:29.97,suffix:"fps"}}),n("Input-Scroll",{attrs:{label:"suffix",suffix:"px"}}),n("Input-Scroll",{attrs:{label:"prefix",prefix:"$"}})],1),n("UIFold",[n("Coder",{attrs:{content:e.getChildByName("Props").data}})],1),n("Table",{attrs:{content:e.tableData.properties}}),n("h2",[e._v("Events")]),n("Display",[n("Wrapper",[n("Input-Scroll",{attrs:{label:"@change"},on:{change:e.changeVal}}),n("Input-Scroll",{attrs:{label:"@update"},on:{update:e.updateVal}}),n("Input-Scroll",{attrs:{label:"@prefs","prefs-id":"exampleEvent"},on:{prefs:e.testPrefs}}),n("Input-Scroll",{attrs:{label:"@focus/@blur"},on:{focus:function(t){return e.message("Focus!")},blur:function(t){return e.message("Blur!")}}})],1)],1),n("UIFold",[n("Coder",{attrs:{content:e.getChildByName("Events").data}})],1),n("Table",{attrs:{content:e.tableData.events}})],1)},r=[],l=(n("7db0"),n("b0c0"),n("41d0")),o={styles:{fields:["Property","Type","Default","Description"],data:[{property:"flat",type:"Boolean",default:"false",description:"No background and animation on focus"},{property:"filled",type:"Boolean",default:"false",description:"Default with focus border and dark background"}]},properties:{fields:["Property","Type","Default","Description"],data:[{property:"label",type:"String",default:"",description:"Text to display beside input"},{property:"value",type:"Number",default:"0",description:"Current value within input"},{property:"v-model",type:"Boolean",default:"false",description:"Two-way binding for value property"},{property:"prefs-id",type:"String",default:"",description:"Autosave value in localStorage"},{property:"min",type:"Number",default:"null",description:"Minimum value allowed"},{property:"max",type:"Number",default:"null",description:"Maximum value allowed"},{property:"color",type:"String",default:"var(--color-selection)",description:"Color on focus"},{property:"disabled",type:"Boolean",default:"false",description:"If true, prevents all mouse events"},{property:"step",type:"Number",default:"1",description:"Amount to increment per event"},{property:"steps",type:"Array",default:"[0.1, 1, 10]",description:"Control, default, shift key increment"},{property:"toFixed",type:"Number",default:"null",description:"Strict digits to appear after decimal"},{property:"reset-value",type:"Number",default:"0",description:"Value to insert when left empty"},{property:"lazy",type:"Boolean",default:"false",description:"Non-strict, any decimals or value"},{property:"suffix",type:"String",default:"",description:"Text to append to value"},{property:"prefix",type:"String",default:"",description:"Text to prepend to value"}]},events:{fields:["Event","Arguments","Description"],data:[{event:"@change",arguments:"callback( value )",description:"Fires for every keypress"},{event:"@update",arguments:"callback( value )",description:"Fires after blur event but only if a change in value"},{event:"@prefs",arguments:"callback( item )",description:"Returns on component mount with prefs value"},{event:"@submit",arguments:"callback( value )",description:"Fires on form submission and enter key"},{event:"@focus",arguments:"callback()",description:"Fires on focus event of element"},{event:"@blur",arguments:"callback()",description:"Fires on blur event of element"}]}},s={computed:{tableData:function(){return o},target:function(){var e=this;return l.find((function(t){return t.name==e.$route.name}))}},methods:{getChildByName:function(e){return this.target.children.find((function(t){return t.name==e}))},changeVal:function(e){console.log("@change:",e)},updateVal:function(e){console.log("@update:",e)},message:function(e){console.log(e)},testPrefs:function(e){console.log("Last prefs:",e)}},data:function(){return{twoWayBinding:100}},components:{Content:n("9d26").default,Display:n("2adc").default,Coder:n("a16c").default,Table:n("0748").default,UIFold:n("eaaa").default}},i=s,c=n("2877"),u=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=u.exports},"694f":function(e,t,n){},"76a5":function(e,t,n){"use strict";var a=n("694f"),r=n.n(a);r.a},"9bad":function(e,t,n){"use strict";var a=n("ce3f"),r=n.n(a);r.a},"9d26":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Title"),n("div",{staticClass:"api-wrapper"},[n("div",{staticClass:"api-content"},[e._t("default")],2)]),n("Left-Drawer",{ref:"drawerL"}),n("Right-Drawer",{ref:"drawerR"})],1)},r=[],l=(n("99af"),n("4160"),n("b0c0"),n("b680"),n("ac1f"),n("5319"),n("159b"),{components:{Title:n("43b3").default,"Left-Drawer":n("8665").default,"Right-Drawer":n("7553").default},mounted:function(){var e=this;this.$nextTick((function(){e.replaceH2WithAnchors()})),window.addEventListener("scroll",this.measureScrollEvents)},beforeDestroy:function(){window.removeEventListener("scroll",this.measureScrollEvents)},methods:{measureScrollEvents:function(){var e,t=this,n=window.scrollY;e||(window.requestAnimationFrame((function(){var a=+n.toFixed();t.$refs.drawerR.checkScroll(a),"Button"==t.$route.name&&t.checkAnchors(a),e=!1})),e=!0)},replaceH2WithAnchors:function(e){var t=document.querySelectorAll("h2"),n=[];t.forEach((function(e){var t=e.innerHTML.replace(/\s/g,"_");n.push(encodeURI(t)),e.outerHTML='<a name="'.concat(encodeURI(t),'" id="').concat(encodeURI(t),'" data-sourcepos="').concat(e.dataset.sourcepos||null,'" class="h2-mock">').concat(e.innerHTML,"</a>")})),this.$refs.drawerR.init(n)},checkAnchors:function(){}}}),o=l,s=(n("b318"),n("2877")),i=Object(s["a"])(o,a,r,!1,null,null,null);t["default"]=i.exports},a16c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{class:["language-"+e.lang]},[e._v("  "),n("code",[e._v(e._s(e.content))]),e._v("\n")])},r=[],l={props:{lang:{type:String,default:"html"},content:""},data:function(){return{}},methods:{},mounted:function(){Prism.highlightElement(this.$el,!1,(function(){}))},watch:{content:function(e){console.log(e)}}},o=l,s=n("2877"),i=Object(s["a"])(o,a,r,!1,null,null,null);t["default"]=i.exports},b318:function(e,t,n){"use strict";var a=n("d1f0"),r=n.n(a);r.a},ce3f:function(e,t,n){},d1f0:function(e,t,n){},eaaa:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-fold-wrapper"},[n("div",{staticClass:"ui-fold-label",on:{click:e.toggle}},[n("div",{staticClass:"ui-fold-label-text"},[e._v(e._s(e.label))]),n("div",{staticClass:"ui-fold-icon",class:{flip:!e.isOpen}},[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"ui-fold-content"},[e._t("default")],2)])},r=[],l={props:{open:{type:Boolean,default:!0}},data:function(){return{isOpen:null}},methods:{toggle:function(){this.isOpen=!this.isOpen,this.$emit("clicked")}},computed:{label:function(){return this.isOpen?"Hide":"Show"}},watch:{open:function(e){this.toggle()}},mounted:function(){this.isOpen=this.open}},o=l,s=(n("2ce9"),n("2877")),i=Object(s["a"])(o,a,r,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-0bad01d5.19b47e25.js.map