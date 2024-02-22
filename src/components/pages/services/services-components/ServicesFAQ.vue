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
        <div v-html="$t(item.text)"></div>
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
          text: 'Полистиролбетон применяется в ограждающих конструкциях каркасных зданий, несущих стенах и перегородках, как утеплитель стен, полов, чердаков, кровли, используется для производства строительных блоков и фасадных декоративных утеплительных панелей, жидкого раствора для заливки монолита. Полистиролбетон обладает хорошей конструкционной прочностью.'
        },
        {
          title: 'Преимущества полистиролбетона M1 GROUPE ',
          text: 'Экономичность Комфорт технологичность Безопасность Прочность долговечность Биостойкость Огнестойкость легкость Влагостойкость Трещиностойкость Звукопоглощение Энергоэффективность'
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