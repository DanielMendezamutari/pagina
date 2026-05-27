<script setup>
import sectionTitleIcon from '@images/pages/section-title-icon.png'
import SelectSolid from '@images/svg/3d-select-solid.svg'
import Edit from '@images/svg/edit.svg'
import GoogleDocs from '@images/svg/google-docs.svg'
import LaptopCharging from '@images/svg/laptop-charging.svg'
import Lifebelt from '@images/svg/lifebelt.svg'
import TransitionUp from '@images/svg/transition-up.svg'

const featuresData = [
  {
    title: 'Punto de Venta',
    desc: 'Ventas rápidas, descontroles y cierre de caja sencillo.',
    img: LaptopCharging,
  },
  {
    title: 'Inventario Inteligente',
    desc: 'Control de stock, alertas y productos en un solo lugar.',
    img: TransitionUp,
  },
  {
    title: 'Reportes y Estadísticas',
    desc: 'Toma mejores decisiones con datos reales y gráficos claros.',
    img: Edit,
  },
  {
    title: 'Clientes y Proveedores',
    desc: 'Gestiona tu base de datos con información de ventas y contactos.',
    img: SelectSolid,
  },
  {
    title: 'Multiusuario',
    desc: 'Varios usuarios con permisos definidos según tu equipo.',
    img: Lifebelt,
  },
]
</script>

<template>
  <VContainer id="features">
    <div class="feature-cards">
      <div class="headers d-flex justify-center flex-column align-center mb-6">
        <div class="d-flex gap-x-3 mb-6">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="24"
            width="25"
          >
          <div class="text-body-1 text-high-emphasis font-weight-medium">
            FUNCIONES PRINCIPALES
          </div>
        </div>

        <div class="mb-2 text-center">
          <span
            class="text-h4 d-inline-block font-weight-bold"
            style="line-height: 2rem;"
          >
            Funciones que impulsan
          </span> <span class="text-h5 d-inline-block">tu negocio</span>
        </div>

        <p class="text-body-1 font-weight-medium text-center">
          Todas las herramientas que necesitas para vender mejor y crecer con confianza.
        </p>
      </div>

      <VRow>
        <VCol
          v-for="(data, index) in featuresData"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
            <VAvatar
              variant="outlined"
              size="82"
              color="primary"
              class="mb-2"
            >
              <Component :is="data.img" />
            </VAvatar>

            <h5 class="text-h5">
              {{ data.title }}
            </h5>
            <p
              class="text-center text-medium-emphasis"
              style="max-inline-size: 360px;"
            >
              {{ data.desc }}
            </p>
          </div>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.feature-cards {
  margin-block-end: 4.25rem;
}

#features {
  padding-block-start: 13rem;
}

@media (max-width: 960px) {
  #features {
    padding-block-start: 6rem;
  }
}

@media (max-width: 600px) {
  #features {
    padding-block-start: 2rem;
  }
}
</style>

<style lang="scss" scoped>
.feature {
  .v-avatar {
    &.v-avatar--variant-outlined {
      border: 2px solid rgba(var(--v-theme-primary), 0.32);

      &:hover {
        background: rgba(var(--v-theme-primary), 0.16);
        cursor: pointer;
      }
    }
  }
}
</style>
