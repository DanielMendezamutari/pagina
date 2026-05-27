import{V as o}from"./VChip-DB7yt756.js";import{V as P,a as $,b as E,d as w}from"./VList-DC61Vv-Z.js";import{V as W}from"./VListItemAction-DUAcA5yG.js";import{r as m,a as L,o as n,f as V,e as i,b as e,b7 as M,b8 as z,t as a,a3 as A,m as l,aI as x,_ as b,c as _,a_ as T,a$ as j,b0 as B,aQ as N,d as r,y as v}from"./index-BM0EVJZq.js";import{V as J}from"./VMenu-DweS5Ls5.js";import{V as U}from"./VCombobox-B1W9PBa5.js";import{_ as F}from"./AppCardCode-Kr-RNp6C.js";import{V as R,a as u}from"./VRow-BsXFvlTh.js";import"./VSlideGroup-CfDZDmjh.js";import"./VAvatar-B_Ljku-8.js";import"./VImg-DRNaxMhj.js";import"./ssrBoot-Bs9uu_JM.js";import"./VDivider-CPjJVqpl.js";import"./VOverlay-CnFWHiQB.js";import"./easing-CjukEv2V.js";import"./lazy-CTmj6QEC.js";import"./scopeId-CH6X6T0d.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-rxP6RMMR.js";import"./VSelect-By0tuoKa.js";import"./VTextField-BlD4zV3p.js";/* empty css                   */import"./VCounter-Ebja2kLh.js";import"./VField-CrNATN5p.js";import"./form-Cr5I07wj.js";import"./VInput-D7cGYl7R.js";import"./VCheckboxBtn-vSW62ex0.js";import"./VSelectionControl-BOokPudV.js";import"./filter-CsznUSbN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCard-Q2ZG-NBq.js";import"./VCardText-B_P8vM89.js";/* empty css              */const Y={__name:"DemoChipExpandable",setup(h){const t=m(!1);return(C,d)=>{const s=L("IconBtn");return n(),V(J,{modelValue:l(t),"onUpdate:modelValue":d[1]||(d[1]=p=>x(t)?t.value=p:null),transition:"scale-transition"},{activator:i(({props:p})=>[e(o,M(z(p)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e(P,null,{default:i(()=>[e($,null,{append:i(()=>[e(W,{class:"ms-1"},{default:i(()=>[e(s,{onClick:d[0]||(d[0]=p=>t.value=!1)},{default:i(()=>[e(A,{size:"20",icon:"ri-close-line"})]),_:1})]),_:1})]),default:i(()=>[e(E,null,{default:i(()=>[a("VueJS")]),_:1}),e(w,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},O={__name:"DemoChipInSelects",setup(h){const t=m(["Programming","Playing games","Sleeping"]),C=m(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(d,s)=>(n(),V(U,{modelValue:l(t),"onUpdate:modelValue":s[0]||(s[0]=p=>x(t)?t.value=p:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"ri-close-circle-line",items:l(C),label:"Your favorite hobbies","prepend-icon":"ri-filter-3-line"},null,8,["modelValue","items"]))}},Q={},q={class:"demo-space-x"};function G(h,t){return n(),_("div",q,[e(o,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(o,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(o,null,{default:i(()=>[a("Default")]),_:1}),e(o,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(o,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const H=b(Q,[["render",G]]),K={class:"demo-space-x"},X=r("span",null,"Chip",-1),Z=r("span",null,"Darcy Nooser",-1),ee=r("span",null,"Felicia Risker",-1),ie=r("span",null,"Minnie Mostly",-1),ae={__name:"DemoChipWithAvatar",setup(h){return(t,C)=>(n(),_("div",K,[e(o,{"prepend-avatar":l(T)},{default:i(()=>[X]),_:1},8,["prepend-avatar"]),e(o,{"prepend-avatar":l(j)},{default:i(()=>[Z]),_:1},8,["prepend-avatar"]),e(o,{"prepend-avatar":l(B)},{default:i(()=>[ee]),_:1},8,["prepend-avatar"]),e(o,{"prepend-avatar":l(N)},{default:i(()=>[ie]),_:1},8,["prepend-avatar"])]))}},oe={},re={class:"demo-space-x"};function le(h,t){return n(),_("div",re,[e(o,{"prepend-icon":"ri-user-line"},{default:i(()=>[a(" Account ")]),_:1}),e(o,{color:"primary","prepend-icon":"ri-star-line"},{default:i(()=>[a(" Premium ")]),_:1}),e(o,{color:"secondary","prepend-icon":"ri-cake-line"},{default:i(()=>[a(" 1 Year ")]),_:1}),e(o,{color:"success","prepend-icon":"ri-notification-line"},{default:i(()=>[a(" Notification ")]),_:1}),e(o,{color:"info","prepend-icon":"ri-message-line"},{default:i(()=>[a(" Message ")]),_:1}),e(o,{color:"warning","prepend-icon":"ri-error-warning-line"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error","prepend-icon":"ri-error-warning-line"},{default:i(()=>[a(" Error ")]),_:1})])}const te=b(oe,[["render",le]]),se={class:"demo-space-x"},ne={__name:"DemoChipClosable",setup(h){const t=m(!0),C=m(!0),d=m(!0),s=m(!0),p=m(!0),g=m(!0),y=m(!0);return(S,c)=>(n(),_("div",se,[l(t)?(n(),V(o,{key:0,closable:"","onClick:close":c[0]||(c[0]=f=>t.value=!l(t))},{default:i(()=>[a(" Default ")]),_:1})):v("",!0),l(C)?(n(),V(o,{key:1,closable:"",color:"primary","onClick:close":c[1]||(c[1]=f=>C.value=!l(C))},{default:i(()=>[a(" Primary ")]),_:1})):v("",!0),l(d)?(n(),V(o,{key:2,closable:"",color:"secondary","onClick:close":c[2]||(c[2]=f=>d.value=!l(d))},{default:i(()=>[a(" Secondary ")]),_:1})):v("",!0),l(s)?(n(),V(o,{key:3,closable:"",color:"success","onClick:close":c[3]||(c[3]=f=>s.value=!l(s))},{default:i(()=>[a(" Success ")]),_:1})):v("",!0),l(p)?(n(),V(o,{key:4,closable:"",color:"info","onClick:close":c[4]||(c[4]=f=>p.value=!l(p))},{default:i(()=>[a(" Info ")]),_:1})):v("",!0),l(g)?(n(),V(o,{key:5,closable:"",color:"warning","onClick:close":c[5]||(c[5]=f=>g.value=!l(g))},{default:i(()=>[a(" Warning ")]),_:1})):v("",!0),l(y)?(n(),V(o,{key:6,closable:"",color:"error","onClick:close":c[6]||(c[6]=f=>y.value=!l(y))},{default:i(()=>[a(" Error ")]),_:1})):v("",!0)]))}},ce={},pe={class:"demo-space-x"};function de(h,t){return n(),_("div",pe,[e(o,{label:""},{default:i(()=>[a(" Default ")]),_:1}),e(o,{label:"",color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{label:"",color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{label:"",color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{label:"",color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{label:"",color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{label:"",color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const he=b(ce,[["render",de]]),ue={},me={class:"demo-space-x"};function Ve(h,t){return n(),_("div",me,[e(o,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const Ce=b(ue,[["render",Ve]]),fe={},_e={class:"demo-space-x"};function ve(h,t){return n(),_("div",_e,[e(o,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const be=b(fe,[["render",ve]]),ge={},ye={class:"demo-space-x"};function Se(h,t){return n(),_("div",ye,[e(o,null,{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const xe=b(ge,[["render",Se]]),Ie={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ke={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},De={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Pe={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},$e={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
`},Ee={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},We={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Le={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip :prepend-avatar="avatar3">
      <span>Felicia Risker</span>
    </VChip>

    <VChip :prepend-avatar="avatar4">
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip :prepend-avatar="avatar3">
      <span>Felicia Risker</span>
    </VChip>

    <VChip :prepend-avatar="avatar4">
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Me={ts:`<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
`},ze=r("p",null,[a("Use "),r("code",null,"color"),a(" prop to change the background color of chips.")],-1),Ae=r("p",null,[a("Use "),r("code",null,"elevated"),a(" variant option to create filled chips.")],-1),Te=r("p",null,[a("Use "),r("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),je=r("p",null,[a("Label chips use the "),r("code",null,"v-card"),a(" border-radius. Use "),r("code",null,"label"),a(" prop to create label chips.")],-1),Be=r("p",null,[a("Closable chips can be controlled with a "),r("code",null,"v-model"),a(".")],-1),Ne=r("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Je=r("p",null,[a("Use "),r("code",null,"pill"),a(" prop to remove the "),r("code",null,"v-avatar"),a(" padding.")],-1),Ue=r("p",null,[a("The "),r("code",null,"v-chip"),a(" component can have various sizes from "),r("code",null,"x-small"),a(" to "),r("code",null,"x-large"),a(".")],-1),Fe=r("p",null,[a("Selects can use "),r("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Re=r("p",null,[a("Chips can be combined with "),r("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),xi={__name:"chip",setup(h){return(t,C)=>{const d=xe,s=F,p=be,g=Ce,y=he,S=ne,c=te,f=ae,I=H,k=O,D=Y;return n(),V(R,{class:"match-height"},{default:i(()=>[e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Color",code:ke},{default:i(()=>[ze,e(d)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Elevated",code:De},{default:i(()=>[Ae,e(p)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Outlined",code:we},{default:i(()=>[Te,e(g)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Label",code:Ee},{default:i(()=>[je,e(y)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Closable",code:Ie},{default:i(()=>[Be,e(S)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"With Icon",code:Me},{default:i(()=>[Ne,e(c)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"With Avatar",code:Le},{default:i(()=>[Je,e(f)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Sizes",code:We},{default:i(()=>[Ue,e(I)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"In Selects",code:$e},{default:i(()=>[Fe,e(k)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Expandable",code:Pe},{default:i(()=>[Re,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{xi as default};
