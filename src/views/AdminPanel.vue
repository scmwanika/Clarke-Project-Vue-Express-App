<script setup>
import EmployeeList from "../components/AboutUs/EmployeeList.vue";
import GuestList from "../components/VisitUs/GuestList.vue";
import ActivityList from "../components/VisitUs/ActivityList.vue";
import AccommodationList from "../components/VisitUs/AccommodationList.vue";
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
          id="pills-guests-tab"
          data-toggle="pill"
          data-target="#pills-guests"
          type="button"
          role="tab"
          aria-controls="pills-guests"
          aria-selected="false"
        >
          Guests
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
    <RouterLink style="margin-left: 10px" to="/forms"
      ><input type="button" value="new"
    /></RouterLink>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-employees"
        role="tabpanel"
        aria-labelledby="pills-employees-tab"
      >
        <EmployeeList />
      </div>
      <div
        class="tab-pane fade"
        id="pills-guests"
        role="tabpanel"
        aria-labelledby="pills-guests-tab"
      >
        <GuestList />
      </div>
      <div
        class="tab-pane fade"
        id="pills-activities"
        role="tabpanel"
        aria-labelledby="pills-activities-tab"
      >
        <ActivityList />
      </div>
      <div
        class="tab-pane fade"
        id="pills-accommodations"
        role="tabpanel"
        aria-labelledby="pills-accommodations-tab"
      >
        <AccommodationList />
      </div>
    </div>
  </div>
</template>
