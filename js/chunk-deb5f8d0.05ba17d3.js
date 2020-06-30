(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-deb5f8d0"],{"0748":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"table-container"},[r("div",{staticClass:"table-wrapper"},e._l(e.realFields,(function(t,a){return r("div",{key:a,staticClass:"table-column"},[r("div",{class:["table-column-label",t.toLowerCase(),a==e.realFields.length-1?"last":""]},[e._v(" "+e._s(t)+" ")]),e._l(e.getFieldsOf(t),(function(l,n){return r("div",{key:n,class:["table-column-cell",e.checkIfTodo(l,t,a,n),e.checkIfRequired(l,t,a,n),t.toLowerCase(),a==e.realFields.length-1?"last":""]},[r("span",{class:[t.toLowerCase()]},[e._v(e._s(l+" "+(e.checkIfRequired(l,t,a,n)?"*":"")))])])}))],2)})),0)]),e.hasTodos?r("div",{staticClass:"todo-anno"},[e._v("Fields marked in red are planned but not supported")]):e._e(),e.hasRequireds?r("div",{staticClass:"todo-anno"},[e._v("Fields with an asterisk are required")]):e._e()])},l=[],n=(r("7db0"),r("4160"),r("d81d"),r("159b"),{props:{content:{type:Object,default:null}},computed:{realFields:function(){return this.content?this.content.fields:null}},data:function(){return{hasTodos:!1,hasRequireds:!1}},mounted:function(){var e=this;this.content.data.forEach((function(t){t.todo&&(e.hasTodos=!0),t.required&&(e.hasRequireds=!0)}))},methods:{checkIfTodo:function(e,t,r,a){var l;return l=this.content.data.find((function(r){return r[t.toLowerCase()]==e})),l.todo&&"Property"==t?"todo":""},checkIfRequired:function(e,t,r,a){var l;return l=this.content.data.find((function(r){return r[t.toLowerCase()]==e})),l.required&&"param"==t?"required":""},getFieldsOf:function(e){return this.content?this.content.data.map((function(t){return t[e.toLowerCase()]})):""}}}),o=n,s=(r("76a5"),r("2877")),i=Object(s["a"])(o,a,l,!1,null,null,null);t["default"]=i.exports},"080e":function(e,t,r){"use strict";var a=r("8c5f"),l=r.n(a);l.a},"2adc":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"brutalism-wrapper"},[r("div",{staticClass:"display-header"}),r("div",{staticClass:"brutalism-display"},[r("Wrapper",[e._t("default")],2)],1),r("div",{staticClass:"display-footer"})])},l=[],n={},o=n,s=(r("9bad"),r("2877")),i=Object(s["a"])(o,a,l,!1,null,null,null);t["default"]=i.exports},"2ce9":function(e,t,r){"use strict";var a=r("5ef4"),l=r.n(a);l.a},3723:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"note-wrapper"},[r("div",{staticClass:"note-icon"},[r("Icon",{attrs:{name:e.icon}})],1),r("div",{staticClass:"note-content"},[e._t("default")],2)])},l=[],n=(r("a779"),{props:{icon:{type:String,default:"information-outline"}}}),o=n,s=(r("080e"),r("2877")),i=Object(s["a"])(o,a,l,!1,null,null,null);t["default"]=i.exports},"5ef4":function(e,t,r){},"694f":function(e,t,r){},"76a5":function(e,t,r){"use strict";var a=r("694f"),l=r.n(a);l.a},"8c5f":function(e,t,r){},"9bad":function(e,t,r){"use strict";var a=r("ce3f"),l=r.n(a);l.a},"9d26":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Title"),r("div",{staticClass:"api-wrapper"},[r("div",{staticClass:"api-content"},[e._t("default")],2)]),r("Left-Drawer",{ref:"drawerL"}),r("Right-Drawer",{ref:"drawerR"})],1)},l=[],n=(r("99af"),r("4160"),r("b0c0"),r("b680"),r("ac1f"),r("5319"),r("159b"),{components:{Title:r("43b3").default,"Left-Drawer":r("8665").default,"Right-Drawer":r("7553").default},mounted:function(){var e=this;this.$nextTick((function(){e.replaceH2WithAnchors()})),window.addEventListener("scroll",this.measureScrollEvents)},beforeDestroy:function(){window.removeEventListener("scroll",this.measureScrollEvents)},methods:{measureScrollEvents:function(){var e,t=this,r=window.scrollY;e||(window.requestAnimationFrame((function(){var a=+r.toFixed();t.$refs.drawerR.checkScroll(a),"Button"==t.$route.name&&t.checkAnchors(a),e=!1})),e=!0)},replaceH2WithAnchors:function(e){var t=document.querySelectorAll("h2"),r=[];t.forEach((function(e){var t=e.innerHTML.replace(/\s/g,"_");r.push(encodeURI(t)),e.outerHTML='<a name="'.concat(encodeURI(t),'" id="').concat(encodeURI(t),'" data-sourcepos="').concat(e.dataset.sourcepos||null,'" class="h2-mock">').concat(e.innerHTML,"</a>")})),this.$refs.drawerR.init(r)},checkAnchors:function(){}}}),o=n,s=(r("b318"),r("2877")),i=Object(s["a"])(o,a,l,!1,null,null,null);t["default"]=i.exports},a16c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{class:["language-"+e.lang]},[e._v("  "),r("code",[e._v(e._s(e.content))]),e._v("\n")])},l=[],n={props:{lang:{type:String,default:"html"},content:""},data:function(){return{}},methods:{},mounted:function(){Prism.highlightElement(this.$el,!1,(function(){}))},watch:{content:function(e){console.log(e)}}},o=n,s=r("2877"),i=Object(s["a"])(o,a,l,!1,null,null,null);t["default"]=i.exports},b318:function(e,t,r){"use strict";var a=r("d1f0"),l=r.n(a);l.a},ce3f:function(e,t,r){},d06a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Content",[r("Note",[e._v("Many functions of File-Picker cannot work in browser, notably folder picking and returning file contents of dropped folders. Sorry! Has to be done in Adobe. ")]),r("h2",[e._v("Styles")]),r("Display",[r("File-Picker",{attrs:{label:"default"}}),r("File-Picker",{attrs:{flat:"",label:"flat"}}),r("File-Picker",{attrs:{filled:"",label:"filled"}}),r("File-Picker",{attrs:{multiple:"",label:"Multiple switches to TextArea"}}),r("File-Picker",{ref:"sample6",attrs:{disabled:"",label:"disabled"}}),r("File-Picker",{attrs:{"read-only":"",label:"read-only"}}),r("File-Picker",[r("Dropzone",{attrs:{fullscreen:!1},scopedSlots:e._u([{key:"prompt",fn:function(){return[r("div",{staticClass:"placeholder"},[e._v(" Slots! This is a Dropzone inside a File-Picker. Drop files or click me, same functionality. ")])]},proxy:!0},{key:"overlay",fn:function(){return[r("div",{staticClass:"placeholder"})]},proxy:!0}])})],1)],1),r("UIFold",[r("Coder",{attrs:{content:e.getChildByName("Styles").data}})],1),r("Table",{attrs:{content:e.tableData.styles}}),r("h2",[e._v("Props")]),r("Display",[r("File-Picker",{attrs:{label:"Custom label"}}),r("File-Picker",{attrs:{folder:"",label:"Folders (doesn't work in browser)"}}),r("File-Picker",{attrs:{width:"fit-content",label:"Custom width"}}),r("File-Picker",{attrs:{placeholder:"You need to select a file",label:"Custom placeholder"}}),r("File-Picker",{attrs:{"prefs-id":"filepicker",label:"Persistant storage"}}),r("File-Picker",{attrs:{icon:"home",label:"Custom icon"}}),r("File-Picker",{attrs:{multiple:"",label:"Accept multiple files/folders"}}),r("File-Picker",{attrs:{"auto-read":"",label:"Return file contents instead of paths"}}),r("File-Picker",{attrs:{accepts:[".png",".jpg"],label:"Accept only .png and .jpg"}}),r("File-Picker",{ref:"sample1",attrs:{clearable:"",label:"clearable"}}),r("File-Picker",{ref:"sample2",attrs:{clearable:"","clear-icon":"delete",label:"custom clear icon"}}),r("File-Picker",{ref:"sample3",attrs:{depth:2,label:"Show parent folders by depth count"}}),r("File-Picker",{ref:"sample7",attrs:{multiple:"",rows:4,resizeable:!1,label:"Not resizable and custom row count"}}),r("File-Picker",{ref:"sample4",attrs:{prefix:".../",multiple:"",label:"Custom prefix per item"}}),r("File-Picker",{attrs:{"auto-read":"",label:"Return file content instead of path"},on:{read:e.testRead}}),r("File-Picker",{attrs:{folder:"","read-folders":"",label:"(No browser) Return folder children contents instead of folder path"},on:{read:e.testRead}}),r("File-Picker",{attrs:{folder:"","read-folders":"",flatten:"",multiple:"",label:"(No browser) Return all children files as single array"},on:{read:e.testRead}})],1),r("UIFold",[r("Coder",{attrs:{content:e.getChildByName("Props").data}})],1),r("Table",{attrs:{content:e.tableData.properties}}),r("h2",[e._v("Events")]),r("Display",[r("File-Picker",{attrs:{label:"Input event"},on:{input:e.testInput}}),r("File-Picker",{attrs:{"auto-read":"",label:"Read event"},on:{read:e.testRead}}),r("File-Picker",{attrs:{label:"Drop event"},on:{drop:e.testDrop}}),r("File-Picker",{attrs:{"auto-read":"",folder:"","read-folders":"",flatten:"",label:"All file content from incoming folders, single array"},on:{read:e.testRead}}),r("File-Picker",{ref:"sample5",attrs:{label:"Prefs event"},on:{prefs:e.testPrefs}}),r("File-Picker",{attrs:{"auto-read":""},on:{drop:e.testDrop,input:e.testInput,read:e.testRead}},[r("Dropzone",{attrs:{fullscreen:!1,"auto-read":""},on:{drop:e.testDrop,input:e.testInput,read:e.testRead},scopedSlots:e._u([{key:"prompt",fn:function(){return[r("div",{staticClass:"placeholder"},[e._v(" Fully featured hybrid Dropzone/File-Picker ")])]},proxy:!0},{key:"overlay",fn:function(){return[r("div",{staticClass:"placeholder"},[e._v("v-slot:overlay while dragging")])]},proxy:!0}])})],1)],1),r("UIFold",[r("Coder",{attrs:{content:e.getChildByName("Events").data}})],1),r("Table",{attrs:{content:e.tableData.events}})],1)},l=[],n=(r("7db0"),r("b0c0"),r("41d0")),o={styles:{fields:["Property","Type","Default","Description"],data:[{property:"flat",type:"Boolean",default:"false",description:"Inherits Input/TextArea flat style"},{property:"filled",type:"Boolean",default:"false",description:"Inherits Input/TextArea filled style"},{property:"< slot >",type:"HTML",default:"null",description:"Content to prompt File-Picker on click"},{property:"< slot:icon >",type:"HTML",default:"null",description:"HTML to append to the element",todo:!0},{property:"< slot:clear >",type:"HTML",default:"null",description:"HTML to use as a clearable button",todo:!0}]},properties:{fields:["Property","Type","Default","Description"],data:[{property:"label",type:"String",default:"Choose [type]",description:"Persistent text to display above input"},{property:"folder",type:"Boolean",default:"false",description:"When true accept Folders, otherwise Files"},{property:"width",type:"String",default:"100%",description:"Any valid CSS value"},{property:"prefs-id",type:"String",default:"",description:"Autosave value in localStorage"},{property:"icon",type:"String",default:"[file|folder]-outline",description:"Icon to append to element"},{property:"disabled",type:"Boolean",default:"false",description:"Block all user interaction with faded appearance"},{property:"read-only",type:"Boolean",default:"false",description:"Block all user interaction"},{property:"multiple",type:"Boolean",default:"false",description:"Whether to use TextArea and allow multiple items"},{property:"accepts",type:"Array | String",default:"*",description:"File extensions or Mimetype to validate dropped files"},{property:"clearable",type:"Boolean",default:"false",description:"Whether to append a button to reset component"},{property:"clear-icon",type:"String",default:"clear",description:"Icon to use within clearable button"},{property:"depth",type:"Number",default:"0",description:"Folders above target to display in element"},{property:"prefix",type:"String",default:"./",description:"Text to append to all targets"},{property:"encoding",type:"String",default:"utf-8",description:"Encoding to use when reading file content"},{property:"auto-read",type:"Boolean",default:"false",description:"Whether to return file content as text"},{property:"auto-parse",type:"Boolean",default:"true",description:"Auto-parse JSONs before emitting @read event"},{property:"read-folders",type:"Boolean",default:"false",description:"When true, return files of folders. False returns folder path"},{property:"flatten",type:"Boolean",default:"false",description:"Returns all folders result as a single array"},{property:"cols",type:"Number",default:"2",description:"Default columns of TextArea when using multiple prop"},{property:"rows",type:"Number",default:"2",description:"Default rows of TextArea when using multiple prop"},{property:"resizeable",type:"Boolean",default:"true",description:"When false, disallow user resizing of TextArea"},{property:"placeholder",type:"String",default:"No file selected",description:"Text to display when component has no value"}]},events:{fields:["Event","Arguments","Description"],data:[{event:"@read",arguments:"callback( value )",description:"Returns String or Array of file contents"},{event:"@input",arguments:"callback( value )",description:"Returns String or Array of file paths"},{event:"@drop",arguments:"callback( value )",description:"Returns data transfer File List Array"},{event:"@prefs",arguments:"callback( value )",description:"Returns on component mount with previous value"},{event:"@cancel",arguments:"callback()",description:"Returns when user clicks Cancel in File Picker dialog"}]}},s={computed:{tableData:function(){return o},target:function(){var e=this;return n.find((function(t){return t.name==e.$route.name}))}},methods:{getChildByName:function(e){return this.target.children.find((function(t){return t.name==e}))},testInput:function(e){console.log("Input value:",e)},testRead:function(e){console.log("Read value:",e)},testDrop:function(e){console.log("Drop value:",e)},testCancel:function(){console.log("User canceled")},testPrefs:function(){console.log("Prefs value:",value)}},mounted:function(){var e=["foo/bar/file.json","foo/bar/example.json"];this.$refs.sample1.set(e),this.$refs.sample2.set(e),this.$refs.sample3.set(e),this.$refs.sample4.set(e),this.$refs.sample5.set(e),this.$refs.sample6.set(e),this.$refs.sample7.set(e)},components:{Content:r("9d26").default,Display:r("2adc").default,Coder:r("a16c").default,Table:r("0748").default,UIFold:r("eaaa").default,Note:r("3723").default}},i=s,c=r("2877"),d=Object(c["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports},d1f0:function(e,t,r){},eaaa:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-fold-wrapper"},[r("div",{staticClass:"ui-fold-label",on:{click:e.toggle}},[r("div",{staticClass:"ui-fold-label-text"},[e._v(e._s(e.label))]),r("div",{staticClass:"ui-fold-icon",class:{flip:!e.isOpen}},[r("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"ui-fold-content"},[e._t("default")],2)])},l=[],n={props:{open:{type:Boolean,default:!0}},data:function(){return{isOpen:null}},methods:{toggle:function(){this.isOpen=!this.isOpen,this.$emit("clicked")}},computed:{label:function(){return this.isOpen?"Hide":"Show"}},watch:{open:function(e){this.toggle()}},mounted:function(){this.isOpen=this.open}},o=n,s=(r("2ce9"),r("2877")),i=Object(s["a"])(o,a,l,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-deb5f8d0.05ba17d3.js.map