<template>
  <div class="FAQ">
    <el-collapse accordion>
      <el-collapse-item
          :name="index + 1"
          v-for="(item, index) in FAQ_DATA"
          :key="index"
      >
        <template #title>
          <div class="FAQ-accordion__title">{{ $t(item.title) }}</div>
        </template>
        <div v-html="item.text"></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "ServicesFAQ",
  computed: {
    FAQ_DATA() {
      return [
        {
          title: 'Область применения',
          text: 'Answer text goes here'
        },
        {
          title: 'Преимущества полистиролбетона M1 GROUPE ',
          text: 'Answer text goes here'
        },
        {
          title: 'Как происходят работы по заливке? ',
          text: 'Answer text goes here'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.FAQ {
  padding: 0 72px 100px 72px;
}
@media(max-width: 1382px) {
  .FAQ {
    padding: 0 32px 100px 32px;
  }
}
</style>