<template>
  <!-- toast-cảnh báo -->
  <div class="toast-message" style="display: none">
    <div class="toast__warning-duplicate" style="display: none">
      <div class="toast__warning-content">
        <div class="toast__icon"><i class="icofont-warning"></i></div>
        <div class="toast__text">
          Mã Nhân Viên đã tồn tại trong hệ thống, vui lòng kiểm tra lại.
        </div>
      </div>
      <div class="toast__warning-btn">
        <button class="btn toast__warning-yes">Đồng ý</button>
      </div>
    </div>

    <div class="toast__warning-empty">
      <div class="toast__warning-empty--container">
        <div class="toast__warning-empty--content">
          <div class="toast__text"></div>
        </div>
      </div>
      <div class="toast__warning-btn">
        <button class="btn toast__warning-yes">Đồng ý</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MISAWarning",
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
