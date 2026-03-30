<script setup>
import DefaultLayout from '../layout/DefaultLayout.vue';
</script>

<template>
    <default-layout>
      <section class="cv-section">
    <div class="cv-container">
      <iframe src="/Lebenslauf.pdf" width="100%" height="800px"></iframe>
    </div>
      </section>
    </default-layout>

</template>


<style scoped>
.cv-container {
 max-width: 900px;
    margin: auto;
}
</style>
