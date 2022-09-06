<template>
  <br />
  <div>
    <table
      class="table table-info"
      v-for="activity in activityList"
      :key="activity._id"
    >
      <tr>
        <th>
          <img
            :src="'../../../backend/uploads/' + activity.fileName + '.jpg'"
            alt="activity"
          />
        </th>
        <td>
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
          ><br />
          <p>
            {{ activity.fileName }}<br />{{ activity.fee }}<br />{{
              activity.description
            }}
          </p>
        </td>
      </tr>
    </table>
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
  img {
    width: 100%;
  }
  
  th {
    width: 20%;
  }
  
  td {
    width: 80%;
  }
  
  p {
    margin-left: 4px;
    font-size: 12pt;
  }
  </style>
