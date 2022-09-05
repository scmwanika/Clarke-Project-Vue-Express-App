<script setup>
import EmployeeForm from './EmployeeForm.vue';
import ActivityForm from './ActivityForm.vue';
import AccommodationForm from './AccommodationForm.vue';
</script>

<template>
<div class="wrapper">
  <br />
  <ul
    class="nav nav-tabs mb-3 justify-content-center"
    id="pills-tab"
    role="tablist"
  >
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="pills-employees-tab"
        data-toggle="pill"
        data-target="#pills-employees"
        type="button"
        role="tab"
        aria-controls="pills-employees"
        aria-selected="true"
      >
        Employees
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-activities-tab"
        data-toggle="pill"
        data-target="#pills-activities"
        type="button"
        role="tab"
        aria-controls="pills-activities"
        aria-selected="false"
      >
        Activities
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-accommodations-tab"
        data-toggle="pill"
        data-target="#pills-accommodations"
        type="button"
        role="tab"
        aria-controls="pills-accommodations"
        aria-selected="false"
      >
        Accommodations
      </button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-employees"
      role="tabpanel"
      aria-labelledby="pills-employees-tab"
    >
      <EmployeeForm />
    </div>
    <div
      class="tab-pane fade"
      id="pills-guests"
      role="tabpanel"
      aria-labelledby="pills-guests-tab"
    >
      <EditBooking />
    </div>
    <div
      class="tab-pane fade"
      id="pills-activities"
      role="tabpanel"
      aria-labelledby="pills-activities-tab"
    >
      <ActivityForm />
    </div>
    <div
      class="tab-pane fade"
      id="pills-accommodations"
      role="tabpanel"
      aria-labelledby="pills-accommodations-tab"
    >
      <AccommodationForm />
    </div>
  </div>
  </div>
</template>

<style scoped>
/* .flex-container {
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
} */

/*
.btn-add {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
*/

/* .logout {
  margin-left: 15px;
} */

button {
  border: 0px solid;
}
</style>