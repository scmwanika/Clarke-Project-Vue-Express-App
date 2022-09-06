<template>
  <br />
  <div>
    <table
      class="table table-info"
      v-for="accommodation in accommodationList"
      :key="accommodation._id"
    >
      <tr>
        <th>
          <img
            :src="'../../../backend/uploads/' + accommodation.fileName + '.jpg'"
            alt="accommodation"
          />
        </th>
        <td>
          <!-- EDIT RECORD -->
          <RouterLink
            :to="{ name: 'accommodation', params: { id: accommodation._id } }"
          >
            <input
              style="border: none"
              type="button"
              class="btn-outline-info"
              value="edit"
            />
          </RouterLink>

          <!-- DELETE RECORD -->
          <RouterLink to="" @click.prevent="removeAccommodation(accommodation._id)">
            <input
              style="border: none"
              type="submit"
              class="btn-outline-danger"
              value="delete"
            /> </RouterLink
          ><br />
          <p>
            {{ accommodation.fileName }}<br />{{ accommodation.fee}}<br />{{
              accommodation.description
            }}
          </p>
        </td>
      </tr>
    </table>
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
