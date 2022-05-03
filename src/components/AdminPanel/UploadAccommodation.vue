<template>
  <div class="flex-container">
    <div class="flex-component-left"><AccommodationList /></div>

    <div class="flex-component-right">
      <form @submit.prevent="addAccommodation" enctype="multipart/form-data">
        <h6>Upload File</h6>
        <input type="file" ref="file" @change="onSelect" />
        <br />
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
  </div>
</template>

<script>
import AccommodationList from '@/components/VisitUs/AccommodationList.vue';
import { mapMutations, mapActions } from 'vuex';
import axios from 'axios';
import api from '../../api';

export default {
  components: {
    AccommodationList,
  },
  name: 'UploadAccommodations',
  props: {
    message: String,
  },
  data() {
    return {
      accommodation: {},
    };
  },
  methods: {
    //
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    ...mapMutations(['INSERT_ACCOMMODATION']),
    ...mapActions(['insertAccommodation']),
    async addAccommodation() {
      const formData = new FormData();
      formData.append('file', this.file);
      try {
        // UPLOAD FILE TO STORAGE DIRECTORY
        await axios.post(`${api}/uploads`, formData);
        // UPLOAD DATA TO DATABASE
        await axios.post(`${api}/accommodations/add`, this.accommodation);
        this.accommodation = {};
        this.message = 'Sent Successfully';
      } catch {
        this.message = 'Unsuccessful! Please, Try Again.';
      }
    },
  },
};
</script>
