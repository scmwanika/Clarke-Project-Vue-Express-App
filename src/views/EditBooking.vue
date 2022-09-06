<template>
  <div class="container">
    <div class="row">
      <!-- Column One -->
      <div class="col-sm"></div>
      <!-- Column Two -->
      <div class="col-sm">
        <P>BOOKING</P>
        <form @submit.prevent="updateBooking()">
          <div>
            <label
              >Name
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                v-model="guest.name"
                required
            /></label>
            <label
              >Email
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
                v-model="guest.email"
                required
            /></label>
            <label
              >Phone Number
              <input
                type="text"
                class="form-control"
                placeholder="Phone Number"
                v-model="guest.phone"
                required
            /></label>
            <label
              >Number of Guests
              <input
                type="text"
                class="form-control"
                placeholder="Number of Guests"
                v-model="guest.guestNum"
                required
            /></label>
            <br />
            <label
              >Accommodation
              <select
                class="form-control"
                v-model="guest.accommodationType"
                required
              >
                <option value="Container House">Container House</option>
                <option value="Camping Tent">Camping Tent</option>
                <option value="Cottage">Cottage</option>
              </select></label
            >
            <label
              >Checkin
              <input
                type="date"
                class="form-control"
                v-model="guest.checkin"
                required
            /></label>
            <br />
            <input
              type="submit"
              class="btn btn-success btn-block"
              value="Update"
            />
            <em>{{ message }}</em>
          </div>
        </form>
      </div>
      <!-- Column Three -->
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../api";
export default {
  name: "booking",
  data() {
    return {
      guest: {},
    };
  },
  // Button "edit" onClick GETS this booking.
  created() {
    axios.get(`${api}/guests/${this.$route.params.id}`).then((res) => {
      this.guest = res.data;
    });
  },
  methods: {
    async updateBooking() {
      // Button "update" onClick, UPDATES this booking.
      try {
        await axios
          .post(`${api}/guests/edit/${this.$route.params.id}`, this.guest)
          .then(() => {
            this.$router.push("/dashboard");
          });
        this.message = "Sent Successfully";
      } catch {
        this.message = "Unsuccessful! Please, Try Again.";
      }
    },
  },
};
</script>

<style scoped>
label {
  width: 100%;
  font-size: 10pt;
  color: red;
}
</style>
