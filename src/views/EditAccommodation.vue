<template>
  <div class="container">
    <div class="row">
      <!-- Column One -->
      <div class="col-sm"></div>
      <!-- Column Two -->
      <div class="col-sm">
        <P>ACCOMMODATION</P>
        <form
          @submit.prevent="updateAccommodation"
          enctype="multipart/form-data"
        >
          <input type="file" ref="file" @change="onSelect" />
          <br /><br />
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="file name"
              v-model="accommodation.fileName"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="fee"
              v-model="accommodation.fee"
              required
            />
          </div>

          <div class="form-group">
            <textarea
              style="width: 100%"
              rows="3"
              placeholder="description"
              v-model="accommodation.description"
              required
            >
            </textarea>
          </div>

          <div class="form-group">
            <button class="btn btn-success btn-block btn-add">save</button>
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
  name: "accommodation",
  data() {
    return {
      accommodation: {},
    };
  },
  // Button "edit" onClick GETS this accommodation.
  created() {
    axios.get(`${api}/accommodations/${this.$route.params.id}`).then((res) => {
      this.accommodation = res.data;
    });
  },
  methods: {
    async updateAccommodation() {
      // Button "update" onClick, UPDATES this booking.
      try {
        await axios
          .post(`${api}/accommodations/edit/${this.$route.params.id}`, this.accommodation)
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
