<script setup>
import ctaDashboard from '@images/front-pages/landing-page/cta-dashboard.png'
</script>

<template>
  <div class="landing-cta position-relative bg-surface">
    <VContainer>
      <div class="d-flex align-center justify-sm-space-between flex-column flex-md-row gap-y-6 gap-x-12">
        <div class="text-sm-start text-center py-md-14 py-2">
          <div class="banner-text pb-1">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </div>
          <div class="text-body-1 font-weight-medium mb-8">
            Solicita una demo gratis y descubre todo lo que podemos hacer por ti.
          </div>
          <VBtn
            :to="{ name: 'front-pages-landing-page', hash: '#contact-us' }"
            color="primary"
          >
            Solicitar Demo Gratis
            <VIcon
              end
              icon="ri-arrow-right-line"
              class="flip-in-rtl"
            />
          </VBtn>
        </div>

        <VImg
          :src="ctaDashboard"
          :max-width="$vuetify.display.mdAndUp ? 600 : ''"
          max-height="300"
          width="auto"
          class="align-self-center mb-n4 align-self-md-end"
        />
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss" scoped>
.landing-cta {
  background-image: url("@images/front-pages/backgrounds/cta-bg.png");
  background-size: cover;
  margin-block: auto;
}

.banner-text {
  color: rgb(var(--v-theme-primary));
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.25px;
  line-height: 42px;
}
</style>
