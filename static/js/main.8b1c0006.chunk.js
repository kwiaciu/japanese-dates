(this["webpackJsonpreact-cv"]=this["webpackJsonpreact-cv"]||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),i=(t(80),t(15)),o=(t(81),t(27)),m=t(108),s=t(137),u=t(134),d=t(156),E=t(136),p=t(135),g=t(157),f=t(133),b=Object(n.createContext)(),y=t(132),h=Object(y.a)((function(){return{root:{width:"100%"},fill:{width:"100%"},name:{fontSize:"1.6rem"},label:{fontSize:"1.2rem"},weight:{fontWeight:100},header:{paddingTop:"1.5rem",fontSize:"1.2rem"},pinkColor:{color:"hotpink"}}})),v=function(e){var a=e.profilesArray.map((function(e,a){return r.a.createElement(d.a,{key:a,dense:!0},r.a.createElement(f.a,{color:"primary",href:e.url},e.network))}));return r.a.createElement(r.a.Fragment,null,a)},x=function(){var e=Object(n.useContext)(b),a=e.data[e.language].basics,t=h();return r.a.createElement(u.a,{className:t.root},r.a.createElement(d.a,{divider:!0},r.a.createElement(p.a,{style:{paddingRight:"1rem"}},r.a.createElement(g.a,{src:"",style:{height:"6rem",width:"6rem"}})),console.log(a.name),r.a.createElement(E.a,{classes:{primary:t.name,secondary:t.label},primary:a.name,secondary:a.label})),r.a.createElement(d.a,{dense:!0},r.a.createElement(E.a,{primary:"About me",secondary:a.summary})),r.a.createElement(d.a,{dense:!0},r.a.createElement(f.a,{fontWeight:"300",href:a.website},a.website)),r.a.createElement(d.a,{dense:!0},r.a.createElement(E.a,{primary:"E-mail:",secondary:a.email})),r.a.createElement(d.a,{dense:!0},r.a.createElement(E.a,{primary:"Phone",secondary:a.phone})),r.a.createElement(v,{profilesArray:a.profiles}))},j=t(138),O=function(){var e=h(),a=Object(n.useContext)(b),t=a.data[a.language].languages.map((function(a,t){return r.a.createElement(u.a,{key:t},r.a.createElement(d.a,null,r.a.createElement(o.a,null,a.language)),r.a.createElement(d.a,{className:e.padBot},r.a.createElement(s.a,{container:!0,justify:"space-between",spacing:1,wrap:"nowrap"},r.a.createElement(s.a,null,r.a.createElement(j.a,{orientation:"vertical"})),a.scale.map((function(t,n){var l;return l=n<=a.fluency?r.a.createElement(s.a,{item:!0,className:e.borderColor},r.a.createElement(o.a,{color:"primary"},t)):r.a.createElement(s.a,{item:!0,className:e.borderColor},r.a.createElement(o.a,{className:e.weight},t)),r.a.createElement(r.a.Fragment,{key:n},l,r.a.createElement(s.a,null,r.a.createElement(j.a,{orientation:"vertical"})))})))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:e.root},t))},k=t(49),w=t.n(k),C=t(45),N=function(){var e=Object(C.a)(),a=Object(n.useRef)(),t=Object(n.useContext)(b),l=t.data[t.language].skills.map((function(e){return e.name})).filter((function(e){return"Others"!==e})),c=t.data[t.language].skills.map((function(e){return e.level})).filter((function(e){return!!e}));return console.log(l),console.log(c),Object(n.useEffect)((function(){console.log(e.palette.main),w.a.defaults.global.defaultFontColor=e.palette.text.primary,w.a.defaults.global.defaultFontFamily="Roboto",new w.a(a.current,{type:"radar",options:{responsive:!0,scale:{angleLines:{display:!1},ticks:{suggestedMin:0,suggestedMax:70}},legend:{position:"bottom",fontColor:e.palette.primary.contrastText},title:{fontColor:e.palette.primary.contrastText},maintainAspectRatio:!0,aspectRatio:1,tooltips:{callbacks:{title:function(e,a){return a.labels[e[0].index]},label:function(e,a){return a.datasets[0].data[e.index]+"/100"}}}},data:{labels:l,datasets:[{label:"Current skill levels",data:c,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main,fill:!1}]}},[e])})),r.a.createElement("canvas",{style:{width:"100%"},ref:a})},S=t(153),D=function(){var e=h();return r.a.createElement(m.a,null,r.a.createElement(s.a,{container:!0,spacing:5},r.a.createElement(s.a,{item:!0,xs:12,md:4,align:"center"},r.a.createElement(x,null)),r.a.createElement(s.a,{item:!0,xs:12,md:4,align:"center"},r.a.createElement(o.a,{className:e.header,variantMapping:{h3:"h3"}},"Languages"),r.a.createElement(O,null)),r.a.createElement(s.a,{item:!0,xs:12,md:4,align:"center"},r.a.createElement(o.a,{className:e.header,variantMapping:{h3:"h3"}},"Skills"),r.a.createElement(S.a,{style:{margin:"1rem"}},r.a.createElement(N,null)))))},M=t(146),F=t(154),U=t(147),I=t(63),P=t.n(I),z=t(65),B=t.n(z),L=t(64),R=t.n(L),W=t(139),A=t(140),T=t(141),J=t(158),_=t(142),q=t(143),$=function(e){return r.a.createElement(W.a,{className:"card"},r.a.createElement(A.a,{component:"img",alt:"Screenshot of project",height:"100",image:"/cv/"+e.imgUrl,title:e.title}),r.a.createElement(T.a,null,r.a.createElement(o.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"p"},e.description),r.a.createElement(s.a,{container:!0,justify:"space-evenly",flexwrap:"wrap"},e.keywords.map((function(e,a){return r.a.createElement(s.a,{style:{margin:"0.2rem"},key:a,item:!0},r.a.createElement(J.a,{label:e}))})))),r.a.createElement(_.a,{style:{"justify-content":"flex-end"}},r.a.createElement(q.a,{size:"small",color:"primary",href:e.demoUrl,target:"_blank",disabled:""===e.demoUrl},"Demo"),r.a.createElement(q.a,{size:"small",color:"primary",href:e.codeUrl,target:"_blank"},"Code")))},G=function(e){var a=Object(n.useContext)(b);return r.a.createElement("div",{style:{padding:10}},r.a.createElement(s.a,{container:!0,spacing:5},a.data[a.language].projects.map((function(e,a){return r.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4,align:"center",key:a},r.a.createElement($,{title:e.title,description:e.summary,imgUrl:e.img,demoUrl:e.demo,codeUrl:e.code,keywords:e.keywords}))}))))},H=t(25),K=function(e){var a=e.children,t=e.value,n=e.index,l=Object(H.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n)},l),t===n&&r.a.createElement(S.a,{p:3},a))},Q=t(62),V=t.n(Q),X=t(155),Y=t(144),Z=t(145),ee=t(48),ae=t.n(ee),te=function(e){if("now"===e)return"now";return new Date(e).toLocaleDateString("en-EN",{year:"numeric",month:"long"})},ne=Object(y.a)({summary:{flexDirection:"column",alignItems:"flex-start"}}),re=function(e){e.children;var a=e.value,t=e.index,l=Object(H.a)(e,["children","value","index"]),c=ne(),i=Object(n.useContext)(b);return r.a.createElement("div",Object.assign({style:{padding:20},role:"tabpanel",hidden:a!==t,id:"full-width-tabpanel-".concat(t)},l),r.a.createElement(s.a,{container:!0,spacing:10},a===t&&i.data[i.language].education.map((function(e,a){return r.a.createElement(s.a,{item:!0,xs:12,align:"center",key:a},r.a.createElement(X.a,null,r.a.createElement(Y.a,{classes:{content:c.summary},expandIcon:r.a.createElement(ae.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(o.a,{className:"",variant:"overline"},te(e.startDate)+" - "+te(e.endDate)),r.a.createElement(o.a,{className:"",variant:"h5"},e.area),r.a.createElement(o.a,{className:"",variant:"subtitle1"},e.studyType)),r.a.createElement(Z.a,{className:c.summary},r.a.createElement(o.a,{variant:"overline"},e.institution),r.a.createElement(o.a,{variant:"body1",align:"justify"},e.desc),r.a.createElement(u.a,null,e.courses.map((function(e,a){return r.a.createElement(d.a,{key:a},e)}))))))}))))},le=Object(y.a)({summary:{flexDirection:"column",alignItems:"flex-start"},expanded:{marginBottom:0}}),ce=function(e){e.children;var a=e.value,t=e.index,l=Object(H.a)(e,["children","value","index"]),c=le(),i=Object(n.useContext)(b);return r.a.createElement("div",Object.assign({style:{padding:20},role:"tabpanel",hidden:a!==t,id:"full-width-tabpanel-".concat(t)},l),r.a.createElement(s.a,{container:!0,spacing:10},a===t&&i.data[i.language].work.map((function(e,a){return r.a.createElement(s.a,{item:!0,xs:12,align:"center",key:a},r.a.createElement(X.a,null,r.a.createElement(Y.a,{classes:{content:c.summary},expandIcon:r.a.createElement(ae.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(o.a,{className:"",variant:"overline"},te(e.startDate)+" - "+te(e.endDate)),r.a.createElement(o.a,{className:"",variant:"h5"},e.position),r.a.createElement(o.a,{className:"",variant:"subtitle1"},e.company)),r.a.createElement(Z.a,{className:c.summary},r.a.createElement(o.a,{variant:"body1",align:"justify"},e.summary),r.a.createElement(u.a,null,e.highlights.map((function(e,a){return r.a.createElement(d.a,{key:a},e)}))))))}))))},ie=function(){var e=Object(n.useContext)(b),a=h(),t=Object(C.a)(),l=Object(n.useState)(0),c=Object(i.a)(l,2),o=c[0],s=c[1],u=["#e91e63","#0097a7","#2196f3","#fdd835"];return r.a.createElement(M.a,{maxWidth:"xl",style:{padding:0}},r.a.createElement(m.a,{square:!0,className:a.root},r.a.createElement(F.a,{value:o,onChange:function(a,t){s(t),e.setPrimaryColor(u[t])},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(U.a,{icon:r.a.createElement(P.a,null),label:"Projects"}),r.a.createElement(U.a,{icon:r.a.createElement(R.a,null),label:"Education"}),r.a.createElement(U.a,{icon:r.a.createElement(B.a,null),label:"Experience"})),r.a.createElement(V.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:o,onChangeIndex:function(a){s(a),e.setPrimaryColor(u[a])}},r.a.createElement(K,{value:o,index:0,dir:t.direction},r.a.createElement(G,null)),r.a.createElement(K,{value:o,index:1,dir:t.direction},r.a.createElement(re,null)),r.a.createElement(K,{value:o,index:2,dir:t.direction},r.a.createElement(ce,null)))))},oe=t(150),me=t(152),se=t(151),ue=t(66),de=t(148),Ee=t(149),pe=t(159),ge=function(){var e=Object(n.useContext)(b);return r.a.createElement(de.a,{row:!0},r.a.createElement(Ee.a,{control:r.a.createElement(pe.a,{checked:e.darkMode,onChange:function(a){e.setDarkMode(a.target.checked)},name:"dark"}),label:"Dark mode"}))};var fe=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),m=o[0],u=o[1],d=Object(n.useState)({}),E=Object(i.a)(d,2),p=E[0],g=E[1],f=Object(n.useState)("en"),y=Object(i.a)(f,2),h=y[0],v=y[1],x=Object(n.useState)(!1),j=Object(i.a)(x,2),O=j[0],k=j[1],w=Object(n.useState)("#e91e63"),C=Object(i.a)(w,2),N=C[0],S=C[1],F=function(e,a){return Object(n.useMemo)((function(){return Object(ue.a)({palette:{type:e?"dark":"light",primary:{main:a},secondary:{main:"#2962ff"},tonalOffset:.2}})}),[e,a])}(O,N),U=Object(oe.a)("(prefers-color-scheme: dark)");return Object(n.useEffect)((function(){k(U),fetch("/cv/db.json").then((function(e){return e.json()})).then((function(e){g(e),u(!0)}),(function(e){l(e),u(!0)}))}),[U]),t?r.a.createElement("div",null,"Error: ",t.message):m?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.Provider,{value:{data:p,language:h,darkMode:O,setDarkMode:k,setLanguage:v,setPrimaryColor:S}},r.a.createElement(se.a,{theme:F},r.a.createElement(me.a,null),r.a.createElement(M.a,{fixed:!0},r.a.createElement(s.a,{container:!0,spacing:5},r.a.createElement(s.a,{item:!0},r.a.createElement(D,null)),r.a.createElement(s.a,{item:!0,style:{width:"100%"}},r.a.createElement(ie,null))),r.a.createElement(ge,null))))):r.a.createElement("div",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,a,t){e.exports=t(105)},80:function(e,a,t){},81:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.8b1c0006.chunk.js.map