import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "@/views/AboutUs.vue";
import VisitUs from "@/views/VisitUs.vue";
import BuyCoffee from "@/views/BuyCoffee.vue";
import ProfileEmployee from "@/views/ProfileEmployee.vue";
import AdminPanel from "@/views/AdminPanel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutUs,
    },
    {
      path: "/visit-us",
      name: "visit",
      component: VisitUs,
    },
    {
      path: "/buy-coffee",
      name: "coffee",
      component: BuyCoffee,
    },
    {
      path: "/profile-employee/:id",
      name: "profile",
      component: ProfileEmployee,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: AdminPanel,
    },
  ],
});

export default router;
