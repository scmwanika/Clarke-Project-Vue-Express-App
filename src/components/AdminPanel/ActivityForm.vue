<template>
  <div class="flex-container">
    <div class="flex-component-left"><ActivityList /></div>

    <div class="flex-component-right">
      <form @submit.prevent="addActivity" enctype="multipart/form-data">
        <h6>Upload File</h6>
        <input type="file" ref="file" @change="onSelect" />
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="file name"
            v-model="activity.fileName"
          />
        </div>

        <div class="form-group">
          <textarea
            rows="3"
            placeholder="description"
            v-model="activity.description"
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
import axios from 'axios';
import api from '../../api';

export default {
  props: {
    message: String,
  },
  data() {
    return {
      activity: {},
    };
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    async addActivity() {
      const formData = new FormData();
      formData.append('file', this.file);
      try {
        // UPLOAD FILE TO STORAGE DIRECTORY
        await axios.post(`${api}/uploads`, formData);
        // UPLOAD DATA TO DATABASE
        await axios.post(`${api}/activities/add`, this.activity);
        this.activity = {};
        this.message = 'Sent Successfully';
      } catch {
        this.message = 'Unsuccessful! Please, Try Again.';
      }
    },
  },
};
</script>
