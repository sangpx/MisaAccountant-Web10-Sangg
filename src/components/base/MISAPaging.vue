<template>
  <paginate
    :page-count="recordToTal"
    :page-range="3"
    :margin-pages="1"
    :click-handler="clickCallback"
    :prev-text="'Trước'"
    :next-text="'Sau'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>

<script>
import Paginate from "vuejs-paginate-next";
export default {
  name: "MISAPaging",

  components: {
    paginate: Paginate,
  },

  methods: {
    /**
     * @param {any} date
     * Author: SANG
     * createdBy: SANG
     * createdDate: 28/11/2022
     * */
    clickCallback(pageNumber) {
      //Cập Nhật lại trang đang được chọn
      this.$emit("setPageNum", pageNumber);

      if (this.isCheckSearch) {
        this.$emit("stateSearch", pageNumber);
      } else {
        this.$emit("loadDataDefault", this.pageNumber, this.selectPageSize);
      }
    },
  },

  props: {
    recordToTal: {
      type: Number,
    },
    selectPageSize: {
      type: Number,
    },
    isCheckSearch: {
      type: Boolean,
    },
  },
};
</script>

<style>
@import url(../../css/base/pagniate.css);
</style>
