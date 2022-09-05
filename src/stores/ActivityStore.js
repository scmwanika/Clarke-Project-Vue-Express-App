import axios from "axios";
import api from "../api";

import { defineStore } from "pinia";

export const useActivityStore = defineStore("activity", {
  state: () => ({
    activityList: [],
  }),
  getters: {
    activityCount: (state) => state.activityList.length,
  },
  actions: {
    // Create Activity

    // Read Activities
    getActivity() {
      axios
        .get(`${api}/activities`)
        .then((res) => {
          this.activityList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Update Activity

    // Delete Activity
    removeActivity(id) {
      const indexOfArrayItem = this.activityList.findIndex((i) => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios
          .get(`${api}/activities/delete/${id}`)
          .then(() => {
            this.activityList.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
