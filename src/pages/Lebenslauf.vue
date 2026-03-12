<script setup>
import DefaultLayout from '../layout/DefaultLayout.vue';
</script>

<template>
    <default-layout>
    <div class="cv-container">
      <iframe src="/src/assets/lebenslauf/Lebenslauf.pdf" width="100%" height="800px"></iframe>
    </div>
    </default-layout>

</template>


<style scoped>
.cv-container {
 max-width: 900px;
    margin: auto;
    padding: 20px 20px 20px 20px;
}
</style>
