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
  </div>
</template>

<script>
import DeliveryInfo from "@/components/pages/delivery/delivery-conmponents/DeliveryInfo.vue";
import DeliveryTable from "@/components/pages/delivery/delivery-conmponents/DeliveryTable.vue";
import DeliveryRates from "@/components/pages/delivery/delivery-conmponents/DeliveryRates.vue";

export default {
  name: "DeliveryPage",
  components: {DeliveryRates, DeliveryTable, DeliveryInfo}
}
</script>

<style scoped lang="scss">

</style>