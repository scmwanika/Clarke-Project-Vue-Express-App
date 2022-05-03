import Vue from 'vue';
import Vuex from 'vuex';
import employees from './modules/employees';
import guests from './modules/guests';
import reviews from './modules/reviews';
import activities from './modules/activities';
import accommodations from './modules/accommodations';

Vue.use(Vuex);

export default new Vuex.Store({
  // MODULES
  modules: {
    employees,
    guests,
    reviews,
    activities,
    accommodations,
  },
});
