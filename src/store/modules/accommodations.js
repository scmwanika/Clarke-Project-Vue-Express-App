import axios from 'axios';
import api from '../../api';

export default ({
  // STATE
  state: {
    accommodations: [],
  },

  // GETTERS
  getters: {
    accommodationList: (state) => state.accommodations,
  },

  // MUTATIONS
  mutations: {
    // insert accommodation
    INSERT_ACCOMMODATION(state, accommodation) {
      state.accommodations.unshift(accommodation);
    },
    // list accommodations
    LIST_ACCOMMODATIONS(state, accommodations) {
      state.accommodations = accommodations;
    },
    // insert error
    INSERT_ERROR(state, error) {
      state.errors.push(error);
    },
  },

  // ACTIONS
  actions: {
    // insert accommodation
    async insertAccommodation({ commit }, accommodation) {
      // make some kind of ajax request
      try {
        // await doAjaxRequest(payload);

        // commit mutation in an action
        commit('INSERT_ACCOMMODATION', accommodation);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },

    // list accommodations
    async listAccommodations({ commit }) {
      const response = await axios.get(`${api}/accommodations`);
      commit('LIST_ACCOMMODATIONS', response.data);
    },

    // remove accommodation
    async removeAccommodation({ commit }, id) {
      try {
        await axios.get(`${api}/delete-accommodation/${id}`);
        commit('REMOVE_ACCOMMODATION', id);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },
  },
});
