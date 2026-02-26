<script setup>
import { 
  BNavbar, 
  BNavbarBrand,
  BNavbarToggle, 
  BCollapse, 
  BNavbarNav, 
  BNavItem 
} from 'bootstrap-vue-next'
</script>

<template>
  <BNavbar variant="faded" type="light" toggleable="lg" class="custom-navbar">
    
    <BNavbarBrand href="#">
      <img src="../assets/logo/TB-Logo.png"
           alt="Logo" 
           width="60" 
           height="60"
           class="d-inline-block align-top">
    </BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />

    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <BNavItem to="/" router>Home</BNavItem>
        <BNavItem to="/about" router>Über Mich</BNavItem>
        <BNavItem to="/lebenslauf" router>Lebenslauf</BNavItem>
        <BNavItem to="/kontakt" router>Kontakt</BNavItem>
        <BNavItem to="/impressum" router>Impressum</BNavItem>
        <BNavItem to="/datenschutz" router>Datenschutz</BNavItem>
      </BNavbarNav>
    </BCollapse>

  </BNavbar>
</template>
<style scoped>
.custom-navbar {
  background-color: #F6F4F0;
}

</style>