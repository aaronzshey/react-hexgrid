"use strict";(self.webpackChunkreact_hexgrid=self.webpackChunkreact_hexgrid||[]).push([[274],{"./src/stories/templates/templates.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>templates_stories});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./src/index.ts");const configurations={hexagon:{width:1e3,height:800,layout:{width:8,height:8,flat:!1,spacing:1.02},origin:{x:0,y:0},map:"hexagon",mapProps:[3]},triangle:{width:1e3,height:800,layout:{width:9,height:9,flat:!1,spacing:1.05},origin:{x:-45,y:-35},map:"triangle",mapProps:[5]},parallelogram:{width:1e3,height:800,layout:{width:7,height:7,flat:!0,spacing:1.05},origin:{x:0,y:0},map:"parallelogram",mapProps:[-2,2,-2,2]},rectangle:{width:1e3,height:800,layout:{width:6,height:6,flat:!1,spacing:1.02},origin:{x:-45,y:-40},map:"rectangle",mapProps:[10,10]},orientedRectangle:{width:1e3,height:800,layout:{width:6,height:6,flat:!1,spacing:1.1},origin:{x:-45,y:-15},map:"orientedRectangle",mapProps:[7,7]},ring:{width:1e3,height:800,layout:{width:6,height:6,flat:!1,spacing:1.1},origin:{x:0,y:0},map:"ring",mapProps:[{q:0,r:0,s:0},3]},spiral:{width:1e3,height:800,layout:{width:6,height:6,flat:!1,spacing:1.1},origin:{x:0,y:0},map:"spiral",mapProps:[{q:0,r:0,s:0},3]}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const templates_stories={title:"Templates",component:src.NJ},initialConfig=configurations.hexagon,initialHexagons=src.Qo.getGenerator(initialConfig.map)(initialConfig.mapProps),Default=((args,{argTypes})=>{const[hexagons,setHexagons]=react.useState(initialHexagons),[config,setConfig]=react.useState(initialConfig),layout=config.layout,size={x:layout.width,y:layout.height};return react.createElement("div",{css:emotion_react_browser_esm.iv`
        margin: 0;
        padding: 1em;
        font-family: sans-serif;
        background: #f0f0f0;
      `},react.createElement("h2",null,"Select grid type and configuration from dropdown."),react.createElement("div",null,react.createElement("strong",null,"Template: "),react.createElement("select",{onChange:event=>{const name=event.currentTarget.value,config=configurations[name],hexagons=src.Qo.getGenerator(config.map).apply(void 0,config.mapProps);setConfig(config),setHexagons(hexagons)}},Object.keys(configurations).map((type=>react.createElement("option",{value:type},type))))),react.createElement("hr",null),react.createElement(src.e1,{width:config.width,height:config.height,css:emotion_react_browser_esm.iv`
          g {
            fill: #3f51b5;
            fill-opacity: 0.6;
            &:hover {
              fill-opacity: 1;
            }
            text {
              font-size: 0.2em;
              fill: #000;
              fill-opacity: 0.9;
              transition: fill-opacity 0.2s;
            }
            polygon {
              stroke: #3f51b5;
              stroke-width: 0.2;
              transition: fill-opacity 0.2s;
            }
          }
        `},react.createElement(src.Ar,{size,flat:layout.flat,spacing:layout.spacing,origin:config.origin},hexagons.map(((hex,i)=>react.createElement(src.NJ,{key:config.mapProps+i,q:hex.q,r:hex.r,s:hex.s},react.createElement(src.xv,null,src.pb.getID(hex))))))))}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args, {\n  argTypes\n}) => {\n  const [hexagons, setHexagons] = React.useState(initialHexagons);\n  const [config, setConfig] = React.useState<any>(initialConfig);\n  const layout = config.layout;\n  const size = {\n    x: layout.width,\n    y: layout.height\n  };\n  return <div css={css`\n        margin: 0;\n        padding: 1em;\n        font-family: sans-serif;\n        background: #f0f0f0;\n      `}>\n      <h2>Select grid type and configuration from dropdown.</h2>\n      <div>\n        <strong>Template: </strong>\n        <select onChange={event => {\n        const name = event.currentTarget.value;\n        const config = configurations[name];\n        const generator = GridGenerator.getGenerator(config.map);\n        const hexagons = generator.apply(this, config.mapProps);\n        setConfig(config);\n        setHexagons(hexagons);\n      }}>\n          {Object.keys(configurations).map(type => <option value={type}>{type}</option>)}\n        </select>\n      </div>\n      <hr />\n      <HexGrid width={config.width} height={config.height} css={css`\n          g {\n            fill: #3f51b5;\n            fill-opacity: 0.6;\n            &:hover {\n              fill-opacity: 1;\n            }\n            text {\n              font-size: 0.2em;\n              fill: #000;\n              fill-opacity: 0.9;\n              transition: fill-opacity 0.2s;\n            }\n            polygon {\n              stroke: #3f51b5;\n              stroke-width: 0.2;\n              transition: fill-opacity 0.2s;\n            }\n          }\n        `}>\n        <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>\n          {\n        // note: key must be unique between re-renders.\n        // using config.mapProps+i makes a new key when the goal template chnages.\n        hexagons.map((hex, i) => <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s}>\n                <Text>{HexUtils.getID(hex)}</Text>\n              </Hexagon>)}\n        </Layout>\n      </HexGrid>\n    </div>;\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-templates-templates-stories.63f9e993.iframe.bundle.js.map