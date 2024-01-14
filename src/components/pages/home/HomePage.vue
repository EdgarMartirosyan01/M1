<template>
  <div class="home">
    <div>
      <WelcomeHome/>
    </div>
    <div>
      <ProductionHome/>
    </div>
    <div>
      <InfoHome/>
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
import InfoHome from "@/components/pages/home/home-components/InfoHome.vue";

export default {
  name: "HomePage",
  components: {InfoHome, WelcomeHome, CriteriaHome, AboutUsHome, ProductionHome}
}
</script>

<style scoped lang="scss">

</style>