<template>
  <div style="font-size: 12pt">
    <!-- FILTER GUESTS (filter by name or checkin) -->
    <p>
      <input
        class="search-wrapper"
        type="text"
        v-model="search"
        placeholder="Filter By Name or Checkin"
      />
    </p>
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Number of Guests</th>
          <th>Accommodation Type</th>
          <th>Checkin</th>
          <th>
            <span v-if="guestList.length === 0">No guest</span>
            <span v-else-if="guestList.length === 1">
              found {{ guestList.length }} guest
            </span>
            <span v-else>
              found {{ guestList.length }} guests of
              {{ guestCount }}
            </span>
          </th>
        </tr>
        <tr v-for="guest in guestList" :key="guest._id">
          <td>{{ guest.name }}</td>
          <td>{{ guest.email }}</td>
          <td>{{ guest.phone }}</td>
          <td>{{ guest.guestNum }}</td>
          <td>{{ guest.accommodationType }}</td>
          <td>{{ guest.checkin }}</td>
          <td style="text-align: center">
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
          </td>
        </tr>
      </table>
    </div>
    <br />
    <!-- <em>{{ message }}</em> -->
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
