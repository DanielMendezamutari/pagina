import{m as Z,u as ee,a as le,V as ae,b as Y,g as q}from"./VSliderTrack-C2S1xMbc.js";import{m as te,V as E}from"./VInput-blsFEGMx.js";import{m as se,u as oe,V as ne}from"./form-BBKPOVAI.js";import{a4 as ue,bx as re,r as b,av as ie,au as de,a8 as H,ac as ce,b as a,F as me,q as pe,o as g,f as S,m as k,aH as $,e as d,a2 as ve,d as c,t as v}from"./index-B7Y130JR.js";import{_ as fe}from"./AppCardCode-Bm8AaVjn.js";import{V as Ve,a as R}from"./VRow-DAEpMBUF.js";import"./VImg-BACxhQ_4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCard-BcAmVeMA.js";import"./VAvatar-CwfWkNrb.js";import"./VCardText-BCUzQk1t.js";import"./VDivider-Bu4I_F4l.js";/* empty css              */const _e=ue({...se(),...te(),...Z(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),y=re()({name:"VRangeSlider",props:_e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:n,emit:o}=s;const l=b(),i=b(),h=b(),{rtlClasses:B}=ie();function M(m){if(!l.value||!i.value)return;const p=q(m,l.value.$el,e.direction),r=q(m,i.value.$el,e.direction),u=Math.abs(p),f=Math.abs(r);return u<f||u===f&&p<0?l.value.$el:i.value.$el}const P=ee(e),t=de(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>P.roundValue(p)):[0,0]),{activeThumbRef:V,hasLabels:G,max:I,min:j,mousePressed:J,onSliderMousedown:K,onSliderTouchstart:Q,position:z,trackContainerRef:X,readonly:L}=le({props:e,steps:P,onSliderStart:()=>{o("start",t.value)},onSliderEnd:m=>{var u;let{value:p}=m;const r=V.value===((u=l.value)==null?void 0:u.$el)?[p,t.value[1]]:[t.value[0],p];!e.strict&&r[0]<r[1]&&(t.value=r),o("end",t.value)},onSliderMove:m=>{var f,x,w,_;let{value:p}=m;const[r,u]=t.value;!e.strict&&r===u&&r!==j.value&&(V.value=p>r?(f=i.value)==null?void 0:f.$el:(x=l.value)==null?void 0:x.$el,(w=V.value)==null||w.focus()),V.value===((_=l.value)==null?void 0:_.$el)?t.value=[Math.min(p,u),u]:t.value=[r,Math.max(r,p)]},getActiveThumb:M}),{isFocused:U,focus:A,blur:N}=oe(e),O=H(()=>z(t.value[0])),W=H(()=>z(t.value[1]));return ce(()=>{const m=E.filterProps(e),p=!!(e.label||n.label||n.prepend);return a(E,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||G.value,"v-slider--focused":U.value,"v-slider--pressed":J.value,"v-slider--disabled":e.disabled},B.value,e.class],style:e.style,ref:h},m,{focused:U.value}),{...n,prepend:p?r=>{var u,f;return a(me,null,[((u=n.label)==null?void 0:u.call(n,r))??(e.label?a(ne,{class:"v-slider__label",text:e.label},null):void 0),(f=n.prepend)==null?void 0:f.call(n,r)])}:void 0,default:r=>{var x,w;let{id:u,messagesId:f}=r;return a("div",{class:"v-slider__container",onMousedown:L.value?void 0:K,onTouchstartPassive:L.value?void 0:Q},[a("input",{id:`${u.value}_start`,name:e.name||u.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${u.value}_stop`,name:e.name||u.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:X,start:O.value,stop:W.value},{"tick-label":n["tick-label"]}),a(Y,{ref:l,"aria-describedby":f.value,focused:U&&V.value===((x=l.value)==null?void 0:x.$el),modelValue:t.value[0],"onUpdate:modelValue":_=>t.value=[_,t.value[1]],onFocus:_=>{var D,T,F,C;A(),V.value=(D=l.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[1]===j.value&&_.relatedTarget!==((T=i.value)==null?void 0:T.$el)&&((F=l.value)==null||F.$el.blur(),(C=i.value)==null||C.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:j.value,max:t.value[1],position:O.value,ripple:e.ripple},{"thumb-label":n["thumb-label"]}),a(Y,{ref:i,"aria-describedby":f.value,focused:U&&V.value===((w=i.value)==null?void 0:w.$el),modelValue:t.value[1],"onUpdate:modelValue":_=>t.value=[t.value[0],_],onFocus:_=>{var D,T,F,C;A(),V.value=(D=i.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[0]===I.value&&_.relatedTarget!==((T=l.value)==null?void 0:T.$el)&&((F=i.value)==null||F.$el.blur(),(C=l.value)==null||C.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:t.value[0],max:I.value,position:W.value,ripple:e.ripple},{"thumb-label":n["thumb-label"]})])}})}),{}}}),be={__name:"DemoRangeSliderVertical",setup(e){const s=b([20,40]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},he={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],n=["ri-snowy-line","ri-leaf-line","ri-fire-line","ri-drop-line"],o=b([1,2]);return(l,i)=>(g(),S(y,{modelValue:k(o),"onUpdate:modelValue":i[0]||(i[0]=h=>$(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:h})=>[a(ve,{icon:n[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},ge={__name:"DemoRangeSliderStep",setup(e){const s=b([20,40]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},Se={__name:"DemoRangeSliderColor",setup(e){const s=b([10,60]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderDisabled",setup(e){const s=b([30,60]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},ke={__name:"DemoRangeSliderBasic",setup(e){const s=b([10,60]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null)},null,8,["modelValue"]))}},$e={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ye={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['ri-snowy-line', 'ri-leaf-line', 'ri-fire-line', 'ri-drop-line']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'ri-snowy-line',
  'ri-leaf-line',
  'ri-fire-line',
  'ri-drop-line',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Te={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Fe=c("p",null,[v("The "),c("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Ce=c("p",null,[v("You cannot interact with "),c("code",null,"disabled"),v(" sliders.")],-1),Pe=c("p",null,[v("Use "),c("code",null,"color"),v(" prop to the sets the slider color. "),c("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Ue=c("p",null,[c("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Be=c("p",null,[v(" Using the "),c("code",null,"tick-labels"),v(" prop along with the "),c("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Me=c("p",null,[v("You can use the "),c("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Je={__name:"range-slider",setup(e){return(s,n)=>{const o=ke,l=fe,i=Re,h=Se,B=ge,M=he,P=be;return g(),S(Ve,null,{default:d(()=>[a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Basic",code:$e},{default:d(()=>[Fe,a(o)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Disabled",code:xe},{default:d(()=>[Ce,a(i)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Color",code:ye},{default:d(()=>[Pe,a(h)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Step",code:we},{default:d(()=>[Ue,a(B)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Thumb label",code:De},{default:d(()=>[Be,a(M)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Vertical",code:Te},{default:d(()=>[Me,a(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Je as default};
