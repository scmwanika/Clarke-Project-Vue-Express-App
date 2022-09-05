import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "@/views/AboutUs.vue";
import VisitUs from "@/views/VisitUs.vue";
import BuyCoffee from "@/views/BuyCoffee.vue";
import ProfileEmployee from "@/views/ProfileEmployee.vue";
import EditEmployee from "@/views/EditEmployee.vue";
import EditBooking from "@/views/EditBooking.vue";
import ReviewList from "@/components/VisitUs/ReviewList.vue";
import AdminPanel from "@/views/AdminPanel.vue";
import TheForms from "@/components/AdminPanel/TheForms.vue";


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
      path: "/employees/:id",
      name: "show-profile",
      component: ProfileEmployee,
    },
    {
      path: "/employees/edit/:id",
      name: "edit-profile",
      component: EditEmployee,
    },
    {
      path: "/bookings/edit/:id",
      name: "booking",
      component: EditBooking,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewList,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: AdminPanel,
    },
    {
      path: "/forms",
      name: "forms",
      component: TheForms,
    },
  ],
});

export default router;
