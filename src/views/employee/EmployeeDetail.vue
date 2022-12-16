<template>
  <!-- Con của List -->
  <!-- Dialog thông tin Nhân Viên:-->
  <div id="dlgEmployeeDetail" class="dialog">
    <div class="dialog-wrapper">
      <!-- dialog-header -->
      <div class="dialog-header">
        <div class="dialog-header__title">
          <div class="title">Thông Tin Nhân Viên</div>

          <div class="dialog-header__btn">
            <input type="checkbox" name="" class="dialog-header__checkbox" />
            <div>{{ this.$t("ISCUSTOMER") }}</div>
          </div>

          <div class="dialog-header__btn">
            <input type="checkbox" name="" class="dialog-header__checkbox" />
            <div>{{ this.$t("ISCUSTOMER") }}</div>
          </div>
        </div>

        <div class="dialog-header__icon">
          <button class="dialog-icon btn-question tool-tip">
            <i class="icon icofont-question-circle"></i>
          </button>
          <button
            class="dialog-icon btn-close tool-tip"
            @click="closeDialogDetail"
          >
            <i class="icon icofont-close-line"></i>
          </button>
        </div>
      </div>

      <!-- dialog-container -->
      <div class="dialog-container">
        <div class="dialog-container__top">
          <div class="dialog-container__top--left">
            <div class="top__left-content">
              <div tabindex="1"></div>
              <div class="input__box item__id">
                <label class="details"
                  >{{ this.$t("EMPLOYEECODE")
                  }}<span style="color: red">*</span></label
                >
                <input
                  :title="titleEmployeeCode"
                  :class="{
                    errorMsg: errors.EmployeeCode,
                    successMsg: !errors.EmployeeCode,
                  }"
                  v-model="emp.EmployeeCode"
                  ref="txtEmployeeCodeRef"
                  id="txtEmployeeCode"
                  class="input input__id"
                />
              </div>

              <div class="input__box item__name">
                <label class="details"
                  >{{ this.$t("EMPLOYEENAME")
                  }}<span style="color: red">*</span></label
                >
                <input
                  :class="{
                    errorMsg: errors.EmployeeName,
                    successMsg: !errors.EmployeeName,
                  }"
                  :title="titleEmployeeName"
                  v-model="emp.EmployeeName"
                  id="txtEmployeeName"
                  class="input input__name"
                />
              </div>
            </div>

            <div class="input__box item__unit-work">
              <label class="details"
                >{{ this.$t("WORKINGUNITNAME")
                }}<span style="color: red">*</span></label
              >

              <select
                :class="{
                  errorMsg: errors.WorkingUnitID,
                  successMsg: !errors.WorkingUnitID,
                }"
                v-model="emp.WorkingUnitID"
                :title="titleWorkingUnitID"
                class="select__input"
                name="select__input"
              >
                <option value="45ac3d26-18f2-18a9-3031-644313fbb055">
                  Phòng Tuyển dụng
                </option>
                <option value="3fa85f64-5717-4562-b3fc-2c963f66afa5">
                  Phòng Đào Tạo 3
                </option>

                <option value="3fa85f64-5717-4562-b3fc-2c963f66afa3">
                  Phòng Vận Hành
                </option>
                <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">
                  Phòng Công Nghệ Thông Tin
                </option>
              </select>
            </div>

            <div class="input__box item__career-title">
              <label class="details">{{ this.$t("CAREERTITLE") }}</label>
              <input
                v-model="emp.CareerTitle"
                class="input input-career___title"
                type="text"
              />
            </div>
          </div>

          <div class="dialog-container__top--right">
            <div class="top__left-content">
              <div class="input__box item__id item__bith">
                <label class="details"> {{ this.$t("DATEOFBIRTH") }} </label>
                <div>
                  <input
                    v-model="emp.DateOfBirth"
                    class="input input__id input__birth"
                    type="date"
                  />
                </div>
              </div>
              <div class="input__box item__gender">
                <label class="details"> {{ this.$t("GENDER") }} </label>

                <div
                  style="
                    display: flex;
                    margin-top: 6px;
                    align-items: center;
                    justify-content: space-around;
                  "
                >
                  <input
                    type="radio"
                    name="gender"
                    checked
                    id="male"
                    class="male"
                    v-model="emp.Gender"
                  />
                  <label class="name__gender" for="male">Nam</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    v-model="emp.Gender"
                    class="female"
                  />
                  <label class="name__gender" for="female">Nữ</label>
                  <input
                    type="radio"
                    name="gender"
                    id="difference"
                    v-model="emp.Gender"
                    class="difference"
                  />
                  <label class="name__gender" for="difference">Khác</label>
                </div>
              </div>
            </div>

            <div class="top__left-content">
              <div class="input__box item__identity-number">
                <label class="details">{{ this.$t("IDENTITYNUMBER") }} </label>

                <input
                  v-model="emp.IdentityNumber"
                  type="text"
                  class="input input__Identity-Number"
                />
              </div>
              <div class="input__box item__issue-date">
                <label class="details">{{ this.$t("IDENTITYDATE") }}</label>
                <input
                  v-model="emp.IdentityIssureDate"
                  type="date"
                  class="input input__IssureDate"
                />
              </div>
            </div>

            <div class="input__box item__issue-place">
              <label class="details">{{ this.$t("IDENTITYPLACE") }}</label>
              <input
                v-model="emp.IdentityIssurePlace"
                type="text"
                class="input input__IssurePlace"
              />
            </div>
          </div>
        </div>

        <div class="dialog-container__bottom">
          <div class="input__box">
            <label class="details">{{ this.$t("ADDRESS") }}</label>
            <input
              v-model="emp.Address"
              ty0pe="text"
              class="input input___address"
            />
          </div>

          <div class="user__detail">
            <div class="user__detail-top">
              <div class="input__box">
                <label class="details tool-tip-smartPhone">{{
                  this.$t("PHONENUMBER")
                }}</label>
                <input
                  v-model="emp.PhoneNumber"
                  id="txtPhone"
                  type=" text"
                  class="input"
                />
              </div>
              <div class="input__box tool-tip-dtcd">
                <label class="details">{{ this.$t("LANDLINENUMBER") }}</label>
                <input v-model="emp.LandlineNumber" type="text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">{{ this.$t("EMAIL") }}</label>
                <input
                  v-model="emp.Email"
                  id="txtEmail"
                  type="text"
                  class="input"
                />
              </div>
            </div>
            <div class="user__detail-bottom">
              <div class="input__box">
                <label class="details">{{ this.$t("ACCOUNTNUMBER") }}</label>
                <input v-model="emp.AccountBank" type="text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">{{ this.$t("BANKNAME") }}</label>
                <input v-model="emp.NameBank" type="text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">{{ this.$t("BRANCHBANK") }}</label>
                <input v-model="emp.BranchBank" type="text" class="input" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- dialog-footer  -->
      <div class="dialog-footer">
        <div class="dialog-footer__left">
          <button class="btn btn-cancel">Hủy</button>
        </div>
        <div class="dialog-footer__right">
          <button class="btn btn-store" @click="btnAddData">Cất</button>
          <button
            @click="btnSaveAndAddData"
            id="btn-store__add"
            class="btn btn-store__add"
          >
            Cất và Thêm
          </button>
        </div>
      </div>
    </div>
  </div>
  <MISAWarningValidate
    v-if="isShowMessageValidate"
    :MessageContent="MessageContent"
    @CloseWarningValidate="showWarningValidate"
  />
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import axios from "axios";
import MISAWarningValidate from "../../components/base/MISAWarningValidate.vue";
import enums from "../../js/enums";

