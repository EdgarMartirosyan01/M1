<template>
  <div class="landing-page">
    <HeaderMenu/>
    <div id="layout">
      <router-view/>
    </div>
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
#layout {
  padding-top: 169px;
}
</style>