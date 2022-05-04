<template>
  <div>
    <table class="table table-info">
      <!-- Head -->
      <tr>
        <th>Image</th>
        <th>File Name</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      <!-- Body -->
      <tr v-for="employee in employeeList" :key="employee._id">
        <td>
          <img
            :src="
              require('../../../backend/uploads/' + employee.fileName + '.jpg')
            "
            alt="card image"
            width="120px"
          />
        </td>
        <td>{{ employee.fileName }}</td>
        <td>{{ employee.role }}</td>
        <td>
          <!-- EDIT LINK -->
          <router-link
            :to="{ name: 'EditData', params: { id: employee._id } }"
            class="edit"
          >
            <input type="button" class="btn btn-info" value="edit" />
          </router-link>
          <!-- DELETE LINK -->
          <a href="" @click.prevent="removeEmployee(employee._id)">
            <input type="submit" class="btn btn-danger" value="delete" />
          </a>
        </td>
      </tr>
    </table>
    <em>{{ message }}</em>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  props: {
    message: String,
  },
  computed: {
    ...mapState(['employees']),
    ...mapGetters(['employeeList']),
  },
  //
  created() {
    this.listEmployees();
  },
  // METHODS
  methods: {
    ...mapActions(['listEmployees', 'removeEmployee']),
  },
};
</script>
