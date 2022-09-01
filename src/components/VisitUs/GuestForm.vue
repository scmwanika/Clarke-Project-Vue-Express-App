<script setup>
import TheOffers from "./TheOffers.vue";
</script>

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
        <form @submit.prevent="addGuest()">
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
            <input type="submit" class="btn btn-success btn-block" />
          </div>
        </form>
        <em>{{ message }}</em>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import axios from "axios";
import api from "../../api";

export default {
  data() {
    return {
      guest: {},
    };
  },
  methods: {
    // Actions
    async addGuest() {
      try {
        await axios.post(`${api}/guests/new`, this.guest);
        this.guest = {};
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

.flex-container {
  display: flex;
  flex-direction: row;
  font-size: 12pt;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
}

.flex-item-left {
  flex: 75%;
  margin-left: 2.5%;
  margin-right: 2.5%;
}

.flex-item-right {
  flex: 25%;
  margin-left: 2.5%;
  margin-right: 2.5%;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
