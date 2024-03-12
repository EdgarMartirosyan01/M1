<template>
  <div class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="@/assets/images/M1-Logo.png" alt="M1">
      </router-link>
    </div>
    <div class="header__routes">
      <div class="header__routes__item" v-for="item in menuItems" :key="item.id">
        <a :href="item.route" class="header__routes__item__link" :key="item" @click="handleClickMenu(item)">
          {{ $t(item.title) }}
        </a>
      </div>
    </div>
    <div class="header__options">
      <div class="header__options__switcher">
        <LanguageSwitcher />
      </div>
      <div class="header__options__basket" v-if="cartItems && cartItems.length > 0">
        <BasketPopup :cartItems="cartItems" />
      </div>
    </div>
    <div class="header__menu-mobile">
      <div class="header__switcher-mobile">
        <LanguageSwitcher />
      </div>
      <div class="header__menu-mobile__basket-mobile" v-if="cartItems && cartItems.length > 0">
        <BasketPopup :cartItems="cartItems" />
      </div>
      <div class="header__menu-mobile__button">
        <img src="@/assets/icons/BurgerMenu.svg" alt="Construction" @click="drawer = true">
      </div>
      <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <div class="header__menu-mobile__item-container">
          <div class="header__menu-mobile__item-container__items" v-for="item in menuItems" :key="item.id">
            <a :href="item.route" class="header__menu-mobile__item-container__items__link" :key="item" @click="handleClickMenu(item)">
              {{ $t(item.title) }}
            </a>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import {LandingMenuItems} from "@/core/configs/NavbarMenuItems";
import LanguageSwitcher from "@/components/layout/header/LanguageSwitcher.vue";
import BasketPopup from "@/components/layout/header/BasketPopup.vue";

export default {
  name: "HeaderMenu",
  components: {BasketPopup, LanguageSwitcher},
  data() {
    return {
      menuItems: LandingMenuItems,
      menuOpen: false,
      drawer: false,
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    handleClickMenu(linkId) {
      this.$emit('handleClickMenu', linkId);
      this.menuOpen = false;
    },
    changeLanguage(selectedLanguage) {
      console.log("selectedLanguage",selectedLanguage)
      this.$i18n.locale = selectedLanguage;
    },
  }
}
</script>


<style lang="scss">
.header {
  width: 100%;
  height: 98px;
  background: linear-gradient(90deg, rgba(52,52,52,1) 14%, rgba(137,135,138,1) 75%);
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0 230px 0 230px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12),
  0 2px 2px rgba(0,0,0,0.12),
  0 4px 4px rgba(0,0,0,0.12),
  0 8px 8px rgba(0,0,0,0.12),
  0 16px 16px rgba(0,0,0,0.12);
  position: fixed;
  z-index: 333;
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 156px;
      height: 56px;
    }
  }
  &__options {
    display: flex;
    gap: 16px;
    position: relative;
    &__switcher {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__basket {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 90vh;
      right: -10vw;
    }
  }
  &__switcher-mobile {
    display: none;
    align-items: center;
    justify-content: center;
  }
  &__routes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    &__item {
      display: flex;
      &__link {
        color: #FFF;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        text-decoration: none;
      }
      &__link:hover  {
        transition: 0.3s;
        color: #DF2129 !important;
      }
    }
  }
  &__menu-mobile {
    display: none;
    position: relative;
    &__basket-mobile {
      display: none;
    }
  }
}
@media(max-width: 1668px) {
  .header {
    padding: 0 180px 0 180px;
    &__routes {
      &__item {
      }
    }
  }
}
@media(max-width: 1595px) {
  .header {
    padding: 0 84px 0 84px;
    &__routes {
      &__item {
      }
    }
  }
}
@media(max-width: 1383px) {
  .header {
    padding: 0 32px 0 32px;
    &__routes {
      &__item {
      }
    }
  }
}
@media(max-width: 1310px) {
  .header {
    padding: 0 32px 0 32px;
    &__routes {
      gap: 25px;
      &__item {
        display: flex;
        &__link {
        }
      }
    }
  }
}
@media(max-width: 991px) {
  .header {
    &__options {
      &__switcher {
        display: none;
      }
      &__basket {
        display: none;
      }
    }
    &__switcher-mobile {
      display: flex;
    }
    padding: 0 84px 0 84px;
    &__routes {
      display: none;
      &__item {
        &__link {
        }
      }
    }
      &__menu-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
      &__button {
        img {
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
        img:hover {
          transition: 0.3s;
          opacity: 0.7;
        }
      }
      &__item-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 98px;
        &__items {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 24px 16px;
          cursor: pointer;
          border-bottom: 0.5px solid gray;
          &__link {
            color: #FFF;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            text-decoration: none;
            width: 100%;
          }
        }
        &__items:hover {
          background: linear-gradient(90deg, rgba(137,135,138,1) 13%, rgba(52,52,52,1) 79%);
          box-shadow: 0 1px 1px rgba(0,0,0,0.12),
          0 2px 2px rgba(0,0,0,0.12),
          0 4px 4px rgba(0,0,0,0.12),
          0 8px 8px rgba(0,0,0,0.12),
          0 16px 16px rgba(0,0,0,0.12);
          transition: 0.5s;
        }
      }
      &__basket-mobile {
        display: flex;
        position: absolute;
        right: -2vw;
        top: 90vh;
      }
    }
  }
}
@media(max-width: 992px) {
  .header {
    padding: 0 32px 0 32px;
    &__routes {
      display: none;
      &__item {
        &__link {
        }
      }
    }
  }
}
@media(max-width: 790px) {
  .header {
    &__menu-mobile {
      &__item-container {
        &__items {
          &__link {
            font-size: 16px;
            font-weight: 600;
            line-height: 26px;
          }
        }
      }
    }
  }
}
@media(min-width: 1980px) {
  .header__options__basket {
    right: -5vw;
  }
}
@media(max-width: 1595px) {
  .header__options__basket {
    right: -5vw;
  }
}
@media(max-width: 1383px) {
  .header__options__basket {
    right: -2vw;
  }
}
@media(max-width: 335px) {
  .header__menu-mobile__basket-mobile {
    right: 10vw;
  }
}
</style>
