<template>
  <div class="delivery">
    <div class="delivery__title">{{$t('доставка')}}</div>
    <div class="delivery__description">
      <span>{{$t('Продукция нашей компании доставляется автомобильным транспортом по регионам ЦФО, доставка в другие регионы РФ оговаривается отдельно. Мы используем как собственный парк автотранспорта, так и сторонних проверенных грузоперевозчиков. Доставка осуществляется в течение 10 дней с момента оплаты товара, либо ранее, если товар имеется в наличии на складе.')}}</span>
      <span>{{$t('Наличие товара на складе можно уточнить у менеджера компании, позвонив по телефону +7 000000000')}}</span>
      <span>{{$t('С каждой партией груза заказчику передаются накладная, паспорта качества и сертификаты на каждый товар.')}}</span>
    </div>
    <div class="delivery__types">
      <div class="delivery__types__title">{{$t('Виды ')}}<span>{{$t('доставки')}}</span></div>
      <div class="delivery__types__container-first">
        <div class="delivery__types__container-first__title">
          {{$t('1. самовывоз')}}
        </div>
        <div class="delivery__types__container-first__description">
          <span>{{$t('Произведенную продукцию заказчик может забрать собственным автотранспортом со склада, который находится по адресу: Московская область, г. Коломна, ул. Свердлова, д. 23. Производственная база iQ-Beton.Режим работы склада: ПН-ПТ с 8:00 до 17:00; СБ с 8:00 до 15:00 ВС – выходной.')}}</span>
          <span>{{$t('Водитель должен иметь при себе оригинал доверенности на получение груза. Заранее сообщите контактные данные водителя, марку и гос. номер автомашины, размер кузова и ее грузоподъемность')}}</span>
        </div>
      </div>
      <div class="delivery__types__container-second">
        <div class="delivery__types__container-second__title">
          {{$t('2. Доставка компанией')}}
        </div>
        <div class="delivery__types__container-second__description">
           <ul>
             <li>{{$t('Доставка осуществляется по согласованному графику отгрузки товара, который подписывается сторонами и является неотъемлемой частью договора поставки или по отдельной согласованной заявке покупателя')}}</li>
             <li>{{$t('При оформлении заказа следует указать точный адрес пункта доставки и телефон получателя груза.')}}</li>
             <li>{{$t('Товар загружается и отправляется со склада после того, как получатель товара подтвердит готовность его принять.')}}</li>
             <li>{{$t('В день доставки приёмщику следует постоянно находиться на связи по указанному номеру телефона, чтобы диспетчер предварительно сообщил о расчётном времени прибытия машины. Если приемщик товара не доступен или не отвечает, дата поставки переносится на другое время.')}}</li>
             <li>{{$t('Если территория, где находится пункт доставки, охраняется, заказчик должен оформить пропуск или принять товар перед въездом на территорию.')}}</li>
             <li>{{$t('Заказчику нужно обеспечить машине беспрепятственный подъезд к месту разгрузки (дорога должна иметь твердое покрытие шириной не менее 3 м, достаточную площадь с радиусом разворота не менее 15 м). Если требования не соблюдаются, товар будет доставлен максимально близко к месту планируемой выгрузки')}}</li>
             <li>{{$t('При доставке груза манипулятором заказчик должен предоставить для разгрузки одного стропальщика.')}}</li>
           </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryInfo"
}
</script>

<style scoped lang="scss">
.delivery {
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
  &__types {
    &__title {
      color: #000;
      font-family: Montserrat;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      padding: 100px 0 40px 0;
      span {
        color: #DF2129 !important;
      }
    }
    &__container-first {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      border-bottom: 4px solid #B0B0B0;
      padding-bottom: 40px;
      &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
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
    }
    &__container-second {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      padding-top: 70px;
      &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
      }
      &__description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        ul {
          li {
            color: #000;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
          }
        }
      }
    }
  }
}
@media(max-width: 1383px) {
  .delivery {
    padding: 60px 32px 100px 32px;
  }
}
@media(max-width: 524px) {
  .delivery {
    &__title {
      font-size: 50px;
    }
  }
}
</style>