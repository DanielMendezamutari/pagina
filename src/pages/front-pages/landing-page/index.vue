<script setup>
import profilePhoto from '@images/profile/profile-daniel.png'
import { useConfigStore } from '@core/stores/config'

const store = useConfigStore()

store.skin = 'default'
definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})

const whatsappUrl = 'https://wa.me/59167369293?text=Hola%20Daniel%2C%20me%20interesa%20conversar%20sobre%20un%20proyecto%20de%20software.'
const email = 'contacto@ribersoft.com'
const githubUser = 'DanielMendezamutari'
const githubUrl = `https://github.com/${githubUser}`
// Pega aquí tu LinkedIn cuando lo tengas: https://www.linkedin.com/in/tu-perfil
const linkedinUrl = ''

const experience = [
  {
    role: 'Fundador y Desarrollador de Software',
    company: 'RiberSoft',
    place: 'Santa Cruz, Bolivia',
    period: 'Actualidad',
    items: ['Sistemas en producción con clientes activos', 'Soporte y mejoras continuas', 'POS, inventario y facturación'],
  },
  {
    role: 'Administrador de Operaciones',
    company: 'Casa22',
    place: 'Santa Cruz, Bolivia',
    period: 'Experiencia previa',
    items: ['Red multisucursal', 'Inventario, caja y personal', 'Control operativo y reportes'],
  },
  {
    role: 'Técnico en Mantenimiento y Reparación',
    company: 'Comercial Chiriguano',
    place: 'Santa Cruz, Bolivia',
    period: 'Experiencia previa',
    items: ['Mantenimiento de equipos de cómputo', 'Diagnóstico y reparación de hardware', 'Soporte técnico a usuarios'],
  },
]

const githubRepos = [
  {
    name: 'pagina',
    desc: 'Landing y sistemas web con Vue.js',
    lang: 'Vue',
    url: 'https://github.com/DanielMendezamutari/pagina',
  },
  {
    name: 'nightpos',
    desc: 'Sistema POS con PHP',
    lang: 'PHP',
    url: 'https://github.com/DanielMendezamutari/nightpos',
  },
  {
    name: 'moda',
    desc: 'Sistema para tienda de ropa',
    lang: 'Vue',
    url: 'https://github.com/DanielMendezamutari/moda',
  },
  {
    name: 'cursoDeFrontendDeveloper',
    desc: 'HTML, CSS y responsive design',
    lang: 'HTML',
    url: 'https://github.com/DanielMendezamutari/cursoDeFrontendDeveloper',
  },
]

const stack = [
  'PHP',
  'Laravel',
  'Vue.js',
  'JavaScript',
  'MySQL',
  'APIs REST',
  'SaaS',
  'POS',
  'Git',
  'Docker',
]

const clients = [
  {
    name: 'Farmacia Magno',
    type: 'Farmacia',
    system: 'POS e inventario',
    review: 'Con el sistema tenemos inventario y caja al día. Nos facilita mucho el trabajo diario y estamos muy contentos.',
  },
  {
    name: 'Farmacia Sanandita',
    type: 'Farmacia',
    system: 'POS e inventario',
    review: 'Ya no imagino operar sin el sistema. Los reportes son claros y todo el equipo lo usa a diario.',
  },
  {
    name: 'Mikafarma',
    type: 'Farmacia',
    system: 'POS e inventario',
    review: 'Nos ayuda a controlar productos y facturación. Funciona bien y estamos satisfechos con el servicio.',
  },
  {
    name: 'Farmacia Guzman',
    type: 'Farmacia',
    system: 'POS e inventario',
    review: 'El sistema cumple lo que necesitamos. Inventario, ventas y caja bien organizados. Muy buena experiencia.',
  },
  {
    name: 'Tienda Kuñatai',
    type: 'Retail',
    system: 'Ventas e inventario',
    review: 'Nos ordenó las ventas y el stock. Es fácil de usar y nos ha servido mucho en el negocio.',
  },
  {
    name: 'Clínica AOD',
    type: 'Salud',
    system: 'Gestión operativa',
    review: 'El software nos apoya en la operación diaria. Procesos más ordenados y el equipo está conforme.',
  },
  {
    name: 'Medifem',
    type: 'Salud',
    system: 'Gestión operativa',
    review: 'Estamos satisfechos con el sistema. Nos ayuda a trabajar de forma más eficiente cada día.',
  },
  {
    name: 'Licorería Punto Frío',
    type: 'Comercio',
    system: 'POS e inventario',
    review: 'Controlamos ventas e inventario sin complicaciones. El sistema funciona muy bien para nosotros.',
  },
  {
    name: 'Pollería Mi Pollito',
    type: 'Restaurante',
    system: 'POS e inventario',
    review: 'La caja y el inventario van al día. Nos simplifica el trabajo y estamos contentos con el resultado.',
  },
]

