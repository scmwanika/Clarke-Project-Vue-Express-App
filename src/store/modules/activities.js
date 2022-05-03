import axios from 'axios';
import api from '../../api';

export default ({
  // STATE
  state: {
    activities: [],
  },

  // GETTERS
  getters: {
    activityList: (state) => state.activities,
  },

  // MUTATIONS
  mutations: {
    // insert activity
    INSERT_ACTIVITY(state, activity) {
      state.activities.unshift(activity);
    },
    // list activities
    LIST_ACTIVITIES(state, activities) {
      state.activities = activities;
    },
    // insert error
    INSERT_ERROR(state, error) {
      state.errors.push(error);
    },
  },

  // ACTIONS
  actions: {
    // insert activity
    async insertActivity({ commit }, activity) {
      // make some kind of ajax request
      try {
        // await doAjaxRequest(payload);

        // commit mutation in an action
        commit('INSERT_ACTIVITY', activity);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },

    // list activities
    async listActivities({ commit }) {
      const response = await axios.get(`${api}/activities`);
      commit('LIST_ACTIVITIES', response.data);
    },

    // remove activity
    async removeActivity({ commit }, id) {
      try {
        await axios.get(`${api}/delete-activity/${id}`);
        commit('REMOVE_ACTIVITY', id);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },
  },
});
