<template>
  <div>
    <div>
      <AboutCompany/>
    </div>
    <div>
      <OurGoals/>
    </div>
    <div>
      <AboutPartners/>
    </div>
  </div>
</template>

<script>
import AboutCompany from "@/components/pages/about/about-components/AboutCompany.vue";
import OurGoals from "@/components/pages/about/about-components/OurGoals.vue";
import AboutPartners from "@/components/pages/about/about-components/AboutPartners.vue";

export default {
  name: "AboutPage",
  components: {AboutPartners, OurGoals, AboutCompany}
}
</script>

<style scoped lang="scss">

</style>