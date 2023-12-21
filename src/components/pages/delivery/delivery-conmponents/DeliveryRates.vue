<template>
  <div class="rates">
    <div class="rates__left">
      <div class="rates__left__title">
        {{$t('Тарифы')}}<span>{{$t(' на доставку')}}</span>
      </div>
      <div class="rates__left__description">
        <span>{{$t('Стоимость доставки зависит от объема покупки и удаленности пункта выгрузки товара от склада, а также учитывает иные условия договора и рассчитывается менеджером нашей компании после обработки заявки.')}}</span>
        <span>{{$t('Минимальная стоимость доставки – 15 000 рублей при расстоянии до 10 км., свыше 100 км – 100 рублей за км.')}}</span>
        <span>{{$t('Вся продукция M1 GROUPE перевозится на поддонах, упакованных в стрейч-пленку, которая защищает стройматериал от атмосферных осадков и механических повреждений во время погрузки, транспортировки и разгрузки. Все паллеты жестко фиксируются в кузове при помощи специальных приспособлений.')}}</span>
      </div>
    </div>
    <div class="rates__right">
      <div class="rates__right__container">
        <div class="rates__right__container__item" id="table-title-container">
          <span id="table-title">{{$t('Расстояние от склада')}}</span>
          <span id="table-title">{{$t('20 тонн')}}</span>
        </div>
        <div class="rates__right__container__item">
          <span>{{$t('До 10 км')}}</span>
          <span>15 000</span>
        </div>
        <div class="rates__right__container__item" id="table-rose-container">
          <span>{{$t('До 40 км')}}</span>
          <span>20 000</span>
        </div>
        <div class="rates__right__container__item">
          <span>{{$t('До 100 км')}}</span>
          <span>25 000</span>
        </div>
        <div class="rates__right__container__item" id="table-rose-container">
          <span>{{$t('Свыше 100 км')}}</span>
          <span>{{$t('100 руб. за км')}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryRates"
}
</script>

<style scoped lang="scss">
.rates {
  padding: 0 71px 100px 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  &__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    max-width: 863px;
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
    &__description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 36px;
      span {
        color: #000;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }
  &__right {
    &__container {
      display: flex;
      flex-direction: column;
      height: 500px;
      width: 740px;
      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        span {
          width: 50%;
          height: 100px;
          border: 1px solid gray;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          text-align: center;
          font-family: Montserrat;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-variant: small-caps;
        }
      }
      &__item:hover {
        background: #e5e5e5;
      }
    }
  }
}
#table-title-container {
  background: #DF2129;
}
#table-title-container:hover {
  background: #c22128;
}
#table-rose-container {
  background: rgba(223, 33, 41, 0.09);
}
#table-rose-container:hover {
  background: rgba(91, 4, 8, 0.47);
}
#table-title {
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-variant: small-caps;
}
@media(max-width: 1680px) {
  .rates {
    flex-direction: column;
    align-items: flex-start;
    &__left {
      max-width: 100%;
      &__title {
        span {
          color: #DF2129;
        }
      }
      &__description {
        span {
        }
      }
    }
    &__right {
      &__container {
        padding-top: 50px;
        height: 500px;
        width: 740px;
        &__item {
          span {
          }
        }
      }
    }
  }
}
@media (max-width: 1382px) {
  .rates {
    padding: 0 32px 100px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    &__left {
      max-width: 100%;
    }
    &__right {
      &__container {
        padding-top: 50px;
      }
    }
  }
}
@media(max-width: 813px) {
  .rates {
    &__right {
      width: 100%;
      &__container {
        padding-top: 50px;
        height: 500px;
        width: 100%;
        &__item {
          span {
          }
        }
      }
    }
  }
}
@media(max-width: 500px) {
  .rates {
    &__left {
      &__title {
        font-size: 34px;
      }
      &__description {
        gap: 16px;
        span {
          font-size: 17px;
        }
      }
    }
    &__right {
      width: 100%;
      flex-direction: column;
      &__container {
        padding-top: 50px;
        height: 500px;
        width: 100%;
        &__item {
          span {
            font-size: 16px !important;
          }
        }
      }
    }
  }
}
</style>