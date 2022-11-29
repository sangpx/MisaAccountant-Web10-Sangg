<template>
  <div>
    <EmployeeList></EmployeeList>
  </div>
</template>

<script>
import EmployeeList from "../../views/employee/EmployeeList.vue";

export default {
  name: "ThePage",
  components: { EmployeeList },

  created() {
    /**
     * Author: SANG
     * createdBy: SANG
     * createdDate: 16/11/2022
     * */
  },

  methods: {},

  data() {
    return {};
  },
};
</script>
<style scoped>
@import url(../../css/main.css);
</style>
