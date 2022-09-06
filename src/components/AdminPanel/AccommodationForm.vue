<template>
  <div class="container">
    <div class="row">
      <!-- Column One -->
      <div class="col-sm"></div>
      <!-- Column Two -->
      <div class="col-sm">
        <form @submit.prevent="newAccommodation()" enctype="multipart/form-data">
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
import api from "../../api";
export default {
  data() {
    return {
      accommodation: {},
    };
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    async newAccommodation() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        // UPLOAD FILE TO STORAGE DIRECTORY
        await axios.post(`${api}/uploads`, formData);
        // UPLOAD DATA TO DATABASE
        await axios.post(`${api}/accommodations/new`, this.accommodation);
        this.accommodation = {};
        this.message = "Sent Successfully";
      } catch {
        this.message = "Unsuccessful! Please, Try Again.";
      }
    },
  },
};
</script>
