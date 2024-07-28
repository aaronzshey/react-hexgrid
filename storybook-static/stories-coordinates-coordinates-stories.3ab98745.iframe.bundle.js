/*! For license information please see stories-coordinates-coordinates-stories.3ab98745.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_hexgrid=self.webpackChunkreact_hexgrid||[]).push([[786],{"./src/stories/coordinates/coordinates.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/colors.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Coordinates",component:___WEBPACK_IMPORTED_MODULE_1__.VJ},fontStyle={fontWeight:700,fontSize:"0.2rem"};function Coordinates({q,r,s}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.EY,{transform:"translate(0, -3.5)",style:{...fontStyle,fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.red[8]}},q),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.EY,{transform:"translate(-3, 2)",style:{...fontStyle,fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.green[8]}},s),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.EY,{transform:"translate(3, 2)",style:{...fontStyle,fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.blue[8]}},r))}const cellStyle={fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.orange[0],stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.orange[1],strokeWidth:1.05},hexagons=___WEBPACK_IMPORTED_MODULE_1__.o_.hexagon(3),Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{background:_colors__WEBPACK_IMPORTED_MODULE_2__.l.gray[4],padding:16,paddingLeft:32}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{style:{color:_colors__WEBPACK_IMPORTED_MODULE_2__.l.dark[8]}},"Coordinates"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Q6,{width:1200,height:800,viewBox:"-50 -50 100 100"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.PE,{size:{x:7,y:7},flat:!0,spacing:1.1,origin:{x:0,y:0}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,hexagons.map((({q,r,s})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.VJ,{q,r,s,cellStyle:{...cellStyle,stroke:0===q?_colors__WEBPACK_IMPORTED_MODULE_2__.l.red[4]:0===r?_colors__WEBPACK_IMPORTED_MODULE_2__.l.blue[4]:0===s?_colors__WEBPACK_IMPORTED_MODULE_2__.l.green[4]:cellStyle.stroke,fill:0===q?_colors__WEBPACK_IMPORTED_MODULE_2__.l.red[3]:0===r?_colors__WEBPACK_IMPORTED_MODULE_2__.l.blue[3]:0===s?_colors__WEBPACK_IMPORTED_MODULE_2__.l.green[3]:cellStyle.fill}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Coordinates,{q,r,s})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.VJ,{q:0,r:0,s:0,cellStyle:{fill:_colors__WEBPACK_IMPORTED_MODULE_2__.l.dark[3],stroke:_colors__WEBPACK_IMPORTED_MODULE_2__.l.dark[4]}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Coordinates,{q:"Q",r:"R",s:"S"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.EY,{style:{fontSize:"0.2rem"}},"0"))))))).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    background: COLORS.gray[4],\n    padding: 16,\n    paddingLeft: 32\n  }}>\n      <h2 style={{\n      color: COLORS.dark[8]\n    }}>Coordinates</h2>\n      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">\n        <Layout size={{\n        x: 7,\n        y: 7\n      }} flat={true} spacing={1.1} origin={{\n        x: 0,\n        y: 0\n      }}>\n          <>\n            {hexagons.map(({\n            q,\n            r,\n            s\n          }) => <Hexagon q={q} r={r} s={s} cellStyle={{\n            ...cellStyle,\n            stroke: q === 0 ? COLORS.red[4] : r === 0 ? COLORS.blue[4] : s === 0 ? COLORS.green[4] : cellStyle.stroke,\n            fill: q === 0 ? COLORS.red[3] : r === 0 ? COLORS.blue[3] : s === 0 ? COLORS.green[3] : cellStyle.fill\n          }}>\n                <Coordinates q={q} r={r} s={s} />\n              </Hexagon>)}\n            <Hexagon q={0} r={0} s={0} cellStyle={{\n            fill: COLORS.dark[3],\n            stroke: COLORS.dark[4]\n          }}>\n              <Coordinates q={"Q"} r={"R"} s={"S"} />\n              <Text style={{\n              fontSize: "0.2rem"\n            }}>0</Text>\n            </Hexagon>\n          </>\n        </Layout>\n      </HexGrid>\n    </div>;\n}',...Default.parameters?.docs?.source}}};try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/coordinates/coordinates.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/coordinates/coordinates.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/stories/colors.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>COLORS});const COLORS={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]}}}]);