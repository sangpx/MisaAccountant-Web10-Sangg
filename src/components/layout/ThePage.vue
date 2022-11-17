<template>
  <div>
    <EmployeeList
      :addFunction="onShowDialogDetail"
      @onAddClick="onShowDialogDetail"
    ></EmployeeList>
  </div>

  <MISALoading v-show="isShowLoading"></MISALoading>

  <EmployeeDetail
    :employeeSelected="employeeSelected"
    :hiddenDialogFuntion="onHideDialogDetail"
    v-show="isShowDialogDetail"
  ></EmployeeDetail>
</template>

<script>
import MISALoading from "../base/MISALoading.vue";
import EmployeeList from "../../views/employee/EmployeeList.vue";
import EmployeeDetail from "../../views/employee/EmployeeDetail.vue";

export default {
  name: "ThePage",

  components: { MISALoading, EmployeeDetail, EmployeeList },

  created() {
    // load dữ liệu:
    // hiển thị loading
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
    /*onShowDialogDetail(employee) {
      try {
        this.isShowDialogDetail = true;
        this.employeeSelected = employee;
      } catch (error) {
        console.log(error);
      }
    },*/

    /**
     * Author: Sang - 16/11/2022
     * */
    //Show Dialog Thông tin Nhân Viên
    onShowDialogDetail() {
      try {
        this.isShowDialogDetail = true;
      } catch (error) {
        console.log(error);
      }
    },

    //Ẩn Dialog Thông tin Nhân Viên
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
      isShowDialogDetail: false,
      employeeSelected: {},
    };
  },
};
</script>
<style scoped>
@import url(../../css/main.css);
</style>
