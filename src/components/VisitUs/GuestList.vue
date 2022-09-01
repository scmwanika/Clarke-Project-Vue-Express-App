<template>
  <div>
    <!-- FILTER GUESTS (filter by name or checkin) -->
    <div style="text-align: center" class="search-wrapper">
      <input
        type="text"
        v-model="search"
        placeholder="Filter By Name or Checkin"
      />
      <br /><br />
      <p style="text-align: center" v-if="guestList.length === 0">
        No guest found in your search
      </p>
      <p style="text-align: center" v-else-if="guestList.length === 1">
        Your search found {{ guestList.length }} guest
      </p>
      <p style="text-align: center" v-else>
        Your search found {{ guestList.length }} guests of {{ guestCount }}
      </p>
      <small>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Number of Guests</th>
            <th>Accommodation Type</th>
            <th>Checkin</th>
            <th></th>
          </tr>
          <tr v-for="guest in guestList" :key="guest._id">
            <td>{{ guest.name }}</td>
            <td>{{ guest.email }}</td>
            <td>{{ guest.phone }}</td>
            <td>{{ guest.guestNum }}</td>
            <td>{{ guest.accommodationType }}</td>
            <td>{{ guest.checkin }}</td>
            <td>
              <!-- EDIT RECORD -->
              <a href="" @click.prevent="editGuest(guest._id)">
                <input
                  style="margin-right: 0.5px"
                  type="button"
                  class="btn btn-info"
                  value="edit"
                />
              </a>

              <!-- DELETE RECORD -->
              <a href="" @click.prevent="removeGuest(guest._id)">
                <input
                  style="margin-left: 0.5px"
                  type="submit"
                  class="btn btn-danger"
                  value="delete"
                />
              </a>
            </td>
          </tr>
        </table>
      </small>
    </div>
    <br />
    <!-- <em>{{ message }}</em> -->
  </div>
</template>

<script>
import { useGuestStore } from "../../stores/GuestStore";
import { mapStores, mapState, mapActions } from 'pinia';
export default {
  data() {
    return {
      search: '',
    };
  },
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useGuestStore),
    ...mapState(useGuestStore, ['guestList', 'guestCount']),
    //
    guests() {
      return this.guestList.filter(
        (guest) => guest.name.toLowerCase().includes(this.search.toLowerCase())
          || guest.checkin.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  created() {
    this.getGuest();
  },
  methods: {
    // Actions
    ...mapActions(useGuestStore, ['getGuest', 'removeGuest']),
  },
};
</script>

<style scoped>
table {
  margin: 0 auto;
  border: 1px solid;
}

th {
  background-color: #068d68;
  border: 1px solid #068d68;
  color: white;
  font-weight: lighter;
}

td {
  width: 1%;
  border: 1px solid #068d68;
}
</style>
