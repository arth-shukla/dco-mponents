/*! For license information please see components-ThumbnailList-ThumbnailList-stories.1fd72cd1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arth_shukla_dco_mponents=self.webpackChunk_arth_shukla_dco_mponents||[]).push([[283],{"./src/components/ThumbnailList/ThumbnailList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ForceSquare:()=>ForceSquare,NoForceSquare:()=>NoForceSquare,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ThumbnailList_stories});var react=__webpack_require__("./node_modules/react/index.js"),uuid=__webpack_require__("./node_modules/react-uuid/uuid.js"),uuid_default=__webpack_require__.n(uuid),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ThumbnailList=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ThumbnailList/ThumbnailList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ThumbnailList.Z,options);ThumbnailList.Z&&ThumbnailList.Z.locals&&ThumbnailList.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ThumbnailList_ThumbnailList_ThumbnailList(_ref){var thumbnails=_ref.thumbnails,_ref$thumbnailsPerRow=_ref.thumbnailsPerRow,thumbnailsPerRow=void 0===_ref$thumbnailsPerRow?4:_ref$thumbnailsPerRow,_ref$forceSquare=_ref.forceSquare,forceSquare=void 0===_ref$forceSquare||_ref$forceSquare,_ref$justifyContent=_ref.justifyContent,justifyContent=void 0===_ref$justifyContent?"space-around":_ref$justifyContent,_ref$imagePadding=_ref.imagePadding,imagePadding=void 0===_ref$imagePadding?0:_ref$imagePadding,_useState2=_slicedToArray((0,react.useState)(function generateKeys(){var thumbnailKeys={};return thumbnails.forEach((function(thumbnail){thumbnailKeys[thumbnail.caption]=uuid_default()()})),thumbnailKeys}()),2),uuidKeys=_useState2[0];_useState2[1];return console.log(Math.floor(100/thumbnailsPerRow*100)/100),(0,jsx_runtime.jsx)("div",{className:"dcomp-thumbnail-list-container",style:{justifyContent},children:thumbnails.map((function(thumbnail){return react.createElement(void 0!==(null==thumbnail?void 0:thumbnail.href)?"a":"figure",{className:"dcomp-thumbnail-list-thumbnail",href:void 0!==(null==thumbnail?void 0:thumbnail.href)?thumbnail.href:void 0,target:void 0!==(null==thumbnail?void 0:thumbnail.href)?"_blank":void 0,rel:void 0!==(null==thumbnail?void 0:thumbnail.href)?"noreferrer":void 0,style:{"--max-thumbnail-width":"".concat(Math.floor(100/thumbnailsPerRow*100)/100,"%"),"--image-padding":"".concat(imagePadding,"px")},key:uuidKeys[thumbnail.caption]},(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("img",{className:"dcomp-thumbnail-list-image"+String(forceSquare&&" dcomp-thumbnail-list-image-square"),src:thumbnail.src,alt:thumbnail.alt,width:"100%"}),(0,jsx_runtime.jsx)("figcaption",{className:"dcomp-thumbnail-list-image-caption",children:thumbnail.caption})]}))}))})}ThumbnailList_ThumbnailList_ThumbnailList.displayName="ThumbnailList";const components_ThumbnailList_ThumbnailList=ThumbnailList_ThumbnailList_ThumbnailList;try{ThumbnailList_ThumbnailList_ThumbnailList.displayName="ThumbnailList",ThumbnailList_ThumbnailList_ThumbnailList.__docgenInfo={description:"",displayName:"ThumbnailList",props:{thumbnails:{defaultValue:null,description:"",name:"thumbnails",required:!0,type:{name:"DCoThumbnail[]"}},thumbnailsPerRow:{defaultValue:{value:"4"},description:"",name:"thumbnailsPerRow",required:!1,type:{name:"number"}},forceSquare:{defaultValue:{value:"true"},description:"",name:"forceSquare",required:!1,type:{name:"boolean"}},justifyContent:{defaultValue:{value:"space-around"},description:"",name:"justifyContent",required:!1,type:{name:"string"}},imagePadding:{defaultValue:{value:"0"},description:"",name:"imagePadding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThumbnailList/ThumbnailList.tsx#ThumbnailList"]={docgenInfo:ThumbnailList_ThumbnailList_ThumbnailList.__docgenInfo,name:"ThumbnailList",path:"src/components/ThumbnailList/ThumbnailList.tsx#ThumbnailList"})}catch(__react_docgen_typescript_loader_error){}var _ForceSquare$paramete,_ForceSquare$paramete2,_ForceSquare$paramete3,_NoForceSquare$parame,_NoForceSquare$parame2,_NoForceSquare$parame3;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var testImages=[{caption:"Angy",src:"https://preview.redd.it/voiac279e2461.png?auto=webp&s=68ac149085a1bab71f1dd4d71d0a509bcc4a316e",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:"Angy guy"},{caption:"Frew Up",src:"https://i.pinimg.com/564x/5b/02/47/5b0247d140ff9659066d61fa63edc79a.jpg",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:"Mom i frew up"},{caption:"Happy",src:"https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:"Happy catto"},{caption:"Hello",src:"https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:"Hello yes hi hello"},{caption:"Melvin",src:"https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:"Melvin"},{caption:"Polite",src:"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:"Polite gentleman"},{caption:"Sadge",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkNL450VCdu6u6eWC7IYwb2I9WB5uT8XKnF4ZVtsOaA&usqp=CAU&ec=48665701",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:":("},{caption:"Stinky",src:"https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg",href:"https://www.youtube.com/shorts/uWhPnAQTH5E",alt:"Real stinker right here"}];const ThumbnailList_stories={title:"DComponents/ThumbnailList",component:components_ThumbnailList_ThumbnailList,tags:["autodocs"]};var Template=function Template(args){return(0,jsx_runtime.jsx)(components_ThumbnailList_ThumbnailList,_objectSpread({thumbnails:testImages,thumbnailsPerRow:4,imagePadding:10},args))};Template.displayName="Template";var ForceSquare=Template.bind({});ForceSquare.args={forceSquare:!0};var NoForceSquare=Template.bind({});NoForceSquare.args={forceSquare:!1},ForceSquare.parameters=_objectSpread(_objectSpread({},ForceSquare.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ForceSquare$paramete=ForceSquare.parameters)||void 0===_ForceSquare$paramete?void 0:_ForceSquare$paramete.docs),{},{source:_objectSpread({originalSource:"args => <ThumbnailList thumbnails={testImages} thumbnailsPerRow={4} imagePadding={10} {...args} />"},null===(_ForceSquare$paramete2=ForceSquare.parameters)||void 0===_ForceSquare$paramete2||null===(_ForceSquare$paramete3=_ForceSquare$paramete2.docs)||void 0===_ForceSquare$paramete3?void 0:_ForceSquare$paramete3.source)})}),NoForceSquare.parameters=_objectSpread(_objectSpread({},NoForceSquare.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoForceSquare$parame=NoForceSquare.parameters)||void 0===_NoForceSquare$parame?void 0:_NoForceSquare$parame.docs),{},{source:_objectSpread({originalSource:"args => <ThumbnailList thumbnails={testImages} thumbnailsPerRow={4} imagePadding={10} {...args} />"},null===(_NoForceSquare$parame2=NoForceSquare.parameters)||void 0===_NoForceSquare$parame2||null===(_NoForceSquare$parame3=_NoForceSquare$parame2.docs)||void 0===_NoForceSquare$parame3?void 0:_NoForceSquare$parame3.source)})});var __namedExportsOrder=["ForceSquare","NoForceSquare"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ThumbnailList/ThumbnailList.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dcomp-thumbnail-list-container{display:flex;flex-wrap:wrap}.dcomp-thumbnail-list-container figure,.dcomp-thumbnail-list-container figcaption{all:unset}.dcomp-thumbnail-list-container a{color:unset;text-decoration:unset}.dcomp-thumbnail-list-container .dcomp-thumbnail-list-thumbnail{flex:0 0 var(--max-thumbnail-width);text-align:center;padding:var(--image-padding);width:0}.dcomp-thumbnail-list-container .dcomp-thumbnail-list-thumbnail .dcomp-thumbnail-list-image-square{object-fit:cover;aspect-ratio:1/1}","",{version:3,sources:["webpack://./src/components/ThumbnailList/ThumbnailList.scss"],names:[],mappings:"AAAA,gCACC,YAAA,CACA,cAAA,CAEA,kFAEC,SAAA,CAGD,kCACC,WAAA,CACA,qBAAA,CAGD,gEACC,mCAAA,CACA,iBAAA,CACA,4BAAA,CACA,OAAA,CAGC,mGACC,gBAAA,CACA,gBAAA",sourcesContent:[".dcomp-thumbnail-list-container {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\n\tfigure,\n\tfigcaption {\n\t\tall: unset;\n\t}\n\n\ta {\n\t\tcolor: unset;\n\t\ttext-decoration: unset;\n\t}\n\n\t.dcomp-thumbnail-list-thumbnail {\n\t\tflex: 0 0 var(--max-thumbnail-width);\n\t\ttext-align: center;\n\t\tpadding: var(--image-padding);\n\t\twidth: 0;\n\n\t\t.dcomp-thumbnail-list-image {\n\t\t\t&-square {\n\t\t\t\tobject-fit: cover;\n\t\t\t\taspect-ratio: 1 / 1;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react-uuid/uuid.js":module=>{module.exports=function uuid(){const hashTable=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let uuid=[];for(let i=0;i<36;i++)uuid[i]=8===i||13===i||18===i||23===i?"-":hashTable[Math.ceil(Math.random()*hashTable.length-1)];return uuid.join("")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);