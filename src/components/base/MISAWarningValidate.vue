<template>
  <!-- toast-cảnh báo: "Bạn có thực sự muốn xóa?" -->
  <div class="toast-message">
    <div class="toast__warning-duplicate">
      <div class="toast__warning-content">
        <div class="toast__icon">
          <i class="icofont-exclamation-circle"></i>
        </div>
        <div class="toast__text">{{ MessageContent }}</div>
      </div>
      <div class="toast__warning-btn">
        <button class="btn toast__warning-no">Đóng</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MISAWaringValidate",

  data() {
    return {};
  },

  props: {
    MessageContent: {
      type: String,
      required: true,
    },
  },

  methods: {
    /***
     * Author: SANG
     * createdBy: SANG
     * createdDate: 21/11/2022
     * */
  },
};
</script>

<style scoped>
.toast-message {
  position: fixed;
  background: #000000af;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.toast__warning-duplicate {
  min-width: 444px;
  height: 200px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 24px;
}

.toast__warning-content {
  display: flex;
  justify-content: center;
  height: 60%;
}
.toast__icon {
  width: 30%;
}

.toast__icon .icofont-warning {
  font-size: 50px;
  color: #f14646;
}

.toast__text {
  font-size: 14px;
}

.toast__warning-btn {
  height: calc(100% - 66%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding: 35px 0;
}

.toast__warning-no {
  background-color: #ffffff;
  color: #000;
  border: 1px solid #636363;
}

.toast__warning-no:hover {
  background-color: #ccc;
}

.toast__warning-yes {
  min-width: 52px;
}
</style>
