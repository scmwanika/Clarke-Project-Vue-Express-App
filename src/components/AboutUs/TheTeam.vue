<template>
  <!-- Team -->
  <div class="team-section">
    <br />
    <div class="card-data">
      <div
        v-for="employee in employeeList"
        :key="employee._id"
        class="team-data"
      >
        <div class="card">
          <img
            :src="'../../../backend/uploads/' + employee.fileName + '.jpg'"
            alt="employee"
          />
          <div class="card-body">
            <p><h6 class="card-title">{{ employee.fileName }}</h6></p>
            <p class="card-text">{{ employee.role }}</p>
              <!-- SHOW PROFILE -->
              <p>
                <RouterLink :to="{ name: 'show-profile', params: { id: employee._id } }">
                  <input
                    type="button"
                    class="btn btn-outline-info"
                    value="Show Profile"
                  />
                </RouterLink>
              </p>
          </div>
        </div>
      </div>
    </div>
    <span onClick="this.style.visibility='hidden'"
      ><p>
        <button
          style="border: none"
          class="btn btn-info"
          v-on:click="getEmployee()"
        >
          OUR TEAM
        </button>
      </p>
    </span>
  </div>
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
    ...mapActions(useEmployeeStore, ["getEmployee"]),
  },
};
</script>
