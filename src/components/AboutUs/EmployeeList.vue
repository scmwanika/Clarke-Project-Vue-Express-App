<template>
  <div>
    <p style="text-align: center" class="employee-count">
      {{ employeeCount }} employees
    </p>
    <table class="table table-info">
      <!-- Head -->
      <tr>
        <th>File</th>
        <th>Name</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      <!-- Body -->
      <tr v-for="employee in employeeList" :key="employee._id">
        <td>{{ employee.image }}</td>
        <td>{{ employee.fileName }}</td>
        <td>{{ employee.role }}</td>
      </tr>
    </table>
    <!-- <em>{{ message }}</em> -->
  </div>
</template>

<script>
import { useEmployeeStore } from "../../stores/EmployeeStore";
import { mapStores, mapState, mapActions } from 'pinia';
export default {
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useEmployeeStore),
    ...mapState(useEmployeeStore, ['employeeList', 'employeeCount']),
  },
  created() {
    this.getEmployee();
  },
  methods: {
    // Actions
    ...mapActions(useEmployeeStore, ['getEmployee']),
  },
};
</script>