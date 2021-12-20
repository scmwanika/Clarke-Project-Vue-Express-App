<template>
  <div>
    <HeaderSection />
    <h3>Admin Panel</h3>
    <div class="logout">
      <b-button v-on:click="logout" variant="danger">
        Logout
      </b-button>
    </div>
    <md-tabs class="md-transparent" md-alignment="centered">
      <md-tab id="tab-employees" md-label="Employees"
        ><UploadEmployee
      /></md-tab>
      <md-tab id="tab-guests" md-label="Guests"><GuestList /></md-tab>
      <md-tab id="tab-reviews" md-label="Reviews"><ReviewList /></md-tab>
      <md-tab id="tab-activities" md-label="Activities"
        ><UploadActivity
      /></md-tab>
      <md-tab id="tab-accommodations" md-label="Accommodations"
        ><UploadAccommodation
      /></md-tab>
    </md-tabs>
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import UploadEmployee from '@/components/AdminPanel/UploadEmployee.vue';
import GuestList from '@/components/GuestList.vue';
import ReviewList from '@/components/ReviewList.vue';
import UploadActivity from '@/components/AdminPanel/UploadActivity.vue';
import UploadAccommodation from '@/components/AdminPanel/UploadAccommodation.vue';

export default {
  name: 'AdminPanel',
  components: {
    HeaderSection,
    UploadEmployee,
    GuestList,
    ReviewList,
    UploadActivity,
    UploadAccommodation,
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      // Navigate to index "AboutPage"
      this.$router.push('/');
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.flex-component-left {
  flex: 75%;
  margin-right: 0.5%;
}

.flex-component-right {
  flex: 25%;
  margin-left: 0.5%;
}

.table {
  margin: 0 auto;
  font-size: 10pt;
}

th,
td {
  text-align: left;
}

.edit {
  margin-right: 10px;
}

input[type="file"],
input[type="text"],
textarea {
  width: 100%;
  font-size: 14pt;
}

textarea {
  padding-left: 10px;
}

/*
.btn-add {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
*/
.logout {
  margin-left: 15px;
}
</style>
