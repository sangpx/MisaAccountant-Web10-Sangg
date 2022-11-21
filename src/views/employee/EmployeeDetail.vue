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
                  tabindex="2"
                  :class="{
                    errorMsg: isError.EmployeeCode,
                    successMsg: isSuccess.EmployeeCode,
                  }"
                  :title="titleEmployeeCode"
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
                    errorMsg: isError.EmployeeName,
                    successMsg: isSuccess.EmployeeName,
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
                >Đơn vị<span style="color: red">*</span></label
              >
              <select required class="select__input" name="select__input">
                <option value="1">Phòng Nhân Sự</option>
                <option value="2">Phòng Tuyển Sinh</option>
                <option value="3">Phòng Sản Xuất</option>
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
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
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
                <input
                  id="txtEmail"
                  :class="{
                    errorMsg: isError.Email,
                    successMsg: isSuccess.Email,
                  }"
                  :title="titleEmail"
                  type="text"
                  class="input"
                />
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
            @click="btnAddData"
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
    v-if="showWarningValidate"
    :MessageContent="MessageContent"
  />
</template>

<script>
import MISAWarningValidate from "../../components/base/MISAWarningValidate.vue";
export default {
  name: "EmployeeDetail",

  components: {
    MISAWarningValidate,
  },

  data() {
    return {
      isShowMessageValidate: false,
      employees: [],
      emp: {},
      employee: {},
      Email: "",
      MessageContent: "",
      IdentityNumber: "",
      TelePhoneNumber: "",
      checkChange: false,
      isActiveError: false,
      isCorrect: {},
      isError: {},
      isSuccess: {},
      titleEmployeeCode: "",
      titleEmployeeName: "",
      titleEmail: "",
      warningTitle: [],
    };
  },

  props: {
    editMode: {
      type: Number,
    },
    employeeSelected: {
      type: Object,
    },
  },

  methods: {
    /***
     * Author: SANG
     * createdBy: SANG
     * createdDate: 17/11/2022
     * */
    //Ấn dấu X thực hiện đóng Dialog Detail
    closeDialogDetail() {
      this.$emit("showDialogDetail");
    },

    /***
     * Author: SANG
     * createdBy: SANG
     * createdDate: 21/11/2022
     * */
    //Ấn nút "Cất và Thêm" thực hiện thêm mới dữ liệu và gọi lại Form
    btnAddData() {
      try {
        console.log(this.validateData());
      } catch (error) {
        console.log(error);
      }
    },

    //Hiển thị Toast Thông Báo khi nhập sai
    showWarningValidate(isMessage) {
      this.isShowMessageValidate = isMessage;
    },

    //Validate Dữ liệu
    validateData() {
      try {
        if (!this.employee.EmployeeCode) {
          this.showWarningValidate(true);
          this.MessageContent = "Mã Nhân Viên không được để trống.";
          this.titleEmployeeCode = "Mã Nhân Viên không được để trống.";
          this.isError["EmployeeCode"] = true;
          return false;
        }
        if (!this.employee.EmployeeName) {
          this.showWarningValidate(true);
          this.MessageContent = "Họ và Tên không được để trống.";
          this.titleEmployeeName = "Tên không được để trống.";
          this.isError["EmployeeName"] = true;
          return false;
        }
        // if (!this.employee.Email) {
        //   this.showWarningValidate(true);
        //   this.MessageContent = "Email không đúng định dạng.";
        //   this.titleEmail = "Email không đúng định dạng.";

        //   return false;
        // }

        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    if (this.editMode == 1) {
      this.emp = this.employeeSelected;
    }

    //gọi API thêm mới Nhân Viên
  },

  beforeMount() {},

  mounted() {
    //focus vào ô nhập Mã Nhân Viên
    this.$refs.txtEmployeeCodeRef.focus();
  },

  beforeUpdate() {},

  updated() {},
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
