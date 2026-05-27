<script setup>
import fodoInicio from '@images/inicio/fodo-inicio.png'

// Use the project's 'inicio' banner image as hero background
const heroBgUrl = fodoInicio


</script>

<template>
  <section
    id="home"
    :style="{ 'background-color': 'rgb(var(--v-theme-surface))' }"
  >
    <div
      id="landingHero"
      class="landing-hero"
      :style="{ backgroundImage: `url(${heroBgUrl})` }"
    >
      <VContainer>
        <VRow class="hero-row" align="center">
          <VCol cols="12" md="12" class="hero-text-col">
            <div class="landing-page-title mb-4">
              Software y Sistemas POS para
              <span class="text-primary">hacer crecer</span>
              tu negocio
            </div>

            <div class="text-body-1 font-weight-medium text-high-emphasis hero-subtitle pb-8">
              Soluciones inteligentes de punto de venta y gestión diseñadas para farmacias, tiendas de ropa, odontología y más.
              Controla tu negocio, aumenta tus ventas y mejora la experiencia de tus clientes.
            </div>

            <!-- Hero simplified: only title and subtitle remain -->
          </VCol>

          <!-- right image removed per request -->
        </VRow>
      </VContainer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@layouts/styles/mixins" as layoutMixins;

section {
  display: block;
  padding-block-end: 6.25rem;
}

.landing-hero {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-block-start: 5.5rem;
  position: relative;
}

.landing-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4,18,35,0.5) 0%, rgba(4,18,35,0.3) 40%, rgba(4,18,35,0.5) 100%);
  z-index: 0;
}

.landing-hero > .v-container,
.landing-hero .hero-row {
  position: relative;
  z-index: 1;
}

.hero-row {
  align-items: center;
}

.hero-text-col {
  text-align: center;
  color: rgb(var(--v-theme-on-surface));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 1rem;
}

.landing-page-title {
  color: rgb(255,255,255);
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 3.2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.landing-page-title .text-primary {
  color: rgb(var(--v-theme-primary));
}

.hero-subtitle {
  color: rgba(255,255,255,0.85);
  max-inline-size: 720px;
  margin-inline: auto;
  font-size: 1.05rem;
}

@media (max-width: 960px) {
  .landing-page-title {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }
}
</style>