const hobbies = [
  {
    icon: 'ri-volleyball-line',
    label: 'Vóleibol',
    note: 'Juego vóleibol. Me gusta el deporte, el equipo y pasarla bien.',
  },
  {
    icon: 'ri-motorbike-line',
    label: 'Moto con mi hija',
    note: 'Me encanta andar en moto con mi hija. Son momentos que valoro mucho.',
  },
  {
    icon: 'ri-restaurant-line',
    label: 'Majao',
    note: 'Me gusta comer un buen majao. Cosas simples de acá, de Bolivia.',
  },
  {
    icon: 'ri-book-open-line',
    label: 'Aprender siempre',
    note: 'Me compro cursos y busco aprender algo nuevo todo el tiempo.',
  },
]

const growthFocus = [
  'Técnicas de ventas',
  'Crecimiento personal',
  'Persuasión y negociación',
  'Mentalidad emprendedora',
]
</script>

<template>
  <main class="mobile-landing">
    <VContainer class="page-shell">
      <nav class="topbar">
        <VAvatar
          :image="profilePhoto"
          size="38"
          class="nav-avatar"
        />
        <div class="brand-copy">
          <strong>Daniel Méndez</strong>
          <small>Currículum web</small>
        </div>
        <VSpacer />
        <div class="nav-links">
          <a href="#experiencia">Experiencia</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#clientes">Clientes</a>
          <a href="#github">GitHub</a>
        </div>
        <VBtn
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          color="warning"
          class="top-whatsapp"
        >
          Contactar
        </VBtn>
      </nav>

      <section
        id="perfil"
        class="hero-section"
      >
        <VAvatar
          :image="profilePhoto"
          size="128"
          class="profile-photo"
        />

        <div class="hero-copy">
          <VChip
            color="success"
            variant="elevated"
            class="hero-badge"
          >
            Disponible para proyectos
          </VChip>

          <h1>Daniel Méndez Amutari</h1>

          <p class="hero-role">
            Desarrollador de Software · Analista de Sistemas · Emprendedor
          </p>

          <p class="hero-summary">
            Desarrollador de software especializado en sistemas empresariales, POS,
            facturación, inventarios y automatización comercial.
            Con soluciones implementadas y en uso diario en farmacias, clínicas y comercios.
          </p>

          <div class="hero-meta">
            <span>📍 Santa Cruz, Bolivia</span>
            <span>🎓 EMI · Riberalta</span>
            <span>💼 RiberSoft</span>
          </div>

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
              WhatsApp
            </VBtn>
            <VBtn
              :href="githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
              size="large"
              class="secondary-cta"
            >
              <VIcon
                start
                icon="ri-github-fill"
              />
              GitHub
            </VBtn>
            <VBtn
              v-if="linkedinUrl"
              :href="linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
              size="large"
              class="secondary-cta"
            >
              <VIcon
                start
                icon="ri-linkedin-fill"
              />
              LinkedIn
            </VBtn>
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        class="portfolio-section"
      >
        <div class="section-kicker">
          Experiencia
        </div>
        <h2>Trayectoria profesional.</h2>

        <div class="timeline">
          <article
            v-for="job in experience"
            :key="job.role"
            class="timeline-card"
          >
            <div class="timeline-head">
              <strong>{{ job.role }}</strong>
              <span>{{ job.period }}</span>
            </div>
            <div class="timeline-company">
              {{ job.company }} · {{ job.place }}
            </div>
            <ul>
              <li
                v-for="item in job.items"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class="portfolio-section education-card">
        <div class="section-kicker">
          Educación
        </div>
        <h2>Ingeniería de Sistemas</h2>
        <p>Escuela Militar de Ingeniería "Mcal. Antonio José de Sucre"</p>
        <strong>Unidad Académica Riberalta</strong>
      </section>

      <section
        id="sobre-mi"
        class="portfolio-section about-section"
      >
        <div class="section-kicker">
          Sobre mí
        </div>
        <h2>Conóceme un poco más.</h2>
        <p class="section-lead">
          No soy solo código y sistemas. Soy una persona que empezó arreglando computadoras,
          aprendió a manejar negocios de adentro y hoy desarrolla software que clientes reales usan cada día.
        </p>

        <p class="about-story">
          Mi recorrido pasó por reparación técnica, administración de operaciones y emprendimiento.
          Eso me ayuda a hablar el idioma del negocio: entiendo la caja, el inventario y al equipo
          que usa el sistema — no solo la pantalla.
        </p>

        <article class="growth-card">
          <div class="growth-head">
            <VIcon
              icon="ri-line-chart-line"
              size="24"
              class="growth-icon"
            />
            <strong>En lo personal, soy ambicioso</strong>
          </div>
          <p>
            Hoy estoy muy enfocado en conocer más sobre técnicas de ventas — no solo para sistemas,
            sino para vender cualquier cosa. Compro cursos, estudio y practico. Me inspira
            Jordan Belfort por su enfoque en ventas, persuasión y mentalidad de crecimiento.
          </p>
          <div class="focus-tags">
            <span
              v-for="item in growthFocus"
              :key="item"
            >
              {{ item }}
            </span>
          </div>
        </article>

        <p class="about-aside">
          Y fuera del trabajo, también soy una persona normal:
        </p>

        <div class="hobby-grid">
          <article
            v-for="hobby in hobbies"
            :key="hobby.label"
            class="hobby-card"
          >
            <VIcon
              :icon="hobby.icon"
              size="28"
              class="hobby-icon"
            />
            <strong>{{ hobby.label }}</strong>
            <p>{{ hobby.note }}</p>
          </article>
        </div>
      </section>

      <section
        id="github"
        class="portfolio-section"
      >
        <div class="section-kicker">
          GitHub
        </div>
        <h2>Repositorios públicos.</h2>

        <div class="repo-list">
          <a
            v-for="repo in githubRepos"
            :key="repo.name"
            :href="repo.url"
            target="_blank"
            rel="noopener noreferrer"
            class="repo-card"
          >
            <div class="repo-head">
              <strong>{{ repo.name }}</strong>
              <span>{{ repo.lang }}</span>
            </div>
            <p>{{ repo.desc }}</p>
          </a>
        </div>

        <VBtn
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          variant="tonal"
          color="primary"
          class="github-more"
        >
          Ver perfil completo en GitHub
        </VBtn>
      </section>

      <section
        id="stack"
        class="portfolio-section"
      >
        <div class="section-kicker">
          Stack
        </div>
        <h2>Tecnologías.</h2>
        <div class="portfolio-grid">
          <span
            v-for="item in stack"
            :key="item"
          >
            {{ item }}
          </span>
        </div>
      </section>

      <section
        id="clientes"
        class="portfolio-section"
      >
        <div class="section-kicker">
          En producción
        </div>
        <h2>Negocios que ya usan su sistema.</h2>
        <p class="section-lead">
          Reseñas de negocios reales con software implementado.
          Cada uno confirmó su satisfacción con el sistema que usa a diario.
        </p>

        <div class="client-grid">
          <article
            v-for="client in clients"
            :key="client.name"
            class="client-card"
          >
            <div class="client-head">
              <strong>{{ client.name }}</strong>
              <span class="client-type">{{ client.type }}</span>
            </div>
            <VChip
              size="small"
              color="success"
              variant="tonal"
              class="client-system"
            >
              {{ client.system }}
            </VChip>
            <blockquote class="client-review">
              <VIcon
                icon="ri-double-quotes-l"
                size="18"
                class="review-icon"
              />
              {{ client.review }}
            </blockquote>
          </article>
        </div>
      </section>

      <section class="final-card">
        <h2>¿Quieres un sistema que ya funcione en tu negocio?</h2>
        <p>Santa Cruz, Bolivia · +591 67369293</p>
        <div class="contact-links">
          <VBtn
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            color="success"
            size="large"
          >
            WhatsApp
          </VBtn>
          <VBtn
            :href="`mailto:${email}`"
            variant="outlined"
            color="white"
            size="large"
          >
            Email
          </VBtn>
          <VBtn
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            color="white"
            size="large"
          >
            GitHub
          </VBtn>
          <VBtn
            v-if="linkedinUrl"
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            color="white"
            size="large"
          >
            LinkedIn
          </VBtn>
        </div>
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

