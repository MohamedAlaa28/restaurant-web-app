(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{74186:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Support",function(){return s(39940)}])},19483:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(85893),n=s(67294),r=s(89262),i=s(44080),l=s(58822),o=s(65884);function c(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}function d(e){var t=e.items,s=e.selected,d=e.setSelected;return(0,a.jsx)(r.R,{value:s,onChange:d,children:function(e){var d=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.R.Label,{className:"block text-sm font-medium text-gray-700",children:"Sort by"}),(0,a.jsxs)("div",{className:"mt-1 relative",children:[(0,a.jsxs)(r.R.Button,{className:"bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#CCE7E6] focus:border-[#CCE7E6] sm:text-sm",children:[(0,a.jsx)("span",{className:"block truncate w-[140px] text-[#686868]",children:s.name}),(0,a.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,a.jsx)(l.Z,{className:"h-5 w-5 text-[#686868]","aria-hidden":"true"})})]}),(0,a.jsx)(i.u,{show:d,as:n.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)(r.R.Options,{className:"absolute z-10 mt-1 w-48 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",children:t.map((function(e){return(0,a.jsx)(r.R.Option,{className:function(e){return c(e.active?"text-[#232323] bg-[#CCE7E6]":"text-[#686868]","cursor-default select-none w-48 relative py-2 pl-3 pr-9")},value:e,children:function(t){var s=t.selected,n=t.active;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:c(s?"font-semibold":"font-normal","block w-40"),children:e.name}),s?(0,a.jsx)("span",{className:c(n?"text-white":"text-[#CCE7E6]","absolute inset-y-0 right-0 flex items-center pr-4"),children:(0,a.jsx)(o.Z,{className:"h-5 w-5","aria-hidden":"true"})}):null]})}},e.id)}))})})]})]})}})}},39940:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var a=s(85893),n=s(67294),r=s(19483),i=s(10797),l=s(41664),o=s.n(l),c=s(30471),d=s(44080),m=s(57976);function u(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}function x(e){var t=e.MessagesList,s=(0,n.useRef)(),r=(0,n.useState)(!1),l=r[0],x=r[1],f=(0,n.useState)(!1),p=f[0],h=f[1],g=(0,n.useState)([]),b=g[0],v=g[1];return(0,a.jsx)("div",{className:"mt-8 flex flex-col",style:{boxShadow:"0px 10px 60px #DCDCDC8C"},children:(0,a.jsx)("div",{className:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,a.jsx)("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg px-10 py-4 bg-white",children:(0,a.jsxs)("table",{className:"min-w-full divide-y-[2px]",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"px-5",children:[(0,a.jsx)("th",{scope:"col",className:"relative pr-6 sm:w-16 sm:pr-8",children:(0,a.jsx)("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3d897a] focus:ring-[#3d897a] sm:left-6",ref:s,checked:l,onChange:function(){v(l||p?[]:t),x(!l&&!p),h(!1)}})}),(0,a.jsx)("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-6",children:"ID"}),(0,a.jsx)("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-500",children:"Subject"}),(0,a.jsx)("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-500",children:"Status"}),(0,a.jsx)("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-500",children:"Date / Time"}),(0,a.jsx)("th",{scope:"col",className:" text-right mx-auto px-auto ",children:(0,a.jsxs)(c.v,{as:"div",className:"relative inline-block text-right ml-auto bg-white mr-5",children:[(0,a.jsx)("div",{children:(0,a.jsx)(c.v.Button,{className:"inline-flex justify-center w-full ml-auto z-0",children:(0,a.jsx)(m.Z,{className:"-mr-1 ml-auto h-5 w-5","aria-hidden":"true"})})}),(0,a.jsx)(d.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsx)(c.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-30 bg-white border-none",children:(0,a.jsxs)("div",{className:"py-1 z-30 bg-white relative",children:[(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("a",{href:"#",className:u(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"View details"})}}),(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("a",{href:"#",className:u(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Delete"})}})]})})})]})})]})}),(0,a.jsx)("tbody",{className:"di.ide-y di.ide-gray-200 ",children:t.map((function(e){return(0,a.jsxs)("tr",{className:b.includes(e)?"bg-gray-50":void 0,children:[(0,a.jsxs)("td",{className:"relative w-12 pr-6 sm:w-16 sm:pr-8",children:[b.includes(e)&&(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 w-0.5 bg-[#3d897a]"}),(0,a.jsx)("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3d897a] focus:ring-[#3d897a] sm:left-6",value:e.id,checked:b.includes(e),onChange:function(t){return v(t.target.checked?(0,i.Z)(b).concat([e]):b.filter((function(t){return t!==e})))}})]}),(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("div",{className:"font-medium text-gray-900",children:(0,a.jsx)(o(),{href:"/message/".concat(e.id),children:(0,a.jsxs)("a",{children:[" #",e.id]})})})})}),(0,a.jsx)("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:e.Subject}),(0,a.jsx)("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:(0,a.jsx)("span",{className:"".concat("Solved"===e.Status?"text-[#3D897A]  bg-[#3D897A] bg-opacity-25":"text-[#F88700] bg-[#EE6363] bg-opacity-25"," inline-flex rounded-full px-2 text-xs font-semibold leading-5 "),children:String(e.Status)})}),(0,a.jsx)("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:e.date}),(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:(0,a.jsxs)(c.v,{as:"div",className:"relative inline-block text-right ml-auto bg-white",children:[(0,a.jsx)("div",{children:(0,a.jsx)(c.v.Button,{className:"inline-flex justify-center w-full ml-auto z-10 ",children:(0,a.jsx)(m.Z,{className:"-mr-1 ml-auto h-5 w-5","aria-hidden":"true"})})}),(0,a.jsx)(d.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsx)(c.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-30 bg-white border-none focus:outline-none",children:(0,a.jsxs)("div",{className:"py-1",children:[(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("a",{href:"#",className:u(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"View details"})}}),(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("a",{href:"#",className:u(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:"Delete"})}})]})})})]})})]},e.id)}))})]})})})})})}var f=s(14284),p={src:"/_next/static/media/close.9af24f0e.svg",height:20,width:20},h=s(25675),g=s.n(h),b=s(41799),v=s(69396),j=s(5121),y=s(32512),w=s(61900),N=s(83454);function k(e){var t=e.setImageUrl,s=e.imageUrl,r=(0,n.useState)([]),i=r[0],l=r[1],o=(0,y.uI)({multiple:!0,maxSize:5e5,onDrop:function(e){l(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),c=o.getRootProps,d=o.getInputProps;(0,n.useEffect)((function(){var e=N.env.NEXT_PUBLIC_CLOUDINARY_URL,s=N.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;i.length>0&&Promise.all(i.map((function(t){var a=new FormData;return a.append("file",t),a.append("upload_preset",s),j.Z.post(e,a,{headers:{"Content-Type":"multipart/form-data"}})}))).then((function(e){var s=e.map((function(e){return e.data.secure_url}));t(s)})).catch((function(e){console.error("Error uploading files:",e)}))}),[i]);var m=i.map((function(e){return(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(g(),{width:24,height:24,className:"inline-flex border-2 border-gray-100",src:e.preview,alt:e.name})})},e.name)}));return(0,n.useEffect)((function(){return function(){m.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[m]),(0,a.jsxs)("div",{className:"w-full text-center",children:[(0,a.jsxs)("div",(0,v.Z)((0,b.Z)({className:"px-6 pt-5 pb-6 border-2 border-[#CDCFDC] bg-[#F9F9F9] dark:border-gray-600 border-dashed rounded-md cursor-pointer"},c()),{children:[(0,a.jsx)("input",(0,b.Z)({},d())),(0,a.jsx)("span",{className:"mx-auto flex justify-center",children:(0,a.jsx)(w.Z,{className:"text-md text-gray-300 w-[20px]"})}),(0,a.jsx)("p",{className:"text-sm mt-2 border py-2 w-[98px] mx-auto rounded-[8px]",children:"Add files"}),(0,a.jsx)("em",{className:"text-xs text-gray-400",children:"or drag your files here"})]})),(0,a.jsx)("aside",{className:"flex flex-row flex-wrap mt-4",children:s?s.map((function(e,t){return(0,a.jsx)(g(),{width:24,height:24,className:"inline-flex border rounded-md border-gray-100 dark:border-gray-600 p-2",src:e,alt:"product-".concat(t)},t)})):m})]})}var C=s(23508),S=s(5152),F=s.n(S),I=(s(8215),F()((function(){return Promise.all([s.e(937),s.e(167)]).then(s.t.bind(s,71167,23))}),{loadableGenerated:{webpack:function(){return[71167]}},ssr:!1})),P={toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike","blockquote"],[{size:[]}],[{font:[]}],[{align:[]}],[{list:"ordered"},{list:"bullet"}],["link","image"],[{color:[]},{background:[]}]]},E=["header","bold","italic","underline","strike","blockquote","list","bullet","link","color","image","background","align","size","font"],_=function(){var e=(0,n.useState)(""),t=e[0],s=e[1];return(0,a.jsx)("div",{className:"text-editor",children:(0,a.jsx)("div",{className:"editor-toolbar",children:(0,a.jsx)(I,{theme:"snow",modules:P,formats:E,value:t,onChange:function(e,t,a,n){s(e)}})})})};function D(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}function R(e){var t=e.isOpen,s=e.setIsOpen,r=(0,n.useRef)(null),i=(0,n.useState)({}),l=i.imageUrl,o=i.setImageUrl,m=(0,n.useState)(!1),u=m[0],x=m[1],h=(0,n.useState)("Choose Subject"),b=h[0],v=h[1],j=function(e){e.preventDefault(),v(e.target.value),x(!1)};return(0,a.jsx)(d.u.Root,{show:t,as:n.Fragment,children:(0,a.jsxs)(f.V,{as:"div",className:"relative z-10",initialFocus:r,onClose:s,children:[(0,a.jsx)(d.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,a.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,a.jsx)("div",{className:"flex items-end sm:items-center justify-center min-h-full p-2 text-center sm:p-0",children:(0,a.jsx)(d.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)(f.V.Panel,{className:"relative flex flex-col md:w-[600px] md:min-h-[580px] h-auto bg-white rounded-lg drop-shadow-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-6 sm:max-w-lg sm:w-full px-5",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between border-b py-3 w-full content-center",children:[(0,a.jsx)("div",{className:"text-[24px] font-bold",children:"Add New Message"}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:function(){return s(!1)},children:(0,a.jsx)(g(),{src:p,className:"mt-5",alt:"close"})})})]}),(0,a.jsx)("form",{children:(0,a.jsxs)("div",{className:"body-form",children:[(0,a.jsxs)("div",{className:"Subject-Select flex flex-col w-full text-left py-3",children:[(0,a.jsx)("span",{className:"block text-[14px] font-medium text-[#707082] pb-3",children:"Subject"}),(0,a.jsxs)(c.v,{as:"div",className:"relative inline-block text-left",children:[(0,a.jsx)("div",{children:(0,a.jsxs)(c.v.Button,{className:"inline-flex justify-between w-full rounded-[10px] border border-[#CDCFDC] shadow-sm px-4 py-2 bg-[#F9F9F9] text-[12px] text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#3d897a]",onClick:function(){return x(!0)},children:[b,(0,a.jsx)(C.Z,{className:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]})}),u&&(0,a.jsx)(d.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsx)(c.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black z-30 ring-opacity-5 focus:outline-none",children:(0,a.jsxs)("div",{className:"py-1",children:[(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("button",{value:"Complaint",onClick:function(e){return j(e)},className:D(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),children:"Complaint"})}}),(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("button",{value:"Feedback",onClick:function(e){return j(e)},className:D(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),children:"Feedback"})}}),(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("button",{value:"Payment",onClick:function(e){return j(e)},className:D(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),children:"Payment"})}}),(0,a.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,a.jsx)("button",{value:"Other",onClick:function(e){return j(e)},className:D(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"),children:"Other"})}})]})})})]})]}),(0,a.jsxs)("div",{className:"Message-body flex flex-col w-full text-left py-3",children:[(0,a.jsx)("span",{className:"block text-[14px] font-medium text-[#707082] pb-3",children:"Message"}),(0,a.jsx)(_,{placeholder:"Write something..."})]}),(0,a.jsxs)("div",{className:"Message-body flex flex-col w-full text-left py-3 ",children:[(0,a.jsx)("span",{className:"block text-[14px] font-medium text-[#707082] pb-3",children:"Media (optional)"}),(0,a.jsx)("div",{className:" flex-grow scrollbar-hide w-full max-h-full",children:(0,a.jsx)("div",{className:"grid gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-3",children:(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(k,{imageUrl:l,onChange:o})})})})]})]})}),(0,a.jsxs)("div",{className:"px-4 py-3 pb-5 sm:px-5 w-full sm:flex sm:flex-row-reverse mt-auto",children:[(0,a.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-[10px] border border-transparent shadow-sm w-[142px] py-2 bg-[#3D897A] text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a] sm:ml-3 sm:text-sm",onClick:function(){return s(!1)},children:"Submit"}),(0,a.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return s(!1)},ref:r,children:"Cancel"})]})]})})})})]})})}var T=s(15340),O=[{id:1,name:"Recent"},{id:2,name:"Solved"},{id:3,name:"Pending"},{id:4,name:"Old"}];function L(){var e=(0,n.useState)(!1),t=e[0],s=e[1],i=(0,n.useState)(O[0]),l=i[0],o=i[1];return(0,a.jsxs)("div",{className:"px-4 sm:px-6 lg:px-8",children:[(0,a.jsx)("div",{className:"sm:flex sm:items-center",children:(0,a.jsx)("div",{className:"sm:flex-auto",children:(0,a.jsxs)("h1",{className:"text-xl font-semibold text-gray-900",children:["Messages",(0,a.jsxs)("span",{className:"text-[#686868]",children:[" (",null===T.V||void 0===T.V?void 0:T.V.length,") "]})]})})}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap justify-between",children:[(0,a.jsx)("div",{className:"mt-4 sm:mt-8 flex justify-between",children:(0,a.jsx)("div",{className:"flex gap-2 items-center",children:(0,a.jsx)(r.Z,{items:O,selected:l,setSelected:o})})}),(0,a.jsx)("div",{className:"flex m-auto sm:m-0 mt-3 ",children:(0,a.jsx)("button",{onClick:function(){return s(!0)},type:"button",className:"mt-4 sm:mt-8 inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2",children:"+ Add"})})]}),(0,a.jsx)("div",{className:"table-auto mt-8",children:(0,a.jsx)(x,{MessagesList:T.V})}),(0,a.jsx)(R,{isOpen:t,setIsOpen:s})]})}},15340:function(e,t,s){"use strict";s.d(t,{V:function(){return a}});var a=[{id:"545fd",Subject:"Complaint",Status:"Solved",date:"25/5/2022 - 11:18 PM",Feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam elit a elementum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu justo quis mi dapibus fermentum. In posuere sollicitudin imperdiet.",image:"/images/Screenshot1.png"},{id:"629re",Subject:"Complaint",Status:"Solved",date:"25/5/2022 - 11:18 PM",Feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam elit a elementum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu justo quis mi dapibus fermentum. In posuere sollicitudin imperdiet.",image:"/images/Screenshot1.png"},{id:"150ba",Subject:"Complaint",Status:"Pending",date:"25/5/2022 - 11:18 PM",Feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam elit a elementum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu justo quis mi dapibus fermentum. In posuere sollicitudin imperdiet.",image:"/images/Screenshot1.png"}]}},function(e){e.O(0,[876,303,774,888,179],(function(){return t=74186,e(e.s=t);var t}));var t=e.O();_N_E=t}]);