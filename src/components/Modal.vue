<script setup>
import { BModal, BCarousel, BButton, BCarouselSlide } from "bootstrap-vue-next";
import VueMarkdown from 'vue-markdown-render';

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array, required: true },
  githubLink: { type: String, required: true },
});

</script>

<template>
  <BModal
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :title="title"
    size="lg"
    header-bg-variant="light"
    header-text-variant="dark"
    no-footer
  >
    <BCarousel controls indicators class="carousel mb-4" id="carousel">
      <BCarouselSlide
        v-for="(img, index) in images"
        :key="index"
        :img-src="img"
      >
      </BCarouselSlide>
    </BCarousel>
    <VueMarkdown :source="description" />
    <div class="text-center mt-3">
      <BButton
        v-if="modelValue"
        :href="githubLink"
        target="_blank"
        id="source-code-btn"
        @close="restartPulse"
        class="pulse-btn"
        >
        Source Code
        </BButton>
    </div>
  </BModal>
</template>

<style scoped>
.carousel :deep(.carousel-item) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
}


:deep(.modal-title) {
  font-size: 24px;
  font-weight: bold;
  color: #f2eff6;
  text-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.carousel :deep(.carousel-item img) {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  background-color: #9f94ad;
  display: block;
}
#source-code-btn {
  background-color: #9f94ad;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 20px;
}

#source-code-btn:hover {
  background-color: #bab8cc;
  color: #ffffff;
  transform: scale(1.05);
  transition: all 0.2s ease;
}
.pulse-btn {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
