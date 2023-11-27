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
  </div>
</template>

<script>
import {LandingMenuItems} from "@/core/configs/NavbarMenuItems";

export default {
  name: "HeaderMenu",
  data() {
    return {
      menuItems: LandingMenuItems,
      menuOpen: false,
    }
  },
  methods: {

    handleClickMenu(linkId) {
      this.$emit('handleClickMenu', linkId);
      this.menuOpen = false;
    },
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 169px;
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
  position: sticky ;
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 287px;
      height: 103px;
    }
  }
  &__routes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    &__item {
      display: flex;
      padding: 106px 0 33px 0;
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
}
@media(max-width: 1668px) {
  .header {
    padding: 0 180px 0 180px;
    &__routes {
      &__item {
        padding: 84px 0 26px 0;
      }
    }
  }
}
@media(max-width: 1595px) {
  .header {
    padding: 0 84px 0 84px;
    &__routes {
      &__item {
        padding: 100px 0 26px 0;
      }
    }
  }
}
@media(max-width: 1383px) {
  .header {
    padding: 0 32px 0 32px;
    &__routes {
      &__item {
        padding: 100px 0 26px 0;
      }
    }
  }
}
@media(max-width: 1310px) {
  .header {
    padding: 0 32px 0 32px;
    &__logo {
      img {
        width: 156px;
        height: 56px;
      }
    }
    &__routes {
      gap: 25px;
      &__item {
        display: flex;
        padding: 106px 0 33px 0;
        &__link {
        }
      }
    }
  }
}
@media(max-width: 1174px) {
  .header {
    padding: 0 84px 0 84px;
    &__logo {
    }
    &__routes {
      display: none;
      &__item {
        &__link {
        }
      }
    }
  }
}
@media(max-width: 1174px) {
  .header {
    padding: 0 84px 0 84px;
    &__logo {
    }
    &__routes {
      display: none;
      &__item {
        &__link {
        }
      }
    }
  }
}
@media(max-width: 992px) {
  .header {
    padding: 0 32px 0 32px;
    &__logo {
    }
    &__routes {
      display: none;
      &__item {
        &__link {
        }
      }
    }
  }
}

</style>
