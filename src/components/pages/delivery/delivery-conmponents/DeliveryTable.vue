<template>
  <div class="table">
    <div class="table__title">
      {{$t('Объемы загрузки ')}} <span>{{$t('грузового транспорта')}}</span>
    </div>
    <div class="table__container delivery-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="vehicle" :label="$t('Тип автомобили')" width="448"/>
        <el-table-column :label="$t('Объем в машине (куб. м)')" width="1328">
          <el-table-column :label="$t('СТЕНОВЫЕ БЛОКИ')" width="664">
            <el-table-column label="D200" prop="d200" width="111"></el-table-column>
            <el-table-column label="D250" prop="d250" width="111"></el-table-column>
            <el-table-column label="D300" prop="d300" width="111"></el-table-column>
            <el-table-column label="D350" prop="d350" width="111"></el-table-column>
            <el-table-column label="D400" prop="d400" width="111"></el-table-column>
            <el-table-column label="D450" prop="d450" width="111"></el-table-column>
          </el-table-column>
          <el-table-column :label="$t('ПЕРЕМЫЧКИ')" width="442">
            <el-table-column label="D600" prop="d600" width="111"></el-table-column>
            <el-table-column label="D300" prop="d300" width="111"></el-table-column>
            <el-table-column label="D400" prop="d400" width="111"></el-table-column>
            <el-table-column label="D500" prop="d500" width="111"></el-table-column>
          </el-table-column>
        </el-table-column>
          <el-table-column :label="$t('КЛЕЙ (шт.)')" prop="glue" width="222"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryTable",
  data(){
    return{
      tableData: [
        {
          vehicle: 'Еврофура 13,6 м до 20 т',
          d200: '50-68',
          d250: '50-68',
          d300: '50-68',
          d350: '50-68',
          d400: '50-68',
          d450: '50-68',
          d500: '50-68',
          d600: '35-40',
          glue: '800-900',
        },
        {
          vehicle: 'Маз 7,8 м до 14 т',
          d200: '25-32',
          d250: '25-32',
          d300: '25-32',
          d350: '25-32',
          d400: '25-32',
          d450: "50-68",
          d500: '25-32',
          d600: '20-25',
          glue: '500-600',
        },
        {
          vehicle: 'Манипулятор 6 м до 10 т ',
          d200: '15-20',
          d250: '15-20',
          d300: '15-20',
          d350: '15-20',
          d400: '15-20',
          d450: '15-20',
          d500: '15-20',
          d600: '15-18',
          glue: '350-450',
        },
        {
          vehicle: 'Газель 3 м до 1,5 т',
          d200: 'до 6',
          d250: 'до 6',
          d300: 'до 5',
          d350: 'до 4',
          d400: 'до 3.5',
          d450: 'до 3',
          d500: 'до 2.5',
          d600: 'до 4',
          glue: '50-70',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.table {
  padding: 100px 71px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  &__title {
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-variant: small-caps;
    span {
      color: #DF2129;
    }
  }
}
@media(max-width: 1382px) {
  .table {
    padding: 100px 32px;
  }
}
@media(max-width: 540px) {
  .table {
    &__title {
      font-size: 38px;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
@media(max-width: 404px) {
  .table {
    &__title {
      font-size: 32px;
    }
  }
}
</style>