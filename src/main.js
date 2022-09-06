import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// IMPORTING OKTA DEPENDENCIES
import OktaVue from "@okta/okta-vue";
import { oktaAuth } from "./okta";

import "@/assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);

//app.use(Carousel3d);
app.use(createPinia());
app.use(router);
app.use(OktaVue, {
  oktaAuth,
  onAuthRequired: () => {
    router.push("/login");
  },
  onAuthResume: () => {
    router.push("/login");
  },
});
app.mount("#app");
