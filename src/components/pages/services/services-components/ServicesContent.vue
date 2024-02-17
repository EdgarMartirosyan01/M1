<template>
  <div class="services">
    <div class="services__title">
      {{$t('услуги')}}
    </div>
    <div class="services__container">
      <div class="services__container__title">
        {{$t('Производство')}} <span>{{$t('полистиролбетона')}}</span>
      </div>
      <div class="services__container__info">
        <div class="services__container__info__description">
          <span>{{$t('Производство полистиролбетона (легкого бетона) - энергоэффективного материала, не имеющего аналогов на строительном рынке, наша специализация. Наша продукция реализуется под торговой маркой M1 GROUPE.')}}</span>
          <span>{{$t('Полистиролбетон обладает хорошей теплоизоляцией и легкостью, что делает его популярным материалом для строительства. На нашем производстве мы предлагаем высококачественный полистиролбетон, созданный с использованием передовых технологий и лучших материалов.')}}</span>
          <span>{{$t('Если Вы хотите получить более подробную консультацию, рассчитать стоимость материалов и работ по монолитной заливки полистиролбетона M1 GROUPE, вы можете позвонить нам в офис по телефону, отправить запрос на почту или оставить заявку на нашем сайте. Наши специалисты с удовольствием ответят на Ваши вопросы, и окажут полное содействие в процессе выбора и согласования материала.')}}</span>
        </div>
        <div class="services__container__info__right">
          <div class="services__container__info__right__image">
            <img src="@/assets/images/products/Product1.jpg" alt="M1">
          </div>
          <div class="services__container__info__right__button">
            <button>
              {{$t('Консультация')}}
            </button>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="services__images">-->
<!--      <img src="@/assets/images/portfolio/portfolioImage2.png" alt="Portfolio">-->
<!--      <img src="@/assets/images/portfolio/portfolioImage3.png" alt="Portfolio">-->
<!--      <img src="@/assets/images/portfolio/portfolioImage4.png" alt="Portfolio">-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "ServicesContent"
}
</script>

<style scoped lang="scss">
.services {
  padding: 60px 72px 100px 72px;
  display: flex;
  flex-direction: column;
  &__title {
    color: #DF2129;
    font-family: Montserrat;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    &__title {
      color: #000;
      font-family: Montserrat;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      span {
        color: #DF2129 !important;
      }
    }
    &__info {
      display: flex;
      gap: 138px;
      &__description {
        display: flex;
        flex-direction: column;
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
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-height: 370px;
        &__image {
          img {
            width:  290px;
            height: 214px;
          }
        }
        &__button {
          cursor: pointer;
          width: 100%;
          button {
            color: #FFF;
            text-align: center;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            padding: 13px 83px;
            background: #DF2129;
            border: #DF2129;
          }
        }
      }
    }
  }
  &__images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 100px 0;
    gap: 32px;
    img {
      width: 485px;
      height: 485px;
      box-shadow: 0 3px 3px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 6px 6px rgba(0,0,0,0.12),
      0 10px 10px rgba(0,0,0,0.12),
      0 18px 18px rgba(0,0,0,0.12);
    }
    img:hover {
      box-shadow: 0 1px 1px rgba(0,0,0,0.12),
      0 2px 2px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 8px 8px rgba(0,0,0,0.12),
      0 16px 16px rgba(0,0,0,0.12);
    }
  }
}
@media(max-width: 1663px) {
  .services {
    &__container {
      &__info {
        gap: 100px;
      }
    }
    &__images {
      img {
        width: 388px;
        height: 388px;
      }
    }
  }
}
@media(max-width: 1382px) {
  .services {
    padding: 60px 32px 100px 32px;
  }
}
@media(max-width: 1291px) {
  .services {
    &__container {
      gap: 40px;
      &__info {
        gap: 36px;
        flex-direction: column-reverse;
        &__description {
          gap: 36px;
        }
        &__right {
          height: auto;
          justify-content: center;
          align-items: flex-start;
          gap: 36px;
        }
      }
    }
    &__images {
      align-items: center;
      justify-content: center;
      padding: 100px 0 0 0;
      gap: 50px;
    }
  }
}
@media(max-width: 550px) {
  .services {
    &__title {
      font-size: 64px;
    }
    &__container {
      &__title {
        font-size: 38px;
      }
      &__info {
        &__description {
          gap: 20px;
          span {
            font-size: 18px;
          }
        }
        &__right {
          gap: 36px;
        }
      }
    }
    &__images {
      img {
        width: 388px;
        height: 388px;
      }
    }
  }
}
@media(max-width: 428px) {
  .services {
    &__container {
      &__title {
        font-size: 28px;
      }
    }
    &__images {
      gap: 20px;
      img {
        width: 312px;
        height: 312px;
      }
    }
  }
}
</style>