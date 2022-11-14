<template>
  <!-- main -->
  <div class="main">
    <!-- page__header-->
    <div class="page__header">
      <div class="page__title">Nhân Viên</div>

      <div class="page__button">
        <button class="btn btn-add">Thêm Mới Nhân Viên</button>
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
        <button class="icon__reload"><i class="icofont-ui-reply"></i></button>
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
                <th class="th__branch-bank">Chi Nhánh Ngân Hàng</th>
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
              >
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td class="th__id">{{ item.EmployeeCode }}</td>
                <td class="th__name">{{ item.FullName }}</td>
                <td class="th__gender">{{ item.GenderName }}</td>
                <td class="th__dateBirth">{{ item.DateOfBirth }}</td>
                <td class="th__identity-number">{{ item.IdentityNumber }}</td>
                <td class="th__issure-date">{{ item.IdentityDate }}</td>
                <td class="th__issure-place">{{ item.IdentityPlace }}</td>
                <td class="th__career-title">{{ item.PositionName }}</td>
                <td class="th__name-unit--work"></td>
                <td class="th__address"></td>
                <td class="th__email"></td>
                <td class="th__account-number"></td>
                <td class="th__name-bank"></td>
                <td class="th__branch-bank"></td>
                <td class="th__phone-number"></td>
                <td class="th__landline-phone"></td>
                <td class="th__function">
                  Sửa
                  <span class="icon__edit"
                    ><i class="icofont-caret-down"></i
                  ></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- paging -->
      <div class="paging">
        <div class="paging__left">
          <span>Tổng số: <b>1035</b> bản ghi</span>
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
  </div>
</template>

<script>
export default {
  name: "EmployeeList",
  props: [],
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
