<script setup>
const statData = ref([
  {
    title: 'Más de 5 años de experiencia',
    label: 'Proyectos exitosos y clientes satisfechos.',
    icon: 'ri-trophy-line',
    color: 'primary',
    isHover: false,
  },
  {
    title: 'Sistemas adaptados a tu negocio',
    label: 'Personalización para farmacias, tiendas y clínicas.',
    icon: 'ri-settings-3-line',
    color: 'success',
    isHover: false,
  },
  {
    title: 'Actualizaciones constantes',
    label: 'Nuevas funciones y mejoras sin interrupciones.',
    icon: 'ri-refresh-line',
    color: 'warning',
    isHover: false,
  },
  {
    title: 'Soporte técnico especializado',
    label: 'Asistencia clara y rápida cuando más la necesitas.',
    icon: 'ri-headphone-line',
    color: 'info',
    isHover: false,
  },
])
</script>

<template>
  <div :style="{ 'background-color': 'rgb(var(--v-theme-surface))' }">
    <VContainer id="why-us">
      <div class="py-12">
        <div class="text-center mb-10">
          <div class="text-h4 font-weight-bold mb-2">
            ¿Por qué elegir Ribersoft?
          </div>
          <p class="text-body-1 text-medium-emphasis mx-auto" style="max-inline-size: 680px;">
            Genera confianza con sistemas seguros, escalables y hechos a la medida de tu negocio.
          </p>
        </div>

        <VRow>
          <VCol
            v-for="(item, index) in statData"
            :key="index"
            cols="12"
            sm="6"
          >
            <VCard flat>
              <VCardText class="text-center card-reason">
                <VAvatar
                  size="82"
                  :color="item.color"
                  :variant="item.isHover ? 'elevated' : 'tonal'"
                  class="mb-6 cursor-pointer"
                  @mouseenter="() => item.isHover = true"
                  @mouseleave="item.isHover = false"
                >
                  <VIcon
                    :icon="item.icon"
                    size="36"
                  />
                </VAvatar>
                <div class="text-h6 font-weight-bold mb-2">
                  {{ item.title }}
                </div>
                <div class="text-body-1 text-medium-emphasis">
                  {{ item.label }}
                </div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss" scoped>
.card-reason {
  transition: all 0.2s ease;
}

.card-reason:hover {
  transform: translateY(-4px);
}
</style>
