<script setup>
import TheActivities from './TheActivities.vue';
import TheAccommodation from './TheAccommodation.vue';
import ThePackages from './ThePackages.vue';
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
        Activities
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
        Accommodations
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-reviews-tab"
        data-toggle="pill"
        data-target="#pills-reviews"
        type="button"
        role="tab"
        aria-controls="pills-reviews"
        aria-selected="false"
      >
        Packages
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
      <TheActivities />
    </div>
    <div
      class="tab-pane fade"
      id="pills-guests"
      role="tabpanel"
      aria-labelledby="pills-guests-tab"
    >
      <TheAccommodation />
    </div>
    <div
      class="tab-pane fade"
      id="pills-reviews"
      role="tabpanel"
      aria-labelledby="pills-reviews-tab"
    >
      <ThePackages />
    </div>
  </div>
  </div>
</template>

<style scoped>
button {
  border: 0px solid;
}
</style>