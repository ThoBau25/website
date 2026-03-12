<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue';
</script>

<template>
  <div>
    <DefaultLayout>
      <section class="hero-section">
        <div class="hero-left" />
        <div class="hero-right">
          <div class="hero-content">
            <h1 class="display-4">Willkommen auf meiner persönlichen Webseite!</h1>
            <p class="lead mt-4">Hier findest du Informationen über mich, meinen Lebenslauf und wie du mich kontaktieren kannst.</p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </div>
</template>

<style scoped>
.hero-section {
  display: flex;
  min-height: 700px;
}
.hero-left {
  flex: 1;
  background-image: url('../assets/foto/Profilbild.jpeg');
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  margin: 40px;
  max-width: 500px;
}
.hero-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.hero-content {
  max-width: 600px;
}

@media (max-width: 768px) {
  .hero-section { flex-direction: column; }
  .hero-left { width:100%; height: 450px; margin: 20px; max-width: 90%; background-size: cover; background-repeat: no-repeat; background-position: center 30%; }
  .hero-right { padding: 10px; }
}
</style>