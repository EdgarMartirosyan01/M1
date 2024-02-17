<template>
  <div class="about-home">
    <div class="about-home__top">
<!--      <div class="about-home__top__img-container">-->
<!--        <div class="about-home__top__img-container__img1">-->
<!--          <img src="@/assets/images/Construction1.png" alt="Construction">-->
<!--        </div>-->
<!--        <div class="about-home__top__img-container__img2">-->
<!--          <img src="@/assets/images/Construction2.png" alt="Construction">-->
<!--        </div>-->
<!--      </div>-->
      <div class="about-home__top__info-container">
        <div class="about-home__top__info-container__title">{{$t('о нАС')}}</div>
        <div class="about-home__top__info-container__description">
          <span>{{$t('ООО «М1 GROUPE» — производственно-строительная компания полного цикла, производитель полистиролбетона.')}}</span>
          <span>{{$t('В компании работает команда профессионалов с многолетним опытом в отрасли. Наша цель — лидирующие позиции в производстве, продвижении и реализации инновационных строительных материалов из полистиролбетона. Среди наших заказчиков — как частные застройщики, так и крупные строительные организации.')}}</span>
          <span>{{$t('Мы любим свою работу и отвечаем за качество всех услуг и продукции, которые получают наши клиенты.')}}</span>
        </div>
        <div class="about-home__top__info-container__button">
          <router-link to="/about">
            <button>
              {{$t('Подробнее о компании')}}
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="about-home__bottom">
      <div class="about-home__bottom__title">
        {{$t('ЧТО МЫ ')}}<span>{{$t('ДЕЛАЕМ')}}</span>
      </div>
      <div class="about-home__bottom__container">
        <div class="about-home__bottom__container__left">
          <div class="about-home__bottom__container__left__image">
            <img src="@/assets/images/products/BlockPhotoV.jpg" alt="M1">
          </div>
          <div class="about-home__bottom__container__left__title">
            {{$t('Производство полистиролбетона')}}
          </div>
          <div class="about-home__bottom__container__left__description">
            {{$t('Производство полистиролбетона (легкого бетона) - энергоэффективного материала, не имеющего аналогов на строительном рынке, наша специализация. Наша продукция реализуется под торговой маркой M1 GROUPE.')}}
          </div>
        </div>
        <div class="about-home__bottom__container__right">
          <div class="about-home__bottom__container__right__image">
            <img src="@/assets/images/products/BlockHomeV.jpg" alt="M1">
          </div>
          <div class="about-home__bottom__container__right__title">
            {{$t('Строительство малоэтажных домов')}}
          </div>
          <div class="about-home__bottom__container__right__description">
            {{$t('Компания готова к сотрудничеству как с крупными и малыми строительными организациями, так и с частными клиентами и заказчиками. Мы дорожим своим именем, а потому вся наша продукция производиться исключительно из надежных компонентов и проходит жесткий контроль качества на каждом этапе изготовления. Выпускаемые изделия, обеспечены всей необходимой документацией - сертификатами соответствия, пожарной безопасности и санитарно-эпидемиологическими заключениями.')}}
          </div>
          <div class="about-home__bottom__container__right__button">
            <router-link to="/services">
              <button>
                {{$t('Подробнее об услугах')}}
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsHome"
}
</script>

