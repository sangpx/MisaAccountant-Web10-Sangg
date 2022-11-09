<template>
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
        <input
          type="text"
          placeholder="Tìm theo mã, tên nhân viên"
          class="input input-search"
        />
        <button class="icon_search"></button>
      </div>

      <!-- table -->
      <div class="table">
        <div style="overflow-x: auto" class="container">
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
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
              <tr class="table__tr">
                <td><input type="checkbox" class="table__input-checkbox" /></td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Sửa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- paging -->
      <div class="paging">
        <div class="paging__left">
          <label>Tổng số: <b>1035</b> bản ghi </label>
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

          <!-- <div class="paging__right-page">
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
                   </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePage",
};
</script>
<style scoped>
@import url(../../css/main.css);
</style>
