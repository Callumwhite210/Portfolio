(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var i=a(2),c=a(0),n=a.n(c),l=a(20),s=a.n(l),r=(a(53),a(8)),o=a(11),h=a(10),j=a(9),m=a(42),d=a(21),b=a(6),u=a(24),x=a(47),p=(a(54),a(27)),O=a(26),g=a(39);var f=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)(m.a,{fluid:!0,children:Object(i.jsxs)(O.a,{className:"justify-content-between p-3 text-light",children:[Object(i.jsx)(p.a,{className:"p-0",md:3,sm:6,children:"Callum White"}),Object(i.jsx)(p.a,{md:1,sm:6,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"https://github.com/Callumwhite210",target:"_blank",children:Object(i.jsx)(g.a,{className:"icon",size:"60px"})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/callum-white-2378631b1/",target:"_blank",children:Object(i.jsx)(g.b,{className:"icon",size:"60px"})})]})}),Object(i.jsx)(p.a,{className:"p-0 d-flex justify-content-end text-light",md:3,children:"Copywrite"})]})})})};var y=function(e){return Object(i.jsx)(m.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-center text-light about",children:Object(i.jsx)(p.a,{md:8,children:e.children})})})},k=a(43);var v=function(e){return Object(i.jsx)(k.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(i.jsx)(m.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-center py-5",children:Object(i.jsxs)(p.a,{md:8,sm:12,children:[e.title&&Object(i.jsx)("h1",{className:"display-1 font-weight-bolder text-light",children:e.title}),e.subTitle&&Object(i.jsx)("h3",{className:"display-4 font-weight-light text-light",children:e.subTitle}),e.text&&Object(i.jsx)("h3",{className:"lead font-weight-light text-light",children:e.text})]})})})})},w=a.p+"static/media/Me.49704e7b.jpg";var C=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{title:e.title}),Object(i.jsxs)(y,{children:[Object(i.jsx)("img",{className:"avatar",src:w,alt:"Avatar"}),Object(i.jsx)("p",{children:"Hi! My name is Callum White and I am an aspiring web developer currently enrolled in university of Adelaide's amazing coding bootcamp."}),Object(i.jsx)("p",{children:"I have found when creating this series of webpages that this was a pretty big stepping stone in the write direction and I can\u2019t wait to see "}),Object(i.jsx)("p",{children:"what the future holds for my education."}),Object(i.jsx)("p",{children:"Email: callumwhite210@gmail.com "})]})]})},N=a(65),T=a(64),S=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={name:"",email:"",message:"",disabled:!1,emailsent:null},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{title:this.props.title}),Object(i.jsx)(y,{children:Object(i.jsxs)(N.a,{children:[Object(i.jsxs)(N.a.Group,{children:[Object(i.jsx)(N.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(i.jsx)(N.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(i.jsxs)(N.a.Group,{children:[Object(i.jsx)(N.a.Label,{htmlFor:"email",children:"Email"}),Object(i.jsx)(N.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(i.jsxs)(N.a.Group,{children:[Object(i.jsx)(N.a.Label,{htmlFor:"message",children:"Message"}),Object(i.jsx)(N.a.Control,{id:"message",name:"message",as:"textarea",rows:"4",value:this.state.message,onChange:this.handleChange})]}),Object(i.jsx)(T.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"})]})})]})}}]),a}(n.a.Component),F=a(19),I=a.p+"static/media/Madnotes.c60005ee.png",M=a.p+"static/media/memorygame.825d97a0.png",E=a.p+"static/media/teamgen.f97aa09c.png",G=a.p+"static/media/budgettracker.42691c64.png",L=a.p+"static/media/weatherapp.42c45a6f.png",P=a.p+"static/media/employeedirectory.f0f2ea17.png",W=a(40);var A=function(e){var t=Object(W.b)({opacity:1,from:{opacity:0}});return Object(i.jsxs)(W.a.div,{className:"my-card-info",style:t,children:[Object(i.jsx)("p",{className:"my-card-title text-light",children:e.title}),Object(i.jsx)("p",{className:"my-card-subtitle text-light",children:e.subtitle}),Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var B=function(e){return Object(i.jsxs)("div",{className:"d-inline-block my-card",onClick:function(t){return e.click(e.item)},children:[Object(i.jsx)("img",{className:"my-card-img",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(i.jsx)(A,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},z=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).handleCardClick=function(e){var t=Object(F.a)(c.state.items);t[e].selected=!t[e].selected,t.forEach((function(t){t.id!==e&&(t.selected=!1)})),c.setState({items:t})},c.makeItems=function(e){return e.map((function(e){return Object(i.jsx)(B,{item:e,click:function(t){return c.handleCardClick(e.id,t)}},e.id)}))},c.state={items:[{id:0,title:"Madnotes",subTitle:"Vent a little",imgSrc:I,link:"https://github.com/Callumwhite210/Project-2",selected:!1},{id:1,title:"Budget Tracker",subTitle:"Keep track of your money!",imgSrc:G,link:"https://github.com/Callumwhite210/homework18",selected:!1},{id:2,title:"Weather Dashboard",subTitle:"Check the weather",imgSrc:L,link:"https://github.com/Callumwhite210/homeworkweek6",selected:!1},{id:3,title:"Employee Directory",subTitle:"Search your employees",imgSrc:P,link:"https://github.com/Callumwhite210/homeworkweek19",selected:!1},{id:4,title:"Team Generator",subTitle:"Generate your own team template",imgSrc:E,link:"https://github.com/Callumwhite210/homeworkweek10",selected:!1},{id:5,title:"Memory Game",subTitle:"Test your memory",imgSrc:M,link:"https://github.com/sp-amm/project1memorygame",selected:!1}]},c}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)(m.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(n.a.Component);var D=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{title:e.title}),Object(i.jsx)(z,{})]})},_=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={title:"Callum White",headerLinks:[{title:"About",path:"/"},{title:"Portfolio",path:"/portfolio"},{title:"Contact",path:"/contact"}],home:{title:"About Me"},portfolio:{title:"Portfolio",subTitle:"Search through my Work!"},contact:{title:"Contact",subTitle:"Send me an Email"}},i}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsx)(d.a,{children:Object(i.jsxs)(m.a,{className:"p-0",fluid:!0,children:[Object(i.jsxs)(u.a,{bg:"transparant",expand:"lg",children:[Object(i.jsx)(u.a.Brand,{className:"text-light",children:" Callum White "}),Object(i.jsx)(u.a.Toggle,{className:"border-0 dropdown","aria-controls":"navbar-toggle"}),Object(i.jsx)(u.a.Collapse,{id:"navbar-toggle",children:Object(i.jsxs)(x.a,{className:"ml-auto",children:[Object(i.jsx)(d.b,{className:"nav-link text-light",to:"/",children:"About"}),Object(i.jsx)(d.b,{className:"nav-link text-light",to:"/portfolio",children:"Portfolio"}),Object(i.jsx)(d.b,{className:"nav-link text-light",to:"/contact",children:"Contact"})]})})]}),Object(i.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(C,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(i.jsx)(b.a,{path:"/portfolio",exact:!0,render:function(){return Object(i.jsx)(D,{title:e.state.portfolio.title})}}),Object(i.jsx)(b.a,{path:"/contact",exact:!0,render:function(){return Object(i.jsx)(S,{title:e.state.contact.title})}}),Object(i.jsx)(f,{})]})})}}]),a}(n.a.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),i(e),c(e),n(e),l(e)}))};a(61);s.a.render(Object(i.jsx)(_,{}),document.getElementById("root")),J()}},[[62,1,2]]]);
//# sourceMappingURL=main.0b925d0b.chunk.js.map