<style scoped lang="scss">
.about-home {
  display: flex;
  flex-direction: column;
  padding: 32px 72px;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    &__img-container {
      position: relative;
      width: 900px;
      height: 700px;
      &__img1 {
        position: absolute;
        right: 0;
        bottom: 0;
        img {
          width: 609px;
          height: 609px;
          box-shadow: 0 3px 3px rgba(0,0,0,0.12),
          0 4px 4px rgba(0,0,0,0.12),
          0 6px 6px rgba(0,0,0,0.12),
          0 10px 10px rgba(0,0,0,0.12),
          0 18px 18px rgba(0,0,0,0.12);
        }
      }
      &__img2 {
        position: absolute;
        left: 0;
        top: 0;
        img {
          width: 446px;
          height: 426px;
          box-shadow: 0 3px 3px rgba(0,0,0,0.12),
          0 4px 4px rgba(0,0,0,0.12),
          0 6px 6px rgba(0,0,0,0.12),
          0 10px 10px rgba(0,0,0,0.12),
          0 18px 18px rgba(0,0,0,0.12);
        }
      }
    }
    &__info-container {
      width: 900px;
      height: 700px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &__title {
        color: var(--red, #DF2129);
        font-family: Montserrat;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        padding-bottom: 100px;
      }
      &__description {
        display: flex;
        flex-direction: column;
        gap: 32px;
        span {
          color: #000;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Montserrat;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
        }
      }
      &__button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 60px 0;
        button {
          color: #DF2129;
          text-align: center;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          border: 2px solid #DF2129;
          padding: 13px 17px;
          background: inherit;
          cursor: pointer;
        }
        button:hover {
          background: #DF2129;
          color: white;
          transition: 0.3s;
        }
      }
    }
  }
  &__bottom {
    padding: 60px 0;
    &__title {
      color: #000;
      font-family: Montserrat;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      padding: 40px 0 64px 0;
      span {
        color: #DF2129 !important;
      }
    }
    &__container {
      display: flex;
      justify-content: flex-start;
      gap: 266px;
      &__left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
        width: 597px;
        &__image {
          img {
            width: 160px;
            height: 222px;
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
          color: #000;
          font-family: Montserrat;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
        }
      }
      &__right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
        width: 597px;
        &__image {
          img {
            width: 233px;
            height: 222px;
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
          color: #000;
          font-family: Montserrat;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
        }
        &__button {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          button {
            color: #DF2129;
            text-align: center;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            border: 2px solid #DF2129;
            padding: 13px 17px;
            background: inherit;
            cursor: pointer;
          }
          button:hover {
            background: #DF2129;
            color: white;
            transition: 0.3s;
          }
        }
      }
    }
  }
}
@media(max-width: 1556px) {
  .about-home {
    &__top {
      flex-direction: column-reverse;
      gap: 36px;
      &__info-container {
        width: 100%;
        height: auto;
        &__title {
          padding-bottom: 36px;
        }
      }
    }
    &__bottom {
      padding: 0;
      &__title {
        padding: 70px 0 45px 0;
      }
      &__container {
        gap: 50px;
      }
    }
  }
}
@media(max-width: 1161px) {
  .about-home {
    &__top {
      gap: 36px;
      &__info-container {
        width: 100%;
        height: auto;
        &__title {
          padding-bottom: 36px;
        }
      }
    }
    &__bottom {
      padding: 0;
      &__container {
        gap: 50px;
        flex-direction: column;
        &__left {
          width: 100%;
        }
        &__right {
          width: 100%;
        }
      }
    }
  }
}
@media(max-width: 992px) {
  .about-home {
    padding: 32px 32px;
    &__top {
      gap: 36px;
      &__img-container {
        width: 720px;
        height: 560px;
        &__img1 {
          img {
            width: 487px;
            height: 487px;
          }
        }
        &__img2 {
          img {
            width: 356px;
            height: 340px;
          }
        }
      }
      &__info-container {
        width: 100%;
        height: auto;
        &__title {
          padding-bottom: 36px;
        }
      }
    }
    &__bottom {
      padding: 0;
      &__container {
        gap: 50px;
        flex-direction: column;
        &__left {
          width: 100%;
        }
        &__right {
          width: 100%;
        }
      }
    }
  }
}
@media(max-width: 798px) {
  .about-home {
    padding: 32px 32px;
    &__top {
      gap: 36px;
      &__img-container {
        width: 576px;
        height: 448px;
        &__img1 {
          img {
            width: 389px;
            height: 389px;
          }
        }
        &__img2 {
          img {
            width: 284px;
            height: 272px;
          }
        }
      }
      &__info-container {
        width: 100%;
        height: auto;
        &__title {
          padding-bottom: 36px;
        }
        &__description {
          span {
          }
        }
        &__button {
          button {
          }
        }
      }
    }
    &__bottom {
      padding: 0;
      &__title {
        span {
        }
      }
      &__container {
        gap: 50px;
        flex-direction: column;
        &__left {
          width: 100%;
          &__image {
            img {
            }
          }
          &__title {
          }
          &__description {
          }
        }
        &__right {
          width: 100%;
          &__image {
            img {
            }
          }
          &__title {
          }
          &__description {
          }
          &__button {
            button {
            }
          }
        }
      }
    }
  }
}
@media(max-width: 645px) {
  .about-home {
    &__top {
      &__img-container {
        width: 460px;
        height: 358px;
        &__img1 {
          img {
            width: 311px;
            height: 311px;
          }
        }
        &__img2 {
          img {
            width: 227px;
            height: 217px;
          }
        }
      }
      &__info-container {
        &__title {
          padding-bottom: 36px;
        }
        &__description {
          font-size: 16px;
          gap: 16px;
        }
        &__button {
          padding: 40px 0;
        }
      }
    }
    &__bottom {
      padding: 0;
      &__title {
        font-size: 38px;
      }
      &__container {
        gap: 50px;
        flex-direction: column;
        &__left {
          width: 100%;
          &__image {
            img {
              width: 128px;
              height: 177px;
            }
          }
          &__title {
            font-size: 32px;
          }
          &__description {
            font-size: 16px;
          }
        }
        &__right {
          width: 100%;
          &__image {
            img {
              width: 186px;
              height: 177px;
            }
          }
          &__title {
            font-size: 32px;
          }
          &__description {
            font-size: 16px;
          }
        }
      }
    }
  }
}
@media(max-width: 495px) {
  .about-home {
    &__top {
      &__img-container {
        width: 368px;
        height: 286px;
        &__img1 {
          img {
            width: 248px;
            height: 248px;
          }
        }
        &__img2 {
          img {
            width: 181px;
            height: 173px;
          }
        }
      }
    }
  }
}
@media(max-width: 403px) {
  .about-home {
    &__top {
      &__img-container {
        width: 294px;
        height: 228px;
        &__img1 {
          img {
            width: 198px;
            height: 198px;
          }
        }
        &__img2 {
          img {
            width: 144px;
            height: 138px;
          }
        }
      }
    }
    &__bottom {
      &__container {
        &__left {
          &__title {
            font-size: 28px;
          }
        }
        &__right {
          &__title {
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>