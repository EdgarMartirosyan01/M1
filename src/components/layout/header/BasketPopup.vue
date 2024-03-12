<template>
  <div class="popup">
    <div class="basket">
      <el-button @click="openDialog">
        <div class="basket__item">
          <img src="@/assets/icons/shopping_basket.svg" alt="M1">
          <div class="basket__item__count">
            {{ cartItems.length }}
          </div>
        </div>
      </el-button>
    </div>
    <el-dialog
        v-model="isDialogVisible"
        :title="$t('Корзина')"
        @close="closeDialog"
    >
      <div class="popup__container">
        <div class="popup__container__contacts" v-if="showContacts">
          <BasketContacts/>
        </div>
        <div class="popup__container__item" v-for="(item, index) in cartItems" :key="index">
          <div class="popup__container__item__title">{{$t( item.title )}}</div>
          <div class="popup__container__item__count">
            <div @click="decrementCount(index)">
              <img src="@/assets/icons/count_minus.png" alt="M1">
            </div>
            {{ item.count }}
            <div @click="incrementCount(index)">
              <img src="@/assets/icons/count_plus.png" alt="M1">
            </div>
          </div>
        </div>
        <div class="popup__container__button" v-if="!showContacts">
          <button @click="buyClicked">
            {{ $t('Заказать Сейчас') }}
          </button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BasketContacts from "@/components/pages/contacts/contacts-components/BasketContacts.vue";

export default {
  name: "BasketPopup",
  components: {BasketContacts},
  data() {
    return {
      isDialogVisible: false,
      showContacts: false,
    };
  },
  methods: {
    openDialog() {
      this.isDialogVisible = true;
    },
    closeDialog() {
      this.isDialogVisible = false;
    },
    buyClicked() {
      this.showContacts = true;
    },
    incrementCount(index) {
      this.cartItems[index].count++;
    },
    decrementCount(index) {
      if (this.cartItems[index].count > 1) {
        this.cartItems[index].count--;
      }
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  }
};
</script>


<style scoped lang="scss">
.popup {
  background: transparent;
  .el-button {
    background: transparent;
    border: none;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-radius: 12px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.12),
      0 2px 2px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 8px 8px rgba(0,0,0,0.12),
      0 16px 16px rgba(0,0,0,0.12);
      background: #DF2129;
      &__title {
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        color: white;
      }
      &__count {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        color: white;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        div {
          padding: 0 8px;
          cursor: pointer;
          img {
            width: 15px;
            height: 15px;
            fill: white;
          }
        }
        div:hover {
          opacity: 0.8;
          transition: 0.3s;
        }
      }
    }
    &__button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
      button {
        padding: 12px;
        border-radius: 12px;
        background: #DF2129;
        color: white;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        border: none;
        cursor: pointer;
        box-shadow: 0 1px 1px rgba(0,0,0,0.12),
        0 2px 2px rgba(0,0,0,0.12),
        0 4px 4px rgba(0,0,0,0.12),
        0 8px 8px rgba(0,0,0,0.12),
        0 16px 16px rgba(0,0,0,0.12);
      }
      button:hover {
        opacity: 0.8;
      }
    }
  }
}
.basket {
  display: flex;
  align-items: center;
  justify-content: center;
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100px;
    height: 100px;
    border-radius: 12px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
    0 2px 2px rgba(0,0,0,0.12),
    0 4px 4px rgba(0,0,0,0.12),
    0 8px 8px rgba(0,0,0,0.12),
    0 16px 16px rgba(0,0,0,0.12);
    position: relative;
    backdrop-filter: blur(50px);
    transition: 0.4s;
    img {
      width: 65px;
      height: 65px;
    }
    &__count {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #DF2129;
      border-radius: 100%;
      color: #FFF;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      position: absolute;
      top: -6px;
      right: -6px;
    }
  }
  &__item:hover {
    background: dimgray;
    transition: 0.4s;
  }
}
@media(max-width: 991px) {
  .basket {
    &__item {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      img {
        width: 35px;
        height: 35px;
      }
      &__count {
        width: 20px;
        height: 20px;
        font-size: 8px;
        top: -6px;
        right: -6px;
      }
    }
  }
}
@media(max-width: 500px) {
  .popup__container__item {
    flex-direction: column;
  }
}
</style>
