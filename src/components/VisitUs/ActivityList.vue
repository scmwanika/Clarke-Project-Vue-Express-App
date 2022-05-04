<template>
  <div>
    <table class="table table-info">
      <!-- Head -->
      <tr>
        <th>Image</th>
        <th>File Name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      <!-- Body -->
      <tr v-for="activity in activityList" :key="activity._id">
        <td>
          <img
            :src="
              require('../../../backend/uploads/' + activity.fileName + '.jpg')
            "
            alt="activity"
            width="120px"
          />
        </td>
        <td>{{ activity.fileName }}</td>
        <td>{{ activity.description }}</td>
        <td>
          <router-link
            :to="{ name: 'edit', params: { id: activity._id } }"
            class="edit"
            ><!-- EDIT ICON -->
            <img src="@/assets/edit-16.png" alt="edit-icon" />
          </router-link>
          <a href="" @click.prevent="removeActivity(activity._id)"
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
    ...mapState(['activities']),
    ...mapGetters(['activityList']),
  },
  //
  created() {
    this.listActivities();
  },
  // METHODS
  methods: {
    ...mapActions(['listActivities', 'removeActivity']),
  },
};
</script>
