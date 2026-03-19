<script setup lang="ts">
import { useReveal } from "@/section/components/useReveal";

const el = useReveal();
</script>

<template>
  <section class="sport-section">
    <div class="container section-container reveal" ref="el">
      <div class="sport-text">
        <h1>Die Welt des Sports</h1>
        <p>
          Für mich ist Sport nicht nur Training, sondern
          Selbstdisziplin und Entspannung zugleich. Besonders der Triathlon hat es
          mir angetan: Radfahren, Laufen, Schwimmen – jede Disziplin fordert
          Körper und Geist, und jeder der mich kennt, weiß wie sehr ich Herausfoorderungen liebe.
          Deshalb möchte ich nächstes Jahr beim Iron Man in Klagenfurt an den Start gehen.
          </p>      
      </div>
      <div class="sport-image">
        <img src="@/assets/foto/Sport.png" alt="Sport" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.sport-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sport-text {
  flex: 1;
}

.sport-text h1 {
  font-size: 48px;

  color: #716b9b;
  text-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}

.sport-text p {
  font-size: 18px;
  color: black;
  line-height: 1.6;
  margin-bottom: 30px;
}

.sport-image {
  flex: 1;
  object-fit: cover;
  border-radius: 30px;
  height: 100%;
  width: 100%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.sport-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 30px;
}



@media (max-width: 1200px) {
  .sport-image{
        max-width: 500px;
  }
}
</style>
