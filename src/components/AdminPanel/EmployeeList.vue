<template>
  <br />
  <div>
    <table
      class="table table-info"
      v-for="employee in employeeList"
      :key="employee._id"
    >
      <tr>
        <th>
          <img
            :src="'../../../backend/uploads/' + employee.fileName + '.jpg'"
            alt="employee"
          />
        </th>
        <td>
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
            /> </RouterLink
          ><br />
          <p>
            {{ employee.fileName }}<br />{{ employee.role }}<br />{{
              employee.description
            }}
          </p>
        </td>
      </tr>
    </table>
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
img {
  width: 100%;
}

th {
  width: 20%;
}

td {
  width: 80%;
}

p {
  margin-left: 4px;
  font-size: 12pt;
}
</style>
