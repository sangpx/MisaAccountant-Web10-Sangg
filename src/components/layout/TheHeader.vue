<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left-multitasking"></div>
      <div class="header__left-title tool-tip-title">
        {{ this.$t("TITLE_COMPANY") }}
        <i class="icofont-rounded-down"></i>
      </div>
    </div>

    <div class="header__right">
      <div class="header__right-bell tool-tip-bell"></div>
      <div class="header__right-author">
        <div class="author"></div>
        <div class="user__login">
          {{ this.$t("TITLE_USER") }}<i class="icofont-rounded-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
@import url(../../css/layout/TheHeader.css);
</style>
