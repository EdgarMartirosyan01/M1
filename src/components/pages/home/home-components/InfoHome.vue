<template>
  <div class="criteria">
    <div class="criteria__title">
      {{$t('ПОЛИСТИРОЛБЕТОН ЭТО:')}}
    </div>
    <div class="criteria__container">
      <div
          class="criteria__container__item"
          v-for="(item, index) in criteriaData"
          :key="index"
      >
        <div class="criteria__container__item__icon">
          <img :src="item.icon" alt="Icon">
        </div>
        <div class="criteria__container__item__title">
          {{ $t(item.title) }}
        </div>
        <div class="criteria__container__item__description">
          {{ $t(item.description) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoHome",
  computed: {
    criteriaData() {
      return [
        {
          icon: require('@/assets/screenShots/ScreenShot1.jpg'),
          title: "Биостойкость",
          description: "не способствует образованию плесени и грибка, не повреждается грызунами и насекомыми.",
        },
        {
          icon: require('@/assets/screenShots/ScreenShot2.jpg'),
          title: "Огнестойкость",
          description: "Благодаря специальной технологии полистиролбетон не горит (НГ) и не поддерживает горение.",
        },
        {
          icon: require('@/assets/screenShots/ScreenShot3.jpg'),
          title: "Влагостойкость",
          description: "Полистиролбетон практически не впитывает влагу, что позволяет отложить устройство фасада, а это значит материал сохраняет свои теплоизоляционные свойства при намокании (в отличии от газоблока!), не требует устройства дорогостоящей защиты фасада, препятствует возникновению плесени.",
        },
        {
          icon: require('@/assets/screenShots/ScreenShot4.jpg'),
          title: "Трещиностойкость",
          description: "Способствует минимизации трещин за счет прочности на растяжение при изгибе.",
        },
        {
          icon: require('@/assets/screenShots/ScreenShot5.jpg'),
          title: "Долговечность",
          description: "Полистиролбетон выдерживает до 200 циклов замораживания и размораживания",
        },
        {
          icon: require('@/assets/screenShots/ScreenShot6.jpg'),
          title: "Экономичность",
          description: "Позволяет экономить на количестве материала, стоимости работ для возведения стен, не требует утепления, экономия на стоимости различных работ. ",
        },
        {
          icon: require('@/assets/screenShots/ScreenShot7.jpg'),
          title: "Звукопоглощение",
          description: "Материал с высоким уровнем шумопоглощения. Для тех, кто любит тишину и покой.",
        },
        {
          icon: require('@/assets/screenShots/ScreenShot8.jpg'),
          title: "Энергоэффективность",
          description: "Полистиролбетон идеальный материал для климата в Армении, он не пропускает тепло, зимой в доме будет тепло, а летом прохладно. Колоссальная экономия Газа на отоплении, а летом электроэнергии на кондиционере.",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.criteria {
  padding: 80px 71px 100px 71px;
  &__title {
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    padding-bottom: 55px;
    span {
      color: #DF2129 !important;
    }
  }
  &__container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1920px;
    &__item {
      width: 732px;
      height: 398px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      &__icon {
        mix-blend-mode: lighten;
        img {
          width: 54px;
          height: 54px;
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
      }
      &__description {
        color: #333;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }
}
@media(max-width: 1655px) {
  .criteria {
    padding: 80px 71px 100px 71px;
    &__container {
      &__item {
        width: 600px;
      }
    }
  }
}
@media(max-width: 1373px) {
  .criteria {
    &__title {
      font-size: 45px;
    }
    &__container {
      width: 100%;
      &__item {
        width: 100%;
        height: auto;
        padding-bottom: 60px;
      }
    }
  }
}
@media(max-width: 992px) {
  .criteria {
    padding: 80px 32px 100px 32px;
    &__title {
      width: 466px;
    }
  }
}
@media(max-width: 550px) {
  .criteria {
    &__title {
      font-size: 37px;
      width: 346px;
    }
    &__container {
      width: 100%;
      &__item {
        width: 100%;
        &__title {
          font-size: 28px;
        }
        &__description {
          font-size: 16px;
        }
      }
    }
  }
}
@media(max-width: 465px) {
  .criteria {
    &__title {
      font-size: 24px;
      width: 300px;
    }
    &__container {
      &__item {
        gap: 4px;
        padding-bottom: 24px;
      }
    }
  }
}
@media(max-width: 380px) {
  .criteria {
    &__title {
      font-size: 20px;
      width: 200px;
    }
    &__container {
      &__item {
        &__title {
          font-size: 18px;
          width: 250px;
        }
        &__description {
          font-size: 12px;
        }
      }
    }
  }
}
</style>