<template>
  <div class="header-dropdown ms-3">
    <el-dropdown
        ref="localeDropdown"
        trigger="contextmenu"
        style="display: block"
        placement="bottom-end"
        @visible-change="handleVisibilityChange"
        class="locale-switcher"
    >
      <div class="btn-locale-switcher text-uppercase" @click="openHeaderDropdown">
        {{ supportedLocales[currentLocale].shortKey }}
        <img v-show="isDropdownVisible" src="@/assets/icons/chevron-up.svg" alt="">
        <img v-show="!isDropdownVisible" src="@/assets/icons/chevron-down.svg" alt="">
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
              v-for="(locale, index) in supportedLocales"
              :key="index"
              @click="setLanguage(locale.key)"
              :style="currentLocale === locale.key? {background: '#323232'}: ''"
          >
            <img class="language-flag" :src="locale.flag" alt="">
            <span class="dropdown-item-title">{{ locale.title }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {LocalizationService} from "@/core/plugins/LocalizationService";

export default {
  name: "LanguageSwitcher",
  data() {
    return {
      isDropdownVisible: false,
      supportedLocales: LocalizationService.supportedLocales,
    }
  },
  computed: {
    currentLocale() {
      return LocalizationService.getLocale();
    }
  },
  methods: {
    openHeaderDropdown() {
      if (!this.isDropdownVisible) {
        this.$refs.localeDropdown.handleOpen();
      } else {
        this.$refs.localeDropdown.handleClose();
      }
    },
    handleVisibilityChange(isVisible) {
      this.isDropdownVisible = isVisible;
    },
    setLanguage(locale) {
      LocalizationService.setLocale(locale);
    },
  }
}
</script>

<style lang="scss" scoped>

.btn-locale-switcher {
  color:  #F2F2F2;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  display: flex;
  gap: 2px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 6px;
  img {
    width: 40px;
    height: 40px;
  }
}
.language-flag {
  width: 20px;
  height: 20px;
  margin-right: 25px;
}
</style>