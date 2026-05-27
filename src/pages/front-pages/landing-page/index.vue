<script setup>
import heroImage from '@images/front-pages/landing-page/hero-dashboard-light.png'
import { useConfigStore } from '@core/stores/config'

const store = useConfigStore()

store.skin = 'default'
definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})

const whatsappUrl = 'https://wa.me/59167369293?text=Hola%2C%20quiero%20mi%20consultoria%20o%20auditoria%20gratis%20para%20un%20sistema%20web.'

const benefits = [
  {
    title: 'Ahorra tiempo',
    icon: 'ri-time-line',
  },
  {
    title: 'Evita pérdidas',
    icon: 'ri-shield-check-line',
  },
  {
    title: 'Vende más',
    icon: 'ri-line-chart-line',
  },
]

const portfolio = [
  'Farmacia Magno',
  'Farmacia Sanandita',
  'Mikafarma',
  'Farmacia Guzman',
  'Tienda Kuñatai',
  'Clínica AOD',
  'Medifem',
  'Licorería Punto Frío',
  'Pollería Mi Pollito',
]
</script>

<template>
  <main class="mobile-landing">
    <VContainer class="page-shell">
      <nav class="topbar">
        <div class="brand-mark">
          <span>R</span>
        </div>
        <div class="brand-copy">
          <strong>Ribersoft</strong>
          <small>Software para negocios</small>
        </div>
        <VSpacer />
        <div class="nav-links">
          <a href="#soluciones">Soluciones</a>
          <a href="#clientes">Clientes</a>
        </div>
        <VBtn
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          color="warning"
          class="top-whatsapp"
        >
          Agenda tu demo
        </VBtn>
      </nav>

      <section class="hero-section">
        <div class="hero-copy">
          <VChip
            color="success"
            variant="elevated"
            class="hero-badge"
          >
            Auditoría gratis
          </VChip>

          <h1>
            Ahorra. Controla. Vende más.
          </h1>

          <p>
            Sistemas web listos para ventas, inventario, caja y reportes.
          </p>

          <div class="hero-actions">
            <VBtn
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              color="warning"
              size="large"
              class="main-cta"
            >
              <VIcon
                end
                class="flip-in-rtl"
                icon="ri-arrow-right-line"
              />
              Agenda por WhatsApp
            </VBtn>
            <VBtn
              href="#clientes"
              variant="outlined"
              color="primary"
              size="large"
              class="secondary-cta"
            >
              Ver clientes
            </VBtn>
          </div>
        </div>

        <div class="hero-visual">
          <VImg
            :src="heroImage"
            class="hero-image"
          />
        </div>
      </section>

      <section
        id="soluciones"
        class="solutions-section"
      >
        <h2>Soluciones para mejorar tu negocio.</h2>

        <div class="solution-grid">
          <article
            v-for="benefit in benefits"
            :key="benefit.title"
            class="solution-card"
          >
            <VIcon
              :icon="benefit.icon"
              size="30"
            />
            <h3>{{ benefit.title }}</h3>
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Empezar ahora
              <VIcon
                size="16"
                icon="ri-whatsapp-line"
              />
            </a>
          </article>
        </div>
      </section>

      <section
        id="clientes"
        class="portfolio-section"
      >
        <div class="section-kicker">
          Clientes
        </div>
        <h2>Negocios que confían.</h2>
        <div class="portfolio-grid">
          <span
            v-for="item in portfolio"
            :key="item"
          >
            {{ item }}
          </span>
        </div>
      </section>

      <section class="final-card">
        <h2>Sin compromiso.</h2>
        <p>Te mostramos qué sistema puede ayudarte.</p>
        <VBtn
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          color="success"
          size="large"
          block
        >
          Contactar ahora
        </VBtn>
      </section>
    </VContainer>

    <div class="sticky-cta">
      <VBtn
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        color="success"
        size="large"
        block
      >
        <VIcon
          start
          icon="ri-whatsapp-line"
        />
        WhatsApp: 67369293
      </VBtn>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.mobile-landing {
  min-block-size: 100vh;
  background:
    radial-gradient(80rem 18rem at 50% 18rem, #dceeff 0%, #dceeff 58%, transparent 59%),
    radial-gradient(70rem 16rem at 50% 38rem, #dceeff 0%, #dceeff 56%, transparent 57%),
    linear-gradient(180deg, #fff 0%, #f8fbff 45%, #fff 100%);
  color: #0f172a;
  padding-block-end: 5.5rem;
}

.page-shell {
  max-inline-size: 1160px;
  padding: 1rem;
}

.topbar {
  display: flex;
  align-items: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.94);
  gap: 0.7rem;
  padding: 0.65rem 0.75rem;
}

.brand-mark {
  display: grid;
  border-radius: 50%;
  background: #118bd0;
  color: #fff;
  font-weight: 900;
  inline-size: 38px;
  place-items: center;
  block-size: 38px;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.1;

  strong {
    font-size: 1rem;
    letter-spacing: 0.02em;
  }

  small {
    color: #64748b;
    font-size: 0.78rem;
  }
}

.top-whatsapp {
  border-radius: 999px;
  color: #fff !important;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 0 10px 24px rgba(251, 140, 0, 0.3);
}

.nav-links {
  display: none;
  align-items: center;
  gap: 1.4rem;

  a {
    color: #1e293b;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
  }
}

.hero-section {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 50px rgba(30, 64, 175, 0.1);
  margin-block: 1.2rem 2.5rem;
  padding: 1.5rem 1rem 0.5rem;
  text-align: center;
}

.hero-badge {
  font-weight: 800;
  margin-block-end: 0.9rem;
}

.hero-copy {
  h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.25rem, 11vw, 4rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1.05;
    margin: 0;
  }

  p {
    color: #64748b;
    font-size: 1.02rem;
    line-height: 1.62;
    margin-block: 1rem 1rem;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.main-cta,
.secondary-cta {
  border-radius: 999px;
  font-weight: 800;
}

.phone-link {
  color: #0f2f66;
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
}

.hero-visual {
  position: relative;
  overflow: hidden;
  background: transparent;
  margin-block-start: 0.75rem;
}

.hero-image {
  min-block-size: 190px;

  :deep(.v-img__img) {
    object-fit: contain;
  }
}

.final-card,
.portfolio-section {
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.08);
  margin-block-start: 1rem;
  padding: 1.1rem;
}

.solutions-section {
  margin-block: 1.5rem;
  text-align: center;

  h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.8rem, 8vw, 3rem);
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 1.08;
    margin-block: 0 1.2rem;
  }
}

