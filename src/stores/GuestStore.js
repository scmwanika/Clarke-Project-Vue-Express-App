import axios from "axios";
import api from "../api";

import { defineStore } from "pinia";

export const useGuestStore = defineStore("guest", {
  state: () => ({
    guestList: [],
  }),
  getters: {
    guestCount: (state) => state.guestList.length,
  },
  actions: {
    // Create Guest

    // Read Guests
    getGuest() {
      axios
        .get(`${api}/guests`)
        .then((res) => {
          this.guestList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Update Guest

    // Delete Guest
    removeGuest(id) {
      const indexOfArrayItem = this.guestList.findIndex((i) => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios
          .get(`${api}/guests/delete/${id}`)
          .then(() => {
            this.guestList.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
