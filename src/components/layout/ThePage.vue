<template>
  <div>
    <EmployeeList></EmployeeList>
  </div>

  <MISALoading v-show="isShowLoading"></MISALoading>
</template>

<script>
import MISALoading from "../base/MISALoading.vue";
import EmployeeList from "../../views/employee/EmployeeList.vue";

export default {
  name: "ThePage",

  components: { MISALoading, EmployeeList },

  created() {
    // // load dữ liệu:
    // // hiển thị loading
    this.isShowLoading = true;
    const fetchAPI = "https://amis.manhnv.net/api/v1/employees";
    fetch(fetchAPI)
      .then((res) => res.json())
      .then((res) => {
        this.employees = res;
        this.isShowLoading = false;
      })
      .catch((err) => console.log(err));
  },

  methods: {
    /**
     * Author: SANG
     * createdBy: SANG
     * createdDate: 16/11/2022
     * */
  },

  data() {
    return {
      isShowLoading: false,
      isShowDialogDetail: false,
    };
  },
};
</script>
<style scoped>
@import url(../../css/main.css);
</style>