.solution-grid {
  display: grid;
  gap: 0.85rem;
}

.solution-card {
  border-radius: 14px;
  color: #fff;
  min-block-size: 132px;
  padding: 1rem;
  text-align: start;

  &:nth-child(1) {
    background: #7c3aed;
  }

  &:nth-child(2) {
    background: #f59e0b;
  }

  &:nth-child(3) {
    background: #1d9bf0;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 900;
    margin-block: 0.6rem 0.9rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 800;
    gap: 0.35rem;
    text-decoration: none;
  }
}

.section-kicker {
  color: #16a34a;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  margin-block-end: 0.55rem;
  text-transform: uppercase;
}

.portfolio-section,
.final-card {
  h2 {
    font-size: 1.45rem;
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1.08;
    margin: 0;
  }

  p {
    color: #64748b;
    line-height: 1.55;
    margin-block: 0.65rem 0;
  }
}

.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-block-start: 1rem;

  span {
    border: 1px solid rgba(22, 163, 74, 0.18);
    border-radius: 999px;
    background: #ecfdf5;
    color: #14532d;
    font-size: 0.84rem;
    font-weight: 800;
    padding: 0.52rem 0.72rem;
  }
}

.final-card {
  background: linear-gradient(135deg, #0f2f66, #0b1730);
  color: #fff;
  margin-block-end: 1.25rem;

  p {
    color: rgba(255, 255, 255, 0.72);
  }
}

.sticky-cta {
  position: fixed;
  z-index: 10;
  inset-block-end: 0;
  inset-inline: 0;
  padding: 0.75rem 1rem 1rem;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.96) 35%);
}

@media (min-width: 768px) {
  .mobile-landing {
    padding-block-end: 2rem;
  }

  .page-shell {
    padding-block: 1.5rem;
  }

  .nav-links {
    display: flex;
  }

  .hero-section {
    margin-inline: auto;
    max-inline-size: 900px;
    padding: 2rem 2rem 0.75rem;
  }

  .hero-copy {
    p {
      font-size: 1.12rem;
      max-inline-size: 620px;
    }
  }

  .hero-actions {
    .v-btn {
      inline-size: auto;
    }
  }

  .phone-link {
    text-align: start;
  }

  .hero-image {
    min-block-size: 330px;
  }

  .solution-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .final-card,
  .portfolio-section {
    padding: 1.5rem;
  }

  .sticky-cta {
    display: none;
  }
}

@media (max-width: 380px) {
  .page-shell {
    padding-inline: 0.75rem;
  }

  .hero-copy {
    h1 {
      font-size: 1.95rem;
    }

    p {
      font-size: 0.96rem;
    }
  }
}
</style>
