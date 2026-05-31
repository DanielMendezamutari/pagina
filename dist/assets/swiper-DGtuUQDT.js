import{r as rt,o as R,c as N,d as le,F as K,h as J,v as vt,m as k,b as O,e as F,t as Te,aO as Me,al as Ce,a2 as Ot,f as ei}from"./index-B7Y130JR.js";import{V as se}from"./VImg-BACxhQ_4.js";import{_ as Ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Vt}from"./VCardText-BCUzQk1t.js";import{V as Bt}from"./VCard-BcAmVeMA.js";import{_ as ti}from"./AppCardCode-Bm8AaVjn.js";import{V as ii,a as ee}from"./VRow-DAEpMBUF.js";import"./VAvatar-CwfWkNrb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VDivider-Bu4I_F4l.js";/* empty css              */function Pt(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function bt(i,e){i===void 0&&(i={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof i[t]>"u"?i[t]=e[t]:Pt(e[t])&&Pt(i[t])&&Object.keys(e[t]).length>0&&bt(i[t],e[t])})}const Gt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Q(){const i=typeof document<"u"?document:{};return bt(i,Gt),i}const si={document:Gt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function U(){const i=typeof window<"u"?window:{};return bt(i,si),i}function ce(i){return i===void 0&&(i=""),i.trim().split(" ").filter(e=>!!e.trim())}function ri(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function we(i,e){return e===void 0&&(e=0),setTimeout(i,e)}function oe(){return Date.now()}function ni(i){const e=U();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function ft(i,e){e===void 0&&(e="x");const t=U();let s,r,n;const d=ni(i);return t.WebKitCSSMatrix?(r=d.transform||d.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(p=>p.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(r==="none"?"":r)):(n=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=n.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),e==="y"&&(t.WebKitCSSMatrix?r=n.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function Pe(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function ai(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function ne(){const i=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const s=t<0||arguments.length<=t?void 0:arguments[t];if(s!=null&&!ai(s)){const r=Object.keys(Object(s)).filter(n=>e.indexOf(n)<0);for(let n=0,d=r.length;n<d;n+=1){const p=r[n],a=Object.getOwnPropertyDescriptor(s,p);a!==void 0&&a.enumerable&&(Pe(i[p])&&Pe(s[p])?s[p].__swiper__?i[p]=s[p]:ne(i[p],s[p]):!Pe(i[p])&&Pe(s[p])?(i[p]={},s[p].__swiper__?i[p]=s[p]:ne(i[p],s[p])):i[p]=s[p])}}}return i}function Ie(i,e,t){i.style.setProperty(e,t)}function Ht(i){let{swiper:e,targetPosition:t,side:s}=i;const r=U(),n=-e.translate;let d=null,p;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const f=t>n?"next":"prev",l=(c,m)=>f==="next"&&c>=m||f==="prev"&&c<=m,o=()=>{p=new Date().getTime(),d===null&&(d=p);const c=Math.max(Math.min((p-d)/a,1),0),m=.5-Math.cos(c*Math.PI)/2;let w=n+m*(t-n);if(l(w,t)&&(w=t),e.wrapperEl.scrollTo({[s]:w}),l(w,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:w})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(o)};o()}function ge(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function Z(i,e){return e===void 0&&(e=""),[...i.children].filter(t=>t.matches(e))}function Ne(i){try{console.warn(i);return}catch{}}function ae(i,e){e===void 0&&(e=[]);const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:ce(e)),t}function Xe(i){const e=U(),t=Q(),s=i.getBoundingClientRect(),r=t.body,n=i.clientTop||r.clientTop||0,d=i.clientLeft||r.clientLeft||0,p=i===e?e.scrollY:i.scrollTop,a=i===e?e.scrollX:i.scrollLeft;return{top:s.top+p-n,left:s.left+a-d}}function oi(i,e){const t=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;e?s.matches(e)&&t.push(s):t.push(s),i=s}return t}function li(i,e){const t=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;e?s.matches(e)&&t.push(s):t.push(s),i=s}return t}function fe(i,e){return U().getComputedStyle(i,null).getPropertyValue(e)}function $e(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function me(i,e){const t=[];let s=i.parentElement;for(;s;)e?s.matches(e)&&t.push(s):t.push(s),s=s.parentElement;return t}function ke(i,e){function t(s){s.target===i&&(e.call(i,s),i.removeEventListener("transitionend",t))}e&&i.addEventListener("transitionend",t)}function ut(i,e,t){const s=U();return t?i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):i.offsetWidth}function Y(i){return(Array.isArray(i)?i:[i]).filter(e=>!!e)}let nt;function pi(){const i=U(),e=Q();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function Rt(){return nt||(nt=pi()),nt}let at;function di(i){let{userAgent:e}=i===void 0?{}:i;const t=Rt(),s=U(),r=s.navigator.platform,n=e||s.navigator.userAgent,d={ios:!1,android:!1},p=s.screen.width,a=s.screen.height,f=n.match(/(Android);?[\s\/]+([\d.]+)?/);let l=n.match(/(iPad).*OS\s([\d_]+)/);const o=n.match(/(iPod)(.*OS\s([\d_]+))?/),c=!l&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let w=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!l&&w&&t.touch&&v.indexOf(`${p}x${a}`)>=0&&(l=n.match(/(Version)\/([\d.]+)/),l||(l=[0,1,"13_0_0"]),w=!1),f&&!m&&(d.os="android",d.android=!0),(l||c||o)&&(d.os="ios",d.ios=!0),d}function Nt(i){return i===void 0&&(i={}),at||(at=di(i)),at}let ot;function ci(){const i=U(),e=Nt();let t=!1;function s(){const p=i.navigator.userAgent.toLowerCase();return p.indexOf("safari")>=0&&p.indexOf("chrome")<0&&p.indexOf("android")<0}if(s()){const p=String(i.navigator.userAgent);if(p.includes("Version/")){const[a,f]=p.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));t=a<16||a===16&&f<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),n=s(),d=n||r&&e.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:d,isWebView:r}}function fi(){return ot||(ot=ci()),ot}function ui(i){let{swiper:e,on:t,emit:s}=i;const r=U();let n=null,d=null;const p=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(o=>{d=r.requestAnimationFrame(()=>{const{width:c,height:m}=e;let w=c,v=m;o.forEach(h=>{let{contentBoxSize:u,contentRect:b,target:g}=h;g&&g!==e.el||(w=b?b.width:(u[0]||u).inlineSize,v=b?b.height:(u[0]||u).blockSize)}),(w!==c||v!==m)&&p()})}),n.observe(e.el))},f=()=>{d&&r.cancelAnimationFrame(d),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},l=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",p),r.addEventListener("orientationchange",l)}),t("destroy",()=>{f(),r.removeEventListener("resize",p),r.removeEventListener("orientationchange",l)})}function mi(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=[],d=U(),p=function(l,o){o===void 0&&(o={});const c=d.MutationObserver||d.WebkitMutationObserver,m=new c(w=>{if(e.__preventObserver__)return;if(w.length===1){r("observerUpdate",w[0]);return}const v=function(){r("observerUpdate",w[0])};d.requestAnimationFrame?d.requestAnimationFrame(v):d.setTimeout(v,0)});m.observe(l,{attributes:typeof o.attributes>"u"?!0:o.attributes,childList:typeof o.childList>"u"?!0:o.childList,characterData:typeof o.characterData>"u"?!0:o.characterData}),n.push(m)},a=()=>{if(e.params.observer){if(e.params.observeParents){const l=me(e.hostEl);for(let o=0;o<l.length;o+=1)p(l[o])}p(e.hostEl,{childList:e.params.observeSlideChildren}),p(e.wrapperEl,{attributes:!1})}},f=()=>{n.forEach(l=>{l.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",a),s("destroy",f)}var wi={on(i,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const r=t?"unshift":"push";return i.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][r](e)}),s},once(i,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function r(){s.off(i,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,d=new Array(n),p=0;p<n;p++)d[p]=arguments[p];e.apply(s,d)}return r.__emitterProxy=e,s.on(i,r,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const s=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[s](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(s=>{typeof e>"u"?t.eventsListeners[s]=[]:t.eventsListeners[s]&&t.eventsListeners[s].forEach((r,n)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[s].splice(n,1)})}),t},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let e,t,s;for(var r=arguments.length,n=new Array(r),d=0;d<r;d++)n[d]=arguments[d];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),s=i):(e=n[0].events,t=n[0].data,s=n[0].context||i),t.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach(a=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(f=>{f.apply(s,[a,...t])}),i.eventsListeners&&i.eventsListeners[a]&&i.eventsListeners[a].forEach(f=>{f.apply(s,t)})}),i}};function gi(){const i=this;let e,t;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=s.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(fe(s,"padding-left")||0,10)-parseInt(fe(s,"padding-right")||0,10),t=t-parseInt(fe(s,"padding-top")||0,10)-parseInt(fe(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function hi(){const i=this;function e(T,L){return parseFloat(T.getPropertyValue(i.getDirectionLabel(L))||0)}const t=i.params,{wrapperEl:s,slidesEl:r,size:n,rtlTranslate:d,wrongRTL:p}=i,a=i.virtual&&t.virtual.enabled,f=a?i.virtual.slides.length:i.slides.length,l=Z(r,`.${i.params.slideClass}, swiper-slide`),o=a?i.virtual.slides.length:l.length;let c=[];const m=[],w=[];let v=t.slidesOffsetBefore;typeof v=="function"&&(v=t.slidesOffsetBefore.call(i));let h=t.slidesOffsetAfter;typeof h=="function"&&(h=t.slidesOffsetAfter.call(i));const u=i.snapGrid.length,b=i.slidesGrid.length;let g=t.spaceBetween,y=-v,I=0,_=0;if(typeof n>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*n:typeof g=="string"&&(g=parseFloat(g)),i.virtualSize=-g,l.forEach(T=>{d?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Ie(s,"--swiper-centered-offset-before",""),Ie(s,"--swiper-centered-offset-after",""));const j=t.grid&&t.grid.rows>1&&i.grid;j?i.grid.initSlides(l):i.grid&&i.grid.unsetSlides();let M;const S=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(T=>typeof t.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<o;T+=1){M=0;let L;if(l[T]&&(L=l[T]),j&&i.grid.updateSlide(T,L,l),!(l[T]&&fe(L,"display")==="none")){if(t.slidesPerView==="auto"){S&&(l[T].style[i.getDirectionLabel("width")]="");const E=getComputedStyle(L),x=L.style.transform,C=L.style.webkitTransform;if(x&&(L.style.transform="none"),C&&(L.style.webkitTransform="none"),t.roundLengths)M=i.isHorizontal()?ut(L,"width",!0):ut(L,"height",!0);else{const A=e(E,"width"),G=e(E,"padding-left"),P=e(E,"padding-right"),z=e(E,"margin-left"),V=e(E,"margin-right"),X=E.getPropertyValue("box-sizing");if(X&&X==="border-box")M=A+z+V;else{const{clientWidth:$,offsetWidth:D}=L;M=A+G+P+z+V+(D-$)}}x&&(L.style.transform=x),C&&(L.style.webkitTransform=C),t.roundLengths&&(M=Math.floor(M))}else M=(n-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(M=Math.floor(M)),l[T]&&(l[T].style[i.getDirectionLabel("width")]=`${M}px`);l[T]&&(l[T].swiperSlideSize=M),w.push(M),t.centeredSlides?(y=y+M/2+I/2+g,I===0&&T!==0&&(y=y-n/2-g),T===0&&(y=y-n/2-g),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),_%t.slidesPerGroup===0&&c.push(y),m.push(y)):(t.roundLengths&&(y=Math.floor(y)),(_-Math.min(i.params.slidesPerGroupSkip,_))%i.params.slidesPerGroup===0&&c.push(y),m.push(y),y=y+M+g),i.virtualSize+=M+g,I=M,_+=1}}if(i.virtualSize=Math.max(i.virtualSize,n)+h,d&&p&&(t.effect==="slide"||t.effect==="coverflow")&&(s.style.width=`${i.virtualSize+g}px`),t.setWrapperSize&&(s.style[i.getDirectionLabel("width")]=`${i.virtualSize+g}px`),j&&i.grid.updateWrapperSize(M,c),!t.centeredSlides){const T=[];for(let L=0;L<c.length;L+=1){let E=c[L];t.roundLengths&&(E=Math.floor(E)),c[L]<=i.virtualSize-n&&T.push(E)}c=T,Math.floor(i.virtualSize-n)-Math.floor(c[c.length-1])>1&&c.push(i.virtualSize-n)}if(a&&t.loop){const T=w[0]+g;if(t.slidesPerGroup>1){const L=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),E=T*t.slidesPerGroup;for(let x=0;x<L;x+=1)c.push(c[c.length-1]+E)}for(let L=0;L<i.virtual.slidesBefore+i.virtual.slidesAfter;L+=1)t.slidesPerGroup===1&&c.push(c[c.length-1]+T),m.push(m[m.length-1]+T),i.virtualSize+=T}if(c.length===0&&(c=[0]),g!==0){const T=i.isHorizontal()&&d?"marginLeft":i.getDirectionLabel("marginRight");l.filter((L,E)=>!t.cssMode||t.loop?!0:E!==l.length-1).forEach(L=>{L.style[T]=`${g}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let T=0;w.forEach(E=>{T+=E+(g||0)}),T-=g;const L=T-n;c=c.map(E=>E<=0?-v:E>L?L+h:E)}if(t.centerInsufficientSlides){let T=0;if(w.forEach(L=>{T+=L+(g||0)}),T-=g,T<n){const L=(n-T)/2;c.forEach((E,x)=>{c[x]=E-L}),m.forEach((E,x)=>{m[x]=E+L})}}if(Object.assign(i,{slides:l,snapGrid:c,slidesGrid:m,slidesSizesGrid:w}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Ie(s,"--swiper-centered-offset-before",`${-c[0]}px`),Ie(s,"--swiper-centered-offset-after",`${i.size/2-w[w.length-1]/2}px`);const T=-i.snapGrid[0],L=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(E=>E+T),i.slidesGrid=i.slidesGrid.map(E=>E+L)}if(o!==f&&i.emit("slidesLengthChange"),c.length!==u&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),m.length!==b&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const T=`${t.containerModifierClass}backface-hidden`,L=i.el.classList.contains(T);o<=t.maxBackfaceHiddenSlides?L||i.el.classList.add(T):L&&i.el.classList.remove(T)}}function vi(i){const e=this,t=[],s=e.virtual&&e.params.virtual.enabled;let r=0,n;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const d=p=>s?e.slides[e.getSlideIndexByData(p)]:e.slides[p];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(p=>{t.push(p)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const p=e.activeIndex+n;if(p>e.slides.length&&!s)break;t.push(d(p))}else t.push(d(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]<"u"){const p=t[n].offsetHeight;r=p>r?p:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function bi(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(i.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-t-i.cssOverflowAdjustment()}function yi(i){i===void 0&&(i=this&&this.translate||0);const e=this,t=e.params,{slides:s,rtlTranslate:r,snapGrid:n}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let d=-i;r&&(d=i),s.forEach(a=>{a.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let p=t.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*e.size:typeof p=="string"&&(p=parseFloat(p));for(let a=0;a<s.length;a+=1){const f=s[a];let l=f.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(l-=s[0].swiperSlideOffset);const o=(d+(t.centeredSlides?e.minTranslate():0)-l)/(f.swiperSlideSize+p),c=(d-n[0]+(t.centeredSlides?e.minTranslate():0)-l)/(f.swiperSlideSize+p),m=-(d-l),w=m+e.slidesSizesGrid[a],v=m>=0&&m<=e.size-e.slidesSizesGrid[a];(m>=0&&m<e.size-1||w>1&&w<=e.size||m<=0&&w>=e.size)&&(e.visibleSlides.push(f),e.visibleSlidesIndexes.push(a),s[a].classList.add(t.slideVisibleClass)),v&&s[a].classList.add(t.slideFullyVisibleClass),f.progress=r?-o:o,f.originalProgress=r?-c:c}}function Si(i){const e=this;if(typeof i>"u"){const l=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*l||0}const t=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:n,isEnd:d,progressLoop:p}=e;const a=n,f=d;if(s===0)r=0,n=!0,d=!0;else{r=(i-e.minTranslate())/s;const l=Math.abs(i-e.minTranslate())<1,o=Math.abs(i-e.maxTranslate())<1;n=l||r<=0,d=o||r>=1,l&&(r=0),o&&(r=1)}if(t.loop){const l=e.getSlideIndexByData(0),o=e.getSlideIndexByData(e.slides.length-1),c=e.slidesGrid[l],m=e.slidesGrid[o],w=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(i);v>=c?p=(v-c)/w:p=(v+w-m)/w,p>1&&(p-=1)}Object.assign(e,{progress:r,progressLoop:p,isBeginning:n,isEnd:d}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),n&&!a&&e.emit("reachBeginning toEdge"),d&&!f&&e.emit("reachEnd toEdge"),(a&&!n||f&&!d)&&e.emit("fromEdge"),e.emit("progress",r)}const lt=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function xi(){const i=this,{slides:e,params:t,slidesEl:s,activeIndex:r}=i,n=i.virtual&&t.virtual.enabled,d=i.grid&&t.grid&&t.grid.rows>1,p=o=>Z(s,`.${t.slideClass}${o}, swiper-slide${o}`)[0];let a,f,l;if(n)if(t.loop){let o=r-i.virtual.slidesBefore;o<0&&(o=i.virtual.slides.length+o),o>=i.virtual.slides.length&&(o-=i.virtual.slides.length),a=p(`[data-swiper-slide-index="${o}"]`)}else a=p(`[data-swiper-slide-index="${r}"]`);else d?(a=e.filter(o=>o.column===r)[0],l=e.filter(o=>o.column===r+1)[0],f=e.filter(o=>o.column===r-1)[0]):a=e[r];a&&(d||(l=li(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!l&&(l=e[0]),f=oi(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f===0&&(f=e[e.length-1]))),e.forEach(o=>{lt(o,o===a,t.slideActiveClass),lt(o,o===l,t.slideNextClass),lt(o,o===f,t.slidePrevClass)}),i.emitSlidesClasses()}const He=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=e.closest(t());if(s){let r=s.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(s.shadowRoot?r=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(r=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},pt=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},mt=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const d=r,p=[d-e];p.push(...Array.from({length:e}).map((a,f)=>d+s+f)),i.slides.forEach((a,f)=>{p.includes(a.column)&&pt(i,f)});return}const n=r+s-1;if(i.params.rewind||i.params.loop)for(let d=r-e;d<=n+e;d+=1){const p=(d%t+t)%t;(p<r||p>n)&&pt(i,p)}else for(let d=Math.max(r-e,0);d<=Math.min(n+e,t-1);d+=1)d!==r&&(d>n||d<r)&&pt(i,d)};function Ei(i){const{slidesGrid:e,params:t}=i,s=i.rtlTranslate?i.translate:-i.translate;let r;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?s>=e[n]&&s<e[n+1]-(e[n+1]-e[n])/2?r=n:s>=e[n]&&s<e[n+1]&&(r=n+1):s>=e[n]&&(r=n);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Ti(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:r,activeIndex:n,realIndex:d,snapIndex:p}=e;let a=i,f;const l=m=>{let w=m-e.virtual.slidesBefore;return w<0&&(w=e.virtual.slides.length+w),w>=e.virtual.slides.length&&(w-=e.virtual.slides.length),w};if(typeof a>"u"&&(a=Ei(e)),s.indexOf(t)>=0)f=s.indexOf(t);else{const m=Math.min(r.slidesPerGroupSkip,a);f=m+Math.floor((a-m)/r.slidesPerGroup)}if(f>=s.length&&(f=s.length-1),a===n&&!e.params.loop){f!==p&&(e.snapIndex=f,e.emit("snapIndexChange"));return}if(a===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=l(a);return}const o=e.grid&&r.grid&&r.grid.rows>1;let c;if(e.virtual&&r.virtual.enabled&&r.loop)c=l(a);else if(o){const m=e.slides.filter(v=>v.column===a)[0];let w=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(w)&&(w=Math.max(e.slides.indexOf(m),0)),c=Math.floor(w/r.grid.rows)}else if(e.slides[a]){const m=e.slides[a].getAttribute("data-swiper-slide-index");m?c=parseInt(m,10):c=a}else c=a;Object.assign(e,{previousSnapIndex:p,snapIndex:f,previousRealIndex:d,realIndex:c,previousIndex:n,activeIndex:a}),e.initialized&&mt(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(d!==c&&e.emit("realIndexChange"),e.emit("slideChange"))}function Mi(i,e){const t=this,s=t.params;let r=i.closest(`.${s.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(p=>{!r&&p.matches&&p.matches(`.${s.slideClass}, swiper-slide`)&&(r=p)});let n=!1,d;if(r){for(let p=0;p<t.slides.length;p+=1)if(t.slides[p]===r){n=!0,d=p;break}}if(r&&n)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=d;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}s.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Ci={updateSize:gi,updateSlides:hi,updateAutoHeight:vi,updateSlidesOffset:bi,updateSlidesProgress:yi,updateProgress:Si,updateSlidesClasses:xi,updateActiveIndex:Ti,updateClickedSlide:Mi};function Pi(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:s,translate:r,wrapperEl:n}=e;if(t.virtualTranslate)return s?-r:r;if(t.cssMode)return r;let d=ft(n,i);return d+=e.cssOverflowAdjustment(),s&&(d=-d),d||0}function Ii(i,e){const t=this,{rtlTranslate:s,params:r,wrapperEl:n,progress:d}=t;let p=0,a=0;const f=0;t.isHorizontal()?p=s?-i:i:a=i,r.roundLengths&&(p=Math.floor(p),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?p:a,r.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-p:-a:r.virtualTranslate||(t.isHorizontal()?p-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${p}px, ${a}px, ${f}px)`);let l;const o=t.maxTranslate()-t.minTranslate();o===0?l=0:l=(i-t.minTranslate())/o,l!==d&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function _i(){return-this.snapGrid[0]}function zi(){return-this.snapGrid[this.snapGrid.length-1]}function Li(i,e,t,s,r){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=!0);const n=this,{params:d,wrapperEl:p}=n;if(n.animating&&d.preventInteractionOnTransition)return!1;const a=n.minTranslate(),f=n.maxTranslate();let l;if(s&&i>a?l=a:s&&i<f?l=f:l=i,n.updateProgress(l),d.cssMode){const o=n.isHorizontal();if(e===0)p[o?"scrollLeft":"scrollTop"]=-l;else{if(!n.support.smoothScroll)return Ht({swiper:n,targetPosition:-l,side:o?"left":"top"}),!0;p.scrollTo({[o?"left":"top"]:-l,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(l),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(l),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(c){!n||n.destroyed||c.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var ki={getTranslate:Pi,setTranslate:Ii,minTranslate:_i,maxTranslate:zi,translateTo:Li};function $i(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function Xt(i){let{swiper:e,runCallbacks:t,direction:s,step:r}=i;const{activeIndex:n,previousIndex:d}=e;let p=s;if(p||(n>d?p="next":n<d?p="prev":p="reset"),e.emit(`transition${r}`),t&&n!==d){if(p==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),p==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Ai(i,e){i===void 0&&(i=!0);const t=this,{params:s}=t;s.cssMode||(s.autoHeight&&t.updateAutoHeight(),Xt({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function ji(i,e){i===void 0&&(i=!0);const t=this,{params:s}=t;t.animating=!1,!s.cssMode&&(t.setTransition(0),Xt({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var Di={setTransition:$i,transitionStart:Ai,transitionEnd:ji};function Oi(i,e,t,s,r){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this;let d=i;d<0&&(d=0);const{params:p,snapGrid:a,slidesGrid:f,previousIndex:l,activeIndex:o,rtlTranslate:c,wrapperEl:m,enabled:w}=n;if(!w&&!s&&!r||n.destroyed||n.animating&&p.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=n.params.speed);const v=Math.min(n.params.slidesPerGroupSkip,d);let h=v+Math.floor((d-v)/n.params.slidesPerGroup);h>=a.length&&(h=a.length-1);const u=-a[h];if(p.normalizeSlideIndex)for(let g=0;g<f.length;g+=1){const y=-Math.floor(u*100),I=Math.floor(f[g]*100),_=Math.floor(f[g+1]*100);typeof f[g+1]<"u"?y>=I&&y<_-(_-I)/2?d=g:y>=I&&y<_&&(d=g+1):y>=I&&(d=g)}if(n.initialized&&d!==o&&(!n.allowSlideNext&&(c?u>n.translate&&u>n.minTranslate():u<n.translate&&u<n.minTranslate())||!n.allowSlidePrev&&u>n.translate&&u>n.maxTranslate()&&(o||0)!==d))return!1;d!==(l||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(u);let b;if(d>o?b="next":d<o?b="prev":b="reset",c&&-u===n.translate||!c&&u===n.translate)return n.updateActiveIndex(d),p.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),p.effect!=="slide"&&n.setTranslate(u),b!=="reset"&&(n.transitionStart(t,b),n.transitionEnd(t,b)),!1;if(p.cssMode){const g=n.isHorizontal(),y=c?u:-u;if(e===0){const I=n.virtual&&n.params.virtual.enabled;I&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),I&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[g?"scrollLeft":"scrollTop"]=y})):m[g?"scrollLeft":"scrollTop"]=y,I&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return Ht({swiper:n,targetPosition:y,side:g?"left":"top"}),!0;m.scrollTo({[g?"left":"top"]:y,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(u),n.updateActiveIndex(d),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,s),n.transitionStart(t,b),e===0?n.transitionEnd(t,b):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(y){!n||n.destroyed||y.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,b))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Vi(i,e,t,s){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const n=r.grid&&r.params.grid&&r.params.grid.rows>1;let d=i;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)d=d+r.virtual.slidesBefore;else{let p;if(n){const c=d*r.params.grid.rows;p=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===c)[0].column}else p=r.getSlideIndexByData(d);const a=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:f}=r.params;let l=r.params.slidesPerView;l==="auto"?l=r.slidesPerViewDynamic():(l=Math.ceil(parseFloat(r.params.slidesPerView,10)),f&&l%2===0&&(l=l+1));let o=a-p<l;if(f&&(o=o||p<Math.ceil(l/2)),s&&f&&r.params.slidesPerView!=="auto"&&!n&&(o=!1),o){const c=f?p<r.activeIndex?"prev":"next":p-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:c,slideTo:!0,activeSlideIndex:c==="next"?p+1:p-a+1,slideRealIndex:c==="next"?r.realIndex:void 0})}if(n){const c=d*r.params.grid.rows;d=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===c)[0].column}else d=r.getSlideIndexByData(d)}return requestAnimationFrame(()=>{r.slideTo(d,e,t,s)}),r}function Bi(i,e,t){e===void 0&&(e=!0);const s=this,{enabled:r,params:n,animating:d}=s;if(!r||s.destroyed)return s;typeof i>"u"&&(i=s.params.speed);let p=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(p=Math.max(s.slidesPerViewDynamic("current",!0),1));const a=s.activeIndex<n.slidesPerGroupSkip?1:p,f=s.virtual&&n.virtual.enabled;if(n.loop){if(d&&!f&&n.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+a,i,e,t)}),!0}return n.rewind&&s.isEnd?s.slideTo(0,i,e,t):s.slideTo(s.activeIndex+a,i,e,t)}function Gi(i,e,t){e===void 0&&(e=!0);const s=this,{params:r,snapGrid:n,slidesGrid:d,rtlTranslate:p,enabled:a,animating:f}=s;if(!a||s.destroyed)return s;typeof i>"u"&&(i=s.params.speed);const l=s.virtual&&r.virtual.enabled;if(r.loop){if(f&&!l&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const o=p?s.translate:-s.translate;function c(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const m=c(o),w=n.map(u=>c(u));let v=n[w.indexOf(m)-1];if(typeof v>"u"&&r.cssMode){let u;n.forEach((b,g)=>{m>=b&&(u=g)}),typeof u<"u"&&(v=n[u>0?u-1:u])}let h=0;if(typeof v<"u"&&(h=d.indexOf(v),h<0&&(h=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(h=h-s.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),r.rewind&&s.isBeginning){const u=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(u,i,e,t)}else if(r.loop&&s.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(h,i,e,t)}),!0;return s.slideTo(h,i,e,t)}function Hi(i,e,t){e===void 0&&(e=!0);const s=this;if(!s.destroyed)return typeof i>"u"&&(i=s.params.speed),s.slideTo(s.activeIndex,i,e,t)}function Ri(i,e,t,s){e===void 0&&(e=!0),s===void 0&&(s=.5);const r=this;if(r.destroyed)return;typeof i>"u"&&(i=r.params.speed);let n=r.activeIndex;const d=Math.min(r.params.slidesPerGroupSkip,n),p=d+Math.floor((n-d)/r.params.slidesPerGroup),a=r.rtlTranslate?r.translate:-r.translate;if(a>=r.snapGrid[p]){const f=r.snapGrid[p],l=r.snapGrid[p+1];a-f>(l-f)*s&&(n+=r.params.slidesPerGroup)}else{const f=r.snapGrid[p-1],l=r.snapGrid[p];a-f<=(l-f)*s&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,i,e,t)}function Ni(){const i=this;if(i.destroyed)return;const{params:e,slidesEl:t}=i,s=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let r=i.clickedIndex,n;const d=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;n=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<i.loopedSlides-s/2||r>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),r=i.getSlideIndex(Z(t,`${d}[data-swiper-slide-index="${n}"]`)[0]),we(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-s?(i.loopFix(),r=i.getSlideIndex(Z(t,`${d}[data-swiper-slide-index="${n}"]`)[0]),we(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var Xi={slideTo:Oi,slideToLoop:Vi,slideNext:Bi,slidePrev:Gi,slideReset:Hi,slideToClosest:Ri,slideToClickedSlide:Ni};function Fi(i){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{Z(s,`.${t.slideClass}, swiper-slide`).forEach((o,c)=>{o.setAttribute("data-swiper-slide-index",c)})},n=e.grid&&t.grid&&t.grid.rows>1,d=t.slidesPerGroup*(n?t.grid.rows:1),p=e.slides.length%d!==0,a=n&&e.slides.length%t.grid.rows!==0,f=l=>{for(let o=0;o<l;o+=1){const c=e.isElement?ae("swiper-slide",[t.slideBlankClass]):ae("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(c)}};if(p){if(t.loopAddBlankSlides){const l=d-e.slides.length%d;f(l),e.recalcSlides(),e.updateSlides()}else Ne("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(a){if(t.loopAddBlankSlides){const l=t.grid.rows-e.slides.length%t.grid.rows;f(l),e.recalcSlides(),e.updateSlides()}else Ne("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:i,direction:t.centeredSlides?void 0:"next"})}function Yi(i){let{slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:r,activeSlideIndex:n,byController:d,byMousewheel:p}=i===void 0?{}:i;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:f,allowSlidePrev:l,allowSlideNext:o,slidesEl:c,params:m}=a,{centeredSlides:w}=m;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&m.virtual.enabled){t&&(!m.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):m.centeredSlides&&a.snapIndex<m.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=l,a.allowSlideNext=o,a.emit("loopFix");return}let v=m.slidesPerView;v==="auto"?v=a.slidesPerViewDynamic():(v=Math.ceil(parseFloat(m.slidesPerView,10)),w&&v%2===0&&(v=v+1));const h=m.slidesPerGroupAuto?v:m.slidesPerGroup;let u=h;u%h!==0&&(u+=h-u%h),u+=m.loopAdditionalSlides,a.loopedSlides=u;const b=a.grid&&m.grid&&m.grid.rows>1;f.length<v+u?Ne("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&m.grid.fill==="row"&&Ne("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const g=[],y=[];let I=a.activeIndex;typeof n>"u"?n=a.getSlideIndex(f.filter(x=>x.classList.contains(m.slideActiveClass))[0]):I=n;const _=s==="next"||!s,j=s==="prev"||!s;let M=0,S=0;const T=b?Math.ceil(f.length/m.grid.rows):f.length,E=(b?f[n].column:n)+(w&&typeof r>"u"?-v/2+.5:0);if(E<u){M=Math.max(u-E,h);for(let x=0;x<u-E;x+=1){const C=x-Math.floor(x/T)*T;if(b){const A=T-C-1;for(let G=f.length-1;G>=0;G-=1)f[G].column===A&&g.push(G)}else g.push(T-C-1)}}else if(E+v>T-u){S=Math.max(E-(T-u*2),h);for(let x=0;x<S;x+=1){const C=x-Math.floor(x/T)*T;b?f.forEach((A,G)=>{A.column===C&&y.push(G)}):y.push(C)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),j&&g.forEach(x=>{f[x].swiperLoopMoveDOM=!0,c.prepend(f[x]),f[x].swiperLoopMoveDOM=!1}),_&&y.forEach(x=>{f[x].swiperLoopMoveDOM=!0,c.append(f[x]),f[x].swiperLoopMoveDOM=!1}),a.recalcSlides(),m.slidesPerView==="auto"?a.updateSlides():b&&(g.length>0&&j||y.length>0&&_)&&a.slides.forEach((x,C)=>{a.grid.updateSlide(C,x,a.slides)}),m.watchSlidesProgress&&a.updateSlidesOffset(),t){if(g.length>0&&j){if(typeof e>"u"){const x=a.slidesGrid[I],A=a.slidesGrid[I+M]-x;p?a.setTranslate(a.translate-A):(a.slideTo(I+Math.ceil(M),0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-A,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-A))}else if(r){const x=b?g.length/m.grid.rows:g.length;a.slideTo(a.activeIndex+x,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(y.length>0&&_)if(typeof e>"u"){const x=a.slidesGrid[I],A=a.slidesGrid[I-S]-x;p?a.setTranslate(a.translate-A):(a.slideTo(I-S,0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-A,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-A))}else{const x=b?y.length/m.grid.rows:y.length;a.slideTo(a.activeIndex-x,0,!1,!0)}}if(a.allowSlidePrev=l,a.allowSlideNext=o,a.controller&&a.controller.control&&!d){const x={slideRealIndex:e,direction:s,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(C=>{!C.destroyed&&C.params.loop&&C.loopFix({...x,slideTo:C.params.slidesPerView===m.slidesPerView?t:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...x,slideTo:a.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}a.emit("loopFix")}function Wi(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[n]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{t.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var qi={loopCreate:Fi,loopFix:Yi,loopDestroy:Wi};function Ui(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Ki(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Zi={setGrabCursor:Ui,unsetGrabCursor:Ki};function Qi(i,e){e===void 0&&(e=this);function t(s){if(!s||s===Q()||s===U())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(i);return!r&&!s.getRootNode?null:r||t(s.getRootNode().host)}return t(e)}function It(i,e,t){const s=U(),{params:r}=i,n=r.edgeSwipeDetection,d=r.edgeSwipeThreshold;return n&&(t<=d||t>=s.innerWidth-d)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function Ji(i){const e=this,t=Q();let s=i;s.originalEvent&&(s=s.originalEvent);const r=e.touchEventsData;if(s.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==s.pointerId)return;r.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(r.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){It(e,s,s.targetTouches[0].pageX);return}const{params:n,touches:d,enabled:p}=e;if(!p||!n.simulateTouch&&s.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let a=s.target;if(n.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(a)||"which"in s&&s.which===3||"button"in s&&s.button>0||r.isTouched&&r.isMoved)return;const f=!!n.noSwipingClass&&n.noSwipingClass!=="",l=s.composedPath?s.composedPath():s.path;f&&s.target&&s.target.shadowRoot&&l&&(a=l[0]);const o=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,c=!!(s.target&&s.target.shadowRoot);if(n.noSwiping&&(c?Qi(o,a):a.closest(o))){e.allowClick=!0;return}if(n.swipeHandler&&!a.closest(n.swipeHandler))return;d.currentX=s.pageX,d.currentY=s.pageY;const m=d.currentX,w=d.currentY;if(!It(e,s,m))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=m,d.startY=w,r.touchStartTime=oe(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let v=!0;a.matches(r.focusableElements)&&(v=!1,a.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==a&&t.activeElement.blur();const h=v&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||h)&&!a.isContentEditable&&s.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function es(i){const e=Q(),t=this,s=t.touchEventsData,{params:r,touches:n,rtlTranslate:d,enabled:p}=t;if(!p||!r.simulateTouch&&i.pointerType==="mouse")return;let a=i;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(s.touchId!==null||a.pointerId!==s.pointerId))return;let f;if(a.type==="touchmove"){if(f=[...a.changedTouches].filter(_=>_.identifier===s.touchId)[0],!f||f.identifier!==s.touchId)return}else f=a;if(!s.isTouched){s.startMoving&&s.isScrolling&&t.emit("touchMoveOpposite",a);return}const l=f.pageX,o=f.pageY;if(a.preventedByNestedSwiper){n.startX=l,n.startY=o;return}if(!t.allowTouchMove){a.target.matches(s.focusableElements)||(t.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:l,startY:o,currentX:l,currentY:o}),s.touchStartTime=oe());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(o<n.startY&&t.translate<=t.maxTranslate()||o>n.startY&&t.translate>=t.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(l<n.startX&&t.translate<=t.maxTranslate()||l>n.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&a.target===e.activeElement&&a.target.matches(s.focusableElements)){s.isMoved=!0,t.allowClick=!1;return}s.allowTouchCallbacks&&t.emit("touchMove",a),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=l,n.currentY=o;const c=n.currentX-n.startX,m=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(c**2+m**2)<t.params.threshold)return;if(typeof s.isScrolling>"u"){let _;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:c*c+m*m>=25&&(_=Math.atan2(Math.abs(m),Math.abs(c))*180/Math.PI,s.isScrolling=t.isHorizontal()?_>r.touchAngle:90-_>r.touchAngle)}if(s.isScrolling&&t.emit("touchMoveOpposite",a),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||a.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;t.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation();let w=t.isHorizontal()?c:m,v=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(w=Math.abs(w)*(d?1:-1),v=Math.abs(v)*(d?1:-1)),n.diff=w,w*=r.touchRatio,d&&(w=-w,v=-v);const h=t.touchesDirection;t.swipeDirection=w>0?"prev":"next",t.touchesDirection=v>0?"prev":"next";const u=t.params.loop&&!r.cssMode,b=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!s.isMoved){if(u&&b&&t.loopFix({direction:t.swipeDirection}),s.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const _=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(_)}s.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}let g;if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&h!==t.touchesDirection&&u&&b&&Math.abs(w)>=1){Object.assign(n,{startX:l,startY:o,currentX:l,currentY:o,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}t.emit("sliderMove",a),s.isMoved=!0,s.currentTranslate=w+s.startTranslate;let y=!0,I=r.resistanceRatio;if(r.touchReleaseOnEdges&&(I=0),w>0?(u&&b&&!g&&s.allowThresholdMove&&s.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>t.minTranslate()&&(y=!1,r.resistance&&(s.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+s.startTranslate+w)**I))):w<0&&(u&&b&&!g&&s.allowThresholdMove&&s.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<t.maxTranslate()&&(y=!1,r.resistance&&(s.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-s.startTranslate-w)**I))),y&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(w)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(s.currentTranslate),t.setTranslate(s.currentTranslate))}function ts(i){const e=this,t=e.touchEventsData;let s=i;s.originalEvent&&(s=s.originalEvent);let r;if(s.type==="touchend"||s.type==="touchcancel"){if(r=[...s.changedTouches].filter(I=>I.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||s.pointerId!==t.pointerId)return;r=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:d,touches:p,rtlTranslate:a,slidesGrid:f,enabled:l}=e;if(!l||!d.simulateTouch&&s.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",s),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&d.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}d.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const o=oe(),c=o-t.touchStartTime;if(e.allowClick){const I=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(I&&I[0]||s.target,I),e.emit("tap click",s),c<300&&o-t.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(t.lastClickTime=oe(),we(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||p.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let m;if(d.followFinger?m=a?e.translate:-e.translate:m=-t.currentTranslate,d.cssMode)return;if(d.freeMode&&d.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:m});return}const w=m>=-e.maxTranslate()&&!e.params.loop;let v=0,h=e.slidesSizesGrid[0];for(let I=0;I<f.length;I+=I<d.slidesPerGroupSkip?1:d.slidesPerGroup){const _=I<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;typeof f[I+_]<"u"?(w||m>=f[I]&&m<f[I+_])&&(v=I,h=f[I+_]-f[I]):(w||m>=f[I])&&(v=I,h=f[f.length-1]-f[f.length-2])}let u=null,b=null;d.rewind&&(e.isBeginning?b=d.virtual&&d.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(u=0));const g=(m-f[v])/h,y=v<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;if(c>d.longSwipesMs){if(!d.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(g>=d.longSwipesRatio?e.slideTo(d.rewind&&e.isEnd?u:v+y):e.slideTo(v)),e.swipeDirection==="prev"&&(g>1-d.longSwipesRatio?e.slideTo(v+y):b!==null&&g<0&&Math.abs(g)>d.longSwipesRatio?e.slideTo(b):e.slideTo(v))}else{if(!d.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(v+y):e.slideTo(v):(e.swipeDirection==="next"&&e.slideTo(u!==null?u:v+y),e.swipeDirection==="prev"&&e.slideTo(b!==null?b:v))}}function _t(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:n}=i,d=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const p=d&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!p?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!d?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=s,i.params.watchOverflow&&n!==i.snapGrid&&i.checkOverflow()}function is(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function ss(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const n=i.maxTranslate()-i.minTranslate();n===0?r=0:r=(i.translate-i.minTranslate())/n,r!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function rs(i){const e=this;He(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function ns(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Ft=(i,e)=>{const t=Q(),{params:s,el:r,wrapperEl:n,device:d}=i,p=!!s.nested,a=e==="on"?"addEventListener":"removeEventListener",f=e;t[a]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:p}),r[a]("touchstart",i.onTouchStart,{passive:!1}),r[a]("pointerdown",i.onTouchStart,{passive:!1}),t[a]("touchmove",i.onTouchMove,{passive:!1,capture:p}),t[a]("pointermove",i.onTouchMove,{passive:!1,capture:p}),t[a]("touchend",i.onTouchEnd,{passive:!0}),t[a]("pointerup",i.onTouchEnd,{passive:!0}),t[a]("pointercancel",i.onTouchEnd,{passive:!0}),t[a]("touchcancel",i.onTouchEnd,{passive:!0}),t[a]("pointerout",i.onTouchEnd,{passive:!0}),t[a]("pointerleave",i.onTouchEnd,{passive:!0}),t[a]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[a]("click",i.onClick,!0),s.cssMode&&n[a]("scroll",i.onScroll),s.updateOnWindowResize?i[f](d.ios||d.android?"resize orientationchange observerUpdate":"resize observerUpdate",_t,!0):i[f]("observerUpdate",_t,!0),r[a]("load",i.onLoad,{capture:!0})};function as(){const i=this,{params:e}=i;i.onTouchStart=Ji.bind(i),i.onTouchMove=es.bind(i),i.onTouchEnd=ts.bind(i),i.onDocumentTouchStart=ns.bind(i),e.cssMode&&(i.onScroll=ss.bind(i)),i.onClick=is.bind(i),i.onLoad=rs.bind(i),Ft(i,"on")}function os(){Ft(this,"off")}var ls={attachEvents:as,detachEvents:os};const zt=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function ps(){const i=this,{realIndex:e,initialized:t,params:s,el:r}=i,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const d=i.getBreakpoint(n,i.params.breakpointsBase,i.el);if(!d||i.currentBreakpoint===d)return;const a=(d in n?n[d]:void 0)||i.originalParams,f=zt(i,s),l=zt(i,a),o=i.params.grabCursor,c=a.grabCursor,m=s.enabled;f&&!l?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!f&&l&&(r.classList.add(`${s.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),o&&!c?i.unsetGrabCursor():!o&&c&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(g=>{if(typeof a[g]>"u")return;const y=s[g]&&s[g].enabled,I=a[g]&&a[g].enabled;y&&!I&&i[g].disable(),!y&&I&&i[g].enable()});const w=a.direction&&a.direction!==s.direction,v=s.loop&&(a.slidesPerView!==s.slidesPerView||w),h=s.loop;w&&t&&i.changeDirection(),ne(i.params,a);const u=i.params.enabled,b=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),m&&!u?i.disable():!m&&u&&i.enable(),i.currentBreakpoint=d,i.emit("_beforeBreakpoint",a),t&&(v?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!h&&b?(i.loopCreate(e),i.updateSlides()):h&&!b&&i.loopDestroy()),i.emit("breakpoint",a)}function ds(i,e,t){if(e===void 0&&(e="window"),!i||e==="container"&&!t)return;let s=!1;const r=U(),n=e==="window"?r.innerHeight:t.clientHeight,d=Object.keys(i).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){const a=parseFloat(p.substr(1));return{value:n*a,point:p}}return{value:p,point:p}});d.sort((p,a)=>parseInt(p.value,10)-parseInt(a.value,10));for(let p=0;p<d.length;p+=1){const{point:a,value:f}=d[p];e==="window"?r.matchMedia(`(min-width: ${f}px)`).matches&&(s=a):f<=t.clientWidth&&(s=a)}return s||"max"}var cs={setBreakpoint:ps,getBreakpoint:ds};function fs(i,e){const t=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&t.push(e+r)}):typeof s=="string"&&t.push(e+s)}),t}function us(){const i=this,{classNames:e,params:t,rtl:s,el:r,device:n}=i,d=fs(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...d),r.classList.add(...e),i.emitContainerClasses()}function ms(){const i=this,{el:e,classNames:t}=i;e.classList.remove(...t),i.emitContainerClasses()}var ws={addClasses:us,removeClasses:ms};function gs(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:s}=t;if(s){const r=i.slides.length-1,n=i.slidesGrid[r]+i.slidesSizesGrid[r]+s*2;i.isLocked=i.size>n}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var hs={checkOverflow:gs},wt={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function vs(i,e){return function(s){s===void 0&&(s={});const r=Object.keys(s)[0],n=s[r];if(typeof n!="object"||n===null){ne(e,s);return}if(i[r]===!0&&(i[r]={enabled:!0}),r==="navigation"&&i[r]&&i[r].enabled&&!i[r].prevEl&&!i[r].nextEl&&(i[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&i[r]&&i[r].enabled&&!i[r].el&&(i[r].auto=!0),!(r in i&&"enabled"in n)){ne(e,s);return}typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),ne(e,s)}}const dt={eventsEmitter:wi,update:Ci,translate:ki,transition:Di,slide:Xi,loop:qi,grabCursor:Zi,events:ls,breakpoints:cs,checkOverflow:hs,classes:ws},ct={};class re{constructor(){let e,t;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=ne({},t),e&&!t.el&&(t.el=e);const d=Q();if(t.el&&typeof t.el=="string"&&d.querySelectorAll(t.el).length>1){const l=[];return d.querySelectorAll(t.el).forEach(o=>{const c=ne({},t,{el:o});l.push(new re(c))}),l}const p=this;p.__swiper__=!0,p.support=Rt(),p.device=Nt({userAgent:t.userAgent}),p.browser=fi(),p.eventsListeners={},p.eventsAnyListeners=[],p.modules=[...p.__modules__],t.modules&&Array.isArray(t.modules)&&p.modules.push(...t.modules);const a={};p.modules.forEach(l=>{l({params:t,swiper:p,extendParams:vs(t,a),on:p.on.bind(p),once:p.once.bind(p),off:p.off.bind(p),emit:p.emit.bind(p)})});const f=ne({},wt,a);return p.params=ne({},f,ct,t),p.originalParams=ne({},p.params),p.passedParams=ne({},t),p.params&&p.params.on&&Object.keys(p.params.on).forEach(l=>{p.on(l,p.params.on[l])}),p.params&&p.params.onAny&&p.onAny(p.params.onAny),Object.assign(p,{enabled:p.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return p.params.direction==="horizontal"},isVertical(){return p.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:p.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),p.emit("_swiper"),p.params.init&&p.init(),p}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,r=Z(t,`.${s.slideClass}, swiper-slide`),n=$e(r[0]);return $e(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:s}=e;e.slides=Z(t,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const r=s.minTranslate(),d=(s.maxTranslate()-r)*e+r;s.translateTo(d,typeof t>"u"?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(s=>{const r=e.getSlideClasses(s);t.push({slideEl:s,classNames:r}),e.emit("_slideClass",s,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const s=this,{params:r,slides:n,slidesGrid:d,slidesSizesGrid:p,size:a,activeIndex:f}=s;let l=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let o=n[f]?Math.ceil(n[f].swiperSlideSize):0,c;for(let m=f+1;m<n.length;m+=1)n[m]&&!c&&(o+=Math.ceil(n[m].swiperSlideSize),l+=1,o>a&&(c=!0));for(let m=f-1;m>=0;m-=1)n[m]&&!c&&(o+=n[m].swiperSlideSize,l+=1,o>a&&(c=!0))}else if(e==="current")for(let o=f+1;o<n.length;o+=1)(t?d[o]+p[o]-d[f]<a:d[o]-d[f]<a)&&(l+=1);else for(let o=f-1;o>=0;o-=1)d[f]-d[o]<a&&(l+=1);return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(d=>{d.complete&&He(e,d)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const d=e.rtlTranslate?e.translate*-1:e.translate,p=Math.min(Math.max(d,e.maxTranslate()),e.minTranslate());e.setTranslate(p),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const d=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(d.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||r()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const s=this,r=s.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let d=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):Z(s,r())[0];return!d&&t.params.createElements&&(d=ae("div",t.params.wrapperClass),s.append(d),Z(s,`.${t.params.slideClass}`).forEach(p=>{d.append(p)})),Object.assign(t,{el:s,wrapperEl:d,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:d,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||fe(s,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||fe(s,"direction")==="rtl"),wrongRTL:fe(d,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?He(t,n):n.addEventListener("load",d=>{He(t,d.target)})}),mt(t),t.initialized=!0,mt(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const s=this,{params:r,el:n,wrapperEl:d,slides:p}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),t&&(s.removeClasses(),n.removeAttribute("style"),d.removeAttribute("style"),p&&p.length&&p.forEach(a=>{a.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(a=>{s.off(a)}),e!==!1&&(s.el.swiper=null,ri(s)),s.destroyed=!0),null}static extendDefaults(e){ne(ct,e)}static get extendedDefaults(){return ct}static get defaults(){return wt}static installModule(e){re.prototype.__modules__||(re.prototype.__modules__=[]);const t=re.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>re.installModule(t)),re):(re.installModule(e),re)}}Object.keys(dt).forEach(i=>{Object.keys(dt[i]).forEach(e=>{re.prototype[e]=dt[i][e]})});re.use([ui,mi]);function bs(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;const d=Q();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const p=d.createElement("div");function a(w,v){const h=e.params.virtual;if(h.cache&&e.virtual.cache[v])return e.virtual.cache[v];let u;return h.renderSlide?(u=h.renderSlide.call(e,w,v),typeof u=="string"&&(p.innerHTML=u,u=p.children[0])):e.isElement?u=ae("swiper-slide"):u=ae("div",e.params.slideClass),u.setAttribute("data-swiper-slide-index",v),h.renderSlide||(u.innerHTML=w),h.cache&&(e.virtual.cache[v]=u),u}function f(w,v){const{slidesPerView:h,slidesPerGroup:u,centeredSlides:b,loop:g,initialSlide:y}=e.params;if(v&&!g&&y>0)return;const{addSlidesBefore:I,addSlidesAfter:_}=e.params.virtual,{from:j,to:M,slides:S,slidesGrid:T,offset:L}=e.virtual;e.params.cssMode||e.updateActiveIndex();const E=e.activeIndex||0;let x;e.rtlTranslate?x="right":x=e.isHorizontal()?"left":"top";let C,A;b?(C=Math.floor(h/2)+u+_,A=Math.floor(h/2)+u+I):(C=h+(u-1)+_,A=(g?h:u)+I);let G=E-A,P=E+C;g||(G=Math.max(G,0),P=Math.min(P,S.length-1));let z=(e.slidesGrid[G]||0)-(e.slidesGrid[0]||0);g&&E>=A?(G-=A,b||(z+=e.slidesGrid[0])):g&&E<A&&(G=-A,b&&(z+=e.slidesGrid[0])),Object.assign(e.virtual,{from:G,to:P,offset:z,slidesGrid:e.slidesGrid,slidesBefore:A,slidesAfter:C});function V(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),r("virtualUpdate")}if(j===G&&M===P&&!w){e.slidesGrid!==T&&z!==L&&e.slides.forEach(H=>{H.style[x]=`${z-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),r("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:z,from:G,to:P,slides:function(){const W=[];for(let ie=G;ie<=P;ie+=1)W.push(S[ie]);return W}()}),e.params.virtual.renderExternalUpdate?V():r("virtualUpdate");return}const X=[],$=[],D=H=>{let W=H;return H<0?W=S.length+H:W>=S.length&&(W=W-S.length),W};if(w)e.slides.filter(H=>H.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(H=>{H.remove()});else for(let H=j;H<=M;H+=1)if(H<G||H>P){const W=D(H);e.slides.filter(ie=>ie.matches(`.${e.params.slideClass}[data-swiper-slide-index="${W}"], swiper-slide[data-swiper-slide-index="${W}"]`)).forEach(ie=>{ie.remove()})}const B=g?-S.length:0,q=g?S.length*2:S.length;for(let H=B;H<q;H+=1)if(H>=G&&H<=P){const W=D(H);typeof M>"u"||w?$.push(W):(H>M&&$.push(W),H<j&&X.push(W))}if($.forEach(H=>{e.slidesEl.append(a(S[H],H))}),g)for(let H=X.length-1;H>=0;H-=1){const W=X[H];e.slidesEl.prepend(a(S[W],W))}else X.sort((H,W)=>W-H),X.forEach(H=>{e.slidesEl.prepend(a(S[H],H))});Z(e.slidesEl,".swiper-slide, swiper-slide").forEach(H=>{H.style[x]=`${z-Math.abs(e.cssOverflowAdjustment())}px`}),V()}function l(w){if(typeof w=="object"&&"length"in w)for(let v=0;v<w.length;v+=1)w[v]&&e.virtual.slides.push(w[v]);else e.virtual.slides.push(w);f(!0)}function o(w){const v=e.activeIndex;let h=v+1,u=1;if(Array.isArray(w)){for(let b=0;b<w.length;b+=1)w[b]&&e.virtual.slides.unshift(w[b]);h=v+w.length,u=w.length}else e.virtual.slides.unshift(w);if(e.params.virtual.cache){const b=e.virtual.cache,g={};Object.keys(b).forEach(y=>{const I=b[y],_=I.getAttribute("data-swiper-slide-index");_&&I.setAttribute("data-swiper-slide-index",parseInt(_,10)+u),g[parseInt(y,10)+u]=I}),e.virtual.cache=g}f(!0),e.slideTo(h,0)}function c(w){if(typeof w>"u"||w===null)return;let v=e.activeIndex;if(Array.isArray(w))for(let h=w.length-1;h>=0;h-=1)e.params.virtual.cache&&(delete e.virtual.cache[w[h]],Object.keys(e.virtual.cache).forEach(u=>{u>w&&(e.virtual.cache[u-1]=e.virtual.cache[u],e.virtual.cache[u-1].setAttribute("data-swiper-slide-index",u-1),delete e.virtual.cache[u])})),e.virtual.slides.splice(w[h],1),w[h]<v&&(v-=1),v=Math.max(v,0);else e.params.virtual.cache&&(delete e.virtual.cache[w],Object.keys(e.virtual.cache).forEach(h=>{h>w&&(e.virtual.cache[h-1]=e.virtual.cache[h],e.virtual.cache[h-1].setAttribute("data-swiper-slide-index",h-1),delete e.virtual.cache[h])})),e.virtual.slides.splice(w,1),w<v&&(v-=1),v=Math.max(v,0);f(!0),e.slideTo(v,0)}function m(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),f(!0),e.slideTo(0,0)}s("beforeInit",()=>{if(!e.params.virtual.enabled)return;let w;if(typeof e.passedParams.virtual.slides>"u"){const v=[...e.slidesEl.children].filter(h=>h.matches(`.${e.params.slideClass}, swiper-slide`));v&&v.length&&(e.virtual.slides=[...v],w=!0,v.forEach((h,u)=>{h.setAttribute("data-swiper-slide-index",u),e.virtual.cache[u]=h,h.remove()}))}w||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,f(!1,!0)}),s("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{f()},100)):f())}),s("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&Ie(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:l,prependSlide:o,removeSlide:c,removeAllSlides:m,update:f})}function ys(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=Q(),d=U();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(l){if(!e.enabled)return;const{rtlTranslate:o}=e;let c=l;c.originalEvent&&(c=c.originalEvent);const m=c.keyCode||c.charCode,w=e.params.keyboard.pageUpDown,v=w&&m===33,h=w&&m===34,u=m===37,b=m===39,g=m===38,y=m===40;if(!e.allowSlideNext&&(e.isHorizontal()&&b||e.isVertical()&&y||h)||!e.allowSlidePrev&&(e.isHorizontal()&&u||e.isVertical()&&g||v))return!1;if(!(c.shiftKey||c.altKey||c.ctrlKey||c.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(v||h||u||b||g||y)){let I=!1;if(me(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&me(e.el,`.${e.params.slideActiveClass}`).length===0)return;const _=e.el,j=_.clientWidth,M=_.clientHeight,S=d.innerWidth,T=d.innerHeight,L=Xe(_);o&&(L.left-=_.scrollLeft);const E=[[L.left,L.top],[L.left+j,L.top],[L.left,L.top+M],[L.left+j,L.top+M]];for(let x=0;x<E.length;x+=1){const C=E[x];if(C[0]>=0&&C[0]<=S&&C[1]>=0&&C[1]<=T){if(C[0]===0&&C[1]===0)continue;I=!0}}if(!I)return}e.isHorizontal()?((v||h||u||b)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),((h||b)&&!o||(v||u)&&o)&&e.slideNext(),((v||u)&&!o||(h||b)&&o)&&e.slidePrev()):((v||h||g||y)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),(h||y)&&e.slideNext(),(v||g)&&e.slidePrev()),r("keyPress",m)}}function a(){e.keyboard.enabled||(n.addEventListener("keydown",p),e.keyboard.enabled=!0)}function f(){e.keyboard.enabled&&(n.removeEventListener("keydown",p),e.keyboard.enabled=!1)}s("init",()=>{e.params.keyboard.enabled&&a()}),s("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:a,disable:f})}function Ss(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=U();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let d,p=oe(),a;const f=[];function l(g){let j=0,M=0,S=0,T=0;return"detail"in g&&(M=g.detail),"wheelDelta"in g&&(M=-g.wheelDelta/120),"wheelDeltaY"in g&&(M=-g.wheelDeltaY/120),"wheelDeltaX"in g&&(j=-g.wheelDeltaX/120),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(j=M,M=0),S=j*10,T=M*10,"deltaY"in g&&(T=g.deltaY),"deltaX"in g&&(S=g.deltaX),g.shiftKey&&!S&&(S=T,T=0),(S||T)&&g.deltaMode&&(g.deltaMode===1?(S*=40,T*=40):(S*=800,T*=800)),S&&!j&&(j=S<1?-1:1),T&&!M&&(M=T<1?-1:1),{spinX:j,spinY:M,pixelX:S,pixelY:T}}function o(){e.enabled&&(e.mouseEntered=!0)}function c(){e.enabled&&(e.mouseEntered=!1)}function m(g){return e.params.mousewheel.thresholdDelta&&g.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&oe()-p<e.params.mousewheel.thresholdTime?!1:g.delta>=6&&oe()-p<60?!0:(g.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),r("scroll",g.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),r("scroll",g.raw)),p=new n.Date().getTime(),!1)}function w(g){const y=e.params.mousewheel;if(g.direction<0){if(e.isEnd&&!e.params.loop&&y.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&y.releaseOnEdges)return!0;return!1}function v(g){let y=g,I=!0;if(!e.enabled||g.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const _=e.params.mousewheel;e.params.cssMode&&y.preventDefault();let j=e.el;e.params.mousewheel.eventsTarget!=="container"&&(j=document.querySelector(e.params.mousewheel.eventsTarget));const M=j&&j.contains(y.target);if(!e.mouseEntered&&!M&&!_.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let S=0;const T=e.rtlTranslate?-1:1,L=l(y);if(_.forceToAxis)if(e.isHorizontal())if(Math.abs(L.pixelX)>Math.abs(L.pixelY))S=-L.pixelX*T;else return!0;else if(Math.abs(L.pixelY)>Math.abs(L.pixelX))S=-L.pixelY;else return!0;else S=Math.abs(L.pixelX)>Math.abs(L.pixelY)?-L.pixelX*T:-L.pixelY;if(S===0)return!0;_.invert&&(S=-S);let E=e.getTranslate()+S*_.sensitivity;if(E>=e.minTranslate()&&(E=e.minTranslate()),E<=e.maxTranslate()&&(E=e.maxTranslate()),I=e.params.loop?!0:!(E===e.minTranslate()||E===e.maxTranslate()),I&&e.params.nested&&y.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const x={time:oe(),delta:Math.abs(S),direction:Math.sign(S),raw:g};f.length>=2&&f.shift();const C=f.length?f[f.length-1]:void 0;if(f.push(x),C?(x.direction!==C.direction||x.delta>C.delta||x.time>C.time+150)&&m(x):m(x),w(x))return!0}else{const x={time:oe(),delta:Math.abs(S),direction:Math.sign(S)},C=a&&x.time<a.time+500&&x.delta<=a.delta&&x.direction===a.direction;if(!C){a=void 0;let A=e.getTranslate()+S*_.sensitivity;const G=e.isBeginning,P=e.isEnd;if(A>=e.minTranslate()&&(A=e.minTranslate()),A<=e.maxTranslate()&&(A=e.maxTranslate()),e.setTransition(0),e.setTranslate(A),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!G&&e.isBeginning||!P&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:x.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(d),d=void 0,f.length>=15&&f.shift();const z=f.length?f[f.length-1]:void 0,V=f[0];if(f.push(x),z&&(x.delta>z.delta||x.direction!==z.direction))f.splice(0);else if(f.length>=15&&x.time-V.time<500&&V.delta-x.delta>=1&&x.delta<=6){const X=S>0?.8:.2;a=x,f.splice(0),d=we(()=>{e.slideToClosest(e.params.speed,!0,void 0,X)},0)}d||(d=we(()=>{a=x,f.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(C||r("scroll",y),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),_.releaseOnEdges&&(A===e.minTranslate()||A===e.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function h(g){let y=e.el;e.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(e.params.mousewheel.eventsTarget)),y[g]("mouseenter",o),y[g]("mouseleave",c),y[g]("wheel",v)}function u(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",v),!0):e.mousewheel.enabled?!1:(h("addEventListener"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,v),!0):e.mousewheel.enabled?(h("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}s("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&u()}),s("destroy",()=>{e.params.cssMode&&u(),e.mousewheel.enabled&&b()}),Object.assign(e.mousewheel,{enable:u,disable:b})}function yt(i,e,t,s){return i.params.createElements&&Object.keys(s).forEach(r=>{if(!t[r]&&t.auto===!0){let n=Z(i.el,`.${s[r]}`)[0];n||(n=ae("div",s[r]),n.className=s[r],i.el.append(n)),t[r]=n,e[r]=n}}),t}function xs(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function n(w){let v;return w&&typeof w=="string"&&e.isElement&&(v=e.el.querySelector(w),v)?v:(w&&(typeof w=="string"&&(v=[...document.querySelectorAll(w)]),e.params.uniqueNavElements&&typeof w=="string"&&v&&v.length>1&&e.el.querySelectorAll(w).length===1?v=e.el.querySelector(w):v&&v.length===1&&(v=v[0])),w&&!v?w:v)}function d(w,v){const h=e.params.navigation;w=Y(w),w.forEach(u=>{u&&(u.classList[v?"add":"remove"](...h.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=v),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](h.lockClass))})}function p(){const{nextEl:w,prevEl:v}=e.navigation;if(e.params.loop){d(v,!1),d(w,!1);return}d(v,e.isBeginning&&!e.params.rewind),d(w,e.isEnd&&!e.params.rewind)}function a(w){w.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function f(w){w.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function l(){const w=e.params.navigation;if(e.params.navigation=yt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(w.nextEl||w.prevEl))return;let v=n(w.nextEl),h=n(w.prevEl);Object.assign(e.navigation,{nextEl:v,prevEl:h}),v=Y(v),h=Y(h);const u=(b,g)=>{b&&b.addEventListener("click",g==="next"?f:a),!e.enabled&&b&&b.classList.add(...w.lockClass.split(" "))};v.forEach(b=>u(b,"next")),h.forEach(b=>u(b,"prev"))}function o(){let{nextEl:w,prevEl:v}=e.navigation;w=Y(w),v=Y(v);const h=(u,b)=>{u.removeEventListener("click",b==="next"?f:a),u.classList.remove(...e.params.navigation.disabledClass.split(" "))};w.forEach(u=>h(u,"next")),v.forEach(u=>h(u,"prev"))}s("init",()=>{e.params.navigation.enabled===!1?m():(l(),p())}),s("toEdge fromEdge lock unlock",()=>{p()}),s("destroy",()=>{o()}),s("enable disable",()=>{let{nextEl:w,prevEl:v}=e.navigation;if(w=Y(w),v=Y(v),e.enabled){p();return}[...w,...v].filter(h=>!!h).forEach(h=>h.classList.add(e.params.navigation.lockClass))}),s("click",(w,v)=>{let{nextEl:h,prevEl:u}=e.navigation;h=Y(h),u=Y(u);const b=v.target;if(e.params.navigation.hideOnClick&&!u.includes(b)&&!h.includes(b)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let g;h.length?g=h[0].classList.contains(e.params.navigation.hiddenClass):u.length&&(g=u[0].classList.contains(e.params.navigation.hiddenClass)),r(g===!0?"navigationShow":"navigationHide"),[...h,...u].filter(y=>!!y).forEach(y=>y.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),l(),p()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),o()};Object.assign(e.navigation,{enable:c,disable:m,update:p,init:l,destroy:o})}function de(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Es(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let d,p=0;function a(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function f(u,b){const{bulletActiveClass:g}=e.params.pagination;u&&(u=u[`${b==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${g}-${b}`),u=u[`${b==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${g}-${b}-${b}`)))}function l(u){const b=u.target.closest(de(e.params.pagination.bulletClass));if(!b)return;u.preventDefault();const g=$e(b)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===g)return;e.slideToLoop(g)}else e.slideTo(g)}function o(){const u=e.rtl,b=e.params.pagination;if(a())return;let g=e.pagination.el;g=Y(g);let y,I;const _=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,j=e.params.loop?Math.ceil(_/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(I=e.previousRealIndex||0,y=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(y=e.snapIndex,I=e.previousSnapIndex):(I=e.previousIndex||0,y=e.activeIndex||0),b.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const M=e.pagination.bullets;let S,T,L;if(b.dynamicBullets&&(d=ut(M[0],e.isHorizontal()?"width":"height",!0),g.forEach(E=>{E.style[e.isHorizontal()?"width":"height"]=`${d*(b.dynamicMainBullets+4)}px`}),b.dynamicMainBullets>1&&I!==void 0&&(p+=y-(I||0),p>b.dynamicMainBullets-1?p=b.dynamicMainBullets-1:p<0&&(p=0)),S=Math.max(y-p,0),T=S+(Math.min(M.length,b.dynamicMainBullets)-1),L=(T+S)/2),M.forEach(E=>{const x=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${b.bulletActiveClass}${C}`)].map(C=>typeof C=="string"&&C.includes(" ")?C.split(" "):C).flat();E.classList.remove(...x)}),g.length>1)M.forEach(E=>{const x=$e(E);x===y?E.classList.add(...b.bulletActiveClass.split(" ")):e.isElement&&E.setAttribute("part","bullet"),b.dynamicBullets&&(x>=S&&x<=T&&E.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),x===S&&f(E,"prev"),x===T&&f(E,"next"))});else{const E=M[y];if(E&&E.classList.add(...b.bulletActiveClass.split(" ")),e.isElement&&M.forEach((x,C)=>{x.setAttribute("part",C===y?"bullet-active":"bullet")}),b.dynamicBullets){const x=M[S],C=M[T];for(let A=S;A<=T;A+=1)M[A]&&M[A].classList.add(...`${b.bulletActiveClass}-main`.split(" "));f(x,"prev"),f(C,"next")}}if(b.dynamicBullets){const E=Math.min(M.length,b.dynamicMainBullets+4),x=(d*E-d)/2-L*d,C=u?"right":"left";M.forEach(A=>{A.style[e.isHorizontal()?C:"top"]=`${x}px`})}}g.forEach((M,S)=>{if(b.type==="fraction"&&(M.querySelectorAll(de(b.currentClass)).forEach(T=>{T.textContent=b.formatFractionCurrent(y+1)}),M.querySelectorAll(de(b.totalClass)).forEach(T=>{T.textContent=b.formatFractionTotal(j)})),b.type==="progressbar"){let T;b.progressbarOpposite?T=e.isHorizontal()?"vertical":"horizontal":T=e.isHorizontal()?"horizontal":"vertical";const L=(y+1)/j;let E=1,x=1;T==="horizontal"?E=L:x=L,M.querySelectorAll(de(b.progressbarFillClass)).forEach(C=>{C.style.transform=`translate3d(0,0,0) scaleX(${E}) scaleY(${x})`,C.style.transitionDuration=`${e.params.speed}ms`})}b.type==="custom"&&b.renderCustom?(M.innerHTML=b.renderCustom(e,y+1,j),S===0&&r("paginationRender",M)):(S===0&&r("paginationRender",M),r("paginationUpdate",M)),e.params.watchOverflow&&e.enabled&&M.classList[e.isLocked?"add":"remove"](b.lockClass)})}function c(){const u=e.params.pagination;if(a())return;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let g=e.pagination.el;g=Y(g);let y="";if(u.type==="bullets"){let I=e.params.loop?Math.ceil(b/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&I>b&&(I=b);for(let _=0;_<I;_+=1)u.renderBullet?y+=u.renderBullet.call(e,_,u.bulletClass):y+=`<${u.bulletElement} ${e.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?y=u.renderFraction.call(e,u.currentClass,u.totalClass):y=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?y=u.renderProgressbar.call(e,u.progressbarFillClass):y=`<span class="${u.progressbarFillClass}"></span>`),e.pagination.bullets=[],g.forEach(I=>{u.type!=="custom"&&(I.innerHTML=y||""),u.type==="bullets"&&e.pagination.bullets.push(...I.querySelectorAll(de(u.bulletClass)))}),u.type!=="custom"&&r("paginationRender",g[0])}function m(){e.params.pagination=yt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const u=e.params.pagination;if(!u.el)return;let b;typeof u.el=="string"&&e.isElement&&(b=e.el.querySelector(u.el)),!b&&typeof u.el=="string"&&(b=[...document.querySelectorAll(u.el)]),b||(b=u.el),!(!b||b.length===0)&&(e.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(b)&&b.length>1&&(b=[...e.el.querySelectorAll(u.el)],b.length>1&&(b=b.filter(g=>me(g,".swiper")[0]===e.el)[0])),Array.isArray(b)&&b.length===1&&(b=b[0]),Object.assign(e.pagination,{el:b}),b=Y(b),b.forEach(g=>{u.type==="bullets"&&u.clickable&&g.classList.add(...(u.clickableClass||"").split(" ")),g.classList.add(u.modifierClass+u.type),g.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(g.classList.add(`${u.modifierClass}${u.type}-dynamic`),p=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&g.classList.add(u.progressbarOppositeClass),u.clickable&&g.addEventListener("click",l),e.enabled||g.classList.add(u.lockClass)}))}function w(){const u=e.params.pagination;if(a())return;let b=e.pagination.el;b&&(b=Y(b),b.forEach(g=>{g.classList.remove(u.hiddenClass),g.classList.remove(u.modifierClass+u.type),g.classList.remove(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(g.classList.remove(...(u.clickableClass||"").split(" ")),g.removeEventListener("click",l))})),e.pagination.bullets&&e.pagination.bullets.forEach(g=>g.classList.remove(...u.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const u=e.params.pagination;let{el:b}=e.pagination;b=Y(b),b.forEach(g=>{g.classList.remove(u.horizontalClass,u.verticalClass),g.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?h():(m(),c(),o())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&o()}),s("snapIndexChange",()=>{o()}),s("snapGridLengthChange",()=>{c(),o()}),s("destroy",()=>{w()}),s("enable disable",()=>{let{el:u}=e.pagination;u&&(u=Y(u),u.forEach(b=>b.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{o()}),s("click",(u,b)=>{const g=b.target,y=Y(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&y&&y.length>0&&!g.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&g===e.navigation.nextEl||e.navigation.prevEl&&g===e.navigation.prevEl))return;const I=y[0].classList.contains(e.params.pagination.hiddenClass);r(I===!0?"paginationShow":"paginationHide"),y.forEach(_=>_.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:u}=e.pagination;u&&(u=Y(u),u.forEach(b=>b.classList.remove(e.params.pagination.paginationDisabledClass))),m(),c(),o()},h=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:u}=e.pagination;u&&(u=Y(u),u.forEach(b=>b.classList.add(e.params.pagination.paginationDisabledClass))),w()};Object.assign(e.pagination,{enable:v,disable:h,render:c,update:o,init:m,destroy:w})}function Ts(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=Q();let d=!1,p=null,a=null,f,l,o,c;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function m(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E,rtlTranslate:x}=e,{dragEl:C,el:A}=E,G=e.params.scrollbar,P=e.params.loop?e.progressLoop:e.progress;let z=l,V=(o-l)*P;x?(V=-V,V>0?(z=l-V,V=0):-V+l>o&&(z=o+V)):V<0?(z=l+V,V=0):V+l>o&&(z=o-V),e.isHorizontal()?(C.style.transform=`translate3d(${V}px, 0, 0)`,C.style.width=`${z}px`):(C.style.transform=`translate3d(0px, ${V}px, 0)`,C.style.height=`${z}px`),G.hide&&(clearTimeout(p),A.style.opacity=1,p=setTimeout(()=>{A.style.opacity=0,A.style.transitionDuration="400ms"},1e3))}function w(E){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${E}ms`)}function v(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E}=e,{dragEl:x,el:C}=E;x.style.width="",x.style.height="",o=e.isHorizontal()?C.offsetWidth:C.offsetHeight,c=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?l=o*c:l=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?x.style.width=`${l}px`:x.style.height=`${l}px`,c>=1?C.style.display="none":C.style.display="",e.params.scrollbar.hide&&(C.style.opacity=0),e.params.watchOverflow&&e.enabled&&E.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function h(E){return e.isHorizontal()?E.clientX:E.clientY}function u(E){const{scrollbar:x,rtlTranslate:C}=e,{el:A}=x;let G;G=(h(E)-Xe(A)[e.isHorizontal()?"left":"top"]-(f!==null?f:l/2))/(o-l),G=Math.max(Math.min(G,1),0),C&&(G=1-G);const P=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*G;e.updateProgress(P),e.setTranslate(P),e.updateActiveIndex(),e.updateSlidesClasses()}function b(E){const x=e.params.scrollbar,{scrollbar:C,wrapperEl:A}=e,{el:G,dragEl:P}=C;d=!0,f=E.target===P?h(E)-E.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,E.preventDefault(),E.stopPropagation(),A.style.transitionDuration="100ms",P.style.transitionDuration="100ms",u(E),clearTimeout(a),G.style.transitionDuration="0ms",x.hide&&(G.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",E)}function g(E){const{scrollbar:x,wrapperEl:C}=e,{el:A,dragEl:G}=x;d&&(E.preventDefault&&E.cancelable?E.preventDefault():E.returnValue=!1,u(E),C.style.transitionDuration="0ms",A.style.transitionDuration="0ms",G.style.transitionDuration="0ms",r("scrollbarDragMove",E))}function y(E){const x=e.params.scrollbar,{scrollbar:C,wrapperEl:A}=e,{el:G}=C;d&&(d=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",A.style.transitionDuration=""),x.hide&&(clearTimeout(a),a=we(()=>{G.style.opacity=0,G.style.transitionDuration="400ms"},1e3)),r("scrollbarDragEnd",E),x.snapOnRelease&&e.slideToClosest())}function I(E){const{scrollbar:x,params:C}=e,A=x.el;if(!A)return;const G=A,P=C.passiveListeners?{passive:!1,capture:!1}:!1,z=C.passiveListeners?{passive:!0,capture:!1}:!1;if(!G)return;const V=E==="on"?"addEventListener":"removeEventListener";G[V]("pointerdown",b,P),n[V]("pointermove",g,P),n[V]("pointerup",y,z)}function _(){!e.params.scrollbar.el||!e.scrollbar.el||I("on")}function j(){!e.params.scrollbar.el||!e.scrollbar.el||I("off")}function M(){const{scrollbar:E,el:x}=e;e.params.scrollbar=yt(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const C=e.params.scrollbar;if(!C.el)return;let A;if(typeof C.el=="string"&&e.isElement&&(A=e.el.querySelector(C.el)),!A&&typeof C.el=="string"){if(A=n.querySelectorAll(C.el),!A.length)return}else A||(A=C.el);e.params.uniqueNavElements&&typeof C.el=="string"&&A.length>1&&x.querySelectorAll(C.el).length===1&&(A=x.querySelector(C.el)),A.length>0&&(A=A[0]),A.classList.add(e.isHorizontal()?C.horizontalClass:C.verticalClass);let G;A&&(G=A.querySelector(de(e.params.scrollbar.dragClass)),G||(G=ae("div",e.params.scrollbar.dragClass),A.append(G))),Object.assign(E,{el:A,dragEl:G}),C.draggable&&_(),A&&A.classList[e.enabled?"remove":"add"](...ce(e.params.scrollbar.lockClass))}function S(){const E=e.params.scrollbar,x=e.scrollbar.el;x&&x.classList.remove(...ce(e.isHorizontal()?E.horizontalClass:E.verticalClass)),j()}s("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const E=e.params.scrollbar;let{el:x}=e.scrollbar;x=Y(x),x.forEach(C=>{C.classList.remove(E.horizontalClass,E.verticalClass),C.classList.add(e.isHorizontal()?E.horizontalClass:E.verticalClass)})}),s("init",()=>{e.params.scrollbar.enabled===!1?L():(M(),v(),m())}),s("update resize observerUpdate lock unlock changeDirection",()=>{v()}),s("setTranslate",()=>{m()}),s("setTransition",(E,x)=>{w(x)}),s("enable disable",()=>{const{el:E}=e.scrollbar;E&&E.classList[e.enabled?"remove":"add"](...ce(e.params.scrollbar.lockClass))}),s("destroy",()=>{S()});const T=()=>{e.el.classList.remove(...ce(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...ce(e.params.scrollbar.scrollbarDisabledClass)),M(),v(),m()},L=()=>{e.el.classList.add(...ce(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...ce(e.params.scrollbar.scrollbarDisabledClass)),S()};Object.assign(e.scrollbar,{enable:T,disable:L,updateSize:v,setTranslate:m,init:M,destroy:S})}function Ms(i){let{swiper:e,extendParams:t,on:s}=i;t({parallax:{enabled:!1}});const r="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",n=(a,f)=>{const{rtl:l}=e,o=l?-1:1,c=a.getAttribute("data-swiper-parallax")||"0";let m=a.getAttribute("data-swiper-parallax-x"),w=a.getAttribute("data-swiper-parallax-y");const v=a.getAttribute("data-swiper-parallax-scale"),h=a.getAttribute("data-swiper-parallax-opacity"),u=a.getAttribute("data-swiper-parallax-rotate");if(m||w?(m=m||"0",w=w||"0"):e.isHorizontal()?(m=c,w="0"):(w=c,m="0"),m.indexOf("%")>=0?m=`${parseInt(m,10)*f*o}%`:m=`${m*f*o}px`,w.indexOf("%")>=0?w=`${parseInt(w,10)*f}%`:w=`${w*f}px`,typeof h<"u"&&h!==null){const g=h-(h-1)*(1-Math.abs(f));a.style.opacity=g}let b=`translate3d(${m}, ${w}, 0px)`;if(typeof v<"u"&&v!==null){const g=v-(v-1)*(1-Math.abs(f));b+=` scale(${g})`}if(u&&typeof u<"u"&&u!==null){const g=u*f*-1;b+=` rotate(${g}deg)`}a.style.transform=b},d=()=>{const{el:a,slides:f,progress:l,snapGrid:o,isElement:c}=e,m=Z(a,r);e.isElement&&m.push(...Z(e.hostEl,r)),m.forEach(w=>{n(w,l)}),f.forEach((w,v)=>{let h=w.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(h+=Math.ceil(v/2)-l*(o.length-1)),h=Math.min(Math.max(h,-1),1),w.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach(u=>{n(u,h)})})},p=function(a){a===void 0&&(a=e.params.speed);const{el:f,hostEl:l}=e,o=[...f.querySelectorAll(r)];e.isElement&&o.push(...l.querySelectorAll(r)),o.forEach(c=>{let m=parseInt(c.getAttribute("data-swiper-parallax-duration"),10)||a;a===0&&(m=0),c.style.transitionDuration=`${m}ms`})};s("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),s("init",()=>{e.params.parallax.enabled&&d()}),s("setTranslate",()=>{e.params.parallax.enabled&&d()}),s("setTransition",(a,f)=>{e.params.parallax.enabled&&p(f)})}function Cs(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=U();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let d=1,p=!1,a,f;const l=[],o={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},c={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},m={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let w=1;Object.defineProperty(e.zoom,"scale",{get(){return w},set($){if(w!==$){const D=o.imageEl,B=o.slideEl;r("zoomChange",$,D,B)}w=$}});function v(){if(l.length<2)return 1;const $=l[0].pageX,D=l[0].pageY,B=l[1].pageX,q=l[1].pageY;return Math.sqrt((B-$)**2+(q-D)**2)}function h(){const $=e.params.zoom,D=o.imageWrapEl.getAttribute("data-swiper-zoom")||$.maxRatio;if($.limitToOriginalSize&&o.imageEl&&o.imageEl.naturalWidth){const B=o.imageEl.naturalWidth/o.imageEl.offsetWidth;return Math.min(B,D)}return D}function u(){if(l.length<2)return{x:null,y:null};const $=o.imageEl.getBoundingClientRect();return[(l[0].pageX+(l[1].pageX-l[0].pageX)/2-$.x-n.scrollX)/d,(l[0].pageY+(l[1].pageY-l[0].pageY)/2-$.y-n.scrollY)/d]}function b(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function g($){const D=b();return!!($.target.matches(D)||e.slides.filter(B=>B.contains($.target)).length>0)}function y($){const D=`.${e.params.zoom.containerClass}`;return!!($.target.matches(D)||[...e.hostEl.querySelectorAll(D)].filter(B=>B.contains($.target)).length>0)}function I($){if($.pointerType==="mouse"&&l.splice(0,l.length),!g($))return;const D=e.params.zoom;if(a=!1,f=!1,l.push($),!(l.length<2)){if(a=!0,o.scaleStart=v(),!o.slideEl){o.slideEl=$.target.closest(`.${e.params.slideClass}, swiper-slide`),o.slideEl||(o.slideEl=e.slides[e.activeIndex]);let B=o.slideEl.querySelector(`.${D.containerClass}`);if(B&&(B=B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),o.imageEl=B,B?o.imageWrapEl=me(o.imageEl,`.${D.containerClass}`)[0]:o.imageWrapEl=void 0,!o.imageWrapEl){o.imageEl=void 0;return}o.maxRatio=h()}if(o.imageEl){const[B,q]=u();o.originX=B,o.originY=q,o.imageEl.style.transitionDuration="0ms"}p=!0}}function _($){if(!g($))return;const D=e.params.zoom,B=e.zoom,q=l.findIndex(H=>H.pointerId===$.pointerId);q>=0&&(l[q]=$),!(l.length<2)&&(f=!0,o.scaleMove=v(),o.imageEl&&(B.scale=o.scaleMove/o.scaleStart*d,B.scale>o.maxRatio&&(B.scale=o.maxRatio-1+(B.scale-o.maxRatio+1)**.5),B.scale<D.minRatio&&(B.scale=D.minRatio+1-(D.minRatio-B.scale+1)**.5),o.imageEl.style.transform=`translate3d(0,0,0) scale(${B.scale})`))}function j($){if(!g($)||$.pointerType==="mouse"&&$.type==="pointerout")return;const D=e.params.zoom,B=e.zoom,q=l.findIndex(H=>H.pointerId===$.pointerId);q>=0&&l.splice(q,1),!(!a||!f)&&(a=!1,f=!1,o.imageEl&&(B.scale=Math.max(Math.min(B.scale,o.maxRatio),D.minRatio),o.imageEl.style.transitionDuration=`${e.params.speed}ms`,o.imageEl.style.transform=`translate3d(0,0,0) scale(${B.scale})`,d=B.scale,p=!1,B.scale>1&&o.slideEl?o.slideEl.classList.add(`${D.zoomedSlideClass}`):B.scale<=1&&o.slideEl&&o.slideEl.classList.remove(`${D.zoomedSlideClass}`),B.scale===1&&(o.originX=0,o.originY=0,o.slideEl=void 0)))}let M;function S(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function T(){clearTimeout(M),e.touchEventsData.preventTouchMoveFromPointerMove=!0,M=setTimeout(()=>{S()})}function L($){const D=e.device;if(!o.imageEl||c.isTouched)return;D.android&&$.cancelable&&$.preventDefault(),c.isTouched=!0;const B=l.length>0?l[0]:$;c.touchesStart.x=B.pageX,c.touchesStart.y=B.pageY}function E($){if(!g($)||!y($))return;const D=e.zoom;if(!o.imageEl||!c.isTouched||!o.slideEl)return;c.isMoved||(c.width=o.imageEl.offsetWidth||o.imageEl.clientWidth,c.height=o.imageEl.offsetHeight||o.imageEl.clientHeight,c.startX=ft(o.imageWrapEl,"x")||0,c.startY=ft(o.imageWrapEl,"y")||0,o.slideWidth=o.slideEl.offsetWidth,o.slideHeight=o.slideEl.offsetHeight,o.imageWrapEl.style.transitionDuration="0ms");const B=c.width*D.scale,q=c.height*D.scale;if(B<o.slideWidth&&q<o.slideHeight){S();return}if(c.minX=Math.min(o.slideWidth/2-B/2,0),c.maxX=-c.minX,c.minY=Math.min(o.slideHeight/2-q/2,0),c.maxY=-c.minY,c.touchesCurrent.x=l.length>0?l[0].pageX:$.pageX,c.touchesCurrent.y=l.length>0?l[0].pageY:$.pageY,Math.max(Math.abs(c.touchesCurrent.x-c.touchesStart.x),Math.abs(c.touchesCurrent.y-c.touchesStart.y))>5&&(e.allowClick=!1),!c.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(c.minX)===Math.floor(c.startX)&&c.touchesCurrent.x<c.touchesStart.x||Math.floor(c.maxX)===Math.floor(c.startX)&&c.touchesCurrent.x>c.touchesStart.x)){c.isTouched=!1,S();return}if(!e.isHorizontal()&&(Math.floor(c.minY)===Math.floor(c.startY)&&c.touchesCurrent.y<c.touchesStart.y||Math.floor(c.maxY)===Math.floor(c.startY)&&c.touchesCurrent.y>c.touchesStart.y)){c.isTouched=!1,S();return}}$.cancelable&&$.preventDefault(),$.stopPropagation(),T(),c.isMoved=!0;const W=(D.scale-d)/(o.maxRatio-e.params.zoom.minRatio),{originX:ie,originY:he}=o;c.currentX=c.touchesCurrent.x-c.touchesStart.x+c.startX+W*(c.width-ie*2),c.currentY=c.touchesCurrent.y-c.touchesStart.y+c.startY+W*(c.height-he*2),c.currentX<c.minX&&(c.currentX=c.minX+1-(c.minX-c.currentX+1)**.8),c.currentX>c.maxX&&(c.currentX=c.maxX-1+(c.currentX-c.maxX+1)**.8),c.currentY<c.minY&&(c.currentY=c.minY+1-(c.minY-c.currentY+1)**.8),c.currentY>c.maxY&&(c.currentY=c.maxY-1+(c.currentY-c.maxY+1)**.8),m.prevPositionX||(m.prevPositionX=c.touchesCurrent.x),m.prevPositionY||(m.prevPositionY=c.touchesCurrent.y),m.prevTime||(m.prevTime=Date.now()),m.x=(c.touchesCurrent.x-m.prevPositionX)/(Date.now()-m.prevTime)/2,m.y=(c.touchesCurrent.y-m.prevPositionY)/(Date.now()-m.prevTime)/2,Math.abs(c.touchesCurrent.x-m.prevPositionX)<2&&(m.x=0),Math.abs(c.touchesCurrent.y-m.prevPositionY)<2&&(m.y=0),m.prevPositionX=c.touchesCurrent.x,m.prevPositionY=c.touchesCurrent.y,m.prevTime=Date.now(),o.imageWrapEl.style.transform=`translate3d(${c.currentX}px, ${c.currentY}px,0)`}function x(){const $=e.zoom;if(!o.imageEl)return;if(!c.isTouched||!c.isMoved){c.isTouched=!1,c.isMoved=!1;return}c.isTouched=!1,c.isMoved=!1;let D=300,B=300;const q=m.x*D,H=c.currentX+q,W=m.y*B,ie=c.currentY+W;m.x!==0&&(D=Math.abs((H-c.currentX)/m.x)),m.y!==0&&(B=Math.abs((ie-c.currentY)/m.y));const he=Math.max(D,B);c.currentX=H,c.currentY=ie;const Ve=c.width*$.scale,pe=c.height*$.scale;c.minX=Math.min(o.slideWidth/2-Ve/2,0),c.maxX=-c.minX,c.minY=Math.min(o.slideHeight/2-pe/2,0),c.maxY=-c.minY,c.currentX=Math.max(Math.min(c.currentX,c.maxX),c.minX),c.currentY=Math.max(Math.min(c.currentY,c.maxY),c.minY),o.imageWrapEl.style.transitionDuration=`${he}ms`,o.imageWrapEl.style.transform=`translate3d(${c.currentX}px, ${c.currentY}px,0)`}function C(){const $=e.zoom;o.slideEl&&e.activeIndex!==e.slides.indexOf(o.slideEl)&&(o.imageEl&&(o.imageEl.style.transform="translate3d(0,0,0) scale(1)"),o.imageWrapEl&&(o.imageWrapEl.style.transform="translate3d(0,0,0)"),o.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),$.scale=1,d=1,o.slideEl=void 0,o.imageEl=void 0,o.imageWrapEl=void 0,o.originX=0,o.originY=0)}function A($){const D=e.zoom,B=e.params.zoom;if(!o.slideEl){$&&$.target&&(o.slideEl=$.target.closest(`.${e.params.slideClass}, swiper-slide`)),o.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?o.slideEl=Z(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:o.slideEl=e.slides[e.activeIndex]);let Ee=o.slideEl.querySelector(`.${B.containerClass}`);Ee&&(Ee=Ee.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),o.imageEl=Ee,Ee?o.imageWrapEl=me(o.imageEl,`.${B.containerClass}`)[0]:o.imageWrapEl=void 0}if(!o.imageEl||!o.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),o.slideEl.classList.add(`${B.zoomedSlideClass}`);let q,H,W,ie,he,Ve,pe,ue,xt,Et,Tt,Mt,Be,Ge,et,tt,it,st;typeof c.touchesStart.x>"u"&&$?(q=$.pageX,H=$.pageY):(q=c.touchesStart.x,H=c.touchesStart.y);const xe=typeof $=="number"?$:null;d===1&&xe&&(q=void 0,H=void 0);const Ct=h();D.scale=xe||Ct,d=xe||Ct,$&&!(d===1&&xe)?(it=o.slideEl.offsetWidth,st=o.slideEl.offsetHeight,W=Xe(o.slideEl).left+n.scrollX,ie=Xe(o.slideEl).top+n.scrollY,he=W+it/2-q,Ve=ie+st/2-H,xt=o.imageEl.offsetWidth||o.imageEl.clientWidth,Et=o.imageEl.offsetHeight||o.imageEl.clientHeight,Tt=xt*D.scale,Mt=Et*D.scale,Be=Math.min(it/2-Tt/2,0),Ge=Math.min(st/2-Mt/2,0),et=-Be,tt=-Ge,pe=he*D.scale,ue=Ve*D.scale,pe<Be&&(pe=Be),pe>et&&(pe=et),ue<Ge&&(ue=Ge),ue>tt&&(ue=tt)):(pe=0,ue=0),xe&&D.scale===1&&(o.originX=0,o.originY=0),o.imageWrapEl.style.transitionDuration="300ms",o.imageWrapEl.style.transform=`translate3d(${pe}px, ${ue}px,0)`,o.imageEl.style.transitionDuration="300ms",o.imageEl.style.transform=`translate3d(0,0,0) scale(${D.scale})`}function G(){const $=e.zoom,D=e.params.zoom;if(!o.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?o.slideEl=Z(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:o.slideEl=e.slides[e.activeIndex];let B=o.slideEl.querySelector(`.${D.containerClass}`);B&&(B=B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),o.imageEl=B,B?o.imageWrapEl=me(o.imageEl,`.${D.containerClass}`)[0]:o.imageWrapEl=void 0}!o.imageEl||!o.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),$.scale=1,d=1,o.imageWrapEl.style.transitionDuration="300ms",o.imageWrapEl.style.transform="translate3d(0,0,0)",o.imageEl.style.transitionDuration="300ms",o.imageEl.style.transform="translate3d(0,0,0) scale(1)",o.slideEl.classList.remove(`${D.zoomedSlideClass}`),o.slideEl=void 0,o.originX=0,o.originY=0)}function P($){const D=e.zoom;D.scale&&D.scale!==1?G():A($)}function z(){const $=e.params.passiveListeners?{passive:!0,capture:!1}:!1,D=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:$,activeListenerWithCapture:D}}function V(){const $=e.zoom;if($.enabled)return;$.enabled=!0;const{passiveListener:D,activeListenerWithCapture:B}=z();e.wrapperEl.addEventListener("pointerdown",I,D),e.wrapperEl.addEventListener("pointermove",_,B),["pointerup","pointercancel","pointerout"].forEach(q=>{e.wrapperEl.addEventListener(q,j,D)}),e.wrapperEl.addEventListener("pointermove",E,B)}function X(){const $=e.zoom;if(!$.enabled)return;$.enabled=!1;const{passiveListener:D,activeListenerWithCapture:B}=z();e.wrapperEl.removeEventListener("pointerdown",I,D),e.wrapperEl.removeEventListener("pointermove",_,B),["pointerup","pointercancel","pointerout"].forEach(q=>{e.wrapperEl.removeEventListener(q,j,D)}),e.wrapperEl.removeEventListener("pointermove",E,B)}s("init",()=>{e.params.zoom.enabled&&V()}),s("destroy",()=>{X()}),s("touchStart",($,D)=>{e.zoom.enabled&&L(D)}),s("touchEnd",($,D)=>{e.zoom.enabled&&x()}),s("doubleTap",($,D)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&P(D)}),s("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&C()}),s("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&C()}),Object.assign(e.zoom,{enable:V,disable:X,in:A,out:G,toggle:P})}function Ps(i){let{swiper:e,extendParams:t,on:s}=i;t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function r(f,l){const o=function(){let v,h,u;return(b,g)=>{for(h=-1,v=b.length;v-h>1;)u=v+h>>1,b[u]<=g?h=u:v=u;return v}}();this.x=f,this.y=l,this.lastIndex=f.length-1;let c,m;return this.interpolate=function(v){return v?(m=o(this.x,v),c=m-1,(v-this.x[c])*(this.y[m]-this.y[c])/(this.x[m]-this.x[c])+this.y[c]):0},this}function n(f){e.controller.spline=e.params.loop?new r(e.slidesGrid,f.slidesGrid):new r(e.snapGrid,f.snapGrid)}function d(f,l){const o=e.controller.control;let c,m;const w=e.constructor;function v(h){if(h.destroyed)return;const u=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(n(h),m=-e.controller.spline.interpolate(-u)),(!m||e.params.controller.by==="container")&&(c=(h.maxTranslate()-h.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(c)||!Number.isFinite(c))&&(c=1),m=(u-e.minTranslate())*c+h.minTranslate()),e.params.controller.inverse&&(m=h.maxTranslate()-m),h.updateProgress(m),h.setTranslate(m,e),h.updateActiveIndex(),h.updateSlidesClasses()}if(Array.isArray(o))for(let h=0;h<o.length;h+=1)o[h]!==l&&o[h]instanceof w&&v(o[h]);else o instanceof w&&l!==o&&v(o)}function p(f,l){const o=e.constructor,c=e.controller.control;let m;function w(v){v.destroyed||(v.setTransition(f,e),f!==0&&(v.transitionStart(),v.params.autoHeight&&we(()=>{v.updateAutoHeight()}),ke(v.wrapperEl,()=>{c&&v.transitionEnd()})))}if(Array.isArray(c))for(m=0;m<c.length;m+=1)c[m]!==l&&c[m]instanceof o&&w(c[m]);else c instanceof o&&l!==c&&w(c)}function a(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}s("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){const f=document.querySelector(e.params.controller.control);if(f&&f.swiper)e.controller.control=f.swiper;else if(f){const l=o=>{e.controller.control=o.detail[0],e.update(),f.removeEventListener("init",l)};f.addEventListener("init",l)}return}e.controller.control=e.params.controller.control}),s("update",()=>{a()}),s("resize",()=>{a()}),s("observerUpdate",()=>{a()}),s("setTranslate",(f,l,o)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(l,o)}),s("setTransition",(f,l,o)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(l,o)}),Object.assign(e.controller,{setTranslate:d,setTransition:p})}function Is(i){let{swiper:e,extendParams:t,on:s}=i;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let r=null,n,d,p=new Date().getTime();function a(P){const z=r;z.length!==0&&(z.innerHTML="",z.innerHTML=P)}function f(P){P===void 0&&(P=16);const z=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(P).replace(/x/g,z)}function l(P){P=Y(P),P.forEach(z=>{z.setAttribute("tabIndex","0")})}function o(P){P=Y(P),P.forEach(z=>{z.setAttribute("tabIndex","-1")})}function c(P,z){P=Y(P),P.forEach(V=>{V.setAttribute("role",z)})}function m(P,z){P=Y(P),P.forEach(V=>{V.setAttribute("aria-roledescription",z)})}function w(P,z){P=Y(P),P.forEach(V=>{V.setAttribute("aria-controls",z)})}function v(P,z){P=Y(P),P.forEach(V=>{V.setAttribute("aria-label",z)})}function h(P,z){P=Y(P),P.forEach(V=>{V.setAttribute("id",z)})}function u(P,z){P=Y(P),P.forEach(V=>{V.setAttribute("aria-live",z)})}function b(P){P=Y(P),P.forEach(z=>{z.setAttribute("aria-disabled",!0)})}function g(P){P=Y(P),P.forEach(z=>{z.setAttribute("aria-disabled",!1)})}function y(P){if(P.keyCode!==13&&P.keyCode!==32)return;const z=e.params.a11y,V=P.target;if(!(e.pagination&&e.pagination.el&&(V===e.pagination.el||e.pagination.el.contains(P.target))&&!P.target.matches(de(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const X=Y(e.navigation.prevEl);Y(e.navigation.nextEl).includes(V)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?a(z.lastSlideMessage):a(z.nextSlideMessage)),X.includes(V)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?a(z.firstSlideMessage):a(z.prevSlideMessage))}e.pagination&&V.matches(de(e.params.pagination.bulletClass))&&V.click()}}function I(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:P,prevEl:z}=e.navigation;z&&(e.isBeginning?(b(z),o(z)):(g(z),l(z))),P&&(e.isEnd?(b(P),o(P)):(g(P),l(P)))}function _(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function j(){return _()&&e.params.pagination.clickable}function M(){const P=e.params.a11y;_()&&e.pagination.bullets.forEach(z=>{e.params.pagination.clickable&&(l(z),e.params.pagination.renderBullet||(c(z,"button"),v(z,P.paginationBulletMessage.replace(/\{\{index\}\}/,$e(z)+1)))),z.matches(de(e.params.pagination.bulletActiveClass))?z.setAttribute("aria-current","true"):z.removeAttribute("aria-current")})}const S=(P,z,V)=>{l(P),P.tagName!=="BUTTON"&&(c(P,"button"),P.addEventListener("keydown",y)),v(P,V),w(P,z)},T=P=>{d&&d!==P.target&&!d.contains(P.target)&&(n=!0),e.a11y.clicked=!0},L=()=>{n=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},E=P=>{p=new Date().getTime()},x=P=>{if(e.a11y.clicked||new Date().getTime()-p<100)return;const z=P.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!z||!e.slides.includes(z))return;d=z;const V=e.slides.indexOf(z)===e.activeIndex,X=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(z);V||X||P.sourceCapabilities&&P.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{n||(e.slideTo(e.slides.indexOf(z),0),n=!1)}))},C=()=>{const P=e.params.a11y;P.itemRoleDescriptionMessage&&m(e.slides,P.itemRoleDescriptionMessage),P.slideRole&&c(e.slides,P.slideRole);const z=e.slides.length;P.slideLabelMessage&&e.slides.forEach((V,X)=>{const $=e.params.loop?parseInt(V.getAttribute("data-swiper-slide-index"),10):X,D=P.slideLabelMessage.replace(/\{\{index\}\}/,$+1).replace(/\{\{slidesLength\}\}/,z);v(V,D)})},A=()=>{const P=e.params.a11y;e.el.append(r);const z=e.el;P.containerRoleDescriptionMessage&&m(z,P.containerRoleDescriptionMessage),P.containerMessage&&v(z,P.containerMessage);const V=e.wrapperEl,X=P.id||V.getAttribute("id")||`swiper-wrapper-${f(16)}`,$=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";h(V,X),u(V,$),C();let{nextEl:D,prevEl:B}=e.navigation?e.navigation:{};D=Y(D),B=Y(B),D&&D.forEach(H=>S(H,X,P.nextSlideMessage)),B&&B.forEach(H=>S(H,X,P.prevSlideMessage)),j()&&Y(e.pagination.el).forEach(W=>{W.addEventListener("keydown",y)}),Q().addEventListener("visibilitychange",E),e.el.addEventListener("focus",x,!0),e.el.addEventListener("focus",x,!0),e.el.addEventListener("pointerdown",T,!0),e.el.addEventListener("pointerup",L,!0)};function G(){r&&r.remove();let{nextEl:P,prevEl:z}=e.navigation?e.navigation:{};P=Y(P),z=Y(z),P&&P.forEach(X=>X.removeEventListener("keydown",y)),z&&z.forEach(X=>X.removeEventListener("keydown",y)),j()&&Y(e.pagination.el).forEach($=>{$.removeEventListener("keydown",y)}),Q().removeEventListener("visibilitychange",E),e.el.removeEventListener("focus",x,!0),e.el.removeEventListener("pointerdown",T,!0),e.el.removeEventListener("pointerup",L,!0)}s("beforeInit",()=>{r=ae("span",e.params.a11y.notificationClass),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true")}),s("afterInit",()=>{e.params.a11y.enabled&&A()}),s("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&C()}),s("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&I()}),s("paginationUpdate",()=>{e.params.a11y.enabled&&M()}),s("destroy",()=>{e.params.a11y.enabled&&G()})}function _s(i){let{swiper:e,extendParams:t,on:s}=i;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let r=!1,n={};const d=m=>m.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),p=m=>{const w=U();let v;m?v=new URL(m):v=w.location;const h=v.pathname.slice(1).split("/").filter(y=>y!==""),u=h.length,b=h[u-2],g=h[u-1];return{key:b,value:g}},a=(m,w)=>{const v=U();if(!r||!e.params.history.enabled)return;let h;e.params.url?h=new URL(e.params.url):h=v.location;const u=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${w}"]`):e.slides[w];let b=d(u.getAttribute("data-history"));if(e.params.history.root.length>0){let y=e.params.history.root;y[y.length-1]==="/"&&(y=y.slice(0,y.length-1)),b=`${y}/${m?`${m}/`:""}${b}`}else h.pathname.includes(m)||(b=`${m?`${m}/`:""}${b}`);e.params.history.keepQuery&&(b+=h.search);const g=v.history.state;g&&g.value===b||(e.params.history.replaceState?v.history.replaceState({value:b},null,b):v.history.pushState({value:b},null,b))},f=(m,w,v)=>{if(w)for(let h=0,u=e.slides.length;h<u;h+=1){const b=e.slides[h];if(d(b.getAttribute("data-history"))===w){const y=e.getSlideIndex(b);e.slideTo(y,m,v)}}else e.slideTo(0,m,v)},l=()=>{n=p(e.params.url),f(e.params.speed,n.value,!1)},o=()=>{const m=U();if(e.params.history){if(!m.history||!m.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(r=!0,n=p(e.params.url),!n.key&&!n.value){e.params.history.replaceState||m.addEventListener("popstate",l);return}f(0,n.value,e.params.runCallbacksOnInit),e.params.history.replaceState||m.addEventListener("popstate",l)}},c=()=>{const m=U();e.params.history.replaceState||m.removeEventListener("popstate",l)};s("init",()=>{e.params.history.enabled&&o()}),s("destroy",()=>{e.params.history.enabled&&c()}),s("transitionEnd _freeModeNoMomentumRelease",()=>{r&&a(e.params.history.key,e.activeIndex)}),s("slideChange",()=>{r&&e.params.cssMode&&a(e.params.history.key,e.activeIndex)})}function zs(i){let{swiper:e,extendParams:t,emit:s,on:r}=i,n=!1;const d=Q(),p=U();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(c,m){if(e.virtual&&e.params.virtual.enabled){const w=e.slides.filter(h=>h.getAttribute("data-hash")===m)[0];return w?parseInt(w.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(Z(e.slidesEl,`.${e.params.slideClass}[data-hash="${m}"], swiper-slide[data-hash="${m}"]`)[0])}}});const a=()=>{s("hashChange");const c=d.location.hash.replace("#",""),m=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],w=m?m.getAttribute("data-hash"):"";if(c!==w){const v=e.params.hashNavigation.getSlideIndex(e,c);if(typeof v>"u"||Number.isNaN(v))return;e.slideTo(v)}},f=()=>{if(!n||!e.params.hashNavigation.enabled)return;const c=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],m=c?c.getAttribute("data-hash")||c.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&p.history&&p.history.replaceState?(p.history.replaceState(null,null,`#${m}`||""),s("hashSet")):(d.location.hash=m||"",s("hashSet"))},l=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;const c=d.location.hash.replace("#","");if(c){const w=e.params.hashNavigation.getSlideIndex(e,c);e.slideTo(w||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&p.addEventListener("hashchange",a)},o=()=>{e.params.hashNavigation.watchState&&p.removeEventListener("hashchange",a)};r("init",()=>{e.params.hashNavigation.enabled&&l()}),r("destroy",()=>{e.params.hashNavigation.enabled&&o()}),r("transitionEnd _freeModeNoMomentumRelease",()=>{n&&f()}),r("slideChange",()=>{n&&e.params.cssMode&&f()})}function Ls(i){let{swiper:e,extendParams:t,on:s,emit:r,params:n}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,p,a=n&&n.autoplay?n.autoplay.delay:3e3,f=n&&n.autoplay?n.autoplay.delay:3e3,l,o=new Date().getTime(),c,m,w,v,h,u,b;function g(z){!e||e.destroyed||!e.wrapperEl||z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",g),!b&&T())}const y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(f=l,c=!1);const z=e.autoplay.paused?l:o+f-new Date().getTime();e.autoplay.timeLeft=z,r("autoplayTimeLeft",z,z/a),p=requestAnimationFrame(()=>{y()})},I=()=>{let z;return e.virtual&&e.params.virtual.enabled?z=e.slides.filter(X=>X.classList.contains("swiper-slide-active"))[0]:z=e.slides[e.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},_=z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),y();let V=typeof z>"u"?e.params.autoplay.delay:z;a=e.params.autoplay.delay,f=e.params.autoplay.delay;const X=I();!Number.isNaN(X)&&X>0&&typeof z>"u"&&(V=X,a=X,f=X),l=V;const $=e.params.speed,D=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,$,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,$,!0,!0),r("autoplay")),e.params.cssMode&&(o=new Date().getTime(),requestAnimationFrame(()=>{_()})))};return V>0?(clearTimeout(d),d=setTimeout(()=>{D()},V)):requestAnimationFrame(()=>{D()}),V},j=()=>{o=new Date().getTime(),e.autoplay.running=!0,_(),r("autoplayStart")},M=()=>{e.autoplay.running=!1,clearTimeout(d),cancelAnimationFrame(p),r("autoplayStop")},S=(z,V)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(d),z||(u=!0);const X=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",g):T()};if(e.autoplay.paused=!0,V){h&&(l=e.params.autoplay.delay),h=!1,X();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-o),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),X())},T=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(o=new Date().getTime(),u?(u=!1,_(l)):_(),e.autoplay.paused=!1,r("autoplayResume"))},L=()=>{if(e.destroyed||!e.autoplay.running)return;const z=Q();z.visibilityState==="hidden"&&(u=!0,S(!0)),z.visibilityState==="visible"&&T()},E=z=>{z.pointerType==="mouse"&&(u=!0,b=!0,!(e.animating||e.autoplay.paused)&&S(!0))},x=z=>{z.pointerType==="mouse"&&(b=!1,e.autoplay.paused&&T())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",E),e.el.addEventListener("pointerleave",x))},A=()=>{e.el.removeEventListener("pointerenter",E),e.el.removeEventListener("pointerleave",x)},G=()=>{Q().addEventListener("visibilitychange",L)},P=()=>{Q().removeEventListener("visibilitychange",L)};s("init",()=>{e.params.autoplay.enabled&&(C(),G(),j())}),s("destroy",()=>{A(),P(),e.autoplay.running&&M()}),s("_freeModeStaticRelease",()=>{(w||u)&&T()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?M():S(!0,!0)}),s("beforeTransitionStart",(z,V,X)=>{e.destroyed||!e.autoplay.running||(X||!e.params.autoplay.disableOnInteraction?S(!0,!0):M())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){M();return}m=!0,w=!1,u=!1,v=setTimeout(()=>{u=!0,w=!0,S(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(v),clearTimeout(d),e.params.autoplay.disableOnInteraction){w=!1,m=!1;return}w&&e.params.cssMode&&T(),w=!1,m=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(h=!0)}),Object.assign(e.autoplay,{start:j,stop:M,pause:S,resume:T})}function ks(i){let{swiper:e,extendParams:t,on:s}=i;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;e.thumbs={swiper:null};function d(){const f=e.thumbs.swiper;if(!f||f.destroyed)return;const l=f.clickedIndex,o=f.clickedSlide;if(o&&o.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof l>"u"||l===null)return;let c;f.params.loop?c=parseInt(f.clickedSlide.getAttribute("data-swiper-slide-index"),10):c=l,e.params.loop?e.slideToLoop(c):e.slideTo(c)}function p(){const{thumbs:f}=e.params;if(r)return!1;r=!0;const l=e.constructor;if(f.swiper instanceof l)e.thumbs.swiper=f.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(Pe(f.swiper)){const o=Object.assign({},f.swiper);Object.assign(o,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new l(o),n=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",d),!0}function a(f){const l=e.thumbs.swiper;if(!l||l.destroyed)return;const o=l.params.slidesPerView==="auto"?l.slidesPerViewDynamic():l.params.slidesPerView;let c=1;const m=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(c=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(c=1),c=Math.floor(c),l.slides.forEach(h=>h.classList.remove(m)),l.params.loop||l.params.virtual&&l.params.virtual.enabled)for(let h=0;h<c;h+=1)Z(l.slidesEl,`[data-swiper-slide-index="${e.realIndex+h}"]`).forEach(u=>{u.classList.add(m)});else for(let h=0;h<c;h+=1)l.slides[e.realIndex+h]&&l.slides[e.realIndex+h].classList.add(m);const w=e.params.thumbs.autoScrollOffset,v=w&&!l.params.loop;if(e.realIndex!==l.realIndex||v){const h=l.activeIndex;let u,b;if(l.params.loop){const g=l.slides.filter(y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];u=l.slides.indexOf(g),b=e.activeIndex>e.previousIndex?"next":"prev"}else u=e.realIndex,b=u>e.previousIndex?"next":"prev";v&&(u+=b==="next"?w:-1*w),l.visibleSlidesIndexes&&l.visibleSlidesIndexes.indexOf(u)<0&&(l.params.centeredSlides?u>h?u=u-Math.floor(o/2)+1:u=u+Math.floor(o/2)-1:u>h&&l.params.slidesPerGroup,l.slideTo(u,f?0:void 0))}}s("beforeInit",()=>{const{thumbs:f}=e.params;if(!(!f||!f.swiper))if(typeof f.swiper=="string"||f.swiper instanceof HTMLElement){const l=Q(),o=()=>{const m=typeof f.swiper=="string"?l.querySelector(f.swiper):f.swiper;if(m&&m.swiper)f.swiper=m.swiper,p(),a(!0);else if(m){const w=v=>{f.swiper=v.detail[0],m.removeEventListener("init",w),p(),a(!0),f.swiper.update(),e.update()};m.addEventListener("init",w)}return m},c=()=>{if(e.destroyed)return;o()||requestAnimationFrame(c)};requestAnimationFrame(c)}else p(),a(!0)}),s("slideChange update resize observerUpdate",()=>{a()}),s("setTransition",(f,l)=>{const o=e.thumbs.swiper;!o||o.destroyed||o.setTransition(l)}),s("beforeDestroy",()=>{const f=e.thumbs.swiper;!f||f.destroyed||n&&f.destroy()}),Object.assign(e.thumbs,{init:p,update:a})}function $s(i){let{swiper:e,extendParams:t,emit:s,once:r}=i;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){if(e.params.cssMode)return;const a=e.getTranslate();e.setTranslate(a),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function d(){if(e.params.cssMode)return;const{touchEventsData:a,touches:f}=e;a.velocities.length===0&&a.velocities.push({position:f[e.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:f[e.isHorizontal()?"currentX":"currentY"],time:oe()})}function p(a){let{currentPos:f}=a;if(e.params.cssMode)return;const{params:l,wrapperEl:o,rtlTranslate:c,snapGrid:m,touchEventsData:w}=e,h=oe()-w.touchStartTime;if(f<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(f>-e.maxTranslate()){e.slides.length<m.length?e.slideTo(m.length-1):e.slideTo(e.slides.length-1);return}if(l.freeMode.momentum){if(w.velocities.length>1){const M=w.velocities.pop(),S=w.velocities.pop(),T=M.position-S.position,L=M.time-S.time;e.velocity=T/L,e.velocity/=2,Math.abs(e.velocity)<l.freeMode.minimumVelocity&&(e.velocity=0),(L>150||oe()-M.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=l.freeMode.momentumVelocityRatio,w.velocities.length=0;let u=1e3*l.freeMode.momentumRatio;const b=e.velocity*u;let g=e.translate+b;c&&(g=-g);let y=!1,I;const _=Math.abs(e.velocity)*20*l.freeMode.momentumBounceRatio;let j;if(g<e.maxTranslate())l.freeMode.momentumBounce?(g+e.maxTranslate()<-_&&(g=e.maxTranslate()-_),I=e.maxTranslate(),y=!0,w.allowMomentumBounce=!0):g=e.maxTranslate(),l.loop&&l.centeredSlides&&(j=!0);else if(g>e.minTranslate())l.freeMode.momentumBounce?(g-e.minTranslate()>_&&(g=e.minTranslate()+_),I=e.minTranslate(),y=!0,w.allowMomentumBounce=!0):g=e.minTranslate(),l.loop&&l.centeredSlides&&(j=!0);else if(l.freeMode.sticky){let M;for(let S=0;S<m.length;S+=1)if(m[S]>-g){M=S;break}Math.abs(m[M]-g)<Math.abs(m[M-1]-g)||e.swipeDirection==="next"?g=m[M]:g=m[M-1],g=-g}if(j&&r("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(c?u=Math.abs((-g-e.translate)/e.velocity):u=Math.abs((g-e.translate)/e.velocity),l.freeMode.sticky){const M=Math.abs((c?-g:g)-e.translate),S=e.slidesSizesGrid[e.activeIndex];M<S?u=l.speed:M<2*S?u=l.speed*1.5:u=l.speed*2.5}}else if(l.freeMode.sticky){e.slideToClosest();return}l.freeMode.momentumBounce&&y?(e.updateProgress(I),e.setTransition(u),e.setTranslate(g),e.transitionStart(!0,e.swipeDirection),e.animating=!0,ke(o,()=>{!e||e.destroyed||!w.allowMomentumBounce||(s("momentumBounce"),e.setTransition(l.speed),setTimeout(()=>{e.setTranslate(I),ke(o,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(g),e.setTransition(u),e.setTranslate(g),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,ke(o,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(g),e.updateActiveIndex(),e.updateSlidesClasses()}else if(l.freeMode.sticky){e.slideToClosest();return}else l.freeMode&&s("_freeModeNoMomentumRelease");(!l.freeMode.momentum||h>=l.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:d,onTouchEnd:p}})}function As(i){let{swiper:e,extendParams:t,on:s}=i;t({grid:{rows:1,fill:"column"}});let r,n,d,p;const a=()=>{let v=e.params.spaceBetween;return typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*e.size:typeof v=="string"&&(v=parseFloat(v)),v},f=v=>{const{slidesPerView:h}=e.params,{rows:u,fill:b}=e.params.grid,g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:v.length;d=Math.floor(g/u),Math.floor(g/u)===g/u?r=g:r=Math.ceil(g/u)*u,h!=="auto"&&b==="row"&&(r=Math.max(r,h*u)),n=r/u},l=()=>{e.slides&&e.slides.forEach(v=>{v.swiperSlideGridSet&&(v.style.height="",v.style[e.getDirectionLabel("margin-top")]="")})},o=(v,h,u)=>{const{slidesPerGroup:b}=e.params,g=a(),{rows:y,fill:I}=e.params.grid,_=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:u.length;let j,M,S;if(I==="row"&&b>1){const T=Math.floor(v/(b*y)),L=v-y*b*T,E=T===0?b:Math.min(Math.ceil((_-T*y*b)/y),b);S=Math.floor(L/E),M=L-S*E+T*b,j=M+S*r/y,h.style.order=j}else I==="column"?(M=Math.floor(v/y),S=v-M*y,(M>d||M===d&&S===y-1)&&(S+=1,S>=y&&(S=0,M+=1))):(S=Math.floor(v/n),M=v-S*n);h.row=S,h.column=M,h.style.height=`calc((100% - ${(y-1)*g}px) / ${y})`,h.style[e.getDirectionLabel("margin-top")]=S!==0?g&&`${g}px`:"",h.swiperSlideGridSet=!0},c=(v,h)=>{const{centeredSlides:u,roundLengths:b}=e.params,g=a(),{rows:y}=e.params.grid;if(e.virtualSize=(v+g)*r,e.virtualSize=Math.ceil(e.virtualSize/y)-g,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),u){const I=[];for(let _=0;_<h.length;_+=1){let j=h[_];b&&(j=Math.floor(j)),h[_]<e.virtualSize+h[0]&&I.push(j)}h.splice(0,h.length),h.push(...I)}},m=()=>{p=e.params.grid&&e.params.grid.rows>1},w=()=>{const{params:v,el:h}=e,u=v.grid&&v.grid.rows>1;p&&!u?(h.classList.remove(`${v.containerModifierClass}grid`,`${v.containerModifierClass}grid-column`),d=1,e.emitContainerClasses()):!p&&u&&(h.classList.add(`${v.containerModifierClass}grid`),v.grid.fill==="column"&&h.classList.add(`${v.containerModifierClass}grid-column`),e.emitContainerClasses()),p=u};s("init",m),s("update",w),e.grid={initSlides:f,unsetSlides:l,updateSlide:o,updateWrapperSize:c}}function js(i){const e=this,{params:t,slidesEl:s}=e;t.loop&&e.loopDestroy();const r=n=>{if(typeof n=="string"){const d=document.createElement("div");d.innerHTML=n,s.append(d.children[0]),d.innerHTML=""}else s.append(n)};if(typeof i=="object"&&"length"in i)for(let n=0;n<i.length;n+=1)i[n]&&r(i[n]);else r(i);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update()}function Ds(i){const e=this,{params:t,activeIndex:s,slidesEl:r}=e;t.loop&&e.loopDestroy();let n=s+1;const d=p=>{if(typeof p=="string"){const a=document.createElement("div");a.innerHTML=p,r.prepend(a.children[0]),a.innerHTML=""}else r.prepend(p)};if(typeof i=="object"&&"length"in i){for(let p=0;p<i.length;p+=1)i[p]&&d(i[p]);n=s+i.length}else d(i);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),e.slideTo(n,0,!1)}function Os(i,e){const t=this,{params:s,activeIndex:r,slidesEl:n}=t;let d=r;s.loop&&(d-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const p=t.slides.length;if(i<=0){t.prependSlide(e);return}if(i>=p){t.appendSlide(e);return}let a=d>i?d+1:d;const f=[];for(let l=p-1;l>=i;l-=1){const o=t.slides[l];o.remove(),f.unshift(o)}if(typeof e=="object"&&"length"in e){for(let l=0;l<e.length;l+=1)e[l]&&n.append(e[l]);a=d>i?d+e.length:d}else n.append(e);for(let l=0;l<f.length;l+=1)n.append(f[l]);t.recalcSlides(),s.loop&&t.loopCreate(),(!s.observer||t.isElement)&&t.update(),s.loop?t.slideTo(a+t.loopedSlides,0,!1):t.slideTo(a,0,!1)}function Vs(i){const e=this,{params:t,activeIndex:s}=e;let r=s;t.loop&&(r-=e.loopedSlides,e.loopDestroy());let n=r,d;if(typeof i=="object"&&"length"in i){for(let p=0;p<i.length;p+=1)d=i[p],e.slides[d]&&e.slides[d].remove(),d<n&&(n-=1);n=Math.max(n,0)}else d=i,e.slides[d]&&e.slides[d].remove(),d<n&&(n-=1),n=Math.max(n,0);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),t.loop?e.slideTo(n+e.loopedSlides,0,!1):e.slideTo(n,0,!1)}function Bs(){const i=this,e=[];for(let t=0;t<i.slides.length;t+=1)e.push(t);i.removeSlide(e)}function Gs(i){let{swiper:e}=i;Object.assign(e,{appendSlide:js.bind(e),prependSlide:Ds.bind(e),addSlide:Os.bind(e),removeSlide:Vs.bind(e),removeAllSlides:Bs.bind(e)})}function ye(i){const{effect:e,swiper:t,on:s,setTranslate:r,setTransition:n,overwriteParams:d,perspective:p,recreateShadows:a,getEffectParams:f}=i;s("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),p&&p()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const o=d?d():{};Object.assign(t.params,o),Object.assign(t.originalParams,o)}),s("setTranslate",()=>{t.params.effect===e&&r()}),s("setTransition",(o,c)=>{t.params.effect===e&&n(c)}),s("transitionEnd",()=>{if(t.params.effect===e&&a){if(!f||!f().slideShadows)return;t.slides.forEach(o=>{o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>c.remove())}),a()}});let l;s("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(l=!0),requestAnimationFrame(()=>{l&&t.slides&&t.slides.length&&(r(),l=!1)}))})}function je(i,e){const t=ge(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function Ye(i){let{swiper:e,duration:t,transformElements:s,allSlides:r}=i;const{activeIndex:n}=e,d=p=>p.parentElement?p.parentElement:e.slides.filter(f=>f.shadowRoot&&f.shadowRoot===p.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let p=!1,a;r?a=s:a=s.filter(f=>{const l=f.classList.contains("swiper-slide-transform")?d(f):f;return e.getSlideIndex(l)===n}),a.forEach(f=>{ke(f,()=>{if(p||!e||e.destroyed)return;p=!0,e.animating=!1;const l=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(l)})})}}function Hs(i){let{swiper:e,extendParams:t,on:s}=i;t({fadeEffect:{crossFade:!1}}),ye({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:d}=e,p=e.params.fadeEffect;for(let a=0;a<d.length;a+=1){const f=e.slides[a];let o=-f.swiperSlideOffset;e.params.virtualTranslate||(o-=e.translate);let c=0;e.isHorizontal()||(c=o,o=0);const m=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(f.progress),0):1+Math.min(Math.max(f.progress,-1),0),w=je(p,f);w.style.opacity=m,w.style.transform=`translate3d(${o}px, ${c}px, 0px)`}},setTransition:d=>{const p=e.slides.map(a=>ge(a));p.forEach(a=>{a.style.transitionDuration=`${d}ms`}),Ye({swiper:e,duration:d,transformElements:p,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Rs(i){let{swiper:e,extendParams:t,on:s}=i;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const r=(a,f,l)=>{let o=l?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),c=l?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");o||(o=ae("div",`swiper-slide-shadow-cube swiper-slide-shadow-${l?"left":"top"}`.split(" ")),a.append(o)),c||(c=ae("div",`swiper-slide-shadow-cube swiper-slide-shadow-${l?"right":"bottom"}`.split(" ")),a.append(c)),o&&(o.style.opacity=Math.max(-f,0)),c&&(c.style.opacity=Math.max(f,0))};ye({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{el:a,wrapperEl:f,slides:l,width:o,height:c,rtlTranslate:m,size:w,browser:v}=e,h=e.params.cubeEffect,u=e.isHorizontal(),b=e.virtual&&e.params.virtual.enabled;let g=0,y;h.shadow&&(u?(y=e.wrapperEl.querySelector(".swiper-cube-shadow"),y||(y=ae("div","swiper-cube-shadow"),e.wrapperEl.append(y)),y.style.height=`${o}px`):(y=a.querySelector(".swiper-cube-shadow"),y||(y=ae("div","swiper-cube-shadow"),a.append(y))));for(let _=0;_<l.length;_+=1){const j=l[_];let M=_;b&&(M=parseInt(j.getAttribute("data-swiper-slide-index"),10));let S=M*90,T=Math.floor(S/360);m&&(S=-S,T=Math.floor(-S/360));const L=Math.max(Math.min(j.progress,1),-1);let E=0,x=0,C=0;M%4===0?(E=-T*4*w,C=0):(M-1)%4===0?(E=0,C=-T*4*w):(M-2)%4===0?(E=w+T*4*w,C=w):(M-3)%4===0&&(E=-w,C=3*w+w*4*T),m&&(E=-E),u||(x=E,E=0);const A=`rotateX(${u?0:-S}deg) rotateY(${u?S:0}deg) translate3d(${E}px, ${x}px, ${C}px)`;L<=1&&L>-1&&(g=M*90+L*90,m&&(g=-M*90-L*90),e.browser&&e.browser.need3dFix&&Math.abs(g)/90%2===1&&(g+=.001)),j.style.transform=A,h.slideShadows&&r(j,L,u)}if(f.style.transformOrigin=`50% 50% -${w/2}px`,f.style["-webkit-transform-origin"]=`50% 50% -${w/2}px`,h.shadow)if(u)y.style.transform=`translate3d(0px, ${o/2+h.shadowOffset}px, ${-o/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${h.shadowScale})`;else{const _=Math.abs(g)-Math.floor(Math.abs(g)/90)*90,j=1.5-(Math.sin(_*2*Math.PI/360)/2+Math.cos(_*2*Math.PI/360)/2),M=h.shadowScale,S=h.shadowScale/j,T=h.shadowOffset;y.style.transform=`scale3d(${M}, 1, ${S}) translate3d(0px, ${c/2+T}px, ${-c/2/S}px) rotateX(-89.99deg)`}const I=(v.isSafari||v.isWebView)&&v.needPerspectiveFix?-w/2:0;f.style.transform=`translate3d(0px,0,${I}px) rotateX(${e.isHorizontal()?0:g}deg) rotateY(${e.isHorizontal()?-g:0}deg)`,f.style.setProperty("--swiper-cube-translate-z",`${I}px`)},setTransition:a=>{const{el:f,slides:l}=e;if(l.forEach(o=>{o.style.transitionDuration=`${a}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const o=f.querySelector(".swiper-cube-shadow");o&&(o.style.transitionDuration=`${a}ms`)}},recreateShadows:()=>{const a=e.isHorizontal();e.slides.forEach(f=>{const l=Math.max(Math.min(f.progress,1),-1);r(f,l,a)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function ve(i,e,t){const s=`swiper-slide-shadow${t?`-${t}`:""}${i?` swiper-slide-shadow-${i}`:""}`,r=ge(e);let n=r.querySelector(`.${s.split(" ").join(".")}`);return n||(n=ae("div",s.split(" ")),r.append(n)),n}function Ns(i){let{swiper:e,extendParams:t,on:s}=i;t({flipEffect:{slideShadows:!0,limitRotation:!0}});const r=(a,f)=>{let l=e.isHorizontal()?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),o=e.isHorizontal()?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");l||(l=ve("flip",a,e.isHorizontal()?"left":"top")),o||(o=ve("flip",a,e.isHorizontal()?"right":"bottom")),l&&(l.style.opacity=Math.max(-f,0)),o&&(o.style.opacity=Math.max(f,0))};ye({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:a,rtlTranslate:f}=e,l=e.params.flipEffect;for(let o=0;o<a.length;o+=1){const c=a[o];let m=c.progress;e.params.flipEffect.limitRotation&&(m=Math.max(Math.min(c.progress,1),-1));const w=c.swiperSlideOffset;let h=-180*m,u=0,b=e.params.cssMode?-w-e.translate:-w,g=0;e.isHorizontal()?f&&(h=-h):(g=b,b=0,u=-h,h=0),e.browser&&e.browser.need3dFix&&(Math.abs(h)/90%2===1&&(h+=.001),Math.abs(u)/90%2===1&&(u+=.001)),c.style.zIndex=-Math.abs(Math.round(m))+a.length,l.slideShadows&&r(c,m);const y=`translate3d(${b}px, ${g}px, 0px) rotateX(${u}deg) rotateY(${h}deg)`,I=je(l,c);I.style.transform=y}},setTransition:a=>{const f=e.slides.map(l=>ge(l));f.forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o=>{o.style.transitionDuration=`${a}ms`})}),Ye({swiper:e,duration:a,transformElements:f})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(a=>{let f=a.progress;e.params.flipEffect.limitRotation&&(f=Math.max(Math.min(a.progress,1),-1)),r(a,f)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Xs(i){let{swiper:e,extendParams:t,on:s}=i;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ye({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:d,height:p,slides:a,slidesSizesGrid:f}=e,l=e.params.coverflowEffect,o=e.isHorizontal(),c=e.translate,m=o?-c+d/2:-c+p/2,w=o?l.rotate:-l.rotate,v=l.depth;for(let h=0,u=a.length;h<u;h+=1){const b=a[h],g=f[h],y=b.swiperSlideOffset,I=(m-y-g/2)/g,_=typeof l.modifier=="function"?l.modifier(I):I*l.modifier;let j=o?w*_:0,M=o?0:w*_,S=-v*Math.abs(_),T=l.stretch;typeof T=="string"&&T.indexOf("%")!==-1&&(T=parseFloat(l.stretch)/100*g);let L=o?0:T*_,E=o?T*_:0,x=1-(1-l.scale)*Math.abs(_);Math.abs(E)<.001&&(E=0),Math.abs(L)<.001&&(L=0),Math.abs(S)<.001&&(S=0),Math.abs(j)<.001&&(j=0),Math.abs(M)<.001&&(M=0),Math.abs(x)<.001&&(x=0),e.browser&&e.browser.need3dFix&&(Math.abs(j)/90%2===1&&(j+=.001),Math.abs(M)/90%2===1&&(M+=.001));const C=`translate3d(${E}px,${L}px,${S}px)  rotateX(${M}deg) rotateY(${j}deg) scale(${x})`,A=je(l,b);if(A.style.transform=C,b.style.zIndex=-Math.abs(Math.round(_))+1,l.slideShadows){let G=o?b.querySelector(".swiper-slide-shadow-left"):b.querySelector(".swiper-slide-shadow-top"),P=o?b.querySelector(".swiper-slide-shadow-right"):b.querySelector(".swiper-slide-shadow-bottom");G||(G=ve("coverflow",b,o?"left":"top")),P||(P=ve("coverflow",b,o?"right":"bottom")),G&&(G.style.opacity=_>0?_:0),P&&(P.style.opacity=-_>0?-_:0)}}},setTransition:d=>{e.slides.map(a=>ge(a)).forEach(a=>{a.style.transitionDuration=`${d}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{f.style.transitionDuration=`${d}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Fs(i){let{swiper:e,extendParams:t,on:s}=i;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const r=p=>typeof p=="string"?p:`${p}px`;ye({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:p,wrapperEl:a,slidesSizesGrid:f}=e,l=e.params.creativeEffect,{progressMultiplier:o}=l,c=e.params.centeredSlides;if(c){const m=f[0]/2-e.params.slidesOffsetBefore||0;a.style.transform=`translateX(calc(50% - ${m}px))`}for(let m=0;m<p.length;m+=1){const w=p[m],v=w.progress,h=Math.min(Math.max(w.progress,-l.limitProgress),l.limitProgress);let u=h;c||(u=Math.min(Math.max(w.originalProgress,-l.limitProgress),l.limitProgress));const b=w.swiperSlideOffset,g=[e.params.cssMode?-b-e.translate:-b,0,0],y=[0,0,0];let I=!1;e.isHorizontal()||(g[1]=g[0],g[0]=0);let _={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};h<0?(_=l.next,I=!0):h>0&&(_=l.prev,I=!0),g.forEach((x,C)=>{g[C]=`calc(${x}px + (${r(_.translate[C])} * ${Math.abs(h*o)}))`}),y.forEach((x,C)=>{let A=_.rotate[C]*Math.abs(h*o);e.browser&&e.browser.need3dFix&&Math.abs(A)/90%2===1&&(A+=.001),y[C]=A}),w.style.zIndex=-Math.abs(Math.round(v))+p.length;const j=g.join(", "),M=`rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,S=u<0?`scale(${1+(1-_.scale)*u*o})`:`scale(${1-(1-_.scale)*u*o})`,T=u<0?1+(1-_.opacity)*u*o:1-(1-_.opacity)*u*o,L=`translate3d(${j}) ${M} ${S}`;if(I&&_.shadow||!I){let x=w.querySelector(".swiper-slide-shadow");if(!x&&_.shadow&&(x=ve("creative",w)),x){const C=l.shadowPerProgress?h*(1/l.limitProgress):h;x.style.opacity=Math.min(Math.max(Math.abs(C),0),1)}}const E=je(l,w);E.style.transform=L,E.style.opacity=T,_.origin&&(E.style.transformOrigin=_.origin)}},setTransition:p=>{const a=e.slides.map(f=>ge(f));a.forEach(f=>{f.style.transitionDuration=`${p}ms`,f.querySelectorAll(".swiper-slide-shadow").forEach(l=>{l.style.transitionDuration=`${p}ms`})}),Ye({swiper:e,duration:p,transformElements:a,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Ys(i){let{swiper:e,extendParams:t,on:s}=i;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),ye({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:d,activeIndex:p,rtlTranslate:a}=e,f=e.params.cardsEffect,{startTranslate:l,isTouched:o}=e.touchEventsData,c=a?-e.translate:e.translate;for(let m=0;m<d.length;m+=1){const w=d[m],v=w.progress,h=Math.min(Math.max(v,-4),4);let u=w.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(u-=d[0].swiperSlideOffset);let b=e.params.cssMode?-u-e.translate:-u,g=0;const y=-100*Math.abs(h);let I=1,_=-f.perSlideRotate*h,j=f.perSlideOffset-Math.abs(h)*.75;const M=e.virtual&&e.params.virtual.enabled?e.virtual.from+m:m,S=(M===p||M===p-1)&&h>0&&h<1&&(o||e.params.cssMode)&&c<l,T=(M===p||M===p+1)&&h<0&&h>-1&&(o||e.params.cssMode)&&c>l;if(S||T){const C=(1-Math.abs((Math.abs(h)-.5)/.5))**.5;_+=-28*h*C,I+=-.5*C,j+=96*C,g=`${-25*C*Math.abs(h)}%`}if(h<0?b=`calc(${b}px ${a?"-":"+"} (${j*Math.abs(h)}%))`:h>0?b=`calc(${b}px ${a?"-":"+"} (-${j*Math.abs(h)}%))`:b=`${b}px`,!e.isHorizontal()){const C=g;g=b,b=C}const L=h<0?`${1+(1-I)*h}`:`${1-(1-I)*h}`,E=`
        translate3d(${b}, ${g}, ${y}px)
        rotateZ(${f.rotate?a?-_:_:0}deg)
        scale(${L})
      `;if(f.slideShadows){let C=w.querySelector(".swiper-slide-shadow");C||(C=ve("cards",w)),C&&(C.style.opacity=Math.min(Math.max((Math.abs(h)-.5)/.5,0),1))}w.style.zIndex=-Math.abs(Math.round(v))+d.length;const x=je(f,w);x.style.transform=E}},setTransition:d=>{const p=e.slides.map(a=>ge(a));p.forEach(a=>{a.style.transitionDuration=`${d}ms`,a.querySelectorAll(".swiper-slide-shadow").forEach(f=>{f.style.transitionDuration=`${d}ms`})}),Ye({swiper:e,duration:d,transformElements:p})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const Ws=[bs,ys,Ss,xs,Es,Ts,Ms,Cs,Ps,Is,_s,zs,Ls,ks,$s,As,Gs,Hs,Rs,Ns,Xs,Fs,Ys];re.use(Ws);const We=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function be(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function gt(i,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>t.indexOf(s)<0).forEach(s=>{typeof i[s]>"u"?i[s]=e[s]:be(e[s])&&be(i[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?i[s]=e[s]:gt(i[s],e[s]):i[s]=e[s]})}function qs(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Us(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function Ks(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function Re(i){return i===void 0&&(i=""),i.replace(/-[a-z]/g,e=>e.toUpperCase().replace("-",""))}function Zs(i){let{swiper:e,slides:t,passedParams:s,changedParams:r,nextEl:n,prevEl:d,scrollbarEl:p,paginationEl:a}=i;const f=r.filter(S=>S!=="children"&&S!=="direction"&&S!=="wrapperClass"),{params:l,pagination:o,navigation:c,scrollbar:m,virtual:w,thumbs:v}=e;let h,u,b,g,y,I,_,j;r.includes("thumbs")&&s.thumbs&&s.thumbs.swiper&&l.thumbs&&!l.thumbs.swiper&&(h=!0),r.includes("controller")&&s.controller&&s.controller.control&&l.controller&&!l.controller.control&&(u=!0),r.includes("pagination")&&s.pagination&&(s.pagination.el||a)&&(l.pagination||l.pagination===!1)&&o&&!o.el&&(b=!0),r.includes("scrollbar")&&s.scrollbar&&(s.scrollbar.el||p)&&(l.scrollbar||l.scrollbar===!1)&&m&&!m.el&&(g=!0),r.includes("navigation")&&s.navigation&&(s.navigation.prevEl||d)&&(s.navigation.nextEl||n)&&(l.navigation||l.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(y=!0);const M=S=>{e[S]&&(e[S].destroy(),S==="navigation"?(e.isElement&&(e[S].prevEl.remove(),e[S].nextEl.remove()),l[S].prevEl=void 0,l[S].nextEl=void 0,e[S].prevEl=void 0,e[S].nextEl=void 0):(e.isElement&&e[S].el.remove(),l[S].el=void 0,e[S].el=void 0))};r.includes("loop")&&e.isElement&&(l.loop&&!s.loop?I=!0:!l.loop&&s.loop?_=!0:j=!0),f.forEach(S=>{if(be(l[S])&&be(s[S]))Object.assign(l[S],s[S]),(S==="navigation"||S==="pagination"||S==="scrollbar")&&"enabled"in s[S]&&!s[S].enabled&&M(S);else{const T=s[S];(T===!0||T===!1)&&(S==="navigation"||S==="pagination"||S==="scrollbar")?T===!1&&M(S):l[S]=s[S]}}),f.includes("controller")&&!u&&e.controller&&e.controller.control&&l.controller&&l.controller.control&&(e.controller.control=l.controller.control),r.includes("children")&&t&&w&&l.virtual.enabled?(w.slides=t,w.update(!0)):r.includes("virtual")&&w&&l.virtual.enabled&&(t&&(w.slides=t),w.update(!0)),r.includes("children")&&t&&l.loop&&(j=!0),h&&v.init()&&v.update(!0),u&&(e.controller.control=l.controller.control),b&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),e.el.appendChild(a)),a&&(l.pagination.el=a),o.init(),o.render(),o.update()),g&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-scrollbar"),p.part.add("scrollbar"),e.el.appendChild(p)),p&&(l.scrollbar.el=p),m.init(),m.updateSize(),m.setTranslate()),y&&(e.isElement&&((!n||typeof n=="string")&&(n=document.createElement("div"),n.classList.add("swiper-button-next"),n.innerHTML=e.hostEl.constructor.nextButtonSvg,n.part.add("button-next"),e.el.appendChild(n)),(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-prev"),d.innerHTML=e.hostEl.constructor.prevButtonSvg,d.part.add("button-prev"),e.el.appendChild(d))),n&&(l.navigation.nextEl=n),d&&(l.navigation.prevEl=d),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=s.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=s.allowSlidePrev),r.includes("direction")&&e.changeDirection(s.direction,!1),(I||j)&&e.loopDestroy(),(_||j)&&e.loopCreate(),e.update()}const Lt=i=>{if(parseFloat(i)===Number(i))return Number(i);if(i==="true"||i==="")return!0;if(i==="false")return!1;if(i==="null")return null;if(i!=="undefined"){if(typeof i=="string"&&i.includes("{")&&i.includes("}")&&i.includes('"')){let e;try{e=JSON.parse(i)}catch{e=i}return e}return i}},kt=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function $t(i,e,t){const s={},r={};gt(s,wt);const n=[...We,"on"],d=n.map(a=>a.replace(/_/,""));n.forEach(a=>{a=a.replace("_",""),typeof i[a]<"u"&&(r[a]=i[a])});const p=[...i.attributes];return typeof e=="string"&&typeof t<"u"&&p.push({name:e,value:be(t)?{...t}:t}),p.forEach(a=>{const f=kt.filter(l=>a.name.indexOf(`${l}-`)===0)[0];if(f){const l=Re(f),o=Re(a.name.split(`${f}-`)[1]);typeof r[l]>"u"&&(r[l]={}),r[l]===!0&&(r[l]={enabled:!0}),r[l][o]=Lt(a.value)}else{const l=Re(a.name);if(!d.includes(l))return;const o=Lt(a.value);r[l]&&kt.includes(a.name)&&!be(o)?(r[l].constructor!==Object&&(r[l]={}),r[l].enabled=!!o):r[l]=o}}),gt(s,r),s.navigation?s.navigation={prevEl:".swiper-button-prev",nextEl:".swiper-button-next",...s.navigation!==!0?s.navigation:{}}:s.navigation===!1&&delete s.navigation,s.scrollbar?s.scrollbar={el:".swiper-scrollbar",...s.scrollbar!==!0?s.scrollbar:{}}:s.scrollbar===!1&&delete s.scrollbar,s.pagination?s.pagination={el:".swiper-pagination",...s.pagination!==!0?s.pagination:{}}:s.pagination===!1&&delete s.pagination,{params:s,passedParams:r}}const Qs=":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",Js="::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";class er{}const Yt=typeof window>"u"||typeof HTMLElement>"u"?er:HTMLElement,At=`<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,Wt=(i,e)=>{if(typeof CSSStyleSheet<"u"&&i.adoptedStyleSheets){const t=new CSSStyleSheet;t.replaceSync(e),i.adoptedStyleSheets=[t]}else{const t=document.createElement("style");t.rel="stylesheet",t.textContent=e,i.appendChild(t)}};class qt extends Yt{constructor(){super(),this.attachShadow({mode:"open"})}static get nextButtonSvg(){return At}static get prevButtonSvg(){return At.replace("/></svg>",' transform-origin="center" transform="rotate(180)"/></svg>')}cssStyles(){return[Qs,...this.injectStyles&&Array.isArray(this.injectStyles)?this.injectStyles:[]].join(`
`)}cssLinks(){return this.injectStylesUrls||[]}calcSlideSlots(){const e=this.slideSlots||0,t=[...this.querySelectorAll("[slot^=slide-]")].map(s=>parseInt(s.getAttribute("slot").split("slide-")[1],10));if(this.slideSlots=t.length?Math.max(...t)+1:0,!!this.rendered){if(this.slideSlots>e)for(let s=e;s<this.slideSlots;s+=1){const r=document.createElement("swiper-slide");r.setAttribute("part",`slide slide-${s+1}`);const n=document.createElement("slot");n.setAttribute("name",`slide-${s+1}`),r.appendChild(n),this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r)}else if(this.slideSlots<e){const s=this.swiper.slides;for(let r=s.length-1;r>=0;r-=1)r>this.slideSlots&&s[r].remove()}}}render(){if(this.rendered)return;this.calcSlideSlots();let e=this.cssStyles();this.slideSlots>0&&(e=e.replace(/::slotted\(([a-z-0-9.]*)\)/g,"$1")),e.length&&Wt(this.shadowRoot,e),this.cssLinks().forEach(s=>{if(this.shadowRoot.querySelector(`link[href="${s}"]`))return;const n=document.createElement("link");n.rel="stylesheet",n.href=s,this.shadowRoot.appendChild(n)});const t=document.createElement("div");t.classList.add("swiper"),t.part="container",t.innerHTML=`
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({length:this.slideSlots}).map((s,r)=>`
        <swiper-slide part="slide slide-${r}">
          <slot name="slide-${r}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${qs(this.passedParams)?`
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `:""}
      ${Us(this.passedParams)?`
        <div part="pagination" class="swiper-pagination"></div>
      `:""}
      ${Ks(this.passedParams)?`
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `:""}
    `,this.shadowRoot.appendChild(t),this.rendered=!0}initialize(){var e=this;if(this.initialized)return;this.initialized=!0;const{params:t,passedParams:s}=$t(this);this.swiperParams=t,this.passedParams=s,delete this.swiperParams.init,this.render(),this.swiper=new re(this.shadowRoot.querySelector(".swiper"),{...t.virtual?{}:{observer:!0,observeSlideChildren:this.slideSlots>0},...t,touchEventsTarget:"container",onAny:function(r){r==="observerUpdate"&&e.calcSlideSlots();const n=t.eventsPrefix?`${t.eventsPrefix}${r.toLowerCase()}`:r.toLowerCase();for(var d=arguments.length,p=new Array(d>1?d-1:0),a=1;a<d;a++)p[a-1]=arguments[a];const f=new CustomEvent(n,{detail:p,bubbles:r!=="hashChange",cancelable:!0});e.dispatchEvent(f)}})}connectedCallback(){this.initialized&&this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||this.init===!1||this.getAttribute("init")==="false"||this.initialize()}disconnectedCallback(){this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||(this.swiper&&this.swiper.destroy&&this.swiper.destroy(),this.initialized=!1)}updateSwiperOnPropChange(e,t){const{params:s,passedParams:r}=$t(this,e,t);this.passedParams=r,this.swiperParams=s,!(this.swiper&&this.swiper.params[e]===t)&&Zs({swiper:this.swiper,passedParams:this.passedParams,changedParams:[Re(e)],...e==="navigation"&&r[e]?{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}:{},...e==="pagination"&&r[e]?{paginationEl:".swiper-pagination"}:{},...e==="scrollbar"&&r[e]?{scrollbarEl:".swiper-scrollbar"}:{}})}attributeChangedCallback(e,t,s){this.initialized&&(t==="true"&&s===null&&(s=!1),this.updateSwiperOnPropChange(e,s))}static get observedAttributes(){return We.filter(t=>t.includes("_")).map(t=>t.replace(/[A-Z]/g,s=>`-${s}`).replace("_","").toLowerCase())}}We.forEach(i=>{i!=="init"&&(i=i.replace("_",""),Object.defineProperty(qt.prototype,i,{configurable:!0,get(){return(this.passedParams||{})[i]},set(e){this.passedParams||(this.passedParams={}),this.passedParams[i]=e,this.initialized&&this.updateSwiperOnPropChange(i,e)}}))});class tr extends Yt{constructor(){super(),this.attachShadow({mode:"open"})}render(){const e=this.lazy||this.getAttribute("lazy")===""||this.getAttribute("lazy")==="true";if(Wt(this.shadowRoot,Js),this.shadowRoot.appendChild(document.createElement("slot")),e){const t=document.createElement("div");t.classList.add("swiper-lazy-preloader"),t.part.add("preloader"),this.shadowRoot.appendChild(t)}}initialize(){this.render()}connectedCallback(){this.initialize()}}const te=()=>{typeof window>"u"||(window.customElements.get("swiper-container")||window.customElements.define("swiper-container",qt),window.customElements.get("swiper-slide")||window.customElements.define("swiper-slide",tr))};typeof window<"u"&&(window.SwiperElementRegisterParams=i=>{We.push(...i)});const ir={class:"swiper-virtual"},sr=["slides"],rr={class:"text-secondary"},nr={class:"d-flex justify-center gap-4 flex-wrap"},ar={__name:"DemoSwiperVirtualSlides",setup(i){te();const e=Array.from({length:500},(a,f)=>`Slides ${f+1}`),t=rt(null),s=rt(1),r=rt(500),n=a=>{var f;(f=t.value)==null||f.swiper.slideTo(a-1)},d=()=>{var a;(a=t.value)==null||a.swiper.prependSlide([`<swiper-slide>Slide ${--s.value} </swiper-slide>`,`<swiper-slide>Slide ${--s.value} </swiper-slide>`])},p=()=>{var a;(a=t.value)==null||a.swiper.appendSlide([`<swiper-slide>Slide ${++r.value} </swiper-slide>`])};return(a,f)=>(R(),N("section",ir,[le("swiper-container",{ref_key:"swiperEl",ref:t,virtual:"true",slides:k(e),navigation:"true","slides-per-view":"5","space-between":"50","free-mode":"true","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},[(R(!0),N(K,null,J(k(e),(l,o)=>(R(),N("swiper-slide",{key:o},[le("div",rr,vt(l),1)]))),128))],8,sr),le("div",nr,[O(Ce,{variant:"outlined",color:"primary",onClick:Me(d,["prevent"])},{default:F(()=>[Te(" Prepend 2 Slides ")]),_:1}),O(Ce,{variant:"outlined",color:"primary",onClick:f[0]||(f[0]=Me(l=>n(1),["prevent"]))},{default:F(()=>[Te(" Slide 1 ")]),_:1}),O(Ce,{variant:"outlined",color:"primary",onClick:f[1]||(f[1]=Me(l=>n(250),["prevent"]))},{default:F(()=>[Te(" Slide 250 ")]),_:1}),O(Ce,{variant:"outlined",color:"primary",onClick:f[2]||(f[2]=Me(l=>n(500),["prevent"]))},{default:F(()=>[Te(" Slide 500 ")]),_:1}),O(Ce,{variant:"outlined",color:"primary",onClick:Me(p,["prevent"])},{default:F(()=>[Te(" Append Slide ")]),_:1})])]))}},qe="/assets/banner-31-D6mS0gQn.jpg",De="/assets/banner-32-B8kg_gZc.jpg",Ue="/assets/banner-33-DfQ0Urdo.jpg",Ke="/assets/banner-34-CMWn1p69.jpg",Ze="/assets/banner-35-avrf_yoA.jpg",Ut="/assets/banner-36-BiLQv0qP.jpg",Kt="/assets/banner-37-CxyHDUrj.jpg",Zt="/assets/5-CFPERer_.jpg",Fe="/assets/banner-39-D9mpewKd.jpg",or={"pagination-clickable":"true","slides-per-view":"5","space-between":"50","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},lr={__name:"DemoSwiperResponsiveBreakpoints",setup(i){return te(),(e,t)=>(R(),N("swiper-container",or,[(R(!0),N(K,null,J([k(qe),k(De),k(Ue),k(Ke),k(Ze),k(Ut),k(Kt),k(Zt),k(Fe)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},Oe="/assets/banner-20-D60huBoA.jpg",Qe="/assets/banner-4-EPycabrm.jpg",Qt="/assets/banner-5-DVgdLDIC.jpg",Se="/assets/banner-7-C3Ec249A.jpg",Je="/assets/banner-8-CS7lrdd8.jpg",St="/assets/banner-9-CN54Uf8b.jpg",pr={"pagination-clickable":"true",autoplay:"true",navigation:"true","events-prefix":"swiper-"},dr={__name:"DemoSwiperLazyLoading",setup(i){return te(),(e,t)=>(R(),N("swiper-container",pr,[(R(!0),N(K,null,J([k(Qe),k(Qt),k(St),k(Se),k(Je),k(Oe)],s=>(R(),N("swiper-slide",{key:s,lazy:"true"},[O(se,{src:s,cover:"",loading:"lazy"},null,8,["src"])]))),128))]))}},_e="/assets/banner-11-ClWmypCi.jpg",ze="/assets/6-C2cDgitj.jpg",Le="/assets/banner-13-Cforbb5S.jpg",jt="/assets/banner-15-DVoX7is_.jpg",ht="/assets/banner-16-BBt3y7wv.jpg",cr={class:"mySwiper","thumbs-swiper":".mySwiper2",loop:"true","space-between":"10",navigation:"true","centered-slides":"true","events-prefix":"swiper-"},fr={class:"mySwiper2",loop:"true","free-mode":"true","events-prefix":"swiper-","slides-per-view":"4"},ur={__name:"DemoSwiperGallery",setup(i){return te(),(e,t)=>(R(),N(K,null,[le("swiper-container",cr,[(R(!0),N(K,null,J([k(_e),k(ze),k(Le),k(jt),k(ht),k(_e),k(ze),k(Le)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s,cover:""},null,8,["src"])]))),128))]),le("swiper-container",fr,[(R(!0),N(K,null,J([k(_e),k(ze),k(Le),k(jt),k(ht),k(_e),k(ze),k(Le)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s,cover:""},null,8,["src"])]))),128))])],64))}},mr=Ae(ur,[["__scopeId","data-v-43655b19"]]),wr="/assets/banner-10-C2w4rcW8.jpg",gr={pagination:"true",navigation:"true",autoplay:"true","centered-slides":"true","events-prefix":"swiper-"},hr={__name:"DemoSwiperAutoplay",setup(i){return te(),(e,t)=>(R(),N("swiper-container",gr,[(R(!0),N(K,null,J([k(Se),k(Je),k(St),k(wr),k(_e),k(Oe)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s,cover:""},null,8,["src"])]))),128))]))}},vr={pagination:"true",effect:"coverflow","grab-cursor":"true","centered-slides":"true","slides-per-view":"auto","coverflow-effect-rotate":"50","coverflow-effect-stretch":"0","coverflow-effect-depth":"100","coverflow-effect-modifier":"1","coverflow-effect-slide-shadows":"true","events-prefix":"swiper-"},br={__name:"DemoSwiperCoverflowEffect",setup(i){return te(),(e,t)=>(R(),N("swiper-container",vr,[(R(!0),N(K,null,J([k(qe),k(De),k(Ue),k(Ke),k(Ze),k(Ut),k(Kt),k(Zt),k(Fe)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},yr=Ae(br,[["__scopeId","data-v-7a12df17"]]),Sr="/assets/banner-21-BbDBzY5j.jpg",xr="/assets/banner-23-eu_41WqH.jpg",Er="/assets/banner-24-BNOF4zrU.jpg",Tr={pagination:"true","centered-slides":"true",effect:"cube","grab-cursor":"true","cube-effect-shadow":"true","cube-effect-slide-shadows":"true","cube-effect-shadow-scale":"0.94","events-prefix":"swiper-"},Mr={__name:"DemoSwiperCubeEffect",setup(i){return te(),(e,t)=>(R(),N("swiper-container",Tr,[(R(!0),N(K,null,J([k(Sr),k(De),k(xr),k(Er)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},Cr=Ae(Mr,[["__scopeId","data-v-afdf8d88"]]),Pr="/assets/banner-17-vuA5wUeU.jpg",Ir="/assets/banner-18-rnuWLp8J.jpg",_r="/assets/banner-19-DKrHObKZ.jpg",zr={"space-between":"30",pagination:"true",navigation:"true",effect:"fade","events-prefix":"swiper-"},Lr={__name:"DemoSwiperFade",setup(i){return te(),(e,t)=>(R(),N("swiper-container",zr,[(R(!0),N(K,null,J([k(Oe),k(_r),k(Ir),k(Pr),k(ht)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},kr={"centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:30}}},$r={class:"d-flex align-center gap-x-3"},Ar={class:"font-weight-medium"},jr={__name:"DemoSwiperCenteredSlidesOption2",setup(i){return te(),(e,t)=>(R(),N("swiper-container",kr,[(R(),N(K,null,J([{icon:"ri-github-fill",text:"Getting Started"},{icon:"ri-facebook-circle-line",text:"Pricing & Plans"},{icon:"ri-twitter-line",text:"Sales Question"},{icon:"ri-instagram-line",text:"Usage Guidelines"},{icon:"ri-gitlab-line",text:"General Guide"}],({icon:s,text:r})=>le("swiper-slide",{key:r},[O(Bt,{class:"bg-default"},{default:F(()=>[O(Vt,null,{default:F(()=>[le("div",$r,[O(Ot,{icon:s,size:"28"},null,8,["icon"]),le("span",Ar,vt(r),1)])]),_:2},1024)]),_:2},1024)])),64))]))}},Dr=Ae(jr,[["__scopeId","data-v-a0d299b9"]]),Or={class:"swiper-centered-slide"},Vr=["injectStyles"],Br={class:"d-flex flex-column align-center gap-y-3"},Gr={class:"text-high-emphasis"},Hr={__name:"DemoSwiperCenteredSlidesOption1",setup(i){return te(),(e,t)=>(R(),N("div",Or,[le("swiper-container",{navigation:"true","centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",injectStyles:[`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        `],breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:20}}},[(R(),N(K,null,J([{icon:"ri-github-fill",text:"Getting Started"},{icon:"ri-facebook-circle-line",text:"Pricing & Plans"},{icon:"ri-twitter-line",text:"Sales Question"},{icon:"ri-instagram-line",text:"Usage Guidelines"},{icon:"ri-gitlab-line",text:"General Guide"}],({icon:s,text:r})=>le("swiper-slide",{key:r},[O(Bt,null,{default:F(()=>[O(Vt,null,{default:F(()=>[le("div",Br,[O(Ot,{icon:s,size:"28"},null,8,["icon"]),le("span",Gr,vt(r),1)])]),_:2},1024)]),_:2},1024)])),64))],8,Vr)]))}},Rr=Ae(Hr,[["__scopeId","data-v-2608311e"]]),Dt="/assets/banner-26-Co29d348.jpg",Nr="/assets/banner-28-BavDZX16.jpg",Xr="/assets/banner-29-Bw5q4Gpe.jpg",Fr="/assets/banner-30-BcnSNmsG.jpg",Yr={"slides-per-view":"4","grid-fill":"rows","space-between":"30","grid-rows":"2","pagination-clickable":"true","events-prefix":"swiper-"},Wr={__name:"DemoSwiperGrid",setup(i){return te(),(e,t)=>(R(),N("swiper-container",Yr,[(R(!0),N(K,null,J([k(Dt),k(Fe),k(Nr),k(Xr),k(Fr),k(qe),k(De),k(Ue),k(Ke),k(Ze),k(Dt),k(Fe)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},qr={pagination:"true","slides-per-view":"3","space-between":"25","events-prefix":"swiper-"},Ur={__name:"DemoSwiperMultipleSlidesPerView",setup(i){return te(),(e,t)=>(R(),N("swiper-container",qr,[(R(!0),N(K,null,J([k(qe),k(De),k(Ue),k(Ke),k(Ze)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},Kr={navigation:"true","pagination-type":"progressbar","events-prefix":"swiper-"},Zr={__name:"DemoSwiperProgress",setup(i){return te(),(e,t)=>(R(),N("swiper-container",Kr,[(R(!0),N(K,null,J([k(Je),k(Se),k(Oe),k(Qe),k(Qt)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},Qr={pagination:"true","events-prefix":"swiper-"},Jr={__name:"DemoSwiperPagination",setup(i){return te(),(e,t)=>(R(),N("swiper-container",Qr,[(R(!0),N(K,null,J([k(ze),k(St),k(Je),k(Se),k(Oe)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},en="/assets/banner-14-bNfFS-GU.jpg",Jt="/assets/banner-2-SWMk04gr.jpg",tn="/assets/banner-3-S5UpPGOJ.jpg",sn={navigation:"true","events-prefix":"swiper-"},rn={__name:"DemoSwiperNavigation",setup(i){return te(),(e,t)=>(R(),N("swiper-container",sn,[(R(!0),N(K,null,J([k(Se),k(Qe),k(en),k(tn),k(Jt)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},nn="/assets/banner-1-rgqr7rAW.jpg",an={"events-prefix":"swiper-"},on={__name:"DemoSwiperBasic",setup(i){return te(),(e,t)=>(R(),N("swiper-container",an,[(R(!0),N(K,null,J([k(nn),k(Jt),k(Qe),k(Se),k(Le)],s=>(R(),N("swiper-slide",{key:s},[O(se,{src:s},null,8,["src"])]))),128))]))}},ln={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`},pn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},dn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'ri-github-fill', text: 'Getting Started' },
          { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
          { icon: 'ri-twitter-line', text: 'Sales Question' },
          { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
          { icon: 'ri-gitlab-line', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'ri-github-fill', text: 'Getting Started' },
          { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
          { icon: 'ri-twitter-line', text: 'Sales Question' },
          { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
          { icon: 'ri-gitlab-line', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`},cn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'ri-github-fill', text: 'Getting Started' },
        { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
        { icon: 'ri-twitter-line', text: 'Sales Question' },
        { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
        { icon: 'ri-gitlab-line', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'ri-github-fill', text: 'Getting Started' },
        { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
        { icon: 'ri-twitter-line', text: 'Sales Question' },
        { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
        { icon: 'ri-gitlab-line', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`},fn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`},un={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`},mn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},wn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`},gn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},hn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`},vn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},bn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},yn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Sn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'

import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},xn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},En={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${index + 1}\`)
const swiperEl = ref<any>(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = (index: number) => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([
    \`<swiper-slide>Slide \${(++appendNumber.value)} </swiper-slide>\`,
  ])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${ index + 1 }\`)
const swiperEl = ref(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = index => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([\`<swiper-slide>Slide \${ ++appendNumber.value } </swiper-slide>\`])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`},jn={__name:"swiper",setup(i){return(e,t)=>{const s=on,r=ti,n=rn,d=Jr,p=Zr,a=Ur,f=Wr,l=Rr,o=Dr,c=Lr,m=Cr,w=yr,v=hr,h=mr,u=dr,b=lr,g=ar;return R(),ei(ii,null,{default:F(()=>[O(ee,null,{default:F(()=>[O(r,{title:"Basic",code:pn},{default:F(()=>[O(s)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Navigation",code:bn},{default:F(()=>[O(n)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Pagination",code:yn},{default:F(()=>[O(d)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Progress",code:Sn},{default:F(()=>[O(p)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Multiple Slides Per View",code:vn},{default:F(()=>[O(a)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Grid",code:gn},{default:F(()=>[O(f)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{variant:"text",title:"Centered Slides Option 1",code:dn},{default:F(()=>[O(l)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Centered Slides Option 2",code:cn},{default:F(()=>[O(o)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Fade",code:mn},{default:F(()=>[O(c)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Cube Effect",code:un},{default:F(()=>[O(m)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Coverflow Effect",code:fn},{default:F(()=>[O(w)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Autoplay",code:ln},{default:F(()=>[O(v)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Gallery",code:wn},{default:F(()=>[O(h)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Lazy Loading",code:hn},{default:F(()=>[O(u)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Responsive Breakpoints",code:xn},{default:F(()=>[O(b)]),_:1},8,["code"])]),_:1}),O(ee,null,{default:F(()=>[O(r,{title:"Virtual Slides",code:En},{default:F(()=>[O(g)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{jn as default};
