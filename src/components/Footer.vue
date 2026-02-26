<script setup>
import { BContainer, BCardTitle, BCardText, BRow, BCol } from 'bootstrap-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <BContainer fluid id="footer">
    <footer>
      <section id="footer-content" class="py-2">
        <BContainer>  
          <BRow>
            <BCol cols="12" md="4" class="text-center text-md-start mb-2">
              <h5 class="header mb-3">Kontakt</h5>
              <div class="d-flex flex-column flex-md-row align-items-center mb-0 gap-1">
                <img src="../assets/logo/Telefon-Logo.png" width="40" height="40" class="me-1">
                <a href="tel:+436509918233">
                  <strong>Telefon:</strong> +436509918233
                </a>
              </div>
              <div class="d-flex flex-column flex-md-row align-items-center mb-1 gap-1">
                <img src="../assets/logo/Mail-Logo.png" width="40" height="40" class="me-1">
                <a href="mailto:bauer.thomas98@gmail.com">
                  <strong>Email:</strong> bauer.thomas98@gmail.com
                </a>
              </div>
            </BCol>
            <BCol cols="12" md="4" class="text-center text-md-start mb-1">
              <h5 class="header mb-4">Service</h5>
              <RouterLink class="imprint-link d-block mb-3" :to="{ name: 'impressum' }">Impressum</RouterLink>
              <RouterLink class="imprint-link d-block mb-3" :to="{ name: 'datenschutz' }">Datenschutz</RouterLink>
            </BCol>
            <BCol cols="12" md="4" class="text-center text-md-start mb-1">
              <h5 class="header mb-2">Socials</h5>
              <div
                class="social-icons d-flex justify-content-center justify-content-md-start align-items-center gap-2 mt-2">
                <a href="https://www.linkedin.com/in/thomas-bauer98" class="social-icon" rel="noopener noreferrer"
                  target="_blank">
                  <img src="../assets/logo/LinkedIn-Logo.png" alt="LinkedIn Logo" width="60" height="60">
                </a>
                <a href="https://github.com/ThoBau25" class="social-icon" rel="noopener noreferrer" target="_blank">
                  <img src="../assets/logo/Github-Logo.png" alt="GitHub Logo" width="80" height="80">
                </a>
              </div>
            </BCol>
          </BRow>
        </BContainer>
      </section>
      <div class="footer-bottom text-center">
        © 2026 Thomas Bauer. Alle Rechte vorbehalten
      </div>
    </footer>
  </BContainer>
</template>

<style scoped>
#footer {
  background-color: #1f1f1f;
  color: #f8f9fa;
padding-top: 10px;
}


#footer a {
  color: inherit;
  text-decoration: none;
}

#footer a:hover {
  text-decoration: underline;
  color: peru;
}

.social-icons {
  display: flex;
  gap: 16px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.social-icons img {
  transition: transform 0.2s ease;
}


.social-icons img:hover {
  transform: scale(1.1);
}

.header {
  color: #716B9B;
  font-weight: bold;
}

.footer-bottom {
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
