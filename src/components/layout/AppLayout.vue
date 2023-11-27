<template>
  <div class="landing-page">
    <HeaderMenu/>
      <router-view/>
    <FooterMenu/>
  </div>
</template>

<script>
import HeaderMenu from "@/components/layout/header/HeaderMenu.vue";
import FooterMenu from "@/components/layout/footer/FooterMenu.vue";

export default {
  name: "AppLayout",
  components: {FooterMenu, HeaderMenu}
}
</script>

<style scoped lang="scss">
.landing-page {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: auto !important;
  scroll-behavior: smooth;
}
</style>