<template>
  <!-- Bố của Detail -->
  <!-- main -->
  <div class="main">
    <!-- page__header-->
    <div class="page__header">
      <div class="page__title">Nhân Viên</div>

      <div class="page__button">
        <button @click="btnShowDialogDetail" id="btnAdd" class="btn btn-add">
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
        <div class="icon__reload tool-tip-reload" @click="btnReLoading"></div>
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
                v-for="item in employees"
                :key="item.EmployeeId"
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
                  <span @click="changeEditClick(item)"> Sửa </span>

                  <span class="icon__edit" @click="handleShowDropMenu(item)">
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
    @showMessageDelete="showMessageDelete"
    :employeeSelected="employeeSelected"
    @loadingData="loadingData"
    v-if="isShowMessDelete"
  />

  <EmployeeDetail
    :selectPageSize="selectPageSize"
    @setEdit="setEdit"
    @setEmployee="setEmployee"
    @loadDataDefault="loadDataDefault"
    @showDialogDetail="showDialogDetail"
    :employeeSelected="employeeSelected"
    :editMode="editMode"
    :pageNumber="pageNumber"
    v-if="isShowDetail"
  ></EmployeeDetail>
  <MISALoading v-show="isShowLoading"></MISALoading>
</template>

<script>
import axios from "axios";
import MISAWarmingDelete from "../../components/base/MISAWarmingDelete";
import EmployeeDetail from "../../views/employee/EmployeeDetail.vue";
import MISALoading from "../../components/base/MISALoading.vue";

export default {
  name: "EmployeeList",

  components: {
    MISAWarmingDelete,
    EmployeeDetail,
    MISALoading,
  },

  props: {},

  created() {
    this.loadingData();
    //Thực hiện Loading lại trang khi lần đầu truy cập
    this.loadDataDefault(this.selectPageSize, this.pageNumber);
  },

  methods: {
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 15/11/2022
     * */
    //Ấn double click hiển thị form Thông tin Nhân Viên
    handleOnRowDblClick(item) {
      try {
        //form ở chế độ Chỉnh Sửa
        this.editMode = 1;
        //Hiển thị form chi tiết
        this.showDialogDetail();
        this.employeeSelected = item;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 15/11/2022
     * */
    //Ấn nút Sửa hiển thị form Chỉnh sủa Thông tin Nhân Viên
    changeEditClick(item) {
      try {
        //form ở chế độ Chỉnh Sửa
        this.editMode = 1;
        //Hiển thị form chi tiết
        this.showDialogDetail();
        this.employeeSelected = item;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 15/11/2022
     * */
    //Định dạng ngày tháng năm
    formatDate(dob) {
      try {
        let dateConvert = new Date(dob);
        if (
          dob &&
          dateConvert instanceof Date &&
          !isNaN(dateConvert.valueOf())
        ) {
          //Lấy ngày
          let date = dateConvert.getDate();
          date = date < 10 ? `0${date}` : date;
          //lấy tháng
          var month = dateConvert.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          //lấy năm
          var year = dateConvert.getFullYear();
          dob = `${date}/${month}/${year}`;
          return dob;
        } else {
          return "";
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 16/11/2022
     * */
    //Ấn nút Sửa thì hiện ra div: dropdown__menu
    handleShowDropMenu(employ) {
      try {
        //hiện dropdown__menu
        this.isShowDropMenu = !this.isShowDropMenu;
        this.employeeSelected = employ;
        //lấy theo tọa độ trục y:
        this.topDrop = event.clientY + 10 + "px";
        //lấy theo tọa độ trục x:
        this.leftDrop = event.clientX - 110 + "px";
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 16/11/2022
     * */
    //Hiển thị Loading Data
    loadingData() {
      try {
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
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 16/11/2022
     * */
    //Ấn nút Xóa thì hiện ra ToastWarning Message Delete
    handleShowMessDelete(isShow) {
      try {
        //ấn dropdown__menu
        this.isShowDropMenu = false;

        //hiển thị delete warning
        this.isShowMessDelete = isShow;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 17/11/2022
     * */
    //Mở - Đóng form Chi Tiết Nhân Viên
    showDialogDetail() {
      try {
        // bằng false -> true - bằng true -> false
        this.isShowDetail = !this.isShowDetail;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 17/11/2022
     * */
    //Ấn nút Thêm Nhân Viên -> hiện Dialog Thông Tin Nhân Viên
    btnShowDialogDetail() {
      try {
        //editMode = 0 (Thêm Mới) - editMode = 1 (Chỉnh Sửa)
        this.editMode = 0;
        this.showDialogDetail();
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 17/11/2022
     * */
    //Mở - Đóng Toast warning Delete
    showMessageDelete() {
      try {
        // bằng false -> true - bằng true -> false
        this.isShowMessDelete = !this.isShowMessDelete;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 24/11/2022
     * */
    // Hiển thị danh sách nhân viên theo số lượng bản ghi trên trang
    loadDataDefault(selectPage, pageNumber) {
      try {
        //Hiển thị loading
        this.isShowLoading = true;
        var me = this;
        axios
          .get(
            "https://amis.manhnv.net/api/v1/Employees/filter?pageSize=" +
              selectPage +
              "&pageNumber=" +
              pageNumber
          )
          .then((res) => {
            //Lấy giá trị
            me.employees = res.data.Data;

            //Lấy giá trị số trang
            me.pageCount = res.data.TotalPage;

            //Lấy ra số lượng bản ghi
            me.totalRecord = res.data.TotalRecord;
            //Dừng Loading
            me.isShowLoading = false;
          })
          .catch((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * */
    btnReLoading() {
      this.loadDataDefault(this.totalRecord, this.pageNumber);
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * */
    //set Giá trị cho số lượng bản ghi
    // setDetailSelectPage(numberRecord) {
    //   this.selectPageSize = numberRecord;
    // },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * */
    //set Giá trị mảng được chọn
    setEmployee(employeeSelected) {
      this.employeeSelected = employeeSelected;
    },
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * */
    //set Giá trị của trạng thái editMode
    setEdit(edit) {
      this.editMode = edit;
    },
  },

  watch: {
    //Theo dõi sự thay đổi tùy chọn hiển thị số lượng bản ghi trên trang
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * */
    selectPageSize: function () {
      this.loadDataDefault(this.selectPageSize, this.pageNumber);
    },
  },

  data() {
    return {
      isShowDetail: false,
      isShowDropMenu: false,
      isShowLoading: false,
      isShowToast: false,
      isShowMessDelete: false,
      employeeSelected: {},
      employees: [],
      topDrop: "0",
      leftDrop: "0",
      editMode: 0,
      txtSearch: "",
      selectPageSize: 10,
      pageNumber: 1,
      pageCount: 0,
      totalRecord: 0,
    };
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
