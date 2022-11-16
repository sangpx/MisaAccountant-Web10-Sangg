<template>
  <div>
    <EmployeeList
      :addFunction="onShowDialogDetail"
      @onAddClick="onShowDialogDetail"
    ></EmployeeList>
  </div>

  <MISALoading v-show="isShowLoading"></MISALoading>

  <MISAToast v-show="isShowToast"></MISAToast>

  <EmployeeDetail
    :employeeSelected="employeeSelected"
    :hiddenDialogFuntion="onHideDialogDetail"
    v-show="isShowDialogDetail"
  ></EmployeeDetail>
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
    //load dữ liệu:
    //hiển thị loading
    // this.isShowLoading = true;
    // const fetchAPI = "https://amis.manhnv.net/api/v1/employees";
    // fetch(fetchAPI)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.employees = res;
    //     this.isShowLoading = false;
    //   })
    //   .catch((err) => console.log(err));
  },

  methods: {
    onShowDialogDetail(employee) {
      try {
        console.log(employee);
        this.isShowDialogDetail = true;
        this.employeeSelected = employee;
      } catch (error) {
        console.log(error);
      }
    },
    onHideDialogDetail() {
      try {
        this.isShowDialogDetail = false;
      } catch (error) {
        console.log(error);
      }
    },
  },

  data() {
    return {
      isShowLoading: false,
      isShowToast: false,
      isShowDialogDetail: false,
      employeeSelected: {},
    };
  },
};
</script>
<style scoped>
@import url(../../css/main.css);
</style>
