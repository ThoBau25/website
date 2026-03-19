<script setup>
import { useReveal } from "@/section/components/useReveal";

const el = useReveal();
</script>

<template>
  <section class="info-section">
    <div class="container section-container reveal" ref="el">
      <div class="info-text">
        <h1>Meine Skills</h1>

        <p>
          Ich begeistere mich für die Entwicklung benutzerfreundlicher
          Anwendungen und durchdachter Softwarelösungen – egal ob fürs Web oder
          mobile Endgerät. Mir ist es besonders wichtig, sauberen Code zu
          schreiben und mich ständig weiterzuentwickeln.
        </p>

        <p>
          Ich lebe nach dem Motto: "Code is like humor. When you have to explain
          it, it’s bad." – und versuche, diesen Grundsatz in all meinen
          Projekten umzusetzen.
        </p>
      </div>

      <div class="info-image">
        <img src="@/assets/foto/Coding.jpg" alt="Coding" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.info-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-text {
  flex: 1;
}

.info-text h1 {
  font-size: 48px;
  color: #716b9b;
  text-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}

.info-text p {
  font-size: 18px;
  color: black;
  line-height: 1.6;
  margin-bottom: 30px;
}

.info-image {
  flex: 1;
  object-fit: cover;
  border-radius: 30px;
  height: 100%;
  width: 100%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.info-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 30px;
}



@media (max-width: 1200px) {
  .info-image{
        max-width: 500px;
  }

}
</style>