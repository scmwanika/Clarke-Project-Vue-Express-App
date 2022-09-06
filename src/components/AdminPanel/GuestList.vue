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
    <table class="table table-info" v-for="guest in guestList" :key="guest._id">
      <tr>
        <th></th>
        <td>
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
      <tr>
        <th>Name:</th>
        <td>{{ guest.name }}</td>
      </tr>
      <tr>
        <th>Email:</th>
        <td>{{ guest.email }}</td>
      </tr>
      <tr>
        <th>Phone:</th>
        <td>{{ guest.phone }}</td>
      </tr>
      <tr>
        <th>Guests:</th>
        <td>{{ guest.guestNum }}</td>
      </tr>
      <tr>
        <th>Accommodation:</th>
        <td>{{ guest.accommodationType }}</td>
      </tr>
      <tr>
        <th>Checkin:</th>
        <td>{{ guest.checkin }}</td>
      </tr>
    </table>
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
  th {
    width: 20%;
  }
  
  td {
    width: 80%;
  }

  p {
    font-size: 12pt;
  }
  </style>
