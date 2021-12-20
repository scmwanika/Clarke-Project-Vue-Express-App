<template>
  <div>
    <h5>Guests Comment</h5>
    <table class="table table-info" v-for="review in reviewList" :key="review._id">
      <tr>
        <td>Date:</td>
        <th>{{ review.reviewDate }}</th>
      </tr>
      <tr>
        <td>Guest:</td>
        <th>{{ review.name }}</th>
      </tr>
      <tr>
        <td>Rated:</td>
        <th>{{ review.rating }}</th>
      </tr>
      <tr>
        <td>Commented:</td>
        <th>{{ review.comment }}</th>
      </tr>
      <br>
    </table>
    <em>{{ message }}</em>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../api';

export default {
  props: {
    message: String,
  },
  data() {
    return {
      reviewList: [],
    };
  },
  created() {
    const endpoint = '/reviews';
    axios
      .get(api + endpoint)
      .then((res) => {
        this.reviewList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
td {
  width: 100px;
}
</style>
