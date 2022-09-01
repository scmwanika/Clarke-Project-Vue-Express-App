<template>
  <div>
    <form @submit.prevent="addReview()">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="review.name"
          placeholder="write your name here..."
          required
        />
      </div>

      <div class="form-group">
        <select class="form-control" v-model="review.rating" required>
          <option value="">select farm experience...</option>
          <option value="☆☆☆☆☆">Excellent</option>
          <option value="☆☆☆☆">Very Good</option>
          <option value="☆☆☆">Good</option>
          <option value="☆☆">Fair</option>
          <option value="☆">Poor</option>
        </select>
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="review.comment"
          placeholder="write your comment here..."
          required
        />
      </div>

      <div class="form-group">
        <input
          type="hidden"
          class="form-control"
          v-model="review.reviewDate"
          placeholder="date"
          required
        />
      </div>

      <input type="submit" class="btn btn-success btn-block" value="Submit A Review About Your Visit To The Farm."/>
    </form>
    <em>{{ message }}</em>
  </div>
</template>

<script>
import axios from "axios";
import api from "../../api";

export default {
  data() {
    return {
      review: {},
    };
  },
  methods: {
    // Actions
    async addReview() {
      try {
        await axios.post(`${api}/reviews/new`, this.review);
        this.review = {};
        this.message = "Sent Successfully";
      } catch {
        this.message = "Unsuccessful! Please, Try Again.";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-left: 5%;
  margin-right: 5%;
}

em {
  color: red;
  font-size: 10pt;
  text-align: center;
}
</style>
