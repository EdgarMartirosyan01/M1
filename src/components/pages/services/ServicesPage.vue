<template>
  <div>
   <div>
     <ServicesContent/>
   </div>
    <div>
      <ServicesFAQ/>
    </div>
  </div>
</template>

<script>
import ServicesContent from "@/components/pages/services/services-components/ServicesContent.vue";
import ServicesFAQ from "@/components/pages/services/services-components/ServicesFAQ.vue";

export default {
  name: "ServicesPage",
  components: {ServicesFAQ, ServicesContent}
}
</script>

<style scoped lang="scss">

</style>