export default {
  name: "EmployeeDetail",

  components: {
    MISAWarningValidate,
  },

  data() {
    return {
      date: null,
      success: {},
      errors: {
        EmployeeCode: "",
        EmployeeName: "",
        WorkingUnitID: "",
      },
      isShowMessageValidate: false,
      employees: [],
      emp: {},
      employee: {},
      MessageContent: "",
      titleEmployeeCode: "",
      titleEmployeeName: "",
      titleWorkingUnitID: "",
      isShowToast: false,
      detailSelectPage: 0,
      enums: enums,
    };
  },

  props: {
    editMode: {
      type: Number,
    },

    employeeSelected: {
      type: Object,
    },

    pageNumber: {
      type: Number,
    },

    selectPageSize: {
      type: Number,
    },
  },

  methods: {
    /***
     * @param{any}date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 17/11/2022
     * */
    //Ấn dấu X thực hiện đóng Dialog Detail
    closeDialogDetail() {
      try {
        this.$emit("showDialogDetail");
      } catch (error) {
        console.log(error);
      }
    },

    /***
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 08/12/2022
     * Thực hiện Lưu lại dữ liệu và đóng Form
     * */
    btnAddData() {
      try {
        if (this.validateData()) {
          //Form ở chế độ Thêm Mới
          var me = this;
          if (me.editMode == me.enums.formMode.addMode) {
            axios
              .post("http://localhost:5077/api/v1/Employees", me.emp)
              .then((res) => {
                //tăng bản ghi hiện tại lên 1
                me.detailSelectPage += 1;

                me.$emit("setDetailSelectPage", me.detailSelectPage);

                me.$emit("loadDataDefault", me.pageNumber, me.detailSelectPage);

                //đóng Form
                me.$emit("showDialogDetail");
              })

              .catch((error) => {
                console.log(error);
              });
          }

          //Form ở chế độ Chỉnh Sửa
          else if (me.editMode == me.enums.formMode.editMode) {
            axios
              .put(
                `http://localhost:5077/api/v1/Employees/${me.emp.EmployeeId}`,
                this.emp
              )
              .then((res) => {
                me.$emit("loadDataDefault", me.pageNumber, me.selectPageSize);
                //đóng Form
                me.$emit("showDialogDetail");
              })

              .catch((error) => {
                console.log(error);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    /***
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 21/11/2022
     * Thực hiện lưu lại dữ liệu hiện tại và Reset Form, Cho phép người dùng có thể
     * Thêm mới Khách hàng ngay lập tức mà không cần thêm thao tác nhấn Button Thêm mới.
     * */
    btnSaveAndAddData() {
      try {
        if (this.validateData()) {
          //Form ở chế độ Thêm Mới
          var me = this;
          if (me.editMode == me.enums.formMode.addMode) {
            axios
              .post("http://localhost:5077/api/v1/Employees", me.emp)
              .then((res) => {
                //tăng bản ghi hiện tại lên 1
                me.detailSelectPage += 1;

                me.$emit("setDetailSelectPage", me.detailSelectPage);

                me.$emit("loadDataDefault", me.pageNumber, me.detailSelectPage);

                me.$emit("setEmployee", me.emp);
              })
              .finally((respon) => {
                //xóa object và khởi tạo lại mảng để thực hiện Thêm Mới
                me.emp = {};

                //Hàm Lấy Mã Nhân Viên mới
                me.newEmployeeCode();
              })
              .catch((error) => {
                console.log(error);
              });
          }

          //Form ở chế độ Chỉnh Sửa
          else if (me.editMode == me.enums.formMode.editMode) {
            axios
              .put(`http://localhost:5077/api/v1/Employees`, me.emp)
              .then((res) => {
                me.$emit("loadDataDefault", me.pageNumber, me.detailSelectPage);

                //xóa object và khởi tạo lại mảng để thực hiện Thêm Mới
                me.emp = {};

                me.$emit("setEmployee", me.emp);

                //Khởi tạo lại chế độ editMode về Thêm Mới Nhân Viên
                me.$emit("setEdit", me.enums.formMode.addMode);
              })
              .finally((res) => {
                // gọi hàm lấy mã mới
                me.newEmployeeCode();
              })

              .catch((error) => {
                console.log(error);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    /***
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 21/11/2022
     * Validate Dữ liệu
     * */
    validateData() {
      try {
        if (!this.emp.EmployeeCode) {
          this.showWarningValidate();
          this.MessageContent = this.$t("EMPLOYEECODEEMPTY");
          this.titleEmployeeCode = this.$t("EMPLOYEECODEEMPTY");
          this.isShowBorderRed();
          return false;
        }
        if (!this.emp.EmployeeName) {
          this.showWarningValidate();
          this.MessageContent = this.$t("EMPLOYEENAMEEMPTY");
          this.titleEmployeeName = this.$t("EMPLOYEENAMEEMPTY");
          this.isShowBorderRed();
          return false;
        }
        if (!this.emp.WorkingUnitID) {
          this.showWarningValidate();
          this.MessageContent = this.$t("WORKINGUNITNAMEEMPTY");
          this.titleWorkingUnitID = this.$t("WORKINGUNITNAMEEMPTY");
          this.isShowBorderRed();
          return false;
        }

        return true;
      } catch (error) {
        console.log(error);
      }
    },

    /***
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 21/11/2022
     * */
    //Hiển thị Border Đỏ khi không có dữ liệu
    isShowBorderRed() {
      try {
        this.errors["EmployeeCode"] =
          this.errors["EmployeeName"] =
          this.errors["WorkingUnitID"] =
            true;
      } catch (error) {
        console.log(error);
      }
    },

    /***
     * Author: SANG
     * createdBy: SANG
     * @param {any} date
     * createdDate: 21/11/2022
     * */
    //Hiển thị Toast Thông Báo khi nhập sai
    showWarningValidate() {
      try {
        this.isShowMessageValidate = !this.isShowMessageValidate;
      } catch (error) {
        console.log(error);
      }
    },

    /***
     * Author: SANG
     * @param {any} date
     * createdBy: SANG
     * createdDate: 26/11/2022
     * Lấy Mã Nhân Viên Mới
     * */
    newEmployeeCode() {
      try {
        var me = this;
        axios
          .get("http://localhost:5077/api/v1/Employees/NewEmployeeCode")
          .then((res) => {
            let newEmployeeCode = res.data;
            me.employeeSelected.EmployeeCode = newEmployeeCode;
            me.emp = me.employeeSelected;
          })
          .catch((error) => {
            console.log(error);
          });
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
          dob = `${year}-${month}-${date}`;
          return dob;
        } else {
          return "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    //Gán Giá Trị lấy từ props
    this.detailSelectPage = this.selectPageSize;

    if (this.editMode == this.enums.formMode.addMode) {
      //lấy mã nhân viên mới
      this.newEmployeeCode();
    } else if (this.editMode == this.enums.formMode.editMode) {
      this.emp = this.employeeSelected;
    }

    //Format Date
    this.emp.DateOfBirth = this.formatDate(this.emp.DateOfBirth);
    this.emp.IdentityIssurePlace = this.formatDate(
      this.emp.IdentityIssurePlace
    );
  },

  mounted() {
    //Focus vào ô nhập Mã Nhân Viên
    this.$refs.txtEmployeeCodeRef.focus();
  },

  /***
   * Author: SANG
   * @param {any} date
   * createdBy: SANG
   * createdDate: 21/11/2022
   * */
  //Quá trình beforeUpdate được gọi ngay sau khi dữ liệu
  //trên component bị thay đổi và trước khi component re-render
  beforeUpdate() {
    if (this.emp.EmployeeCode) {
      this.errors["EmployeeCode"] = false;
    }
    if (this.emp.EmployeeName) {
      this.errors["EmployeeName"] = false;
    }
    if (this.emp.WorkingUnitID) {
      this.errors["WorkingUnitID"] = false;
    }
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
