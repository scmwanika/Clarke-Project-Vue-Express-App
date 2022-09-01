<!-- <template>
  <input type="text" v-model="employee" />
  <button @click="insertEmployee(employee)">Save</button>
</template>
<script>
import { useEmployeeStore } from "@/stores/EmployeeStore";
export default {
  data() {
    return { employee: "" };
  },
  setup() {
    const employeeq = useEmployeeStore();
    return { insertEmployee: employeeq.insertEmployee };
  },
};
</script> -->
