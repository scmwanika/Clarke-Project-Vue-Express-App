import axios from 'axios';
import api from '../../api';

export default ({
  // STATE
  state: {
    employees: [],
  },

  // GETTERS
  getters: {
    employeeList: (state) => state.employees,
  },

  // MUTATIONS
  mutations: {
    // insert employee
    INSERT_EMPLOYEE(state, employee) {
      state.employees.unshift(employee);
    },
    // list employees
    LIST_EMPLOYEES(state, employees) {
      state.employees = employees;
    },
    // insert error
    INSERT_ERROR(state, error) {
      state.errors.push(error);
    },
  },

  // ACTIONS
  actions: {
    // insert employee
    async insertEmployee({ commit }, employee) {
      // make some kind of ajax request
      try {
        // await doAjaxRequest(payload);

        // commit mutation in an action
        commit('INSERT_EMPLOYEE', employee);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },

    // list employees
    async listEmployees({ commit }) {
      const response = await axios.get(`${api}/employees`);
      commit('LIST_EMPLOYEES', response.data);
    },

    // remove employee
    async removeEmployee({ commit }, id) {
      try {
        await axios.get(`${api}/delete-employee/${id}`);
        commit('REMOVE_EMPLOYEE', id);
      } catch (error) {
        commit('INSERT_ERROR', error);
      }
    },
  },
});
