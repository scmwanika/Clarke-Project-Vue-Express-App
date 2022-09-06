import { createRouter, createWebHistory } from "vue-router";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";
import AboutUs from "@/views/AboutUs.vue";
import VisitUs from "@/views/VisitUs.vue";
import BuyCoffee from "@/views/BuyCoffee.vue";
import ProfileEmployee from "@/views/ProfileEmployee.vue";
import EditEmployee from "@/views/EditEmployee.vue";
import EditBooking from "@/views/EditBooking.vue";
import EditActivity from "@/views/EditActivity.vue";
import EditAccommodation from "@/views/EditAccommodation.vue";
import ReviewList from "@/components/VisitUs/ReviewList.vue";
import LoginPage from "@/views/LoginPage.vue";
import AdminPanel from "@/views/AdminPanel.vue";
import TheForms from "@/views/TheForms.vue";

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
      path: "/activities/edit/:id",
      name: "activity",
      component: EditActivity,
    },
    {
      path: "/accommodations/edit/:id",
      name: "accommodation",
      component: EditAccommodation,
    },
    {
      path: "/reviews",
      name: "reviews",
      component: ReviewList,
    },
    // OKTA AUTHORIZATION
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/callback",
      component: LoginCallback,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: AdminPanel,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/forms/new",
      name: "forms",
      component: TheForms,
    },
  ],
});

router.beforeEach(navigationGuard);

export default router;
