<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="layout">
    <Navbar />
    <main class="content"> 
        <router-view />
    </main>
    <Footer />
    </div>  

</template>

<style>
.layout {
    background-color: #F6F4F0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.content {
    flex: 1;
}
</style>