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
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  props: {
    message: String,
  },
  computed: {
    ...mapState(['reviews']),
    ...mapGetters(['reviewList']),
  },
  //
  created() {
    this.listReviews();
  },
  // METHODS
  methods: {
    ...mapActions(['listReviews', 'removeReview']),
  },
};
</script>

<style scoped>
td {
  width: 100px;
}
</style>
