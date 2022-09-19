<template>
  <div style="font-size: 12pt">
    <!-- FILTER GUESTS (filter by name or checkin) -->
    <p style="text-align: center">
      <input
        class="search-wrapper"
        type="text"
        v-model="search"
        placeholder="Filter By Name or Checkin"
      />
    </p>
    <div class="card-data">
      <div v-for="guest in guests" :key="guest._id" class="guest-data">
        <div class="card">
          <div class="card-body">
            <p style="text-align: left">
              {{ guest.name }} booked a {{ guest.accommodationType }} for
              {{ guest.guestNum }} guests for {{ guest.checkin }}
            </p>
            <!-- CONTROLS -->
            <p>
              <!-- EDIT RECORD -->
              <RouterLink :to="{ name: 'booking', params: { id: guest._id } }">
                <input
                  style="border: none"
                  type="button"
                  class="btn-outline-info"
                  value="edit"
                />
              </RouterLink>

              <!-- DELETE RECORD -->
              <RouterLink to="" @click.prevent="removeGuest(guest._id)">
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
import { useGuestStore } from "../../stores/GuestStore";
import { mapStores, mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useGuestStore),
    ...mapState(useGuestStore, ["guestList", "guestCount"]),
    //
    guests() {
      return this.guestList.filter(
        (guest) =>
          guest.name.toLowerCase().includes(this.search.toLowerCase()) ||
          guest.checkin.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  created() {
    this.getGuest();
  },
  methods: {
    // Actions
    ...mapActions(useGuestStore, ["getGuest", "removeGuest"]),
  },
};
</script>
