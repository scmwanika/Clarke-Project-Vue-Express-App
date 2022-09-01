<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- Team -->
  <div class="team-section">
    <br /><br />
    <div class="card-data">
      <div
        v-for="employee in employeeList"
        :key="employee._id"
        class="team-data"
      >
        <div class="card">
          <img
            :src="('../../../backend/uploads/' + employee.fileName + '.jpg')"
            alt="card image"
          />
          <div class="card-body">
            <p><h6 class="card-title">{{ employee.fileName }}</h6></p>
            <p class="card-text">{{ employee.role }}</p>
            <RouterLink
              to="/profile-employee/{{this.employee._id}}"
              ><!-- SHOW PROFILE -->
              <p>
                <button class="btn btn-outline-info" v-on:click="editEmployee()" >
                  See Profile
                </button>
              </p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <span onClick="this.style.visibility='hidden';"
      ><p>
        <button
          style="border: none"
          class="btn btn-outline-info"
          v-on:click="getEmployee()"
        >
          UNCOVER OUR TEAM
        </button>
      </p>
    </span>
  </div>
  <RouterView />
</template>

<script>
import { useEmployeeStore } from "@/stores/EmployeeStore";
import { mapStores, mapState, mapActions } from "pinia";
export default {
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useEmployeeStore),
    ...mapState(useEmployeeStore, ["employeeList", "employeeCount"]),
  },
  methods: {
    // Actions
    ...mapActions(useEmployeeStore, ["getEmployee", "editEmployee"]),
  },
};
</script>

<style scoped>
.card-data {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
}

p {
  font-size: 10pt;
  text-align: center;
}

button {
  width: auto;
  color: grey;
  background-color: #f5f5f5;
}
</style>
