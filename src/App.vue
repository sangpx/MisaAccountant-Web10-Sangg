<template>
  <div class="container">
    <TheSidebar />
    <div class="content">
      <TheHeader />
      <ThePage />
    </div>
  </div>

  <!-- <TheDialog />
  <TheToastMessage /> -->
</template>

<script>
import TheSidebar from "./components/layout/TheSidebar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import ThePage from "./components/layout/ThePage.vue";
// import TheDialog from "./components/layout/TheDialog.vue";
// import TheToastMessage from "./components/layout/TheToastMessage.vue";

export default {
  name: "App",
  components: { TheSidebar, TheHeader, ThePage },
};
</script>

<style>
@import url(./css/main.css);
</style>
