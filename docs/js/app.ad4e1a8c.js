(function(e){function t(t){for(var s,a,o=t[0],r=t[1],l=t[2],d=0,h=[];d<o.length;d++)a=o[d],n[a]&&h.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);u&&u(t);while(h.length)h.shift()();return c.push.apply(c,l||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],s=!0,o=1;o<i.length;o++){var r=i[o];0!==n[r]&&(s=!1)}s&&(c.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},n={app:0},c=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/resume/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=r;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0361":function(e,t,i){},"119d":function(e,t,i){"use strict";var s=i("4f72"),n=i.n(s);n.a},"12d7":function(e,t,i){},"24cc":function(e,t,i){},"3d2b":function(e,t,i){"use strict";var s=i("f3c8"),n=i.n(s);n.a},"3d6f":function(e,t,i){},4815:function(e,t,i){"use strict";var s=i("ec85"),n=i.n(s);n.a},"4ee8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACSklEQVRoQ+1XvYoUQRD+au9EOKN9EJ9BhOkNjuMwEAzEQCM10uwUA8000kijE0TlcBVFPMXratj3cqFL+tiRubmZnemfnWWlJ52umu+vih7Chj+04fiRCazbwexAdiBSgRyhSAGjy7MD0RJGNvg/HWDmewAuK6XuRwoUXT6bzbbn8/nRaDQ6LIrid73hOQe01neJ6M3i4Cul1MNoFIENptPp1ng8/gpgX0T+ENG+Uuqk2u4MAWa+DeBt7XtrISEiI2PMNwe+xNNE4gwBrfUtInoHnLvkDUrCgWfmT0R0vSpmJwF3eN0kfMA7vI1baF0kRISYedpH+dKZ1jVqjLkhIkdDxcmBN8a8B3CzKzatQ1xfFkORCAXfGqEqkSFIMPMHX+U7I1QnYa39SERbNZeeK6UeBa750zJmPgRwxyc2vSNUI3HNWvslJYlY8L0itCoSKcB7E3AFxphoJ5j5NQB33/r3tF0VuuIZdBt1JETkM4Bt35lICT7IgRKw1nqXiL77kGDmlwAepFDeawu12biExFOl1LNq3SrARznQ5YSIHEwmkxeLVZlc+SQOlE2MMXsi8qPBqSciskNEjxve7SmlfnYNadf7oCFuamqMKUTkF4ALyz4aum3aeiYjsFixS0mkBp9kBurKOCestcdEdDHlthnEgcpgXwFwUpJYhfJJh7hJHa31KQn3P9H0M941nH3fJ52BhjhdBXCpKIrjvoB8z62UgC+YkPOZQIhqKWuyAynVDOmVHQhRLWVNdiClmiG9sgMhqqWs2XgH/gIvnVtAn72kpgAAAABJRU5ErkJggg=="},"4f72":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"},on:{wheel:e.changeMenu,touchstart:e.touchStart,touchend:e.touchEnd}},[i("transition-group",{staticClass:"main",attrs:{name:e.menuSlide,tag:"div"}},[0===e.selectedMenu?i("projects",{key:"projects",attrs:{projects:e.resumeData.projects,slideIn:e.slideIn},on:{"show-project":e.showProject}}):e._e(),1===e.selectedMenu?i("introduction",{key:"introduction",attrs:{intro:e.resumeData.intro}}):e._e(),2===e.selectedMenu?i("experience",{key:"experience",attrs:{experiences:e.resumeData.experiences},on:{overheight:e.overHeight}}):e._e(),3===e.selectedMenu?i("contact",{key:"contact",attrs:{contacts:e.resumeData.contacts}}):e._e()],1),i("div",{staticClass:"sidebar"},[i("span",{staticClass:"text"},[e._v(e._s(e.resumeData.menu[e.selectedMenu].eng.toUpperCase()))])]),i("v-header",{attrs:{state:e.state,menu:e.resumeData.menu},on:{"go-to-page":e.goToPage}}),i("project",{attrs:{projects:e.resumeData.projects,isProjectShowed:e.isProjectShowed,"project-index":e.projectIndex},on:{"hide-project":e.hideProject}})],1)},c=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"c-header"},[i("div",{staticClass:"title"},[i("h1",{class:{extend:e.state}},[e._v("我的简历")]),i("p",[e._v("MY RESUME")])]),i("div",{staticClass:"menu-button",class:{show:e.isMenuShowed},on:{click:e.toggleMenu}},[i("span",{staticClass:"line"}),i("span",{staticClass:"line"}),i("span",{staticClass:"text"},[e._v("Menu")])]),i("transition",{attrs:{name:"pull-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isMenuShowed,expression:"isMenuShowed"}],staticClass:"menu-wrapper"},[i("ul",{staticClass:"menu"},e._l(e.menu,function(t,s){return i("li",{key:s,staticClass:"item",on:{click:function(t){e.goToPage(s)}}},[i("transition",{attrs:{name:"zoom-right"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isMenuShowed,expression:"isMenuShowed"}],staticClass:"eng"},[i("div",{staticClass:"text"},[e._v(e._s(t.eng))]),i("div",{staticClass:"cover"})])]),i("transition",{attrs:{name:"chi-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isMenuShowed,expression:"isMenuShowed"}],staticClass:"chi"},[e._v(e._s(t.chi))])])],1)}),0)])])],1)},o=[],r={name:"vheader",props:{state:{type:Boolean,default:!1},menu:{type:Array}},data:function(){return{isMenuShowed:!1}},methods:{toggleMenu:function(){this.isMenuShowed=!this.isMenuShowed},goToPage:function(e){this.isMenuShowed=!1,this.$emit("go-to-page",e)}}},l=r,u=(i("5f80"),i("2877")),d=Object(u["a"])(l,a,o,!1,null,null,null);d.options.__file="vheader.vue";var h=d.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"projects"},[i("ul",{staticClass:"project-overview",class:{"slide-in":e.slideIn}},e._l(e.projects,function(t,s){return i("li",{key:s,staticClass:"item",class:[{hovering:s===e.hoverItemIndex},{"slide-in":e.slideIn}],on:{mouseenter:function(t){e.hoverAbove(s)},mouseleave:e.hoverLeave,click:function(t){e.showProject(s)}}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.imgPath+t.img+"_160.jpg",srcset:e.imgPath+t.img+"_160.jpg 160w,"+e.imgPath+t.img+"_240.jpg 240w,"+e.imgPath+t.img+"_360.jpg 360w,"+e.imgPath+t.img+"_480.jpg 480w,"+e.imgPath+t.img+"_640.jpg 640w",sizes:"(max-width: 640px) and (max-aspect-ratio: 1/1) 64vw,\n                    (min-aspect-ratio: 12/5) calc(65vh * (375 / 667)),\n                    16vw"}})]),i("dl",{staticClass:"text"},[i("dt",{staticClass:"no"},[e._v("0"+e._s(s+1))]),i("dd",{staticClass:"title"},[e._v(e._s(t.title))])])])}),0),i("scroll-down")],1)},m=[],f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"scroll-down-icon"},[s("div",{staticClass:"text"},[e._v("上下滚动切换页面")]),s("div",{staticClass:"arrow"},[s("img",{attrs:{src:i("4ee8"),width:"16"}})]),s("div",{staticClass:"arrow"},[s("img",{attrs:{src:i("4ee8"),width:"16"}})])])}],g={name:"scrollDown"},w=g,_=(i("806e"),Object(u["a"])(w,f,v,!1,null,null,null));_.options.__file="scrollDown.vue";var b=_.exports,j={name:"Projects",components:{"scroll-down":b},props:{slideIn:{type:Boolean,default:!1},projects:{type:Array}},data:function(){return{hoverItemIndex:-1,i:-1,imgPath:"/resume/static/img/"}},methods:{hoverAbove:function(e){this.hoverItemIndex=e},hoverLeave:function(){this.hoverItemIndex=-1},showProject:function(e){this.$emit("show-project",e)}}},C=j,P=(i("119d"),Object(u["a"])(C,p,m,!1,null,null,null));P.options.__file="Projects.vue";var x=P.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"introduction"},[i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[e._v(e._s(e.intro.name))]),i("div",{staticClass:"first-name"},[e._v(e._s(e.intro.name.substring(0,1)))]),i("div",{staticClass:"other-info"},e._l(e.intro.info,function(t,s){return i("p",{key:s},[e._v(e._s(t))])}),0)]),i("div",{staticClass:"avatar"},[i("img",{attrs:{src:e.imgPath+"avatar_320.jpg",srcset:e.imgPath+"avatar_320.jpg 320w,\n                   "+e.imgPath+"avatar_480.jpg 480w,\n                   "+e.imgPath+"avatar_640.jpg 640w,\n                   "+e.imgPath+"avatar_700.jpg 700w",sizes:"(max-aspect-ratio: 1/1) calc(35vh * 700 / 906), 25vw"}})]),i("scroll-down")],1)},y=[],M={name:"Introduction",props:{intro:{type:Object}},data:function(){return{imgPath:"/resume/static/img/"}},components:{"scroll-down":b}},S=M,T=(i("3d2b"),Object(u["a"])(S,I,y,!1,null,null,null));T.options.__file="Introduction.vue";var k=T.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"experience"},[i("div",{ref:"exContent",staticClass:"experience-content",on:{touchstart:function(t){return t.stopPropagation(),e.touchStart(t)},touchend:e.touchEnd}},e._l(e.experiences,function(t,s){return i("div",{key:s,staticClass:"experience-item"},[i("div",{staticClass:"item-index"},[e._v("00"+e._s(s+1)+"/003")]),i("div",{staticClass:"item-content"},[i("div",{staticClass:"date"},[e._v(e._s(t.dateFrom)+" 到 "+e._s(t.dateTo))]),i("div",{staticClass:"title"},[e._v(e._s(t.title))]),i("div",{staticClass:"desc"},[e._v(e._s(t.desc))])])])}),0),i("scroll-down")],1)},A=[],O={name:"Experience",props:{experiences:{type:Array}},components:{"scroll-down":b},data:function(){return{resizeTimer:!1,contentScrollTop:0,touchY:0}},mounted:function(){var e=this;this.$nextTick(function(){e.checkContentHeight(),window.onresize=function(){e.resizeTimer||(e.resizeTimer=!0,e.checkContentHeight(),setTimeout(function(){e.resizeTimer=!1},500))},e.$refs.exContent.addEventListener("scroll",e.checkScrollEnd,!0)})},methods:{checkContentHeight:function(){var e=document.getElementsByClassName("experience-content")[0];this.$emit("overheight",e.scrollHeight>e.clientHeight)},checkScrollEnd:function(e){var t=this,i=e.target;i.scrollTop+i.clientHeight+10<i.scrollHeight||setTimeout(function(){t.$emit("overheight",!1)},1e3)},touchStart:function(e){this.touchY=e.changedTouches[0].pageY},touchEnd:function(e){var t=e.changedTouches[0].pageY-this.touchY;e.target.scrollTop=e.target.scrollTop-t}}},H=O,B=(i("81e3"),Object(u["a"])(H,E,A,!1,null,null,null));B.options.__file="Experience.vue";var N=B.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"pop-out"}},[e.isProjectShowed?i("div",{staticClass:"project-detail",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)},wheel:e.changePic}},[i("div",{staticClass:"close",on:{click:e.close}},[i("div",{staticClass:"line"}),i("div",{staticClass:"line"})]),e.projects[e.projectIndex]?i("div",{staticClass:"gallery",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[i("div",{staticClass:"title"},[e._v(e._s(e.projects[e.projectIndex].title))]),i("div",{staticClass:"gallery-content"},[i("div",{staticClass:"pic-nav"},[e.hasMobilePic?i("span",{staticClass:"mobile",class:{hover:e.isMobilePicShowing},on:{click:function(t){e.showMobile(!0)}}},[e._v("移动端样式")]):e._e(),e.hasMobilePic&&e.hasPcPic?i("span",{staticClass:"slash"},[e._v("/")]):e._e(),e.hasPcPic?i("span",{staticClass:"pc",class:{hover:!e.isMobilePicShowing},on:{click:function(t){e.showMobile(!1)}}},[e._v("客户端样式")]):e._e()]),e.isMobilePicShowing?i("transition-group",{staticClass:"display-mobile display",attrs:{name:"change-pic",tag:"div"}},e._l(e.galleryPics(e.picTypes.MOBILE).filter(function(t,i){return i===e.showedItemIdx}),function(t){return i("a",{key:t.id,staticClass:"display-item",attrs:{href:e.imgPath+t.pic+"_938.jpg",target:"_blank"}},[i("img",{attrs:{src:e.imgPath+t.pic+"_480.jpg",srcset:e.imgPath+t.pic+"_480.jpg 480w,"+e.imgPath+t.pic+"_640.jpg 640w,"+e.imgPath+t.pic+"_720.jpg 720w,"+e.imgPath+t.pic+"_938.jpg 938w",sizes:"calc(70vh * 375 / 667 - 2px)"}})])}),0):i("transition-group",{staticClass:"display-pc display",attrs:{name:"change-pic",tag:"div"}},e._l(e.galleryPics(e.picTypes.PC).filter(function(t,i){return i===e.showedItemIdx}),function(t){return i("a",{key:t.id,staticClass:"display-item",attrs:{href:e.imgPath+t.pic+"_1920.jpg",target:"_blank"}},[i("img",{attrs:{src:e.imgPath+t.pic+"_480.jpg",srcset:e.imgPath+t.pic+"_480.jpg 480w,"+e.imgPath+t.pic+"_720.jpg 720w,"+e.imgPath+t.pic+"_960.jpg 960w,"+e.imgPath+t.pic+"_1280.jpg 1280w,"+e.imgPath+t.pic+"_1536.jpg 1536w,"+e.imgPath+t.pic+"_1728.jpg 1728w,"+e.imgPath+t.pic+"_1920.jpg 1920w",sizes:"(max-aspect-ratio: 1/1) calc(100vw - 2px),\n                        (min-aspect-ratio: 8/5) calc(60vw - 2px),\n                        (min-aspect-ratio: 12/5) calc(45vw - 2px),\n                        calc(70vw - 2px)"}})])}),0),i("div",{staticClass:"controls",class:{"pc-pic":!e.isMobilePicShowing}},[i("span",{staticClass:"prev",on:{click:e.prev}},[e._v("PREV")]),i("span",{staticClass:"slash"},[e._v("/")]),i("span",{staticClass:"next",on:{click:e.next}},[e._v("NEXT")])])],1),i("ul",{staticClass:"tab"},e._l(e.galleryPics(e.picType).length,function(t){return i("li",{key:t,staticClass:"item",class:{chosen:t-1===e.showedItemIdx},on:{click:function(i){e.showItem(t)}}})}),0),i("div",{staticClass:"info"},[i("a",{attrs:{href:e.infos.demo,target:"_blank"}},[e._v("DEMO")]),i("a",{attrs:{href:e.infos.github,target:"_blank"}},[e._v("GITHUB")])])]):e._e()]):e._e()])},z=[],R=(i("c5f6"),{name:"Project",props:{projectIndex:{type:Number,default:-1},isProjectShowed:{type:Boolean,default:!1},projects:{type:Array}},data:function(){return{showedItemIdx:0,hasMobilePic:!0,hasPcPic:!1,isMobilePicShowing:!0,picTypes:{MOBILE:"mobile",PC:"pc"},imgPath:"/resume/static/img/"}},computed:{infos:function(){return this.projects[this.projectIndex].info},pics:function(){return this.projects[this.projectIndex].pics},picType:function(){return this.isMobilePicShowing?this.picTypes.MOBILE:this.picTypes.PC}},watch:{isProjectShowed:function(e){e&&(this.hasMobilePic=!!this.pics.mobile,this.hasPcPic=!!this.pics.pc,this.isMobilePicShowing=this.hasMobilePic)}},methods:{galleryPics:function(e){return this.pics[e]?this.pics[e]:[]},close:function(){this.$emit("hide-project"),this.showedItemIdx=0},showItem:function(e){this.showedItemIdx=e-1},prev:function(){var e=this.pics[this.picType].length;this.showedItemIdx=(this.showedItemIdx+e-1)%e},next:function(){var e=this.pics[this.picType].length;this.showedItemIdx=(this.showedItemIdx+1)%e},changePic:function(e){e.wheelDelta>0?this.prev():this.next()},showMobile:function(e){this.isMobilePicShowing=e}}}),Y=R,F=(i("4815"),Object(u["a"])(Y,D,z,!1,null,null,null));F.options.__file="Project.vue";var J=F.exports,U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contact"},[e._m(0),i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"content"},[i("p",{attrs:{clas:"name"}},[e._v(e._s(e.contacts.name))]),i("p",{staticClass:"address"},[e._v(e._s(e.contacts.address))]),i("p",{staticClass:"mobile"},[i("a",{attrs:{href:"tel:"+e.contacts.mobile}},[e._v(e._s(e.contacts.mobile))])]),i("p",{staticClass:"email"},[i("a",{attrs:{href:"mailto:"+e.contacts.email}},[e._v(e._s(e.contacts.email))])]),i("p",{staticClass:"website"},[i("a",{attrs:{href:"https://"+e.contacts.website,target:"_blank"}},[e._v(e._s(e.contacts.website))])])])]),i("scroll-down")],1)},$=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"title"},[i("div",{staticClass:"chi"},[e._v("联系方式")]),i("div",{staticClass:"eng"},[e._v("Contact")])])}],L={name:"Contact",props:{contacts:{type:Object}},components:{"scroll-down":b}},X=L,q=(i("e0c7"),Object(u["a"])(X,U,$,!1,null,null,null));q.options.__file="Contact.vue";var Q=q.exports,K={name:"app",data:function(){return{state:!1,slideIn:!1,selectedMenu:0,isScrolled:!1,isHeightOverflow:!1,menuSlide:"slide-up",isProjectShowed:!1,projectIndex:-1,bodyHeight:document.body.clientHeight,resizeTimer:!1,touchY:0,resumeData:{menu:[{chi:"项目",eng:"PROJECTS"},{chi:"介绍",eng:"INTRODUCTION"},{chi:"经历",eng:"EXPERIENCE"},{chi:"联系",eng:"CONTACT"}],projects:[{title:"项目一",img:"cover1",pics:{mobile:[{id:"8d12c0e8-e6ab-55ac-9692-a993757e63b7",pic:"rm0"},{id:"9d12c0e8-e6ab-55ac-9692-a993757e63b7",pic:"rm1"},{id:"1d12c0e8-e6ab-55ac-9692-a993757e63b7",pic:"rm0"},{id:"5818d3be-49e4-5ff6-9b78-858d5cd267a6",pic:"rm1"},{id:"909dd909-cc8b-50f3-815d-8c65b0f61fe4",pic:"rm0"},{id:"909dd979-cc8b-50f3-815d-8c65b0f61fe4",pic:"rm1"}],pc:[{id:"3b35498f-f876-546a-a218-37080d25e611",pic:"r0"},{id:"3b85498f-f876-546a-a218-37080d25e611",pic:"r1"},{id:"4b35498f-f876-546a-a218-37080d25e611",pic:"r0"},{id:"5b35498f-f876-546a-a218-37080d25e611",pic:"r1"},{id:"6b35498f-f876-546a-a218-37080d25e611",pic:"r0"},{id:"6b36498f-f876-546a-a218-37080d25e611",pic:"r1"}]},info:{demo:"http://eeewl1250.gitee.io/resume/",github:"https://github.com/eeewl1250/resume"}},{title:"这是项目二二二二",img:"cover2",pics:{pc:[{id:"3b35498f-f876-546a-a218-37080d25e611",pic:"r0"},{id:"0f20edd8-4776-5d33-8d1f-78b91b551e29",pic:"r1"},{id:"b6cd74b0-f1ee-53fa-a54f-be408ec6e7d3",pic:"r0"}]},info:{demo:"http://eeewl1250.gitee.io/resume/",github:"https://github.com/eeewl1250/resume"}},{title:"项目三在此",img:"cover3",pics:{mobile:[{id:"8d12c0e8-e6ab-55ac-9692-a993757e63b7",pic:"rm0"},{id:"5818d3be-49e4-5ff6-9b78-858d5cd267a6",pic:"rm1"},{id:"909dd909-cc8b-50f3-815d-8c65b0f61fe4",pic:"rm0"},{id:"cfcd5e9a-d561-5cd5-a825-7380613dfbc4",pic:"rm1"}]},info:{demo:"http://eeewl1250.gitee.io/resume/",github:"https://github.com/eeewl1250/resume"}}],intro:{name:"王大狗",info:["某个省 某个市","有所大学 本科 哪个学院 一个系","英语四级 500 六级 500","校奖学金二等奖","院奖学金一等奖"]},experiences:[{dateFrom:"2017-06",dateTo:"2017-09",title:"xx公司实习",desc:"使用HTML、Css、Bootstrap 编写页面，通过优雅降级，处理各种浏览器兼容性问题。\n使用javascript实现页面中需要效果。"},{dateFrom:"2017-12",dateTo:"2018-03",title:"xx公司实习",desc:"负责公司现有项目和新项目的前端修改调试和开发工作。\n与设计团队、后端开发团队紧密配合，确保软件实施、优化网站前端性能。"},{dateFrom:"2018-06",dateTo:"2018-09",title:"xx公司实习",desc:"负责符合W3C标准、多浏览器兼容、语义化的Web前端网页产品功能的开发，调试和维护，实现一流的用户交互界面。"}],contacts:{name:"王大狗",address:"浙江省 杭州市 ××区 □□街道",mobile:"188-1234-5678",email:"abc123qwer87@163.com",website:"github.com/eeewl1250"}}}},mounted:function(){var e=this;this.$nextTick(function(){e.state=!0,e.slideIn=!0,setTimeout(function(){e.slideIn=!1},2e3),window.onresize=function(){e.resizeTimer||(e.bodyHeight=document.body.clientHeight,e.resizeTimer=!0,setTimeout(function(){e.resizeTimer=!1},400))}})},components:{"v-header":h,projects:x,introduction:k,experience:N,project:J,contact:Q},methods:{touchStart:function(e){var t=e.changedTouches[0];this.touchY=t.pageY},touchEnd:function(e){var t=e.changedTouches[0],i=t.pageY-this.touchY;Math.abs(i)<50||this.changeMenu({wheelDelta:i})},changeMenu:function(e){var t=this;if(!this.isProjectShowed&&!this.isHeightOverflow&&!this.isScrolled){this.slideIn=!1,this.isScrolled=!0;var i=this.resumeData.menu.length;this.selectedMenu=(this.selectedMenu+(e.wheelDelta>0?-1:1)+i)%i,this.menuSlide=e.wheelDelta>0?"slide-down":"slide-up",setTimeout(function(){t.isScrolled=!1},1e3)}},showProject:function(e){this.isProjectShowed=!0,this.projectIndex=e},hideProject:function(){this.isProjectShowed=!1},goToPage:function(e){this.selectedMenu=e,this.isHeightOverflow=!1},overHeight:function(e){this.isHeightOverflow=e}}},V=K,W=(i("e936"),Object(u["a"])(V,n,c,!1,null,null,null));W.options.__file="App.vue";var G=W.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(G)}}).$mount("#app")},"5f80":function(e,t,i){"use strict";var s=i("12d7"),n=i.n(s);n.a},6578:function(e,t,i){},"806e":function(e,t,i){"use strict";var s=i("24cc"),n=i.n(s);n.a},"81e3":function(e,t,i){"use strict";var s=i("6578"),n=i.n(s);n.a},e0c7:function(e,t,i){"use strict";var s=i("3d6f"),n=i.n(s);n.a},e936:function(e,t,i){"use strict";var s=i("0361"),n=i.n(s);n.a},ec85:function(e,t,i){},f3c8:function(e,t,i){}});
//# sourceMappingURL=app.ad4e1a8c.js.map