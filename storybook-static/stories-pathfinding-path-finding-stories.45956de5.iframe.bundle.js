/*! For license information please see stories-pathfinding-path-finding-stories.45956de5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_hexgrid=self.webpackChunkreact_hexgrid||[]).push([[235],{"./src/stories/pathfinding/path-finding.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>path_finding_stories});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./src/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),App=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/pathfinding/App.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(App.A,options);App.A&&App.A.locals&&App.A.locals;const path_finding_stories={title:"PathFinding",component:src.VJ},initialHexagons=src.o_.hexagon(4),Default=((args,{argTypes})=>{const[hexagons,setHexagons]=react.useState(initialHexagons),[path,setPath]=react.useState({start:null,end:null});return react.createElement("div",{className:"pathfinding-example",style:{background:"#133b43",color:"white",display:"flex",flexDirection:"column",alignItems:"center"}},react.createElement("h2",null,"Pathfinding & active highlight"),react.createElement("p",null,"Click a tile to start drawing a path to your cursor. Click again to cancel."),react.createElement("p",null,"Hover around the board to see helper lines drawn."),react.createElement(src.Q6,{width:1200,height:800},react.createElement(src.PE,{size:{x:6,y:6},flat:!1,spacing:1.1,origin:{x:0,y:0}},react.createElement(react.Fragment,null,hexagons.map(((hex,i)=>react.createElement(src.VJ,{key:i,q:hex.q,r:hex.r,s:hex.s,className:hex.props?hex.props.className:void 0,onMouseEnter:(event,source)=>{const targetHex=source.state.hex;path.end=targetHex;const coloredHexas=hexagons.map((hex=>(hex.props=hex.props||{},hex.props.className=src.Fr.distance(targetHex,hex)<2?"active":"",hex.props.className+=targetHex.q===hex.q?" q ":"",hex.props.className+=targetHex.r===hex.r?" r ":"",hex.props.className+=targetHex.s===hex.s?" s ":"",hex)));setPath(path),setHexagons(coloredHexas)},onClick:(e,source)=>{null==path.start?path.start=source.state.hex:(path.start=null,path.end=null),setPath(path)}},react.createElement(src.EY,null,src.Fr.getID(hex)))))),react.createElement(src.wA,{start:path.start,end:path.end}))))}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args, {\n  argTypes\n}) => {\n  const [hexagons, setHexagons] = React.useState(initialHexagons);\n  const [path, setPath] = React.useState<{\n    start: null | Hex;\n    end: null | Hex;\n  }>({\n    start: null,\n    end: null\n  });\n  return <div className="pathfinding-example" style={{\n    background: "#133b43",\n    color: "white",\n    display: "flex",\n    flexDirection: "column",\n    alignItems: "center"\n  }}>\n      <h2>Pathfinding & active highlight</h2>\n      <p>\n        Click a tile to start drawing a path to your cursor. Click again to\n        cancel.\n      </p>\n      <p>Hover around the board to see helper lines drawn.</p>\n      <HexGrid width={1200} height={800}>\n        <Layout size={{\n        x: 6,\n        y: 6\n      }} flat={false} spacing={1.1} origin={{\n        x: 0,\n        y: 0\n      }}>\n          <>\n            {hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className={hex.props ? hex.props.className : undefined} onMouseEnter={(event, source) => {\n            // Set the path\'s end on hover\n            // const { path, hexagons } = this.state;\n            const targetHex = source.state.hex;\n            path.end = targetHex;\n\n            // Color some hexagons\n            const coloredHexas = hexagons.map(hex => {\n              hex.props = hex.props || {};\n              // Highlight tiles that are next to the target (1 distance away)\n              hex.props.className = HexUtils.distance(targetHex, hex) < 2 ? "active" : "";\n\n              // If the tile is on same coordinate, add class specific to the coordinate name\n              hex.props.className += targetHex.q === hex.q ? " q " : "";\n              hex.props.className += targetHex.r === hex.r ? " r " : "";\n              hex.props.className += targetHex.s === hex.s ? " s " : "";\n              return hex;\n            });\n            setPath(path);\n            setHexagons(coloredHexas);\n            // this.setState({ path, hexagons: coloredHexas });\n          }} onClick={(e, source) => {\n            if (path.start == null) {\n              path.start = source.state.hex;\n            } else {\n              path.start = null;\n              path.end = null;\n            }\n            setPath(path);\n          }}>\n                <Text>{HexUtils.getID(hex)}</Text>\n              </Hexagon>)}\n          </>\n          <Path start={path.start} end={path.end} />\n        </Layout>\n      </HexGrid>\n    </div>;\n}',...Default.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/pathfinding/App.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".pathfinding-example svg g {\n  fill: #4499a9;\n  fill-opacity: 0.6;\n}\n.pathfinding-example svg g:hover {\n  fill: #7be3f6;\n  fill-opacity: 0.7;\n}\n.pathfinding-example svg g:hover text {\n  fill-opacity: 1;\n}\n.pathfinding-example svg g.q .hexagon {\n  fill: Red;\n  fill-opacity: 0.4;\n}\n.pathfinding-example svg g.r .hexagon {\n  fill: Green;\n  fill-opacity: 0.4;\n}\n.pathfinding-example svg g.s .hexagon {\n  fill: Blue;\n  fill-opacity: 0.4;\n}\n.pathfinding-example svg g.active .hexagon {\n  fill: Coral;\n  fill-opacity: 0.9;\n}\n.pathfinding-example svg g polygon {\n  stroke: #7be3f6;\n  stroke-width: 0.2;\n  transition: fill-opacity 0.5s;\n}\n.pathfinding-example svg g text {\n  font-size: 0.17em;\n  fill: white;\n  fill-opacity: 0.7;\n  transition: fill-opacity 0.5s;\n}\n.pathfinding-example svg path {\n  fill: none;\n  stroke: #03090a;\n  stroke-width: 0.2em;\n  stroke-opacity: 0.9;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n","",{version:3,sources:["webpack://./src/stories/pathfinding/App.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,6BAA6B;AAC/B;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,6BAA6B;AAC/B;AACA;EACE,UAAU;EACV,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;AACxB",sourcesContent:[".pathfinding-example svg g {\n  fill: #4499a9;\n  fill-opacity: 0.6;\n}\n.pathfinding-example svg g:hover {\n  fill: #7be3f6;\n  fill-opacity: 0.7;\n}\n.pathfinding-example svg g:hover text {\n  fill-opacity: 1;\n}\n.pathfinding-example svg g.q .hexagon {\n  fill: Red;\n  fill-opacity: 0.4;\n}\n.pathfinding-example svg g.r .hexagon {\n  fill: Green;\n  fill-opacity: 0.4;\n}\n.pathfinding-example svg g.s .hexagon {\n  fill: Blue;\n  fill-opacity: 0.4;\n}\n.pathfinding-example svg g.active .hexagon {\n  fill: Coral;\n  fill-opacity: 0.9;\n}\n.pathfinding-example svg g polygon {\n  stroke: #7be3f6;\n  stroke-width: 0.2;\n  transition: fill-opacity 0.5s;\n}\n.pathfinding-example svg g text {\n  font-size: 0.17em;\n  fill: white;\n  fill-opacity: 0.7;\n  transition: fill-opacity 0.5s;\n}\n.pathfinding-example svg path {\n  fill: none;\n  stroke: #03090a;\n  stroke-width: 0.2em;\n  stroke-opacity: 0.9;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);