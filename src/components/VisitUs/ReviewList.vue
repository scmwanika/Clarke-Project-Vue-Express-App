<template>
  <div>
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
    </table>
  </div>
</template>

<script>
import { useReviewStore } from "../../stores/ReviewStore";
import { mapStores, mapState, mapActions } from 'pinia';
export default {
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useReviewStore),
    ...mapState(useReviewStore, ['reviewList', 'reviewCount']),
  },
  created() {
    this.getReview();
  },
  methods: {
    // Actions
    ...mapActions(useReviewStore, ['getReview', 'removeReview']),
  },
};
</script>

<style scoped>
td {
  width: 100px;
}
</style>
