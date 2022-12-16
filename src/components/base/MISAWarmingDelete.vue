<template>
  <!-- toast-cảnh báo: "Bạn có thực sự muốn xóa?" -->
  <div class="toast-message">
    <div class="toast__warning-duplicate">
      <div class="toast__warning-content">
        <div class="toast__icon"><i class="icofont-warning"></i></div>
        <div class="toast__text">
          Bạn có thực sự muốn xóa Nhân Viên
          {{ employeeSelected.EmployeeCode }} không?
        </div>
      </div>
      <div class="toast__warning-btn">
        <button @click="closeMessDelete" class="btn toast__warning-no">
          Không
        </button>
        <button @click="handleDeleteAndHideMess" class="btn toast__warning-yes">
          Có
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MISAWarmingDelete",

  props: {
    employeeSelected: {
      type: Object,
    },

    selectPageSize: {
      type: Number,
    },

    pageNumber: {
      type: Number,
    },
  },

  methods: {
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 17/11/2022
     * Ấn nút "Không" thì Hủy xóa và Đóng Toast Message Delete warning
     * */
    closeMessDelete() {
      try {
        this.$emit("showMessageDelete");
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 17/11/2022
     * Call API để XÓA một Nhân Viên
     * */
    handleDeleteAndHideMess() {
      try {
        var me = this;
        axios
          .delete(
            "http://localhost:5077/api/v1/Employees?id=" +
              me.employeeSelected.EmployeeID
          )
          .then((res) => {
            //Đóng Form Warning delete
            me.$emit("showMessageDelete");

            //loading lại dữ liệu
            me.$emit("loadDataDefault", me.pageNumber, me.selectPageSize);
          });
      } catch (error) {
        console.log(error);
      }
    },
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
  color: #ffd34b;
}

.toast__text {
  font-size: 14px;
}

.toast__warning-btn {
  height: calc(100% - 66%);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
