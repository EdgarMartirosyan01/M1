<template>
  <div class="partners">
    <div class="partners__title">
      {{$t('Наши')}} <span>{{$t('партнеры')}}</span>
    </div>
    <div class="partners__title__description">
      {{$t('Работаем только с надежными поставщиками')}}
    </div>
    <div class="partners__container">
      <img src="@/assets/images/partners/Partner1.png" alt="Partner">
      <img src="@/assets/images/partners/Partner2.png" alt="Partner">
      <img src="@/assets/images/partners/Partner3.png" alt="Partner">
      <img src="@/assets/images/partners/Partner4.png" alt="Partner">
      <img src="@/assets/images/partners/Partner5.png" alt="Partner">
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPartners"
}
</script>

<style scoped lang="scss">
.partners {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 72px;
  gap: 32px;
  &__title {
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    span {
      color: #DF2129;
    }
  }
  &__description {
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 98px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    img {

    }
  }
}
@media(max-width: 1541px) {
  .partners {
    &__container {
      justify-content: center;
    }
  }
}
@media(max-width: 1383px) {
  .partners {
    padding: 100px 32px;
  }
}
</style>