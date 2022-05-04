<template>
  <div>
    <table class="table table-info">
      <!-- Head -->
      <tr>
        <th>Image</th>
        <th>File Name</th>
        <th>Fee</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      <!-- Body -->
      <tr v-for="accommodation in accommodationList" :key="accommodation._id">
        <td>
          <img
            :src="
              require('../../../backend/uploads/' + accommodation.fileName + '.jpg')
            "
            alt="accommodation"
            width="120px"
          />
        </td>
        <td>{{ accommodation.fileName }}</td>
        <td>{{ accommodation.fee }}</td>
        <td>{{ accommodation.description }}</td>
        <td>
          <router-link
            :to="{ name: 'edit', params: { id: accommodation._id } }"
            class="edit"
            ><!-- EDIT ICON -->
            <img src="@/assets/edit-16.png" alt="edit-icon" />
          </router-link>
          <a href="" @click.prevent="removeAccommodation(accommodation._id)"
            ><!-- DELETE ICON -->
            <img src="@/assets/delete-16.png" alt="delete-icon" />
          </a>
        </td>
      </tr>
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
    ...mapState(['accommodations']),
    ...mapGetters(['accommodationList']),
  },
  //
  created() {
    this.listAccommodations();
  },
  // METHODS
  methods: {
    ...mapActions(['listAccommodations', 'removeAccommodation']),
  },
};
</script>
