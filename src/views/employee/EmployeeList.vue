<template>
  <!-- main -->
  <div class="main">
    <!-- page__header-->
    <div class="page__header">
      <div class="page__title">Nhân Viên</div>

      <div class="page__button">
        <button @click="handleShowDialogDetail" id="btnAdd" class="btn btn-add">
          Thêm Mới Nhân Viên
        </button>
      </div>
    </div>

    <!-- page__body -->
    <div class="page__body">
      <!-- toolbar -->
      <div class="toolbar">
        <div class="toolbar__input">
          <input
            type="text"
            placeholder="Tìm theo mã, tên nhân viên"
            class="input input-search"
          />
          <button class="icon_search"></button>
        </div>
        <div class="icon__reload"></div>
      </div>
      <!-- table -->
      <div class="table">
        <div style="overflow-x: auto; height: 100%">
          <table>
            <thead>
              <tr class="table__tr">
                <th><input type="checkbox" class="table__input-checkbox" /></th>
                <th class="th__id">Mã Nhân Viên</th>
                <th class="th__name">Tên Nhân Viên</th>
                <th class="th__gender">Giới Tính</th>
                <th class="th__dateBirth">Ngày Sinh</th>
                <th class="th__identity-number">Số CMND</th>
                <th class="th__issure-date">Ngày Cấp</th>
                <th class="th__issure-place">Nơi Cấp</th>
                <th class="th__career-title">Chức Danh</th>
                <th class="th__name-unit--work">Tên Đơn Vị</th>
                <th class="th__account-number">Số Tài Khoản</th>
                <th class="th__address">Địa Chỉ</th>
                <th class="th__email">Email</th>
                <th class="th__name-bank">Tên Ngân Hàng</th>
                <th class="th__branch-bank">Chi Nhánh TK Ngân Hàng</th>
                <th class="th__phone-number">ĐT Di Động</th>
                <th class="th__landline-phone">ĐT Cố Định</th>
                <th class="th__function">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in employees"
                :key="index"
                class="table__tr"
                @dblclick="handleOnRowDblClick(item)"
              >
                <td @dblclick.stop="unDbl">
                  <input type="checkbox" class="table__input-checkbox" />
                </td>
                <td class="th__id">{{ item.EmployeeCode }}</td>
                <td class="th__name">{{ item.EmployeeName }}</td>
                <td class="th__gender">{{ item.GenderName }}</td>
                <td class="th__dateBirth">
                  {{ formatDate(item.DateOfBirth) }}
                </td>
                <td class="th__identity-number">{{ item.IdentityNumber }}</td>
                <td class="th__issure-date">
                  {{ formatDate(item.IdentityDate) }}
                </td>
                <td class="th__issure-place">{{ item.IdentityPlace }}</td>
                <td class="th__career-title">{{ item.PositionName }}</td>
                <td class="th__name-unit--work">{{ item.DepartmentName }}</td>
                <td class="th__account-number">{{ item.BankAccountNumber }}</td>
                <td class="th__address">{{ item.Addresss }}</td>
                <td class="th__email">{{ item.Email }}</td>
                <td class="th__name-bank">{{ item.BankName }}</td>
                <td class="th__branch-bank">{{ item.BankBranchName }}</td>
                <td class="th__phone-number">{{ item.PhoneNumber }}</td>
                <td class="th__landline-phone">{{ item.TelephoneNumber }}</td>
                <td class="th__function">
                  Sửa
                  <span class="icon__edit" @click="handleShowDropMenu">
                    <i class="icofont-caret-down"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- paging -->
      <div class="paging">
        <div class="paging__left">
          <span
            >Tổng số: <b>{{ totalRecord }}</b> bản ghi</span
          >
        </div>

        <div class="paging__right">
          <div class="paging__right-select">
            <select class="select__paging" name="select__paging">
              <option value="2">20 bản ghi trên một trang</option>
              <option value="1">10 bản ghi trên một trang</option>
              <option value="3">30 bản ghi trên một trang</option>
              <option value="4">50 bản ghi trên một trang</option>
              <option value="5">100 bản ghi trên một trang</option>
            </select>
          </div>

          <div class="paging__right-page">
            <div class="right-page__content">
              <div class="page__prev">Trước</div>
              <div class="page__number">
                <div class="number number__one">1</div>
                <div class="number number__two">2</div>
                <div class="number number__three">3</div>
                <div class="number number__ellipsis">...</div>
                <div class="number number__nine">9</div>
              </div>
              <div class="page__next">Sau</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- dropdown Xóa -->
    <div
      :style="{ top: topDrop, left: leftDrop }"
      v-if="isShowDropMenu"
      class="dropdown__menu"
    >
      <div class="dropdown__list">
        <div class="dropdown__item">Nhân Bản</div>
        <div class="dropdown__item" @click="handleShowMessDelete">Xóa</div>
        <div class="dropdown__item">Ngưng sử dụng</div>
      </div>
    </div>
  </div>

  <MISAWarmingDelete
    :hideMessDelete="handleHideShowMessDelete"
    v-if="isShowMessDelete"
  />
