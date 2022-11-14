<template>
  <EmployeeList></EmployeeList>

  <MISALoading v-show="isShowLoading"></MISALoading>
  <MISAToast v-show="isShowToast"></MISAToast>
  <EmployeeDetail v-show="isShowDialogDetail"></EmployeeDetail>
</template>

<script>
import MISAToast from "../base/MISAToast.vue";
import MISALoading from "../base/MISALoading.vue";

import EmployeeList from "../../page/employee/EmployeeList.vue";
import EmployeeDetail from "../../page/employee/EmployeeDetail.vue";
export default {
  name: "ThePage",
  components: { MISALoading, MISAToast, EmployeeDetail, EmployeeList },
  created() {
    //load du lieu:
    //hien thi loading
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
  data() {
    return {
      isShowLoading: false,
      isShowToast: false,
      isShowDialogDetail: false,
      employees: [],
    };
  },
};
</script>
<style scoped>
@import url(../../css/main.css);
</style>
