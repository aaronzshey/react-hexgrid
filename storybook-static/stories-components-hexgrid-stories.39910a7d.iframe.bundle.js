/*! For license information please see stories-components-hexgrid-stories.39910a7d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_hexgrid=self.webpackChunkreact_hexgrid||[]).push([[163],{"./src/stories/components/hexgrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithSeveralSvgComponents:()=>WithSeveralSvgComponents,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/colors.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/HexGrid",component:___WEBPACK_IMPORTED_MODULE_1__.Q6},Basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{style:{fontFamily:"sans-serif"}},'HexGrid is just a wrapper around a normal svg element. The viewBox defaults to "-50 -50 100 100"'),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Q6,{style:{border:`2px solid ${_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[7]}`,background:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[2]},width:"100%",height:"50vh"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"0",cy:"0",r:"10",stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[7],fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[3]}))),WithSeveralSvgComponents=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{style:{fontFamily:"sans-serif"}},"SVG elements can be placed as normal inside a HexGrid"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Q6,{style:{border:`2px solid ${_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[7]}`,background:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[2]}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"0",cy:"0",r:"10",stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[7],fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[3]}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:"10",y:"10",width:"40",height:"20",style:{fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.blue[3],stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[7]}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("line",{x1:"0",y1:"0",x2:"10",y2:"10",style:{stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.dark[5]}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon",{points:"-50,-20 -55,25 -25,5",style:{fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.blue[0],stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.blue[3],strokeWidth:1}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline",{points:"-50,-25 -40,-25 -10,10 -20,30 -40,30",style:{fill:"none",stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.dark[2],strokeWidth:1}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M 0 -25 q 15 -30 30 0",stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.cyan[4],"stroke-width":"1",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",{x:"15",y:"-10",style:{fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.blue[8],fontSize:"0.5rem"}},"Some text..."))),__namedExportsOrder=["Basic","WithSeveralSvgComponents"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'() => <div>\n    <h1 style={{\n    fontFamily: "sans-serif"\n  }}>\n      HexGrid is just a wrapper around a normal svg element. The viewBox\n      defaults to "-50 -50 100 100"\n    </h1>\n    <HexGrid style={{\n    border: `2px solid ${COLORS.gray[7]}`,\n    background: COLORS.gray[2]\n  }} width={"100%"} height={"50vh"}>\n      {/* Normal svg elements can be placed as normal */}\n      <circle cx="0" cy="0" r="10" stroke={COLORS.gray[7]} fill={COLORS.gray[3]} />\n    </HexGrid>\n  </div>',...Basic.parameters?.docs?.source}}},WithSeveralSvgComponents.parameters={...WithSeveralSvgComponents.parameters,docs:{...WithSeveralSvgComponents.parameters?.docs,source:{originalSource:'() => <div>\n    <h1 style={{\n    fontFamily: "sans-serif"\n  }}>SVG elements can be placed as normal inside a HexGrid</h1>\n  <HexGrid style={{\n    border: `2px solid ${COLORS.gray[7]}`,\n    background: COLORS.gray[2]\n  }}>\n    <circle cx="0" cy="0" r="10" stroke={COLORS.gray[7]} fill={COLORS.gray[3]} />\n    <rect x="10" y="10" width="40" height="20" style={{\n      fill: COLORS.blue[3],\n      stroke: COLORS.gray[7]\n    }} />\n    <line x1="0" y1="0" x2="10" y2="10" style={{\n      stroke: COLORS.dark[5]\n    }} />\n    <polygon points="-50,-20 -55,25 -25,5" style={{\n      fill: COLORS.blue[0],\n      stroke: COLORS.blue[3],\n      strokeWidth: 1\n    }} />\n    <polyline points="-50,-25 -40,-25 -10,10 -20,30 -40,30" style={{\n      fill: "none",\n      stroke: COLORS.dark[2],\n      strokeWidth: 1\n    }} />\n\n    <path d="M 0 -25 q 15 -30 30 0" stroke={COLORS.cyan[4]} stroke-width="1" fill="none" />\n    <text x="15" y="-10" style={{\n      fill: COLORS.blue[8],\n      fontSize: "0.5rem"\n    }}>\n      Some text...\n    </text>\n  </HexGrid>\n</div>',...WithSeveralSvgComponents.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/stories/colors.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>COLORS});const COLORS={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]}}}]);