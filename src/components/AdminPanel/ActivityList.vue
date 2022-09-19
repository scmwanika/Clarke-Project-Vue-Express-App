<template>
  <br />
  <div>
    <div class="card-data">
      <div
        v-for="activity in activityList"
        :key="activity._id"
        class="activity-data"
      >
        <div class="card">
          <img
            :src="'../../../backend/uploads/' + activity.fileName + '.jpg'"
            alt="activity"
          />
          <div class="card-body">
            <p>
              {{ activity.fileName }}<br />{{ activity.fee }}
              {{ activity.description }}
            </p>
            <!-- CONTROLS -->
            <p>
              <!-- EDIT RECORD -->
              <RouterLink
            :to="{ name: 'activity', params: { id: activity._id } }"
          >
            <input
              style="border: none"
              type="button"
              class="btn-outline-info"
              value="edit"
            />
          </RouterLink>

          <!-- DELETE RECORD -->
          <RouterLink to="" @click.prevent="removeActivity(activity._id)">
            <input
              style="border: none"
              type="submit"
              class="btn-outline-danger"
              value="delete"
            /> </RouterLink
          >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useActivityStore } from "@/stores/ActivityStore";
import { mapStores, mapState, mapActions } from "pinia";
export default {
  computed: {
    // State and Getters
    // other computed properties
    ...mapStores(useActivityStore),
    ...mapState(useActivityStore, ["activityList", "activityCount"]),
  },
  created() {
    this.getActivity();
  },
  methods: {
    // Actions
    ...mapActions(useActivityStore, ["getActivity", "removeActivity"]),
  },
};
</script>
