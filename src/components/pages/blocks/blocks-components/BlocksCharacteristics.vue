<template>
  <div class="characteristics">
    <div class="characteristics__title">
      {{$t('Основные характеристикиполистиролбетонных ')}}
      <span>{{$t('блоков M1 GROUPE')}}</span>
    </div>
    <div class="characteristics__table blocks-characteristics-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="type" :label="$t('Вид полистиролбетона')" width="293"/>
        <el-table-column prop="size" :label="$t('Размеры блоков')" width="293"/>
        <el-table-column prop="density" :label="$t('Плотность (D) кг/м3')" width="196"/>
        <el-table-column prop="class" :label="$t('Класс (марка) прочности')" width="196"/>
        <el-table-column prop="conductivity" :label="$t('Тепло- проводность λ, Вт/(м-°С)')" width="196"/>
        <el-table-column prop="vapor" :label="$t('Тип автомобилиПаропро- ницаемость µ, мг/(м*ч*Па)')" width="196"/>
        <el-table-column prop="resistance" :label="$t('Морозо- стойкость (F)')" width="196"/>
        <el-table-column prop="flammability" :label="$t('Группа горючести')" width="196"/>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocksCharacteristics",
  data() {
    return {
      tableData: [
        {
          type: 'Теплоизоляционный',
          size: '100мм*300мм*600мм 150мм*300мм*600мм',
          density: 'D 150 D 200',
          class: 'М 2 М 3,5',
          conductivity: '0,051 0,062',
          vapor: '0,135 0,120',
          resistance: 'F 35 F 75',
          flammability: 'Г 1 Г 1',
        },
        {
          type: 'Теплоизоляционно- конструкционный',
          size: '200мм*300мм*600мм 250мм*300мм*600мм 300мм*300мм*600мм',
          density: 'D 25 D 300 D 350',
          class: 'B 0,5 B 0,75 B 1',
          conductivity: '0,051 0,062 0.085',
          vapor: '0,135 0,120 0,090',
          resistance: 'F 35 F 75 F 150',
          flammability: 'Г 1 НГ НГ',
        },
        {
          type: 'Манипулятор 6 м до 10 т Теплоизоляционно- конструкционный',
          size: '200мм*300мм*600мм 250мм*300мм*600мм 300мм*300мм*600мм',
          density: 'D 25 D 300 D 350',
          class: 'B 0,5 B 0,75 B 1',
          conductivity: '0,051 0,062 0.085',
          vapor: '0,135 0,120 0,090',
          resistance: 'F 35 F 75 F 150',
          flammability: 'Г 1 НГ НГ',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.characteristics {
  padding: 60px 72px 100px 72px;
  &__title {
    color: #000;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    span {
      color: #DF2129 !important;
    }
  }
  &__table {
    padding-top: 50px;
  }
}
@media(max-width: 1383px) {
  .characteristics {
    padding: 60px 32px 100px 32px;
  }
}
@media(max-width: 839px) {
  .characteristics {
    &__title {
      font-size: 30px;
    }
  }
}
@media(max-width: 650px) {
  .characteristics {
    &__title {
      font-size: 20px;
    }
  }
}
</style>