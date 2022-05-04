<template>
  <div>
    <div class="flex-container">
      <div class="flex-item-left">
        <h6>Employee Profile</h6>
        <img
          :src="require('../../../backend/uploads/' + employee.fileName + '.jpg')"
          alt="card image"
        />
      </div>
      <div class="flex-item-right">
        <form @submit.prevent="handleUpdateForm">
          <p><br /></p>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="file name"
              v-model="employee.fileName" readonly
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

          <div class="form-group">
            <button class="btn btn-success btn-block">
              Update Profile
            </button>
            <em>{{ message }}</em>
          </div>
        </form>
      </div>
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
      employee: {},
    };
  },
  // edit-button onClick, GETs this employee.
  created() {
    axios.get(`${api}/employee/${this.$route.params.id}`).then((res) => {
      this.employee = res.data;
    });
  },
  //
  methods: {
    async handleUpdateForm() {
      // update-button onClick, POSTs this employee.
      try {
        await axios.post(`${api}/update-employee/${this.$route.params.id}`, this.employee).then(() => {
          this.$router.push('/admin');
        });
        this.message = 'Sent Successfully';
      } catch {
        this.message = 'Unsuccessful! Please, Try Again.';
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

em {
  color: red;
  font-size: 10pt;
  text-align: center;
}

.flex-container {
  display: flex;
  flex-direction: row;
  font-size: 12pt;
}

.flex-item-left {
  flex: 25%;
  padding: 1%;
  padding-right: 1%;
}

.flex-item-right {
  flex: 75%;
  padding-left: 1%;
  padding-right: 1%;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
