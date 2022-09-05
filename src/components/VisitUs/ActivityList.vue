<template>
  <div style="font-size: 12pt"><br />
    <table>
      <!-- Head -->
      <tr>
        <th>File</th>
        <th>Name</th>
        <th>Description</th>
        <th>{{ activityCount }} activities</th>
      </tr>
      <!-- Body -->
      <tr v-for="activity in activityList" :key="activity._id">
        <td>
          <img
            :src="'../../../backend/uploads/' + activity.fileName + '.jpg'"
            alt="activity"
            width="120px"
          />
        </td>
        <td>{{ activity.fileName }}</td>
        <td>{{ activity.description }}</td>
        <td style="text-align: center">
          <!-- EDIT RECORD -->
          <RouterLink :to="{ name: '', params: { id: activity._id } }">
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
            />
          </RouterLink>
        </td>
      </tr>
    </table>
    <em>{{ message }}</em>
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

<style scoped>
p {
  text-align: center;
  font-size: 12pt;
}

table {
  margin: 0 auto;
  border: 1px solid;
}

th {
  background-color: #068d68;
  border: 1px solid #068d68;
  color: white;
  font-weight: lighter;
  text-align: center;
}

td {
  width: 1%;
  border: 1px solid #068d68;
}
</style>
