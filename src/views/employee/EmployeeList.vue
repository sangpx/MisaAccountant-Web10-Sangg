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
            v-model="txtSearch"
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
                <th class="th__id">{{ this.$t("EMPLOYEESCODE") }}</th>
                <th class="th__name">{{ this.$t("EMPLOYEESNAME") }}</th>
                <th class="th__gender">{{ this.$t("GENDER") }}</th>
                <th class="th__dateBirth">{{ this.$t("DATEOFBIRTH") }}</th>
                <th class="th__identity-number">
                  {{ this.$t("IDENTITYNUMBER") }}
                </th>
                <th class="th__issure-date">
                  {{ this.$t("IDENTITYDATE") }}
                </th>
                <th class="th__issure-place">
                  {{ this.$t("IDENTITYPLACE") }}
                </th>
                <th class="th__career-title">
                  {{ this.$t("CAREERTITLE") }}
                </th>
                <th class="th__name-unit--work">
                  {{ this.$t("WORKINGUNITNAME") }}
                </th>
                <th class="th__account-number">
                  {{ this.$t("ACCOUNTNUMBER") }}
                </th>
                <th class="th__address">{{ this.$t("ADDRESS") }}</th>
                <th class="th__email">{{ this.$t("EMAIL") }}</th>
                <th class="th__name-bank">{{ this.$t("BANKNAME") }}</th>
                <th class="th__branch-bank">
                  {{ this.$t("BRANCHBANK") }}
                </th>
                <th class="th__phone-number">
                  {{ this.$t("PHONENUMBER") }}
                </th>
                <th class="th__landline-phone">
                  {{ this.$t("LANDLINENUMBER") }}
                </th>
                <th class="th__function">{{ this.$t("FUNC") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in employees"
                :key="item.EmployeeID"
                class="table__tr"
                @dblclick="handleOnRowDblClick(item)"
              >
                <td @dblclick.stop="unDbl">
                  <input type="checkbox" class="table__input-checkbox" />
                </td>
                <td class="th__id">{{ item.EmployeeCode }}</td>
                <td class="th__name">{{ item.EmployeeName }}</td>
                <td class="th__gender">{{ getGender(item.Gender) }}</td>
                <td class="th__dateBirth">
                  {{ formatDate(item.DateOfBirth) }}
                </td>
                <td class="th__identity-number">{{ item.IdentityNumber }}</td>
                <td class="th__issure-date">
                  {{ formatDate(item.IdentityIssureDate) }}
                </td>
                <td class="th__issure-place">{{ item.IdentityIssurePlace }}</td>
                <td class="th__career-title">{{ item.CareerTitle }}</td>
                <td class="th__name-unit--work">{{ item.WorkingUnitName }}</td>
                <td class="th__account-number">{{ item.AccountBank }}</td>
                <td class="th__address">{{ item.Address }}</td>
                <td class="th__email">{{ item.Email }}</td>
                <td class="th__name-bank">{{ item.NameBank }}</td>
                <td class="th__branch-bank">{{ item.BranchBank }}</td>
                <td class="th__phone-number">{{ item.PhoneNumber }}</td>
                <td class="th__landline-phone">{{ item.LandlineNumber }}</td>
                <td class="th__function">
                  <span @click="handleOnRowDblClick(item)">
                    {{ this.$t("EDIT") }}
                  </span>

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
            >{{ this.$t("TOTAL") }} <b>{{ totalRecord }}</b>
            {{ this.$t("RECORD") }}
          </span>
        </div>

        <div class="paging__right">
          <div class="paging__right-select">
            <select
              class="select__paging"
              name="select__paging"
              v-model="selectPageSize"
            >
              <option value="10">10 bản ghi trên một trang</option>
              <option value="20">20 bản ghi trên một trang</option>
              <option value="30">30 bản ghi trên một trang</option>
              <option value="50">50 bản ghi trên một trang</option>
              <option value="100">100 bản ghi trên một trang</option>
            </select>
          </div>

          <div class="paging__right-page">
            <div class="right-page__content">
              <MISAPaging
                @setPageNum="setPageNum"
                @stateSearch="stateSearch"
                @loadDataDefault="loadDataDefault"
                :isCheckSearch="isCheckSearch"
                :selectPageSize="selectPageSize"
                :pageCount="pageCount"
              />
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
    @loadDataDefault="loadDataDefault"
    :employeeSelected="employeeSelected"
    :selectPageSize="selectPageSize"
    :pageNumber="pageNumber"
    v-if="isShowMessDelete"
  />

  <EmployeeDetail
    @setDetailSelectPage="setDetailSelectPage"
    @setEmployee="setEmployee"
    @loadDataDefault="loadDataDefault"
    @setEdit="setEdit"
    @showDialogDetail="showDialogDetail"
    :showDialogDetail="showDialogDetail"
    :employeeSelected="employeeSelected"
    :editMode="editMode"
    :selectPageSize="selectPageSize"
    :pageNumber="pageNumber"
    v-if="isShowDetail"
  ></EmployeeDetail>

  <MISALoading v-if="isShowLoading"></MISALoading>
</template>

<script>
import axios from "axios";
import MISAWarmingDelete from "../../components/base/MISAWarmingDelete";
import EmployeeDetail from "../../views/employee/EmployeeDetail.vue";
import MISALoading from "../../components/base/MISALoading.vue";
import MISAPaging from "../../components/base/MISAPaging.vue";
import enums from "../../js/enums";

export default {
  name: "EmployeeList",

  components: {
    MISAWarmingDelete,
    EmployeeDetail,
    MISALoading,
    MISAPaging,
  },

  props: {},

  created() {
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 15/11/2022
     * Thực hiện Loading lại trang khi lần đầu truy cập
     * */
    try {
      this.loadDataDefault(this.pageNumber, this.selectPageSize);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 15/11/2022
     * Ấn double click hiển thị form Thông tin Nhân Viên
     * */
    handleOnRowDblClick(item) {
      try {
        //form ở chế độ Chỉnh Sửa
        this.editMode = this.enums.formMode.editMode;
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
        const fetchAPI = "http://localhost:5077/api/v1/Employees";
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
     * Mở - Đóng form Chi Tiết Nhân Viên
     * */
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
     * Ấn nút Thêm Nhân Viên -> hiện Dialog Thông Tin Nhân Viên
     * */

    btnShowDialogDetail() {
      try {
        //editMode = 0 (Thêm Mới) - editMode = 1 (Chỉnh Sửa)
        this.editMode = this.enums.formMode.addMode;
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
     * Mở - Đóng Toast warning Delete
     * */
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
     * Hiển thị danh sách nhân viên theo số lượng bản ghi trên trang
     * */
    loadDataDefault(pageNumber, selectPageSize) {
      try {
        //Hiển thị loading
        this.isShowLoading = true;
        // this.loadingData();

        var me = this;
        axios
          .get(
            "http://localhost:5077/api/v1/Employees/Filter?pageIndex=" +
              me.pageNumber +
              "&pageSize=" +
              me.selectPageSize
          )
          .then((res) => {
            //Lấy giá trị
            me.employees = res.data.Data;

            //lấy ra số lượng trang
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
     * Thực Hiện Search theo trang
     * */
    stateSearch(pageNumber) {
      try {
        //Hiển thị loading
        this.isShowLoading = true;

        var me = this;
        axios
          .get(
            "http://localhost:5077/api/v1/Employees/Filter?pageIndex=" +
              me.pageNumber +
              "&pageSize=" +
              me.selectPageSize +
              "&filter=" +
              me.txtSearch
          )
          .then((res) => {
            //Lấy giá trị
            me.employees = res.data.Data;

            //lấy ra số lượng trang
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
     * Ấn nút reload -> ReLoading lại Trang
     * */
    btnReLoading() {
      try {
        //Đang thực hiện tìm kiếm
        if (this.isCheckSearch) {
          this.stateSearch(this.pageNumber);
        }

        //Dừng tìm kiếm
        else {
          this.loadDataDefault(this.pageNumber, this.selectPageSize);
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * set Giá trị cho số lượng bản ghi
     * */
    setDetailSelectPage(numberRecord) {
      try {
        this.selectPageSize = numberRecord;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * set Giá trị mảng được chọn
     * */
    setEmployee(emp) {
      try {
        this.employeeSelected = emp;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * set Giá trị của trạng thái editMode
     * */
    setEdit(edit) {
      try {
        this.editMode = edit;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * set Giá trị của trang hiển thị
     * */
    setPageNum(pageNumber) {
      try {
        this.pageNumber = pageNumber;
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
    //chuyển giới tính thành String
    getGender(gender) {
      try {
        switch (gender) {
          case 0:
            return "Nam";
          case 1:
            return "Nữ";
          case 2:
            return "Khác";

          default:
            break;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  watch: {
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * Theo dõi sự thay đổi tùy chọn hiển thị số lượng bản ghi trên trang
     * */
    selectPageSize: function () {
      this.loadDataDefault(this.pageNumber, this.selectPageSize);
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * Theo dõi sự thay đổi khi nhập input tìm kiếm
     * */
    txtSearch: function () {
      this.debounce = setTimeout(() => {
        // khi txt Search rỗng
        if (this.txtSearch == "") {
          this.loadDataDefault(this.pageNumber, this.selectPageSize);
          this.isCheckSearch = false;
        } else {
          this.isCheckSearch = true;
          //thực hiện gọi hàm search theo trang
          this.stateSearch(this.pageNumber);
        }
      }, 750);
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
      pageNumber: 1,
      selectPageSize: 10,
      totalRecord: 0,
      pageCount: 0,
      isCheckSearch: false,
      enums: enums,
    };
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
