<template>
  <div class="production-home">
    <div class="production-home__title">
      <span>{{$t('ПРОИЗВОДИМ ПРОДУКЦИЮ')}}</span>
      <span class="production-home__title__red">{{$t('ДЛЯ СТРОИТЕЛЬСТВА')}}</span>
    </div>
    <div class="production-home__container">
      <div
          class="production-home__container__item"
          v-for="(item, index) in productData"
          :key="index"
      >
        <div class="production-home__container__item__title">
          {{ $t(item.title) }}
        </div>
        <div class="production-home__container__item__image">
          <img :src="item.image" alt="Products">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductionHome",
  computed: {
    productData() {
      return [
        {
          title: "стеновые Блоки",
          image: require('@/assets/images/products/Product1.png'),
        },
        {
          title: "Вентиляционные Блоки",
          image: require('@/assets/images/products/Product2.png'),
        },
        {
          title: "Армированные перемычки",
          image: require('@/assets/images/products/Product3.png'),
        },
        {
          title: "Крупноформатные панели ",
          image: require('@/assets/images/products/Product4.png'),
        },
        {
          title: "Теплоизоляционные плитки",
          image: require('@/assets/images/products/Product5.png'),
        },
        {
          title: "сухие строительные смеси",
          image: require('@/assets/images/products/Product6.png'),
        },
      ]
    },
  }
}
</script>

<style scoped lang="scss">
.production-home {
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding: 100px 81px;
  &__title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      color: #000;
      font-family: Montserrat;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
    }
    &__red {
      color: #DF2129 !important;
    }
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 74px;
    &__item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      width: 747px;
     &__title {
       color: #000;
       font-family: Montserrat;
       font-size: 39px;
       font-style: normal;
       font-weight: 700;
       line-height: normal;
       text-transform: capitalize;
     }
      &__image {
        width: 747px;
        height: 532px;
        box-shadow: 0 3px 3px rgba(0,0,0,0.12),
        0 4px 4px rgba(0,0,0,0.12),
        0 6px 6px rgba(0,0,0,0.12),
        0 10px 10px rgba(0,0,0,0.12),
        0 18px 18px rgba(0,0,0,0.12);
        img {
          width: 100%;
          height: 100%;
        }
      }
      &__image:hover {
        box-shadow: 0 1px 1px rgba(0,0,0,0.12),
        0 2px 2px rgba(0,0,0,0.12),
        0 4px 4px rgba(0,0,0,0.12),
        0 8px 8px rgba(0,0,0,0.12),
        0 16px 16px rgba(0,0,0,0.12);
      }
    }
  }
}
@media(max-width: 1729px) {
  .production-home {
    &__container {
      &__item {
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        width: 597px;
        &__image {
          width: 597px;
          height: 425px;
        }
      }
    }
  }
}
@media(max-width: 1429px) {
  .production-home {
    &__container {
      &__item {
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        width: 477px;
        &__title {
          font-size: 24px;
        }
        &__image {
          width: 477px;
          height: 340px;
        }
      }
    }
  }
}
@media(max-width: 1190px) {
  .production-home {
    &__container {
      gap: 32px;
      &__item {
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        width: 429px;
        &__title {
          font-size: 24px;
        }
        &__image {
          width: 429px;
          height: 306px;
          img {
            height: 100%;
          }
        }
      }
    }
  }
}
@media(max-width: 1051px) {
  .production-home {
    &__container {
      gap: 32px;
      &__item {
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        width: 100%;
        &__title {
          font-size: 40px;
        }
        &__image {
          height: 532px;
          width: 100%;
        }
      }
    }
  }
}
@media(max-width: 992px) {
  .production-home {
    padding: 100px 32px;
  }
}
@media(max-width: 916px) {
  .production-home {
    &__title {
      span {
        font-size: 38px;
      }
    }
    &__container {
      &__item {
        &__title {
          font-size: 32px;
        }
      }
    }
  }
}
@media(max-width: 800px) {
  .production-home {
    &__container {
      gap: 32px;
      &__item {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        width: 100%;
        &__image {
          height: 432px;
        }
      }
    }
  }
}
@media(max-width: 670px) {
  .production-home {
    padding: 75px 32px;
    &__container {
      gap: 32px;
      &__item {
        gap: 24px;
        &__image {
          height: 332px;
        }
      }
    }
  }
}
@media(max-width: 450px) {
  .production-home {
    padding: 75px 32px;
    gap: 30px;
    &__title {
      span {
        font-size: 23px;
      }
    }
    &__container {
      gap: 32px;
      &__item {
        gap: 24px;
        &__title {
          font-size: 18px;
        }
        &__image {
          height: 200px;
        }
      }
    }
  }
}
</style>