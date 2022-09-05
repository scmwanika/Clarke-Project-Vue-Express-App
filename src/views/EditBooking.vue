<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <TheOffers />
      <br />
    </div>
    <div class="flex-item-right">
      <br /><br /><br />
      <div style="background-color: rgba(0, 0, 0, 0.05)">
        <h6>Book Your Visit Now</h6>
        <form @submit.prevent="updateBooking()">
          <div>
            <input
              type="text"
              class="form-control form-control-sm mt-3"
              placeholder="Name"
              v-model="guest.name"
              required
            />
            <input
              type="email"
              class="form-control form-control-sm mt-3"
              placeholder="Email Address"
              v-model="guest.email"
              required
            />
            <input
              type="text"
              class="form-control form-control-sm mt-3"
              placeholder="Phone Number"
              v-model="guest.phone"
              required
            />
            <input
              type="text"
              class="form-control form-control-sm mt-3"
              placeholder="Number of Guests"
              v-model="guest.guestNum"
              required
            />
            <br />
            <p>Select Accommodation and Arrival Date:</p>
            <select
              class="form-control form-control-sm mt-3"
              v-model="guest.accommodationType"
              required
            >
              <option value="Container House">Container House</option>
              <option value="Camping Tent">Camping Tent</option>
              <option value="Cottage">Cottage</option>
            </select>
            <input
              type="date"
              class="form-control form-control-sm mt-3"
              v-model="guest.checkin"
              required
            />
            <br />
            <input
              type="submit"
              class="btn btn-success btn-block"
              value="Update"
            />
          </div>
        </form>
        <p>
          <em>{{ message }}</em>
        </p>
      </div>
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
  // edit-button onClick GETs this guest.
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
* {
  box-sizing: border-box;
}

h5 {
  color: #068d68;
}

p {
  font-size: 10pt;
  text-align: center;
}

form {
  text-align: left;
  font-size: 10pt;
}

.btn-radio {
  margin-right: 10px;
}

em {
  color: red;
  font-size: 10pt;
  text-align: center;
}
</style>
