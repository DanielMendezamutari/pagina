<script setup>
import sectionTitleIcon from '@images/pages/section-title-icon.png'
import frontPageElement from '@images/svg/front-page-element.svg'
import farmaciaImg from '@images/farmacia/farmacia.png'
import tiendaImg from '@images/tienda/tienda-ropa.png'
import sectorImg3 from '@images/front-pages/landing-page/team-member-3.png'
import sectorImg4 from '@images/front-pages/landing-page/team-member-4.png'

const sectorData = ref([
  {
    title: 'Farmacias',
    desc: 'Controla inventario de medicamentos, ventas, recetas, proveedores y más.',
    icon: 'ri-hospital-line',
    color: 'rgba(75, 122, 255, 0.16)',
    borderColor: 'rgba(75, 122, 255, 0.38)',
    isHover: false,
  },
  {
    title: 'Tiendas de Ropa',
    desc: 'Gestiona tallas, colores, colecciones, inventario y ventas en tiempo real.',
    icon: 'ri-t-shirt-line',
    color: 'rgba(97, 65, 255, 0.16)',
    borderColor: 'rgba(97, 65, 255, 0.38)',
    isHover: false,
  },
  {
    title: 'Odontología',
    desc: 'Historiales clínicos, citas, tratamientos, pagos y control de pacientes.',
    icon: 'ri-tooth-line',
    color: 'rgba(0, 175, 135, 0.16)',
    borderColor: 'rgba(0, 175, 135, 0.38)',
    isHover: false,
  },
  {
    title: 'Otros Negocios',
    desc: 'Ideal para minimarkets, ferreterías, restaurantes y salones de belleza.',
    icon: 'ri-shopping-bag-line',
    color: 'rgba(0, 121, 191, 0.16)',
    borderColor: 'rgba(0, 121, 191, 0.38)',
    isHover: false,
  },
])

const sectorImgs = [farmaciaImg, tiendaImg, sectorImg3, sectorImg4]
</script>

<template>
  <VContainer id="sectors">
    <div class="our-team">
      <div class="headers d-flex justify-center flex-column align-center mb-10">
        <Component
          :is="frontPageElement"
          class="front-page-element"
        />

        <div class="d-flex gap-x-3 mb-6">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="24"
            width="25"
          >
          <div class="text-body-1 text-high-emphasis font-weight-medium">
            SOLUCIONES POS
          </div>
        </div>

        <div class="mb-2 text-center">
          <span
            class="text-h4 d-inline-block font-weight-bold"
            style="line-height: 2rem;"
          >
            Soluciones POS para cada
          </span> <span class="text-h5 d-inline-block">tipo de negocio</span>
        </div>

        <p
          class="text-body-1 font-weight-medium text-center"
          style="letter-spacing: 0.15px !important;"
        >
          Sistemas especializados que se adaptan a tus necesidades y al sector de tu empresa.
        </p>
      </div>

      <VRow>
        <VCol
          v-for="(data, index) in sectorData"
          :key="index"
          cols="12"
          md="6"
          class="mb-6"
        >
          <VCard
            flat
            variant="outlined"
            class="sector-card h-100"
            :style="data.isHover ? { border: `1px solid ${data.borderColor}` } : {}"
            @mouseenter="data.isHover = true"
            @mouseleave="data.isHover = false"
          >
            <VImg
              :src="sectorImgs[index]"
              class="sector-card-img mb-4"
              cover
              height="160"
            />

            <div class="sector-card-icon" :style="{ backgroundColor: data.color }">
              <VIcon :icon="data.icon" size="32" color="primary" />
            </div>
            <VCardText>
              <h5 class="text-h5 mb-2">
                {{ data.title }}
              </h5>
              <div class="text-body-1 text-medium-emphasis mb-4">
                {{ data.desc }}
              </div>
              <RouterLink to="#contact-us" class="sector-card-link">
                Ver solución
              </RouterLink>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.headers {
  margin-block-end: 1.25rem;
}

.our-team {
  position: relative;
  margin-block: 5.25rem 0;
}

.front-page-element {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
}

.sector-card {
  min-block-size: 220px;
  padding: 2rem;
  transition: all 0.2s ease;
}

.sector-card:hover {
  transform: translateY(-6px);
}

.sector-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.sector-card-img {
  border-radius: 0.75rem;
  object-fit: cover;
  width: 100%;
}

.sector-card-link {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
  text-decoration: none;
}
</style>
