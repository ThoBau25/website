<script setup lang="ts">
import { useReveal } from "@/section/components/useReveal";

const el = useReveal();
</script>

<template>
  <section class="hero-section">
    <div class="container section-container reveal" ref="el">
      <div class="hero-left">
        <img src="@/assets/foto/Thomas Bauer.png" alt="Thomas Bauer" />
      </div>
      <div class="hero-right">
        <h1>Thomas Bauer</h1>
        <h2>Junior Developer</h2>
        <p>
          Ich bin ein ambitionierter und fokussierter Softwareentwickler mit
          einer Leidenschaft für moderne Webtechnologien und sauberen Code.
          Aktuell arbeite ich viel mit JavaScript und Frameworks wie Vue.js und
          entwickle gerne benutzerfreundliche und performante Webanwendungen.
        </p>
        <p>
          Neben der Softwareentwicklung spielt Sport eine große Rolle in meinem
          Leben – besonders Triathlon. Der Sport hat mir Disziplin, Ausdauer und
          Zielstrebigkeit beigebracht, Eigenschaften, die ich auch in meine
          Projekte und meine Arbeit als Entwickler einbringe.
        </p>
        <div class="hero-buttons">
          <a href="/Lebenslauf.pdf" target="_blank" class="btn-primary"
            >Lebenslauf</a
          >
          <a href="/kontakt" class="btn-secondary">Kontakt</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-left {
  flex: 1;
  object-fit: cover;
  border-radius: 30px;
  height: 100%;
  max-height: none;
  width: 100%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.hero-left img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 30px;
}

.hero-right {
  flex: 1;
}

h1 {
  font-size: 48px;

  color: #716b9b;
  text-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}

.hero-right h2 {
  font-size: 28px;
  color: #f6f4f0;
  text-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: black;
  line-height: 1.6;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn-primary {
  background: #716b9b;
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.btn-primary:hover {
  background: #5e5890;
  transform: scale(1.03);
  transition: all 0.2s ease;
}

.btn-secondary {
  border: 2px solid #716b9b;
  color: #716b9b;
  padding: 12px 26px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.btn-secondary:hover {
  background: #716b9b;
  color: white;
}


@media (max-width: 1200px) {
  .hero-buttons {
    justify-content: center;
  }

  .hero-left {
max-width: 500px;
  }
}
</style>
