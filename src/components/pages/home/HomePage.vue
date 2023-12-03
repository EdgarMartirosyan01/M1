<template>
  <div class="home">
    <div>
      <WelcomeHome/>
    </div>
    <div>
      <ProductionHome/>
    </div>
    <div>
      <AboutUsHome/>
    </div>
    <div>
      <CriteriaHome/>
    </div>
  </div>
</template>

<script>
import ProductionHome from "@/components/pages/home/home-components/ProductionHome.vue";
import AboutUsHome from "@/components/pages/home/home-components/AboutUsHome.vue";
import CriteriaHome from "@/components/pages/home/home-components/CriteriaHome.vue";
import WelcomeHome from "@/components/pages/home/home-components/WelcomeHome.vue";

export default {
  name: "HomePage",
  components: {WelcomeHome, CriteriaHome, AboutUsHome, ProductionHome}
}
</script>

<style scoped lang="scss">

</style>