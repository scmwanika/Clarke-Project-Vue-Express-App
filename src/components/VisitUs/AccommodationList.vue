<template>
  <div style="font-size: 12pt"><br />
    <table>
      <!-- Head -->
      <tr>
        <th>File</th>
        <th>Name</th>
        <th>Fee</th>
        <th>Description</th>
        <th>{{ accommodationCount }} accommodations</th>
      </tr>
      <!-- Body -->
      <tr v-for="accommodation in accommodationList" :key="accommodation._id">
        <td>
          <img
            :src="'../../../backend/uploads/' + accommodation.fileName + '.jpg'"
            alt="accommodation"
            width="120px"
          />
        </td>
        <td>{{ accommodation.fileName }}</td>
        <td>{{ accommodation.fee }}</td>
        <td>{{ accommodation.description }}</td>
        <td style="text-align: center">
          <!-- EDIT RECORD -->
          <RouterLink :to="{ name: '', params: { id: accommodation._id } }">
            <input
              style="border: none"
              type="button"
              class="btn-outline-info"
              value="edit"
            />
          </RouterLink>

          <!-- DELETE RECORD -->
          <RouterLink
            to=""
            @click.prevent="removeAccommodation(accommodation._id)"
          >
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
    <em>{{ message }}</em>
  </div>
</template>

<script>
import { useAccommodationStore } from "@/stores/AccommodationStore";
import { mapStores, mapState, mapActions } from "pinia";
export default {
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useAccommodationStore),
    ...mapState(useAccommodationStore, [
      "accommodationList",
      "accommodationCount",
    ]),
  },
  created() {
    this.getAccommodation();
  },
  methods: {
    // Actions
    ...mapActions(useAccommodationStore, [
      "getAccommodation",
      "removeAccommodation",
    ]),
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
