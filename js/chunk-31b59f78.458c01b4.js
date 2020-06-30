(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31b59f78"],{"0748":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"table-container"},[n("div",{staticClass:"table-wrapper"},e._l(e.realFields,(function(t,a){return n("div",{key:a,staticClass:"table-column"},[n("div",{class:["table-column-label",t.toLowerCase(),a==e.realFields.length-1?"last":""]},[e._v(" "+e._s(t)+" ")]),e._l(e.getFieldsOf(t),(function(r,o){return n("div",{key:o,class:["table-column-cell",e.checkIfTodo(r,t,a,o),e.checkIfRequired(r,t,a,o),t.toLowerCase(),a==e.realFields.length-1?"last":""]},[n("span",{class:[t.toLowerCase()]},[e._v(e._s(r+" "+(e.checkIfRequired(r,t,a,o)?"*":"")))])])}))],2)})),0)]),e.hasTodos?n("div",{staticClass:"todo-anno"},[e._v("Fields marked in red are planned but not supported")]):e._e(),e.hasRequireds?n("div",{staticClass:"todo-anno"},[e._v("Fields with an asterisk are required")]):e._e()])},r=[],o=(n("7db0"),n("4160"),n("d81d"),n("159b"),{props:{content:{type:Object,default:null}},computed:{realFields:function(){return this.content?this.content.fields:null}},data:function(){return{hasTodos:!1,hasRequireds:!1}},mounted:function(){var e=this;this.content.data.forEach((function(t){t.todo&&(e.hasTodos=!0),t.required&&(e.hasRequireds=!0)}))},methods:{checkIfTodo:function(e,t,n,a){var r;return r=this.content.data.find((function(n){return n[t.toLowerCase()]==e})),r.todo&&"Property"==t?"todo":""},checkIfRequired:function(e,t,n,a){var r;return r=this.content.data.find((function(n){return n[t.toLowerCase()]==e})),r.required&&"param"==t?"required":""},getFieldsOf:function(e){return this.content?this.content.data.map((function(t){return t[e.toLowerCase()]})):""}}}),i=o,l=(n("76a5"),n("2877")),s=Object(l["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},"2adc":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"brutalism-wrapper"},[n("div",{staticClass:"display-header"}),n("div",{staticClass:"brutalism-display"},[n("Wrapper",[e._t("default")],2)],1),n("div",{staticClass:"display-footer"})])},r=[],o={},i=o,l=(n("9bad"),n("2877")),s=Object(l["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},"2ce9":function(e,t,n){"use strict";var a=n("5ef4"),r=n.n(a);r.a},"424e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Content",[n("h2",[e._v("Styles")]),n("Display",[n("Wrapper",[n("Input",{attrs:{label:"Default",value:"value"}}),n("Input",{attrs:{label:"Flat",value:"value",flat:""}}),n("Input",{attrs:{label:"Filled",value:"value",filled:""}})],1)],1),n("UI-Fold",[n("Coder",{attrs:{content:e.getChildByName("Styles").data}})],1),n("Table",{attrs:{content:e.tableData.styles}}),n("h2",[e._v("Props")]),n("Display",[n("Wrapper",[n("Input",{attrs:{label:"I am a label"}}),n("Input",{attrs:{label:e.twoWayBinding},model:{value:e.twoWayBinding,callback:function(t){e.twoWayBinding=t},expression:"twoWayBinding"}}),n("Input",{attrs:{label:'placeholder="Display if no value"',placeholder:"Display if no value"}}),n("Input",{attrs:{"prefs-id":"exampleInput",label:"auto-save",value:"I sync to window.localStorage"}}),n("Input",{attrs:{placeholder:"disabled",disabled:""}}),n("Input",{attrs:{placeholder:"Custom color",color:"red",flat:""}}),n("Input",{attrs:{value:"This text is automatically selected on focus",label:"auto-select","auto-select":""}}),n("Input",{attrs:{value:"This text is always uppercase",label:"uppercase",uppercase:""}}),n("Input",{attrs:{value:"Warn of mispelings",label:"spellcheck",spellcheck:!0}}),n("Input",{attrs:{label:"truncate",truncate:"",value:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."}}),n("Input",{attrs:{label:"copy-content","copy-content":"",value:"I'm automatically copied on click"}}),n("Input",{attrs:{placeholder:"underline size and direction","underline-size":"2px",flat:"",left:""}}),n("Input",{attrs:{filled:"","prepend-icon":"magnify",placeholder:"prepend icon"}}),n("Input",{attrs:{filled:"","append-icon":"find-replace",placeholder:"append icon"}}),n("Input",{attrs:{filled:"","prepend-outer-icon":"magnify",placeholder:"prepend outer icon"}}),n("Input",{attrs:{filled:"","append-outer-icon":"find-replace",placeholder:"append outer icon"}})],1)],1),n("UI-Fold",[n("Coder",{attrs:{content:e.getChildByName("Props").data}})],1),n("Table",{attrs:{content:e.tableData.properties}}),n("h2",[e._v("Events")]),n("Display",[n("Wrapper",[n("Input",{attrs:{value:"@change"},on:{change:e.message}}),n("Input",{attrs:{value:"@update"},on:{update:e.message}}),n("Input",{attrs:{value:"@submit"},on:{submit:e.message}}),n("Input",{attrs:{value:"@prefs","prefs-id":"inputEventExample"},on:{prefs:e.message}}),n("Input",{attrs:{value:"@focus/blur"},on:{focus:function(t){return e.message("Focused!")},blur:function(t){return e.message("Blur!")}}}),n("Input",{attrs:{value:"@append-outer-click","append-outer-icon":"find-replace"},on:{"append-outer-click":e.message}}),n("Input",{attrs:{value:"@clipboard","copy-content":""},on:{clipboard:e.message}})],1)],1),n("UI-Fold",[n("Coder",{attrs:{content:e.getChildByName("Events").data}})],1),n("Table",{attrs:{content:e.tableData.events}})],1)},r=[],o=(n("7db0"),n("b0c0"),n("41d0")),i={styles:{fields:["Property","Type","Default","Description"],data:[{property:"flat",type:"Boolean",default:"false",description:"No background and animation on focus"},{property:"filled",type:"Boolean",default:"false",description:"Default with focus border and dark background"}]},properties:{fields:["Property","Type","Default","Description"],data:[{property:"label",type:"String",default:"",description:"Persistent text to display above input"},{property:"v-model",type:"String",default:"",description:"Two-way binding of value prop"},{property:"value",type:"String",default:"",description:"Current text within input"},{property:"prefs-id",type:"String",default:"",description:"Autosave value in localStorage"},{property:"placeholder",type:"String",default:"",description:"Text to display when value is null"},{property:"auto-select",type:"Boolean",default:"false",description:"Select contents on focus"},{property:"uppercase",type:"Boolean",default:"false",description:"Text content is always uppercase"},{property:"disabled",type:"Boolean",default:"false",description:"If true, input cannot be focused"},{property:"read-only",type:"Boolean",default:"false",description:"Blocks user interaction"},{property:"truncate",type:"Boolean",default:"false",description:"Display ellipses on content overflow"},{property:"copy-content",type:"Boolean",default:"false",description:"Copies value with append-outer-icon"},{property:"left",type:"Boolean",default:"false",description:"Flat line animation starts at left"},{property:"right",type:"Boolean",default:"false",description:"Flat line animation starts at right"},{property:"max-length",type:"Number",default:"null",description:"Limits length of content by char count"},{property:"prefix",type:"String",default:"",description:"Prepends string before editable value",todo:!0},{property:"prepend-icon",type:"String",default:"",description:"Material icon to prepend inside input"},{property:"prepend-outer-icon",type:"String",default:"",description:"Material icon to prepend before input"},{property:"append-icon",type:"String",default:"",description:"Material icon to append inside input"},{property:"append-outer-icon",type:"String",default:"",description:"Material icon to append after input"}]},events:{fields:["Event","Arguments","Description"],data:[{event:"@change",arguments:"callback( value )",description:"Fires for every keypress"},{event:"@update",arguments:"callback( value )",description:"Fires after blur event but only if a change in value"},{event:"@prefs",arguments:"callback( item )",description:"Returns on component mount with prefs value"},{event:"@submit",arguments:"callback( value )",description:"Fires on form submission and enter key"},{event:"@focus",arguments:"callback()",description:"Fires on focus event of element"},{event:"@blur",arguments:"callback()",description:"Fires on blur event of element"},{event:"@clipboard",arguments:"callback( Bool )",description:"Returns confirmation of copy-content prop"}]}},l={computed:{tableData:function(){return i},target:function(){var e=this;return o.find((function(t){return t.name==e.$route.name}))}},methods:{getChildByName:function(e){return this.target.children.find((function(t){return t.name==e}))},message:function(e){console.log(e)}},data:function(){return{twoWayBinding:"Type anything here"}},components:{Content:n("9d26").default,Display:n("2adc").default,Coder:n("a16c").default,Table:n("0748").default,UIFold:n("eaaa").default}},s=l,c=n("2877"),u=Object(c["a"])(s,a,r,!1,null,null,null);t["default"]=u.exports},"5ef4":function(e,t,n){},"694f":function(e,t,n){},"76a5":function(e,t,n){"use strict";var a=n("694f"),r=n.n(a);r.a},"9bad":function(e,t,n){"use strict";var a=n("ce3f"),r=n.n(a);r.a},"9d26":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Title"),n("div",{staticClass:"api-wrapper"},[n("div",{staticClass:"api-content"},[e._t("default")],2)]),n("Left-Drawer",{ref:"drawerL"}),n("Right-Drawer",{ref:"drawerR"})],1)},r=[],o=(n("99af"),n("4160"),n("b0c0"),n("b680"),n("ac1f"),n("5319"),n("159b"),{components:{Title:n("43b3").default,"Left-Drawer":n("8665").default,"Right-Drawer":n("7553").default},mounted:function(){var e=this;this.$nextTick((function(){e.replaceH2WithAnchors()})),window.addEventListener("scroll",this.measureScrollEvents)},beforeDestroy:function(){window.removeEventListener("scroll",this.measureScrollEvents)},methods:{measureScrollEvents:function(){var e,t=this,n=window.scrollY;e||(window.requestAnimationFrame((function(){var a=+n.toFixed();t.$refs.drawerR.checkScroll(a),"Button"==t.$route.name&&t.checkAnchors(a),e=!1})),e=!0)},replaceH2WithAnchors:function(e){var t=document.querySelectorAll("h2"),n=[];t.forEach((function(e){var t=e.innerHTML.replace(/\s/g,"_");n.push(encodeURI(t)),e.outerHTML='<a name="'.concat(encodeURI(t),'" id="').concat(encodeURI(t),'" data-sourcepos="').concat(e.dataset.sourcepos||null,'" class="h2-mock">').concat(e.innerHTML,"</a>")})),this.$refs.drawerR.init(n)},checkAnchors:function(){}}}),i=o,l=(n("b318"),n("2877")),s=Object(l["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},a16c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{class:["language-"+e.lang]},[e._v("  "),n("code",[e._v(e._s(e.content))]),e._v("\n")])},r=[],o={props:{lang:{type:String,default:"html"},content:""},data:function(){return{}},methods:{},mounted:function(){Prism.highlightElement(this.$el,!1,(function(){}))},watch:{content:function(e){console.log(e)}}},i=o,l=n("2877"),s=Object(l["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},b318:function(e,t,n){"use strict";var a=n("d1f0"),r=n.n(a);r.a},ce3f:function(e,t,n){},d1f0:function(e,t,n){},eaaa:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-fold-wrapper"},[n("div",{staticClass:"ui-fold-label",on:{click:e.toggle}},[n("div",{staticClass:"ui-fold-label-text"},[e._v(e._s(e.label))]),n("div",{staticClass:"ui-fold-icon",class:{flip:!e.isOpen}},[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"ui-fold-content"},[e._t("default")],2)])},r=[],o={props:{open:{type:Boolean,default:!0}},data:function(){return{isOpen:null}},methods:{toggle:function(){this.isOpen=!this.isOpen,this.$emit("clicked")}},computed:{label:function(){return this.isOpen?"Hide":"Show"}},watch:{open:function(e){this.toggle()}},mounted:function(){this.isOpen=this.open}},i=o,l=(n("2ce9"),n("2877")),s=Object(l["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-31b59f78.458c01b4.js.map