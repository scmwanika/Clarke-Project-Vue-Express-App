<template>
  <div class="flex-container">
    <div class="flex-component-left"><EmployeeList /></div>

    <div class="flex-component-right">
      <form @submit.prevent="addEmployee" enctype="multipart/form-data">
        <h6>Upload File</h6>
        <input type="file" ref="file" @change="onSelect" />
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="file name"
            v-model="employee.fileName"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="role"
            v-model="employee.role"
            required
          />
        </div>

        <input
          type="submit"
          class="btn btn-success btn-block"
          @click="insertEmployee(employee)"
        />
        <em>{{ message }}</em>
      </form>
    </div>
  </div>
</template>

<script>
import EmployeeList from '@/components/AboutUs/EmployeeList.vue';
import { mapMutations, mapActions } from 'vuex';
import axios from 'axios';
import api from '../../api';

export default {
  components: {
    EmployeeList,
  },
  name: 'UploadEmployees',
  props: {
    message: String,
  },
  data() {
    return {
      employee: {},
    };
  },
  methods: {
    //
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    ...mapMutations(['INSERT_EMPLOYEE']),
    ...mapActions(['insertEmployee']),
    async addEmployee() {
      const formData = new FormData();
      formData.append('file', this.file);
      try {
        // UPLOAD FILE TO STORAGE DIRECTORY
        await axios.post(`${api}/uploads`, formData);
        // UPLOAD DATA TO DATABASE
        await axios.post(`${api}/employees/add`, this.employee);
        this.employee = {};
        this.message = 'Sent Successfully';
      } catch {
        this.message = 'Unsuccessful! Please, Try Again.';
      }
    },
  },
};
</script>
