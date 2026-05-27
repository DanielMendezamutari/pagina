import{r as f,o as c,f as g,e as o,b as e,a3 as D,q as U,m as r,aI as u,_ as v,c as h,d as l,v as S,F as R,h as j,t as s}from"./index-BM0EVJZq.js";import{V as i}from"./VRating-BrAUy8s1.js";import{V as I}from"./VSlider-B93oBCg3.js";import{_ as k}from"./AppCardCode-Kr-RNp6C.js";import{V as F,a as p}from"./VRow-BsXFvlTh.js";import"./VSliderTrack-Sgxxfa4o.js";import"./VInput-D7cGYl7R.js";import"./form-Cr5I07wj.js";import"./VImg-DRNaxMhj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCard-Q2ZG-NBq.js";import"./VAvatar-B_Ljku-8.js";import"./VCardText-B_P8vM89.js";import"./VDivider-CPjJVqpl.js";/* empty css              */const B={__name:"DemoRatingItemSlot",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=n=>u(t)?t.value=n:null)},{item:o(n=>[e(D,U(n,{size:25,color:n.isFilled?"success":"secondary",class:"me-3",icon:n.isFilled?"ri-emotion-happy-line":"ri-emotion-unhappy-line"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},T={__name:"DemoRatingIncremented",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=n=>u(t)?t.value=n:null),"half-increments":"",hover:"",color:"secondary"},null,8,["modelValue"]))}},L={};function M(m,t){return c(),g(i,{hover:""})}const N=v(L,[["render",M]]),H={};function P(m,t){return c(),g(i,{readonly:"","model-value":4})}const q=v(H,[["render",P]]),A={};function E(m,t){return c(),g(i,{clearable:""})}const G=v(A,[["render",E]]),J=l("div",{class:"text-caption"}," Custom length ",-1),K={class:"font-weight-medium mb-0"},O={__name:"DemoRatingLength",setup(m){const t=f(5),d=f(2);return(a,n)=>(c(),h(R,null,[J,e(I,{modelValue:r(t),"onUpdate:modelValue":n[0]||(n[0]=_=>u(t)?t.value=_:null),min:1,max:7},null,8,["modelValue"]),e(i,{modelValue:r(d),"onUpdate:modelValue":n[1]||(n[1]=_=>u(d)?d.value=_:null),length:r(t)},null,8,["modelValue","length"]),l("p",K," Model: "+S(r(d)),1)],64))}},Q={class:"d-flex flex-column"},W={__name:"DemoRatingSize",setup(m){const t=f(4);return(d,a)=>(c(),h("div",Q,[e(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=n=>u(t)?t.value=n:null),size:"x-small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[1]||(a[1]=n=>u(t)?t.value=n:null),size:"small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[2]||(a[2]=n=>u(t)?t.value=n:null)},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[3]||(a[3]=n=>u(t)?t.value=n:null),size:"large"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[4]||(a[4]=n=>u(t)?t.value=n:null),size:"x-large"},null,8,["modelValue"])]))}},X={class:"d-flex flex-column"},Y={__name:"DemoRatingColors",setup(m){const t=f(4),d=["primary","secondary","success","info","warning","error"];return(a,n)=>(c(),h("div",X,[(c(),h(R,null,j(d,_=>e(i,{key:_,modelValue:r(t),"onUpdate:modelValue":n[0]||(n[0]=V=>u(t)?t.value=V:null),color:_},null,8,["modelValue","color"])),64))]))}},Z={};function ee(m,t){return c(),g(i,{density:"compact"})}const te=v(Z,[["render",ee]]),ne={};function oe(m,t){return c(),g(i)}const le=v(ne,[["render",oe]]),ae={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},se={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},ie={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},ce={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},me={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
    color="secondary"
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
    color="secondary"
  />
</template>
`},de={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'ri-emotion-happy-line' : 'ri-emotion-unhappy-line'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'ri-emotion-happy-line' : 'ri-emotion-unhappy-line'"
      />
    </template>
  </VRating>
</template>
`},pe={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},ue={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},_e={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},ge=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component provides a simple interface for gathering user feedback.")],-1),fe=l("p",null,[s("Control the space occupied by "),l("code",null,"v-rating"),s(" items using the "),l("code",null,"density"),s(" prop.")],-1),ve=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component can be colored as you want, you can set both selected and not selected colors.")],-1),he=l("p",null,[s("Utilize the same sizing classes available in "),l("code",null,"v-icon"),s(" or provide your own with the "),l("code",null,"size"),s(" prop.")],-1),Ve=l("p",null,[s("Change the number of items by modifying the the "),l("code",null,"length"),s(" prop.")],-1),Re=l("p",null,[s("Use "),l("code",null,"clearable"),s(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),ye=l("p",null,[s("For ratings that are not meant to be changed you can use "),l("code",null,"readonly"),s(" prop.")],-1),xe=l("p",null,"Provides visual feedback when hovering over icons",-1),be=l("p",null,[s("The "),l("code",null,"half-increments"),s(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),ze=l("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),He={__name:"rating",setup(m){return(t,d)=>{const a=le,n=k,_=te,V=Y,y=W,x=O,b=G,z=q,C=N,$=T,w=B;return c(),g(F,{class:"match-height"},{default:o(()=>[e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Basic",code:ae},{default:o(()=>[ge,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Density",code:re},{default:o(()=>[fe,e(_)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Colors",code:ie},{default:o(()=>[ve,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Size",code:_e},{default:o(()=>[he,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Length",code:pe},{default:o(()=>[Ve,e(x)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Clearable",code:se},{default:o(()=>[Re,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Readonly",code:ue},{default:o(()=>[ye,e(z)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Hover",code:ce},{default:o(()=>[xe,e(C)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Incremented",code:me},{default:o(()=>[be,e($)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Item slot",code:de},{default:o(()=>[ze,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{He as default};
