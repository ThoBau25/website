import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      component: () => import("../pages/Datenschutz.vue"),
    },
    {
      path: "/kontakt",
      name: "Kontakt",
      component: () => import("../pages/Contact.vue"),
    },
    {
      path: "/impressum",
      name: "impressum",
      component: () => import("../pages/Impressum.vue"),
    },
    {
      path: "/lebenslauf",
      name: "lebenslauf",
      component: () => import("../pages/CV.vue"),
    },
    {
      path: "/projekte",
      name: "projekte",
      component: () => import("../pages/Projects.vue"),
    },
    {
      path: "/about-me",
      name: "about-me",
      component: () => import("../pages/AboutMe.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
