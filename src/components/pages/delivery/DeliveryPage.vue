<template>
  <div>
    <div>
      <DeliveryInfo/>
    </div>

    <div>
      <DeliveryTable/>
    </div>

    <div>
      <DeliveryRates/>
    </div>

    <div>
      <ImportantInfo/>
    </div>
  </div>
</template>

<script>
import DeliveryInfo from "@/components/pages/delivery/delivery-conmponents/DeliveryInfo.vue";
import DeliveryTable from "@/components/pages/delivery/delivery-conmponents/DeliveryTable.vue";
import DeliveryRates from "@/components/pages/delivery/delivery-conmponents/DeliveryRates.vue";
import ImportantInfo from "@/components/pages/blocks/blocks-components/ImportantInfo.vue";

export default {
  name: "DeliveryPage",
  components: {ImportantInfo, DeliveryRates, DeliveryTable, DeliveryInfo}
}
</script>

<style scoped lang="scss">

</style>