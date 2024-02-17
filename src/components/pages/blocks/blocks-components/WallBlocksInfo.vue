<template>
  <div class="blocks">
    <div class="blocks__title">{{$t('СТЕНОВЫЕ БЛОКИ')}}</div>
    <div class="blocks__description">
      <span>{{$t('Продукция нашей компании доставляется автомобильным транспортом по регионам Армении. Мы используем как собственный парк автотранспорта, так и сторонних проверенных грузоперевозчиков. Доставка осуществляется в течение 10 дней с момента оплаты товара, либо ранее, если товар имеется в наличии на складе.Стеновые блоки из полистиролбетона M1 GROUPE — современный технологичный материал, соответствующий требованиям ГОСТ 33929 - 2016, который позволяет строить теплые и надежные здания любого назначения и сочетают в себе достоинства бетона по прочности и пенополистирола по тепло - и звукоизоляции.')}}</span>
      <span>{{$t('Блоки M1 GROUPE имеют низкое водопоглощение, легкий вес и при этом высокую прочность на сжатие и на растяжение при изгибе, что делает их прочными и долговечными. Их использование увеличивает скорость работы и снижает стоимость строительства. Применение этого материала в 2-3 раза эффективнее и выгоднее по сравнению с пенобетоном, газобетоном и другими видами легкого бетона.')}}</span>
      <span>{{$t('Блоки M1 GROUPE применяют для возведения наружных самонесущих оградительных конструкций с опиранием на несущий монолитный каркас зданий до 25 этажей, а также возведения наружных несущих стен и внутренних перегородок в малоэтажном строительстве.')}}</span>
      <span>{{$t('Наша компания производит стеновые блоки из полистиролбетона широкого диапазона плотностей и размерного ряда.')}}</span>
    </div>
    <div class="blocks__container">
      <div class="blocks__container__title">{{$t('Блоки из полистиролбетона m1 gROUPE')}}</div>
      <div class="blocks__container__carousel wall-blocks">
        <div class="blocks__container__carousel__items" >
          <span v-for="item in blockImage" :key="item">
            <img :src="item.image" alt="Blocks">
          </span>
        </div>
        <div class="blocks__container__carousel__container">
          <el-carousel trigger="click" :interval="5000" arrow="always">
            <el-carousel-item v-for="item in blockImage" :key="item">
              <img :src="item.image" alt="Blocks">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WallBlocksInfo",
  computed: {
    blockImage() {
      return [
        {
          image: require('@/assets/images/products/PolyBlock1.jpg'),
        },
        {
          image: require('@/assets/images/products/PolyBlock2.jpg'),
        },
        {
          image: require('@/assets/images/products/PolyBlock3.jpg'),
        },
        {
          image: require('@/assets/images/products/Product3.jpg'),
        },
        {
          image: require('@/assets/images/products/Product4.jpg'),
        },
        {
          image: require('@/assets/images/products/Product6.jpg'),
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.blocks {
  padding: 60px 72px 100px 72px;
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
    padding-bottom: 40px;
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
  &__container {
    padding-top: 100px;
    &__title {
      color: #000;
      font-family: Montserrat;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
    }
    &__carousel {
      padding-top: 43px;
      display: flex;
      flex-direction: column;
      gap: 22px;
      height: 100%;
      &__container {
        max-width: 841px;
        height: 621px;
        img {
          max-width: 841px;
          height: 621px;
        }
      }
      &__items {
        max-width: 841px;
        height: 150px;
        display: flex ;
        gap: 33px;
        img {
          width: 155px;
          height: 130px;
        }
      }
    }
  }
}
@media(max-width: 1383px) {
  .blocks {
    padding: 60px 32px 100px 32px;
  }
}
@media(max-width: 916px) {
  .blocks {
    &__container {
      &__carousel {
        &__container {
          max-width: 672px;
          height: 496px;
          img {
            max-width: 672px;
            height: 496px;
          }
        }
        &__items {
          max-width: 672px;
          height: 120px;
          display: flex ;
          gap: 33px;
          img {
            width: 124px;
            height: 104px;
          }
        }
      }
    }
  }
}
@media(max-width: 731px) {
  .blocks {
    &__container {
      &__title {
        font-size: 26px;
      }
      &__carousel {
        &__container {
          max-width: 537px;
          height: 396px;
          img {
            max-width: 537px;
            height: 396px;
          }
        }
        &__items {
          max-width: 537px;
          height: 96px;
          display: flex ;
          gap: 15px;
          flex-wrap: wrap;
          img {
            width: 99px;
            height: 83px;
          }
        }
      }
    }
  }
}
@media(max-width: 593px) {
  .blocks {
    &__container {
      &__carousel {
        &__container {
          max-width: 429px;
          height: 316px;
          img {
            max-width: 429px;
            height: 316px;
          }
        }
        &__items {
          max-width: 429px;
          height: 76px;
          display: flex ;
          gap: 15px;
          flex-wrap: wrap;
          img {
            width: 79px;
            height: 66px;
          }
        }
      }
    }
  }
}
@media(max-width: 524px) {
  .blocks {
    &__title {
      font-size: 45px;
    }
  }
}
@media(max-width: 494px) {
  .blocks {
    &__container {
      &__title {
        font-size: 26px;
      }
      &__carousel {
        &__container {
          max-width: 343px;
          height: 252px;
          img {
            max-width: 343px;
            height: 252px;
          }
        }
        &__items {
          max-width: 343px;
          height: 100%;
          display: flex ;
          gap: 15px;
          flex-wrap: wrap;
          img {
            width: 63px;
            height: 52px;
          }
        }
      }
    }
  }
}
</style>