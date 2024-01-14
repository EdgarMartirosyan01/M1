<template>
  <div class="important">
    <div class="important__title">{{$t('Важная информация!')}}</div>
    <div class="important__description">{{$t('При покупке блоков в заказ необходимо включить поддоны.  Блоки продаются  кратно поддонам, наша доставка осуществляется только целыми поддонами. Стоимость поддонов возвращается при их сдаче в течение 3 месяцев.')}}</div>
    <div class="important__description">{{$t('Если количество блоков не кратно поддонам, то погрузчик не сможет осуществить загрузку, поэтому блоки загружается клиентом самостоятельно.')}}</div>
  </div>
</template>

<script>
export default {
  name: "ImportantInfo"
}
</script>

<style scoped lang="scss">
  .important {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    padding: 0 72px 100px 72px;
    &__title {
      color: var(--red, #DF2129);
      font-family: Montserrat;
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
    }
    &__description {
      color: #000;
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }
  }
  @media(max-width: 470px) {
    .important {
      padding: 0 32px 100px 32px;
    }
  }
  @media(max-width: 1383px) {
    .important {
      &__title {
        font-size: 32px;
      }
    }
  }
</style>