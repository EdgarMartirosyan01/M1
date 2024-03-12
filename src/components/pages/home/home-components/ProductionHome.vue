<template>
  <div class="production-home" ref="ProductionHome">
    <div class="production-home__title">
      <span>{{$t('ПРОИЗВОДИМ ПРОДУКЦИЮ')}}</span>
      <span class="production-home__title__red">{{$t('ДЛЯ СТРОИТЕЛЬСТВА')}}</span>
    </div>
    <div class="production-home__container">
      <div
          class="production-home__container__item"
          v-for="product in PRODUCT_DATA"
          :key="product.id"
      >
        <div class="production-home__container__item__title">
          {{ $t(product.title) }}
        </div>
        <div class="production-home__container__item__title__form add-to-card-form">
          <el-form>
            <el-input-number
                v-model="product.count"
                type="number"
                required
                clearable
                autocomplete="off"
            ></el-input-number>
            <el-button type="primary" @click="addToCart(product, product.count)">
              {{$t('Добавить В Корзину')}}
            </el-button>
          </el-form>
        </div>
        <div class="production-home__container__item__images" id="productionImageList">
          <div
              class="production-home__container__item__images__image"
              id="productionImage"
          >
            <el-carousel trigger="click" :interval="5000" arrow="always">
              <el-carousel-item v-for="image in product.images" :key="image.id">
                <img class="production-home__container__item__image" :src="image" alt="Blocks">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PRODUCT_DATA } from "@/core/utils/Constants";

export default {
  name: "ProductionHome",
  data() {
    return {
      count: 1,
      PRODUCT_DATA
    };
  },
  methods: {
    addToCart(product, count) {
      product.count = count;
      this.$store.dispatch('addToCartAction', product);
    }
  }
};
</script>


<style scoped lang="scss">
.production-home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
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
    gap: 50px;
    align-items: flex-start;
    max-width: 1980px;
    width: 100%;
    &__item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      justify-content: center;
      padding: 32px;
      height: 600px;
      border-radius: 12px;
      box-shadow: 0 3px 3px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 6px 6px rgba(0,0,0,0.12),
      0 10px 10px rgba(0,0,0,0.12),
      0 18px 18px rgba(0,0,0,0.12);
      max-width: 750px;
     &__title {
       color: #000;
       font-family: Montserrat;
       font-size: 39px;
       font-style: normal;
       font-weight: 700;
       line-height: normal;
       text-transform: capitalize;
     }
      &__form {
        padding: 16px 0;
      }
      &__images {
        display: flex;
        width: 100%;
        &__image {
          width: 750px;
          box-shadow: 0 3px 3px rgba(0,0,0,0.12),
          0 4px 4px rgba(0,0,0,0.12),
          0 6px 6px rgba(0,0,0,0.12),
          0 10px 10px rgba(0,0,0,0.12),
          0 18px 18px rgba(0,0,0,0.12);
          border-radius: 12px;
          overflow: hidden;
          img {
            width: 750px;
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
@media(max-width: 1839px) {
  .production-home {
    padding: 100px 48px;
    &__container {
      &__item {
        gap: 24px;
        width: 700px;
        &__images {
          &__image {
            width: 700px;
          }
        }
      }
    }
  }
}
@media(max-width: 1545px) {
  .production-home {
    &__container {
      &__item {
        gap: 24px;
        width: 600px;
        &__title {
          font-size: 24px;
        }
        &__images {
          &__image {
            width: 600px;
          }
        }
      }
    }
  }
}
@media(max-width: 1345px) {
  .production-home {
    &__container {
      gap: 32px;
      &__item {
        width: 500px;
        &__images {
          &__image {
            width: 500px;
            img {
              height: 100%;
            }
          }
        }
      }
    }
  }
}
@media(max-width: 1129px) {
  .production-home {
    &__container {
      &__item {
        width: 420px;
        &__title {
          font-size: 24px;
        }
        &__images {
          &__image {
            width: 420px;
          }
        }
      }
    }
  }
}
@media(max-width: 992px) {
  .production-home {
    &__container {
      &__item {
        width: 350px;
        height: 500px;
        &__images {
          &__image {
            width: 350px;
          }
        }
      }
    }
  }
}
@media(max-width: 828px) {
  .production-home {
    padding: 100px 32px;
    &__title {
      span {
        font-size: 38px;
      }
    }
    &__container {
      &__item {
        width: 100%;
        &__images {
          width: 100%;
          &__image {
            width: 100%;
            img {
              width: 100%;
            }
          }
        }
        &__title {
          font-size: 32px;
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