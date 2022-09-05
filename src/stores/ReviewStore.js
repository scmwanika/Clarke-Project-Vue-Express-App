import axios from "axios";
import api from "../api";

import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", {
  state: () => ({
    reviewList: [],
  }),
  getters: {
    reviewCount: (state) => state.reviewList.length,
  },
  actions: {
    // Create Review

    // Read Reviews
    getReview() {
      axios
        .get(`${api}/reviews`)
        .then((res) => {
          this.reviewList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Update Review

    // Delete Review
    removeReview(id) {
      const indexOfArrayItem = this.reviewList.findIndex((i) => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios
          .get(`${api}/reviews/delete/${id}`)
          .then(() => {
            this.reviewList.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
