<template>
  <div class="production-home">
    <div class="production-home__title">
      <span>{{$t('ПРОИЗВОДИМ ПРОДУКЦИЮ')}}</span>
      <span class="production-home__title__red">{{$t('ДЛЯ СТРОИТЕЛЬСТВА')}}</span>
    </div>
    <div class="production-homeF">
      <div
          class="production-home__container__item"
          v-for="(item, index) in productData"
          :key="index"
      >
        <div class="production-home__container__item__title">
          {{ $t(item.title) }}
        </div>
        <div class="production-home__container__item__images">
          <div
              v-for="(image, imgIndex) in item.images"
              :key="imgIndex"
              class="production-home__container__item__images__image">
            <img
                :src="image"
                alt="Product Image"
                class="production-home__container__item__image"
            />
          </div>
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
          title: "Стеновые Блоки",
          images: [
            require('@/assets/images/products/Product1.jpg'),
            require('@/assets/images/products/Product2.jpg'),
            require('@/assets/images/products/Product4.jpg'),
            require('@/assets/images/products/Product6.jpg'),
          ]
        },
        {
          title: "Фасадные Блоки",
          images: [
            require('@/assets/images/products/BlockHomeV.jpg'),
            require('@/assets/images/products/PolyBlock2.jpg'),
          ]
        },
        {
          title: "Теплоизоляционные Плитки",
          images: [
            require('@/assets/images/products/TermoBlockWall.jpg'),
            require('@/assets/images/products/TermoBlockWall2.jpg'),
          ]
        },
        {
          title: "Заборы из Полистиролбетона",
          images: [
            require('@/assets/images/products/PolyBlock4.jpg'),
            require('@/assets/images/products/PolyBlock5.jpg'),
          ]
        },
        {
          title: "Армированные перемычки",
          images: [
            require('@/assets/images/products/ArmorBlock.jpg'),
          ]
        },
        {
          title: "Вибропрессованные блоки",
          images: [require('@/assets/images/products/PolyBlock3.jpg'),]
        },
        {
          title: "сухие строительные смеси",
          images: [require('@/assets/images/products/ProductGroup.jpg'),]
        },
      ]
    },
  }
}
</script>

<style scoped lang="scss">
.production-home {
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1570px;
    &__item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-top: 48px;
      align-items: flex-start;
      justify-content: center;
      width: auto;
      flex-wrap: wrap;
     &__title {
       color: #000;
       font-family: Montserrat;
       font-size: 39px;
       font-style: normal;
       font-weight: 700;
       line-height: normal;
       text-transform: capitalize;
     }
      &__images {
        display: flex;
        flex-wrap: wrap;
        gap: 64px;
        max-width: 1920px;
        width: 100%;
        justify-content: space-between;
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
}
@media(max-width: 1729px) {
  .production-home {
    padding: 100px 48px;
    &__container {
      &__item {
        flex-wrap: wrap;
        gap: 24px;
        align-items: flex-start;
        &__images {
          flex-wrap: wrap;
          &__image {
            width: 597px;
            height: 425px;
          }
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
        &__title {
          font-size: 24px;
        }
        &__images {
          &__image {
            width: 477px;
            height: 340px;
          }
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
        &__title {
          font-size: 24px;
        }
        &__images {
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
        &__images {
          &__image {
            height: 532px;
            width: 100%;
          }
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
        &__images {
          &__image {
            height: 432px;
          }
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
        &__images {
          &__image {
            height: 332px;
          }
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
        &__images {
          &__image {
            height: 200px;
          }
        }
      }
    }
  }
}
</style>