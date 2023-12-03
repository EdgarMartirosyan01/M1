<template>
  <div class="welcome">
    <div class="welcome__title">
      {{$t('ПРОИЗВОДСТВО ПОЛИСТИРОЛБЕТОНА ИННОВАЦИОННОГО ЭНЕРГОЭФФЕКТИВНОГО')}} <span>{{$t('ЛЕГКОГО БЕТОНА')}}</span>
    </div>
    <div class="welcome__list">
      <ul>
        <li>{{$t('Оказываем услуги по заливке и утеплению полистиролбетоном')}}</li>
        <li>{{$t('Строим быстровозводимые энергоэффективные дома')}}</li>
        <li>{{$t('Производим современные строительные материалы из полистиролбетона высокого качества')}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeHome"
}
</script>

<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  gap: 53px;
  width: 100%;
  padding: 110px 0 110px 230px;
  background: linear-gradient(90deg, rgba(52,52,52,1) 14%, rgba(137,135,138,1) 75%);
  &__title {
    color: #FFF;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 75px;
    text-transform: capitalize;
    max-width: 648px;
    span {
      color: #DF2129 !important;
    }
  }
  &__list {
    max-width: 648px;
    ul {
      li {
        color: #FFF;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }
}
@media(max-width: 1668px) {
  .welcome {
    padding: 110px 0 110px 180px;
  }
}
@media(max-width: 1595px) {
  .welcome {
    padding: 110px 0 110px 84px;
  }
}
@media(max-width: 1383px) {
  .welcome {
    padding: 110px 0 110px 32px;
  }
}
@media(max-width: 740px) {
  .welcome {
    padding: 80px 32px 80px 32px;
    gap: 38px;
    &__title {
      font-size: 38px;
      line-height: 60px;
      max-width: 100%;
    }
    &__list {
      max-width: 100%;
    }
  }
}
@media(max-width: 567px) {
  .welcome {
    padding: 80px 32px 80px 32px;
    gap: 38px;
    &__title {
      font-size: 28px;
      line-height: 48px;
      max-width: 100%;
    }
    &__list {
      max-width: 100%;
      ul {
        li {
          font-size: 16px;
        }
      }
    }
  }
}
@media(max-width: 430px) {
  .welcome {
    gap: 38px;
    &__title {
      font-size: 22px;
      line-height: 38px;
    }
    &__list {
      ul {
        li {
          font-size: 14px;
        }
      }
    }
  }
}
</style>