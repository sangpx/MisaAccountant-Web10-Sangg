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
            <div>Là Khách Hàng</div>
          </div>

          <div class="dialog-header__btn">
            <input type="checkbox" name="" class="dialog-header__checkbox" />
            <div>Là Nhà Cung Cấp</div>
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
                  >Mã<span style="color: red">*</span></label
                >
                <input
                  :title="this.titleEmployeeCode"
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
                  >Tên<span style="color: red">*</span></label
                >
                <input
                  :class="{
                    errorMsg: errors.EmployeeName,
                    successMsg: !errors.EmployeeName,
                  }"
                  :title="this.titleEmployeeName"
                  v-model="emp.EmployeeName"
                  id="txtEmployeeName"
                  class="input input__name"
                />
              </div>
            </div>

            <div class="input__box item__unit-work">
              <label class="details"
                >Đơn vị<span style="color: red">*</span></label
              >

              <select
                :class="{
                  errorMsg: errors.departmentId,
                  successMsg: !errors.departmentId,
                }"
                v-model="emp.departmentId"
                :title="this.titledepartmentId"
                class="select__input"
                name="select__input"
              >
                <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">
                  Phòng Nhân Sự
                </option>
                <option value="17120d02-6ab5-3e43-18cb-66948daf6128">
                  Phòng Tuyển Sinh
                </option>
              </select>
            </div>

            <div class="input__box item__career-title">
              <label class="details">Chức Danh</label>
              <input type="text" class="input input-career___title" />
            </div>
          </div>

          <div class="dialog-container__top--right">
            <div class="top__left-content">
              <div class="input__box item__id item__bith">
                <label class="details">Ngày sinh</label>
                <div>
                  <input type="date" class="input input__id input__birth" />
                </div>
              </div>
              <div class="input__box item__gender">
                <label class="details">Giới tính</label>

                <div
                  style="
                    margin-top: 6px;
                    display: flex;
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
                  />
                  <label class="name__gender" for="male">Nam</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    class="female"
                  />
                  <label class="name__gender" for="female">Nữ</label>
                  <input
                    type="radio"
                    name="gender"
                    id="difference"
                    class="difference"
                  />
                  <label class="name__gender" for="difference">Khác</label>
                </div>
              </div>
            </div>

            <div class="top__left-content">
              <div class="input__box item__identity-number">
                <label class="details">Số CMND</label>
                <input type="text" class="input input__Identity-Number" />
              </div>
              <div class="input__box item__issue-date">
                <label class="details">Ngày cấp</label>
                <input type="date" class="input input__IssureDate" />
              </div>
            </div>

            <div class="input__box item__issue-place">
              <label class="details">Nơi Cấp</label>
              <input type="text" class="input input__IssurePlace" />
            </div>
          </div>
        </div>

        <div class="dialog-container__bottom">
          <div class="input__box">
            <label class="details">Địa Chỉ</label>
            <input ty0pe="text" class="input input___address" />
          </div>

          <div class="user__detail">
            <div class="user__detail-top">
              <div class="input__box">
                <label class="details tool-tip-smartPhone">ĐT Di động</label>
                <input id="txtPhone" type=" text" class="input" />
              </div>
              <div class="input__box tool-tip-dtcd">
                <label class="details">ĐT Cố định</label>
                <input type="text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">Email</label>
                <input id="txtEmail" type="text" class="input" />
              </div>
            </div>
            <div class="user__detail-bottom">
              <div class="input__box">
                <label class="details">Tài Khoản Ngân Hàng</label>
                <input type="text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">Tên Ngân Hàng</label>
                <input type="text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">Chi Nhánh</label>
                <input type="text" class="input" />
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
          <button class="btn btn-store">Cất</button>
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

export default {
  name: "EmployeeDetail",

  components: {
    MISAWarningValidate,
  },

  data() {
    return {
      success: {},
      errors: {
        EmployeeCode: "",
        EmployeeName: "",
        departmentId: "",
      },
      isShowMessageValidate: false,
      employees: [],
      emp: {},
      employee: {},
      MessageContent: "",
      titleEmployeeCode: "",
      titleEmployeeName: "",
      titledepartmentId: "",
      isShowToast: false,
      detailSelectPage: 0,
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
      this.$emit("showDialogDetail");
    },

    /***
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 21/11/2022
     * */
    //Ấn nút "Cất và Thêm" thực hiện thêm mới dữ liệu và gọi lại Form
    btnSaveAndAddData() {
      try {
        if (this.validateData()) {
          //Form ở chế độ Thêm Mới
          if (this.editMode == 0) {
            this.addNewEmployee();
          }
          //Form ở chế độ Chỉnh Sửa
          else if (this.editMode == 1) {
            this.editDataEmployee();
            console.log("updated");
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
     * */
    //Validate Dữ liệu
    validateData() {
      try {
        if (!this.emp.EmployeeCode) {
          this.showWarningValidate();
          this.MessageContent = "Mã không được để trống.";
          this.isShowBorderRed();
          return false;
        }
        if (!this.emp.EmployeeName) {
          this.showWarningValidate();
          this.MessageContent = "Tên không được để trống.";
          this.isShowBorderRed();
          return false;
        }
        if (!this.emp.departmentId) {
          this.showWarningValidate();
          this.MessageContent = "Đơn vị không được để trống.";
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
      this.errors["EmployeeCode"] =
        this.errors["EmployeeName"] =
        this.errors["departmentId"] =
          true;
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
     * createdDate: 25/11/2022
     * */
    //Gọi api Thêm mới Dữ liệu Nhân Viên
    addNewEmployee() {
      try {
        var me = this;
        axios
          .post("https://amis.manhnv.net/api/v1/Employees", this.emp)
          .then((res) => {
            me.$emit("setEmployee", me.emp);
          })
          .finally((respon) => {
            //xóa object và khởi tạo lại mảng để thực hiện Thêm Mới
            me.emp = {};
            // Lấy Mã Nhân Viên mới
            me.newEmployeeCode();
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    /***
     * Author: SANG
     * @param {any} date
     * createdBy: SANG
     * createdDate: 25/11/2022
     * */
    //Gọi api Chỉnh Sửa Dữ liệu Nhân Viên
    editDataEmployee() {
      try {
        var me = this;
        axios
          .put(
            `https://amis.manhnv.net/api/v1/Employees/${this.emp.EmployeeId}`,
            this.emp
          )
          .then((res) => {
            //xóa object và khởi tạo lại mảng để thực hiện Thêm Mới
            me.emp = {};
            me.$emit("setEmployee", me.emp);

            //Khởi tạo lại chế độ editMode về Thêm Mới Nhân Viên
            me.$emit("setEdit", 0);
          })

          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },

    /***
     * Author: SANG
     * @param {any} date
     * createdBy: SANG
     * createdDate: 26/11/2022
     * */
    //Lấy Mã Nhân Viên Mới
    newEmployeeCode() {
      try {
        var me = this;
        axios
          .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
          .then((res) => {
            const newEmployeeCode = res.data;
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
  },

  created() {
    if (this.editMode == 1) {
      this.emp = this.employeeSelected;
    }

    this.newEmployeeCode();
  },

  mounted() {
    //focus vào ô nhập Mã Nhân Viên
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
    if (this.emp.departmentId) {
      this.errors["departmentId"] = false;
    }
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
