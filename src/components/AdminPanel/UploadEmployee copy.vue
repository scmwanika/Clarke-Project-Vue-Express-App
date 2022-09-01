<script setup>
import EmployeeList from '../../components/AboutUs/EmployeeList.vue';
</script>

<template>
  <div class="flex-container">
    <div class="flex-component-left"><EmployeeList /></div>
    <div class="flex-component-right">
      <!-- <form @submit.prevent="addEmployee" enctype="multipart/form-data">
        <h6>Upload File</h6>
        <input type="file" ref="file" @change="onSelect" />
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="file name"
            v-model="employee.fileName"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="role"
            v-model="employee.role"
            required
          />
        </div>

        <input
          type="submit"
          class="btn btn-success btn-block"
          @click="insertEmployee(employee)"
        />
        <em>{{ message }}</em>
      </form> -->
    </div>
  </div>
</template>