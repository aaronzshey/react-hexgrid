"use strict";(self.webpackChunkreact_hexgrid=self.webpackChunkreact_hexgrid||[]).push([[101],{"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o_:()=>GridGenerator,_h:()=>Hex,Q6:()=>HexGrid,Fr:()=>HexUtils,VJ:()=>Hexagon,PE:()=>Layout,wA:()=>Path,zJ:()=>Pattern,EY:()=>Text});class Hex{q;r;s;blocked;text;image;props;state;pattern;constructor(q,r,s){this.q=q,this.r=r,this.s=s}}var Point=__webpack_require__("./src/models/Point.ts");class HexUtils{static DIRECTIONS=[new Hex(1,0,-1),new Hex(1,-1,0),new Hex(0,-1,1),new Hex(-1,0,1),new Hex(-1,1,0),new Hex(0,1,-1)];static equals(a,b){return a.q==b.q&&a.r==b.r&&a.s==b.s}static add(a,b){return new Hex(a.q+b.q,a.r+b.r,a.s+b.s)}static subtract(a,b){return new Hex(a.q-b.q,a.r-b.r,a.s-b.s)}static multiply(a,k){return new Hex(a.q*k,a.r*k,a.s*k)}static lengths(hex){return(Math.abs(hex.q)+Math.abs(hex.r)+Math.abs(hex.s))/2}static distance(a,b){return HexUtils.lengths(HexUtils.subtract(a,b))}static direction(direction){return HexUtils.DIRECTIONS[(6+direction%6)%6]}static neighbor(hex,direction){return HexUtils.add(hex,HexUtils.direction(direction))}static neighbors(hex){const array=[];for(let i=0;i<HexUtils.DIRECTIONS.length;i+=1)array.push(HexUtils.neighbor(hex,i));return array}static round(hex){let rq=Math.round(hex.q),rr=Math.round(hex.r),rs=Math.round(hex.s);const qDiff=Math.abs(rq-hex.q),rDiff=Math.abs(rr-hex.r),sDiff=Math.abs(rs-hex.s);return qDiff>rDiff&&qDiff>sDiff?rq=-rr-rs:rDiff>sDiff?rr=-rq-rs:rs=-rq-rr,new Hex(rq,rr,rs)}static hexToPixel(hex,layout){const s=layout.spacing,M=layout.orientation;let x=(M.f0*hex.q+M.f1*hex.r)*layout.size.x,y=(M.f2*hex.q+M.f3*hex.r)*layout.size.y;return x*=s,y*=s,new Point.b(x+layout.origin.x,y+layout.origin.y)}static pixelToHex(point,layout){const M=layout.orientation,pt=new Point.b((point.x-layout.origin.x)/layout.size.x,(point.y-layout.origin.y)/layout.size.y),q=M.b0*pt.x+M.b1*pt.y,r=M.b2*pt.x+M.b3*pt.y,hex=new Hex(q,r,-q-r);return HexUtils.round(hex)}static lerp(a,b,t){return a+(b-a)*t}static hexLerp(a,b,t){return new Hex(HexUtils.lerp(a.q,b.q,t),HexUtils.lerp(a.r,b.r,t),HexUtils.lerp(a.s,b.s,t))}static getID(hex){return`${hex.q},${hex.r},${hex.s}`}}class GridGenerator{static getGenerator(name){return GridGenerator[name]}static ring(center,mapRadius){let hexas=[],hex=HexUtils.add(center,HexUtils.multiply(HexUtils.direction(4),mapRadius));for(let i=0;i<6;i++)for(let j=0;j<mapRadius;j++)hexas.push(hex),hex=HexUtils.neighbor(hex,i);return hexas}static spiral(center,mapRadius){let results=[center];for(let k=1;k<=mapRadius;k++){const temp=GridGenerator.ring(center,k);results=results.concat(temp)}return results}static parallelogram(q1,q2,r1,r2){let hexas=[];for(let q=q1;q<=q2;q++)for(let r=r1;r<=r2;r++)hexas.push(new Hex(q,r,-q-r));return hexas}static triangle(mapSize){let hexas=[];for(let q=0;q<=mapSize;q++)for(let r=0;r<=mapSize-q;r++)hexas.push(new Hex(q,r,-q-r));return hexas}static hexagon(mapRadius){let hexas=[];for(let q=-mapRadius;q<=mapRadius;q++){let r1=Math.max(-mapRadius,-q-mapRadius),r2=Math.min(mapRadius,-q+mapRadius);for(let r=r1;r<=r2;r++)hexas.push(new Hex(q,r,-q-r))}return hexas}static rectangle(mapWidth,mapHeight){let hexas=[];for(let r=0;r<mapHeight;r++){let offset=Math.floor(r/2);for(let q=-offset;q<mapWidth-offset;q++)hexas.push(new Hex(q,r,-q-r))}return hexas}static orientedRectangle(mapWidth,mapHeight){let hexas=[];for(let q=0;q<mapWidth;q++){let offset=Math.floor(q/2);for(let r=-offset;r<mapHeight-offset;r++)hexas.push(new Hex(q,r,-q-r))}return hexas}}try{GridGenerator.displayName="GridGenerator",GridGenerator.__docgenInfo={description:"This class contains static methods for generating Hex coordinates\nfor specifically-shaped grids, such as rectangle, hexagon, and more.",displayName:"GridGenerator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/GridGenerator.tsx#GridGenerator"]={docgenInfo:GridGenerator.__docgenInfo,name:"GridGenerator",path:"src/GridGenerator.tsx#GridGenerator"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js");function HexGrid({width=800,height=600,viewBox="-50 -50 100 100",...props}){return react.createElement("svg",{className:"grid",width,height,viewBox,version:"1.1",xmlns:"http://www.w3.org/2000/svg",...props})}try{HexGrid.displayName="HexGrid",HexGrid.__docgenInfo={description:"Simple renders an `<svg>` container element for SVG graphics.\nThis component does not do anything special other than applying some defaults to the svg container if not provided.\nThe HexGrid should be used as the outer container for one or several `<Layouts>`.",displayName:"HexGrid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HexGrid.tsx#HexGrid"]={docgenInfo:HexGrid.__docgenInfo,name:"HexGrid",path:"src/HexGrid.tsx#HexGrid"})}catch(__react_docgen_typescript_loader_error){}class Orientation{f0;f1;f2;f3;b0;b1;b2;b3;startAngle;constructor(f0,f1,f2,f3,b0,b1,b2,b3,startAngle){this.f0=f0,this.f1=f1,this.f2=f2,this.f3=f3,this.b0=b0,this.b1=b1,this.b2=b2,this.b3=b3,this.startAngle=startAngle}}const LAYOUT_FLAT=new Orientation(1.5,0,Math.sqrt(3)/2,Math.sqrt(3),2/3,0,-1/3,Math.sqrt(3)/3,0),LAYOUT_POINTY=new Orientation(Math.sqrt(3),Math.sqrt(3)/2,0,1.5,Math.sqrt(3)/3,-1/3,0,2/3,.5),defaultSize=new Point.b(10,10),defaultOrigin=new Point.b(0,0),defaultSpacing=1,Context=react.createContext({layout:{size:defaultSize,orientation:LAYOUT_FLAT,origin:defaultOrigin,spacing:defaultSpacing},points:""});function useLayoutContext(){return react.useContext(Context)}function Layout({size=defaultSize,flat=!0,spacing=defaultSpacing,origin=defaultOrigin,children,className,...rest}){const orientation=flat?LAYOUT_FLAT:LAYOUT_POINTY,angle=flat?0:Math.PI/6,cornerCoords=function calculateCoordinates(circumradius,angle=0,center=new Point.b(0,0)){const corners=[];for(let i=0;i<6;i++){const x=circumradius*Math.cos(2*Math.PI*i/6+angle),y=circumradius*Math.sin(2*Math.PI*i/6+angle),point=new Point.b(center.x+x,center.y+y);corners.push(point)}return corners}(size.x,angle),points=cornerCoords.map((point=>`${point.x},${point.y}`)).join(" "),childLayout=Object.assign({},rest,{orientation,size,origin,spacing});return react.createElement(Context.Provider,{value:{layout:childLayout,points}},react.createElement("g",{className},children))}try{Layout.displayName="Layout",Layout.__docgenInfo={description:"Provides LayoutContext for all descendands and renders child elements inside a <g> (Group) element",displayName:"Layout",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},flat:{defaultValue:{value:"true"},description:"",name:"flat",required:!1,type:{name:"boolean"}},origin:{defaultValue:{value:"new Point(0, 0)"},description:"",name:"origin",required:!1,type:{name:"any"}},size:{defaultValue:{value:"new Point(10, 10)"},description:"",name:"size",required:!1,type:{name:"Size"}},space:{defaultValue:null,description:"",name:"space",required:!1,type:{name:"number"}},spacing:{defaultValue:{value:"1"},description:"",name:"spacing",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}function Path({start,end,...props}){const{layout}=useLayoutContext();return react.createElement("path",{...props,d:function getPoints(){if(!start||!end)return"";let distance=HexUtils.distance(start,end),intersects=[],step=1/Math.max(distance,1);for(let i=0;i<=distance;i++)intersects.push(HexUtils.round(HexUtils.hexLerp(start,end,step*i)));let points="M";return points+=intersects.map((hex=>{let p=HexUtils.hexToPixel(hex,layout);return` ${p.x},${p.y} `})).join("L"),points}()})}try{Path.displayName="Path",Path.__docgenInfo={description:"Renders an svg `<path>` component with points on the grid between a qrs-based `start` and `end` coordinates.",displayName:"Path",props:{start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"any"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Path.tsx#Path"]={docgenInfo:Path.__docgenInfo,name:"Path",path:"src/Path.tsx#Path"})}catch(__react_docgen_typescript_loader_error){}const Pattern_defaultSize=new Point.A(10,10);function Pattern({id,link,size=Pattern_defaultSize}){return React.createElement("defs",null,React.createElement("pattern",{id,patternUnits:"objectBoundingBox",x:0,y:0,width:size.x,height:size.y},React.createElement("image",{xlinkHref:link,x:0,y:0,width:2*size.x,height:2*size.y})))}try{Pattern.displayName="Pattern",Pattern.__docgenInfo={description:"Defines an `<defs><pattern><image>` group (will not be rendered) in order to allow defining images.\nThe given id can be used on the `Hexagon` to render the image",displayName:"Pattern",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},size:{defaultValue:{value:"new Point(10, 10)"},description:"",name:"size",required:!1,type:{name:"Size"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Pattern.tsx#Pattern"]={docgenInfo:Pattern.__docgenInfo,name:"Pattern",path:"src/Pattern.tsx#Pattern"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function Hexagon(props){const{q,r,s,fill,cellStyle,className,children,onDragStart,onDragEnd,onDrop,onDragOver,onMouseEnter,onMouseLeave,onMouseOver,onClick,data,fillOpacity,...rest}=props,{layout,points}=useLayoutContext(),{hex,pixel}=react.useMemo((()=>{const hex=new Hex(q,r,s);return{hex,pixel:HexUtils.hexToPixel(hex,layout)}}),[q,r,s,layout]),state={hex},fillId=fill?`url(#${fill})`:void 0;return react.createElement("g",{className:classnames_default()("hexagon-group",className),transform:`translate(${pixel.x}, ${pixel.y})`,...rest,draggable:!0,onDragStart:e=>{if(onDragStart){const targetProps={hex,pixel,data,fill,className};e.dataTransfer.setData("hexagon",JSON.stringify(targetProps)),onDragStart(e,{data,state,props})}},onDragEnd:e=>{if(onDragEnd){e.preventDefault();const success="none"!==e.dataTransfer.dropEffect;onDragEnd(e,{state,props},success)}},onDrop:e=>{if(onDrop){e.preventDefault();const target=JSON.parse(e.dataTransfer.getData("hexagon"));onDrop(e,{data,state,props},target)}},onDragOver:e=>{onDragOver&&onDragOver(e,{data,state,props})},onMouseEnter:e=>{onMouseEnter&&onMouseEnter(e,{data,state,props})},onClick:e=>{onClick&&onClick(e,{data,state,props})},onMouseOver:e=>{onMouseOver&&onMouseOver(e,{data,state,props})},onMouseLeave:e=>{onMouseLeave&&onMouseLeave(e,{data,state,props})}},react.createElement("g",{className:"hexagon"},react.createElement("polygon",{points,fill:fillId,style:cellStyle}),children))}try{Hexagon.displayName="Hexagon",Hexagon.__docgenInfo={description:"Renders a Hexagon cell at the given rqs-based coordinates.",displayName:"Hexagon",props:{q:{defaultValue:null,description:"",name:"q",required:!0,type:{name:"number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"number"}},s:{defaultValue:null,description:"",name:"s",required:!0,type:{name:"number"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},cellStyle:{defaultValue:null,description:"",name:"cellStyle",required:!1,type:{name:"CSSProperties"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"HexagonMouseEventHandler<SVGGElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"HexagonMouseEventHandler<SVGGElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"HexagonMouseEventHandler<SVGGElement>"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"HexagonDragEventHandler<Element, any>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"HexagonDragEventHandler<Element, any>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"HexagonDragEventHandler<Element, any>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"HexagonDragDropEventHandler<any, TargetProps>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"HexagonMouseEventHandler<SVGGElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hexagon/Hexagon.tsx#Hexagon"]={docgenInfo:Hexagon.__docgenInfo,name:"Hexagon",path:"src/Hexagon/Hexagon.tsx#Hexagon"})}catch(__react_docgen_typescript_loader_error){}function Text(props){const{children,x,y,...rest}=props;return react.createElement("text",{x:x||0,y:y||"0.3em",textAnchor:"middle",...rest},children)}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"string | number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hexagon/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/Hexagon/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/models/Point.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,b:()=>Point});class Point{x;y;constructor(x,y){this.x=x,this.y=y}}const __WEBPACK_DEFAULT_EXPORT__=Point}}]);