.nav-avatar {
  border: 2px solid #fff;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
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
  align-items: center;
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 50px rgba(30, 64, 175, 0.1);
  margin-block: 1.2rem 2rem;
  padding: 1.5rem 1rem;
  text-align: center;
}

.profile-photo {
  border: 4px solid #fff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
  margin-block-end: 1rem;
}

.hero-badge {
  font-weight: 800;
  margin-block-end: 0.75rem;
}

.hero-copy {
  h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.9rem, 9vw, 3.2rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1.08;
    margin: 0;
  }
}

.hero-role {
  color: #118bd0;
  font-size: 0.95rem;
  font-weight: 800;
  margin-block: 0.65rem 0.5rem;
}

.hero-summary {
  color: #64748b;
  font-size: clamp(0.92rem, 3.6vw, 1rem);
  line-height: 1.62;
  margin-block: 0 0.75rem;
  margin-inline: auto;
  max-inline-size: 34rem;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
  margin-block-end: 1rem;

  span {
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 999px;
    background: #f8fafc;
    color: #475569;
    font-size: 0.82rem;
    font-weight: 700;
    padding: 0.45rem 0.75rem;
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

.final-card,
.portfolio-section {
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.08);
  margin-block-start: 1rem;
  padding: 1.1rem;
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

.section-lead {
  font-size: 0.95rem;
  max-inline-size: 42rem;
}

.client-grid {
  display: grid;
  gap: 0.85rem;
  margin-block-start: 1rem;
}

.client-card {
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;
  background: #f8fafc;
  padding: 1rem;
}

.client-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;

  strong {
    color: #0f172a;
    font-size: 1rem;
    line-height: 1.3;
  }
}

.client-type {
  border-radius: 999px;
  background: #ecfdf5;
  color: #14532d;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.25rem 0.55rem;
  white-space: nowrap;
}

.client-system {
  margin-block-start: 0.65rem;
  font-weight: 700;
}

.client-review {
  position: relative;
  border: 0;
  color: #334155;
  font-size: 0.92rem;
  font-style: italic;
  line-height: 1.6;
  margin: 0.75rem 0 0;
  padding-inline-start: 1.5rem;
}

.review-icon {
  position: absolute;
  color: #16a34a;
  inset-block-start: 0.1rem;
  inset-inline-start: 0;
  opacity: 0.85;
}

.education-card {
  strong {
    display: block;
    color: #0f172a;
    font-size: 1rem;
    margin-block-start: 0.35rem;
  }
}

.about-section {
  background: linear-gradient(180deg, #fff 0%, #f8fbff 100%);
}

.about-story,
.about-aside {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.65;
  margin-block: 0.85rem 0;
}

.about-aside {
  color: #64748b;
  font-size: 0.92rem;
  margin-block-start: 1.1rem;
}

.hobby-grid {
  display: grid;
  gap: 0.85rem;
  margin-block-start: 0.85rem;
}

.hobby-card {
  border: 1px solid rgba(17, 139, 208, 0.12);
  border-radius: 18px;
  background: #fff;
  padding: 1rem;

  strong {
    display: block;
    color: #0f172a;
    font-size: 1rem;
    margin-block: 0.55rem 0.25rem;
  }

  p {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.55;
    margin: 0;
  }
}

.hobby-icon {
  color: #118bd0;
}

.growth-card {
  border: 1px solid rgba(251, 140, 0, 0.18);
  border-radius: 18px;
  background: linear-gradient(135deg, #fffbeb 0%, #fff 100%);
  margin-block-start: 1rem;
  padding: 1rem;

  p {
    color: #475569;
    font-size: 0.94rem;
    line-height: 1.65;
    margin-block: 0.65rem 0.85rem;
  }
}

.growth-head {
  display: flex;
  align-items: center;
  gap: 0.55rem;

  strong {
    color: #0f172a;
    font-size: 1rem;
  }
}

.growth-icon {
  color: #f59e0b;
}

.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    border: 1px solid rgba(245, 158, 11, 0.22);
    border-radius: 999px;
    background: #fff;
    color: #92400e;
    font-size: 0.78rem;
    font-weight: 800;
    padding: 0.42rem 0.68rem;
  }
}

.timeline {
  display: grid;
  gap: 0.85rem;
  margin-block-start: 1rem;
}

.timeline-card {
  border-radius: 18px;
  background: #f8fafc;
  padding: 1rem;

  ul {
    margin: 0.65rem 0 0;
    padding-inline-start: 1.1rem;
  }

  li {
    color: #475569;
    font-size: 0.92rem;
    line-height: 1.5;
  }
}

.timeline-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;

  strong {
    color: #0f172a;
    font-size: 1rem;
    line-height: 1.3;
  }

  span {
    color: #64748b;
    font-size: 0.78rem;
    font-weight: 800;
    white-space: nowrap;
  }
}

.timeline-company {
  color: #118bd0;
  font-size: 0.88rem;
  font-weight: 700;
  margin-block-start: 0.25rem;
}

.repo-list {
  display: grid;
  gap: 0.75rem;
  margin-block-start: 1rem;
}

.repo-card {
  display: block;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  background: #f8fafc;
  color: inherit;
  padding: 0.95rem;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
    transform: translateY(-2px);
  }

  p {
    font-size: 0.9rem;
    margin-block: 0.45rem 0;
  }
}

.repo-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  strong {
    color: #0f172a;
    font-size: 0.98rem;
  }

  span {
    border-radius: 999px;
    background: #ecfdf5;
    color: #14532d;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 0.25rem 0.55rem;
  }
}

.github-more {
  margin-block-start: 1rem;
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
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.72);
  }
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem;
  margin-block-start: 1rem;
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
    max-inline-size: 760px;
    padding: 2rem;
  }

  .hero-actions {
    .v-btn {
      inline-size: auto;
    }
  }

  .repo-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .client-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hobby-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .focus-tags span {
    font-size: 0.82rem;
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
      font-size: 1.75rem;
    }
  }
}
</style>