</template>

<script>
// @confirmDelete="handleDeleleEmployeebyID"
// eslint-disable-next-line no-unused-vars
import { axios } from "axios";
import MISAWarmingDelete from "../../components/base/MISAWarmingDelete";

export default {
  name: "EmployeeList",

  props: ["addFunction"],

  components: { MISAWarmingDelete },

  created() {
    //load dữ liệu:
    //hiển thị loading
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
     *  Author: Sang - 15/11/2022
     */
    //Xử lý khi click Thêm mới Nhân Viên
    handleShowDialogDetail() {
      try {
        this.addFunction();
      } catch (error) {
        console.log(error);
      }
    },

    //Ấn double click hiển thị form Thông tin Nhân Viên
    handleOnRowDblClick(item) {
      try {
        //Hiển thị form chi tiết
        this.addFunction(item);
      } catch (error) {
        console.log(error);
      }
    },

    //Định dạng ngày tháng năm
    formatDate(date) {
      try {
        date = new Date(date);
        //Lấy ngày
        var day = date.getDate();
        day = day < 10 ? `0${day}` : day;
        var month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        var year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } catch (error) {
        console.log(error);
        return ``;
      }
    },

    /**
     * Author: Sang - 16/11/2022
     * */
    //Ấn nút Sửa thì hiện ra dropdown__menu
    handleShowDropMenu() {
      try {
        //hiện dropdown__menu
        this.isShowDropMenu = true;

        //lấy theo tọa độ trục y:
        this.topDrop = event.clientY + 10 + "px";
        //lấy theo tọa độ trục x:
        this.leftDrop = event.clientX - 110 + "px";
      } catch (error) {
        console.log(error);
      }
    },

    //Ấn nút Xóa thì hiện ra ToastWarning Message Delete
    handleShowMessDelete(isShow) {
      try {
        // //ấn dropdown__menu
        this.isShowDropMenu = false;

        //hiển thị delete warning
        this.isShowMessDelete = isShow;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author: Sang - 17/11/2022
     * */
    //Ẩn ToastWarning Message Delete
    handleHideShowMessDelete() {
      this.isShowMessDelete = false;
    },

    //Xóa Nhân Viên theo id
    // handleDeleleEmployeebyID(id) {
    //   try {
    //     const employ = this;
    //     axios
    //       .delete("https://amis.manhnv.net/api/v1/Employees/" + id)
    //       // eslint-disable-next-line no-unused-vars
    //       .then((res) => {
    //         this.handleHideShowMessDelete();
    //         employ.selectPagesize -= 1;
    //         employ.totalRecord -= 1;
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },

  data() {
    return {
      isShowDropMenu: false,
      isShowLoading: false,
      isShowToast: false,
      isShowMessDelete: false,
      emp: {},
      employees: [],
      topDrop: "0",
      leftDrop: "0",
      selectPagesize: 10,
      pageNumber: 0,
      pageCount: 0,
      totalRecord: 0,
    };
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
