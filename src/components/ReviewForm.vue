<template>
  <div>
    <h6 class="text-center">Farm visit reviews</h6>
    <form @submit.prevent="addReview">
      <div class="form-group">
        <label>Name:</label>
        <input
          type="text"
          class="form-control"
          v-model="visitor.name"
          required
        />
      </div>

      <div class="form-group">
        <label>Farm experience:</label>
        <select class="form-control" v-model="visitor.rating" required>
          <option value="☆☆☆☆☆">Excellent</option>
          <option value="☆☆☆☆">Very Good</option>
          <option value="☆☆☆">Good</option>
          <option value="☆☆">Fair</option>
          <option value="☆">Poor</option>
        </select>
      </div>

      <div class="form-group">
        <label>Comment:</label>
        <input
          type="text"
          class="form-control"
          v-model="visitor.comment"
          required
        />
      </div>

      <div class="form-group">
        <label>Date:</label>
        <input
          type="date"
          class="form-control"
          v-model="visitor.reviewDate"
          required
        />
      </div>
      <br />
      <input
        type="submit"
        class="btn btn-success btn-block"
        @click="insertGuest(guest)"
      />
    </form>
    <em>{{ message }}</em>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import axios from 'axios';
import api from '../api';

export default {
  props: {
    message: String,
  },
  data() {
    return {
      review: {},
    };
  },
  methods: {
    ...mapMutations(['INSERT_REVIEW']),
    ...mapActions(['insertReview']),
    async addReview() {
      try {
        await axios.post(`${api}/reviews/add`, this.review);
        this.review = {};
        this.message = 'Sent Successfully';
      } catch {
        this.message = 'Unsuccessful! Please, Try Again.';
      }
    },
  },
};
</script>

<style scoped>
h6,
form {
  margin-right: 5%;
}

label {
  font-size: 14px;
  margin-bottom: 0px;
}

em {
  color: red;
  font-size: 10pt;
}
</style>
