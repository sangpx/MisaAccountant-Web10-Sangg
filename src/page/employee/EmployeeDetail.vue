<template>
  <!-- Dialog thông tin Nhân Viên: style="display: none;"-->
  <div id="dlgEmployeeDetail" style="display: none" class="dialog">
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
          <button class="dialog-icon btn-question">
            <i class="icon icofont-question-circle"></i>
          </button>
          <button
            class="dialog-icon btn-close"
            @click="this.hiddenDialogFuntion"
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
              <div class="input__box item__id">
                <label class="details"
                  >Mã<span style="color: red">*</span></label
                >
                <input
                  id="txtEmployeeCode"
                  labels="Mã Nhân Viên"
                  type="text"
                  required
                  v-model="emp.EmployeeCode"
                  class="input input__id require"
                />
              </div>

              <div class="input__box item__name">
                <label class="details"
                  >Tên<span style="color: red">*</span></label
                >
                <input
                  id="txtEmployeeName"
                  labels="Họ và Tên"
                  type="text"
                  required
                  v-model="emp.EmployeeName"
                  class="input input__name require"
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
            <input type="text" class="input input___address" />
          </div>

          <div class="user__detail">
            <div class="user__detail-top">
              <div class="input__box">
                <label class="details">ĐT Di động</label>
                <input id="txtPhone" type=" text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">ĐT Cố định</label>
                <input type="text" class="input" />
              </div>
              <div class="input__box">
                <label class="details">Email</label>
                <input id="txtEmail" labels="Email" type="text" class="input" />
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
          <button id="btn-store__add" class="btn btn-store__add">
            Cất và Thêm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeDetail",
  props: ["hiddenDialogFuntion", "employeeSelected"],

  created() {
    this.emp = this.employeeSelected;
    console.log(this.employeeSelected);
  },

  watch: {
    //theo doi su thay doi cua mot thong tin nao do
    employeeSelected(newValue, oldValue) {
      this.emp = newValue;
      console.log("old value", oldValue);
    },
  },

  data() {
    return {
      employees: [],
      emp: {},
    };
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
