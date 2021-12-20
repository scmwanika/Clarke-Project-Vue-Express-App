import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@okta/okta-vue';

Vue.use(Auth, {
  issuer: 'https://dev-5812657.okta.com/oauth2/default',
  client_id: '0oavzxa1dSRsQO4gU5d6',
  redirect_uri: 'http://localhost:8080/callback',
  scopes: ['openid', 'profile'],
  pkce: true,
});

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    name: 'AdminPanel',
    component: () => import('../views/AdminPanel.vue'),
    /*
    meta: {
      requiresAuth: true,
    },
    */
  },
  {
    path: '/callback',
    component: Auth.handleCallback(),
  },
  {
    path: '/',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue'),
  },
  {
    path: '/our-activities',
    name: 'OurActivities',
    component: () => import('../views/OurActivities.vue'),
  },
  {
    path: '/visit-us',
    name: 'VisitUs',
    component: () => import('../views/VisitUs.vue'),
  },
  {
    path: '/bookings/create',
    name: 'Bookings',
    component: () => import('../components/GuestForm.vue'),
  },
  {
    path: '/reviews/create',
    name: 'CreateReview',
    component: () => import('../components/ReviewForm.vue'),
  },
  {
    path: '/reviews',
    name: 'ListReviews',
    component: () => import('../components/ReviewList.vue'),
  },
  {
    path: '/view-profile/:id',
    name: 'ViewEmployeeProfile',
    component: () => import('../views/ViewEmployeeProfile.vue'),
  },
  {
    path: '/edit-data/:id',
    name: 'EditData',
    component: () => import('../views/EditData.vue'),
  },
  {
    path: '*',
    name: 'NoneExistingPage',
    component: () => import('../views/NoneExistingPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
