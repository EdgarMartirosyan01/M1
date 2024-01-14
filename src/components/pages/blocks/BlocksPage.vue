<template>
  <div>
    <WallBlocksInfo/>
  </div>
  <div>
    <BlocksCharacteristics/>
  </div>

  <div>
    <BlocksBenefits/>
  </div>

<!--  <div>-->
<!--    <BlockComparison/>-->
<!--  </div>-->

  <div>
    <BlocksImages/>
  </div>

  <div>
    <ImportantInfo/>
  </div>
</template>

<script>
import WallBlocksInfo from "@/components/pages/blocks/blocks-components/WallBlocksInfo.vue";
import BlocksCharacteristics from "@/components/pages/blocks/blocks-components/BlocksCharacteristics.vue";
import BlocksBenefits from "@/components/pages/blocks/blocks-components/BlocksBenefits.vue";
// import BlockComparison from "@/components/pages/blocks/blocks-components/BlockComparison.vue";
import BlocksImages from "@/components/pages/blocks/blocks-components/BlocksImages.vue";
import ImportantInfo from "@/components/pages/blocks/blocks-components/ImportantInfo.vue";

export default {
  name: "BlocksPage",
  components: {
    ImportantInfo,
    BlocksImages,
    // BlockComparison,
    BlocksBenefits,
    BlocksCharacteristics,
    WallBlocksInfo
  }
}
</script>

<style scoped lang="scss">
</style>