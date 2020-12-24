(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(155)),c={id:"numpad",title:"NumPad",sidebar_label:"NumPad"},o={id:"numpad",isDocsHomePage:!1,title:"NumPad",description:"Numpad is custom designed keypad for handling number inputs,it rely on react-native-material-ripple,to have ripple effect on every number press.",source:"@site/docs/numpad.md",permalink:"/frontatish/docs/numpad",editUrl:"https://github.com/Groww/frontatish/edit/alpha/docs/documentation/docs/numpad.md",sidebar_label:"NumPad",sidebar:"someSidebar",previous:{title:"CheckBox",permalink:"/frontatish/docs/checkbox"},next:{title:"RadioButton",permalink:"/frontatish/docs/radiobutton"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"onItemClick",id:"onitemclick",children:[]},{value:"onDeleteItem",id:"ondeleteitem",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Numpad is custom designed keypad for handling number inputs,it rely on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-material-ripple"}),"react-native-material-ripple"),",to have ripple effect on every number press."),Object(i.b)("div",{className:"image-horizontal-preview"},Object(i.b)("figure",null,Object(i.b)("img",{src:"/frontatish/img/numpad.png",alt:"NumberPad",height:"250"})),Object(i.b)("figure",null,Object(i.b)("img",{src:"/frontatish/img/numpad_2.png",alt:"NumberPad",height:"250"}))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { NumPad } from 'frontatish';\n\nclass NumPadExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { input: '' };\n  }\n\n  onItemClick = (value) => {\n    const { input } = this.state;\n    if (input.length < 10) {\n      this.setState({ input: input + value });\n    }\n  };\n\n  onDeleteItem = () => {\n    const { input } = this.state;\n    this.setState({ input: input.substring(0, input.length - 1) });\n  };\n\n  render() {\n    const { input } = this.state;\n    return (\n      <NumPad onItemClick={this.onItemClick} onDeleteItem={this.onDeleteItem} />\n    );\n  }\n}\n")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"onitemclick"},"onItemClick"),Object(i.b)("p",null,"Callback function which gets called on every item press in number pad,you can see the usage to understand better\nit will basically append the the value you will press, eventually in the parent state."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"function ",Object(i.b)("img",{width:"500"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none",Object(i.b)("img",{width:"500"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(i.b)("img",{width:"500"}))))),Object(i.b)("h3",{id:"ondeleteitem"},"onDeleteItem"),Object(i.b)("p",null,"Callback function which gets called on delete icon press,you can see the usage to understand better\nit will basically delete the the last item from the current value."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"function ",Object(i.b)("img",{width:"500"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none",Object(i.b)("img",{width:"500"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(i.b)("img",{width:"500"}))))))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);