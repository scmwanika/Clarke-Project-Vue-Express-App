import axios from 'axios';
import api from '../../api';

export default ({
  // STATE
  state: {
    reviews: [],
  },

  // GETTERS
  getters: {
    reviewList: (state) => state.reviews,
  },

  // MUTATIONS
  mutations: {
    // insert review
    INSERT_REVIEW(state, review) {
      state.reviews.unshift(review);
    },
    // list reviews
    LIST_REVIEWS(state, reviews) {
      state.reviews = reviews;
    },
    // insert error
    INSERT_ERROR(state, error) {
      state.errors.push(error);
    },
  },

  // ACTIONS
  actions: {
    // insert review
    async insertReview({ commit }, review) {
      // make some kind of ajax request
      try {
        // await doAjaxRequest(payload);

        // commit mutation in an action
        commit('INSERT_REVIEW', review);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },

    // list reviews
    async listReviews({ commit }) {
      const response = await axios.get(`${api}/reviews`);
      commit('LIST_REVIEWS', response.data);
    },

    // remove review
    async removeReview({ commit }, id) {
      try {
        await axios.get(`${api}/delete-review/${id}`);
        commit('REMOVE_REVIEW', id);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },
  },
});
