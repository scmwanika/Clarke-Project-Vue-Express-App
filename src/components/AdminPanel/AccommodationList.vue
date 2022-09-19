<template>
  <br />
  <div>
    <div class="card-data">
      <div
        v-for="accommodation in accommodationList"
        :key="accommodation._id"
        class="accommodation-data"
      >
        <div class="card">
          <img
            :src="'../../../backend/uploads/' + accommodation.fileName + '.jpg'"
            alt="accommodation"
          />
          <div class="card-body">
            <p>
              {{ accommodation.fileName }}<br />{{ accommodation.fee }}
              {{ accommodation.description }}
            </p>
            <!-- CONTROLS -->
            <p>
              <!-- EDIT RECORD -->
              <RouterLink
                :to="{
                  name: 'accommodation',
                  params: { id: accommodation._id },
                }"
              >
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
            </p>
          </div>
        </div>
      </div>
    </div>
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
