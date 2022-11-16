<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="sidebar___top">
      <div class="sidebar__top-content">
        <div style="display: flex; align-items: center">
          <div class="sidebar-toggle"></div>
        </div>
        <div class="sidebar-logo"></div>
      </div>
    </div>

    <!-- sidebar__bottom (navigation) -->
    <div class="sidebar__bottom">
      <a class="sidebar-item sidebar-item--selected">
        <div class="sidebar-item__icon sidebar-item__icon--overview"></div>
        <div class="sidebar-item__text">Tổng Quan</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--cast"></div>
        <div class="sidebar-item__text">Tiền Mặt</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--bank"></div>
        <div class="sidebar-item__text">Tiền Gửi</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--purchase"></div>
        <div class="sidebar-item__text">Mua Hàng</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--sale"></div>
        <div class="sidebar-item__text">Bán Hàng</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--invoice"></div>
        <div class="sidebar-item__text">Quản lý hóa đơn</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--stock"></div>
        <div class="sidebar-item__text">Kho</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--tools"></div>
        <div class="sidebar-item__text">Công cụ dụng cụ</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--fixed__assets"></div>
        <div class="sidebar-item__text">Tài sản cố định</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--tax"></div>
        <div class="sidebar-item__text">Thuế</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--price"></div>
        <div class="sidebar-item__text">Giá Thành</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--general"></div>
        <div class="sidebar-item__text">Tổng hợp</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--budget"></div>
        <div class="sidebar-item__text">Ngân sách</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon sidebar-item__icon--report"></div>
        <div class="sidebar-item__text">Báo Cáo</div>
      </a>
      <a class="sidebar-item">
        <div
          class="sidebar-item__icon sidebar-item__icon--financialAnalysis"
        ></div>
        <div class="sidebar-item__text">Phân Tích Tài Chính</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSideBar",
};
</script>
<style scoped>
@import url(../../css/main.css);
</style>
