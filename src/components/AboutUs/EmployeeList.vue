<template>
  <div style="font-size: 12pt"><br />
    <table>
      <!-- Head -->
      <tr>
        <th>File</th>
        <th>Name</th>
        <th>Role</th>
        <th>{{ employeeCount }} employees</th>
      </tr>
      <!-- Body -->
      <tr v-for="employee in employeeList" :key="employee._id">
        <td>{{ employee.image }}</td>
        <td>{{ employee.fileName }}</td>
        <td>{{ employee.role }}</td>
        <td style="text-align: center">
          <!-- EDIT RECORD -->
          <RouterLink
            :to="{ name: 'edit-profile', params: { id: employee._id } }"
          >
            <input
              style="border: none"
              type="button"
              class="btn-outline-info"
              value="edit"
            />
          </RouterLink>

          <!-- DELETE RECORD -->
          <RouterLink to="" @click.prevent="removeEmployee(employee._id)">
            <input
              style="border: none"
              type="submit"
              class="btn-outline-danger"
              value="delete"
            />
          </RouterLink>
        </td>
      </tr>
    </table>
    <!-- <em>{{ message }}</em> -->
  </div>
</template>

<script>
import { useEmployeeStore } from "../../stores/EmployeeStore";
import { mapStores, mapState, mapActions } from "pinia";
export default {
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useEmployeeStore),
    ...mapState(useEmployeeStore, ["employeeList", "employeeCount"]),
  },
  created() {
    this.getEmployee();
  },
  methods: {
    // Actions
    ...mapActions(useEmployeeStore, ["getEmployee", "removeEmployee"]),
  },
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 12pt;
}

table {
  margin: 0 auto;
  border: 1px solid;
}

th {
  background-color: #068d68;
  border: 1px solid #068d68;
  color: white;
  font-weight: lighter;
  text-align: center;
}

td {
  width: 1%;
  border: 1px solid #068d68;
}
</style>
