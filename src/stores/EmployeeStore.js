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

    // Delete Employee
    removeEmployee(id) {
      const indexOfArrayItem = this.employeeList.findIndex((i) => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios
          .get(`${api}/employees/delete/${id}`)
          .then(() => {
            this.employeeList.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
