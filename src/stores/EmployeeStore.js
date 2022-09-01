import axios from "axios";
import api from "../api";

import { defineStore } from "pinia";

export const useEmployeeStore = defineStore("employee", {
  state: () => ({
    employeeList: [],
  }),
  getters: {
    employeeCount: (state) => state.employeeList.length,
  },
  actions: {
    // Create Employee

    // Read Employees
    getEmployee() {
      axios
        .get(`${api}/employees`)
        .then((res) => {
          this.employeeList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Update Employee
    editEmployee() {
      axios.get(`${api}/employee/${this.$route.params.id}`).then((res) => {
        this.employeeList = res.data;
      });
    },

    // Delete Employee
  },
});
