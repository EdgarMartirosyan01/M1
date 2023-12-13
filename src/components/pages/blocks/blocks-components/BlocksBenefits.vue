<template>
  <div class="benefits">
    <div class="benefits__title">{{$t('Преимущества')}}</div>
    <div class="benefits__description">{{$t('Стеновые блоки из полистиролбетона M1 GROUPE по многим параметрам эффективнее других строительных материалов')}}</div>
    <div class="benefits__container">
      <div class="benefits__container__item"
           v-for="(item, index) in benefits"
           :key="index"
      >
        <div class="benefits__container__item__icon">
          <img :src="item.icon" alt="icon">
        </div>
        <div class="benefits__container__item__title">
          {{ item.title }}
        </div>
        <div class="benefits__container__item__list">
          <ul v-for="(listItem, listIndex) in item.list"
              :key="listIndex">
            <li> {{ listItem }} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocksBenefits",
  computed: {
    benefits() {
      return [
        {
          icon: require('@/assets/images/benefitsIcons/Benefit6.svg'),
          title: "Экономичность",
          list: [
            "Снижение стоимости 1 кв. м стены за счет материалоемкости в 1,5 - 2 раза",
            "Снижение трудозатрат за счет малого веса в 1,5 раза",
            "Экономия расхода раствора до 70% за счет точности геометрических размеров и сокращения толщины стены",
            "Сокращение расходов на приобретение и монтаж дополнительного утеплителя и на оплату энергоресурсов при дальнейшей эксплуатации объекта.",
            "Увеличение внутренней полезной площади помещений здания - как дополнительный приятный бонус."
          ],
        },
        {
          icon: require('@/assets/images/benefitsIcons/Benefit5.svg'),
          title: "Комфорт",
          list: [
            "Отличная теплоизоляция и теплосбережение - зимой при -20С дом теряет 1С за сутки",
            "Влагостойкость — в 5 раз выше, чем у газоблоков",
            "Паропроницаемость — стены дышат, регулируя влажность в помещении",
            "Морозостойкость — выдерживает колебания температур от -40 °С до +75 °С",
            "Высокая звукоизоляция — блок до 20 см гасит звук до 70 д",
            "Не гниет, не подвержен образованию плесени и бактерий"
          ],
        },
        {
          icon: require('@/assets/images/benefitsIcons/Benefit4.svg'),
          title: "Технологичность",
          list: [
            "Точность размеров блоков — погрешность не более 2-3 мм",
            "Малый вес — упрощает транспортировку, не нагружает фундамент, дом не даёт усадку.",
            "Удобство обработки — легко сверлить, пилить, можно придать любую форму.",
          ],
        },
        {
          icon: require('@/assets/images/benefitsIcons/Benefit3.svg'),
          title: "Безопасность",
          list: [
            "Пожаробезопасность — негорючий материал, 1 категория огнестойкости",
            "Сейсмоустойчивость — от 9 до 12 баллов",
            "Экологическая чистота — используется пищевой полистирол, за счёт многократного вспенивания не содержит вредных смол.",
          ],
        },
        {
          icon: require('@/assets/images/benefitsIcons/Benefit2.svg'),
          title: "Прочность",
          list: [
            "Подходят для возведения несущих конструкций",
            "Хорошо держат линейные нагрузки за счет высокой прочности на сжатие и растяжение при изгибе, не разрушаются при перевозке и обладают высокой трещиностойкостью.",
          ],
        },
        {
          icon: require('@/assets/images/benefitsIcons/Benefit1.svg'),
          title: "Долговечность",
          list: [
            "Срок службы не менее 150 лет.",
          ],
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.benefits {
  padding: 100px 71px;
  &__title {
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }
  &__description {
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    padding-top: 40px;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 80px;
    &__item {
      max-width: 732px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      &__icon {
        padding-top: 30px;
        img {
          width: 70px;
          height: 70px;
        }
      }
      &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        padding-top: 25px;
      }
      &__list {
        padding-top: 25px;
        ul {
          li {
            color: #000;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px; /* 150% */
          }
        }
      }
    }
  }
}
@media(max-width: 1686px) {
  .benefits {
    padding: 100px 71px;
    &__container {
      &__item {
        max-width: 100%;
        width: 100%;
      }
    }
  }
}
@media(max-width: 1383px) {
  .benefits {
    padding: 100px 32px;
  }
}
@media(max-width: 499px) {
  .benefits {
    &__title {
      font-size: 33px;
    }
    &__description {
      font-size: 17px;
    }
    &__container {
      &__item {
        &__title {
          font-size: 32px;
        }
        &__list {
          ul {
            li {
              font-size: 17px;
            }
          }
        }
      }
    }
  }
}
</style>