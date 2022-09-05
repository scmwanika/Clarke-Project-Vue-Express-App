import axios from "axios";
import api from "../api";

import { defineStore } from "pinia";

export const useAccommodationStore = defineStore("accommodation", {
  state: () => ({
    accommodationList: [],
  }),
  getters: {
    accommodationCount: (state) => state.accommodationList.length,
  },
  actions: {
    // Create Accommodation

    // Read Accommodations
    getAccommodation() {
      axios
        .get(`${api}/accommodations`)
        .then((res) => {
          this.accommodationList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Update Accommodation

    // Delete Accommodation
    removeAccommodation(id) {
      const indexOfArrayItem = this.accommodationList.findIndex((i) => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios
          .get(`${api}/accommodations/delete/${id}`)
          .then(() => {
            this.accommodationList.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
