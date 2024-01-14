<template>
  <div class="criteria">
    <div class="criteria__title">
      {{$t('ПОЧЕМУ С НАМИ')}} <span>{{$t('СТОИТ РАБОТАТЬ')}}</span>
    </div>
    <div class="criteria__container">
      <div
          class="criteria__container__item"
          v-for="(item, index) in criteriaData"
          :key="index"
      >
        <div class="criteria__container__item__icon">
          <img :src="item.icon" alt="Icon">
        </div>
        <div class="criteria__container__item__title">
          {{ item.title }}
        </div>
        <div class="criteria__container__item__description">
          {{ item.description }}
          {{ item.description2}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CriteriaHome",
  computed: {
    criteriaData() {
      return [
        {
          icon: require('@/assets/icons/criteriaIcon1.svg'),
          title: "Знаем свое дело",
          description: "В нашей компании работает команда профессионалов, которая с 2004 года успешно реализовала множество проектов в сфере строительства и производства строительных материалов.",
          description2: "Все сотрудники прошли специальную подготовку и постоянно повышают уровень своей квалификации.Мы знаем все потребности и проблемы рынка и стараемся, чтобы каждый наш клиент остался доволен как товаром, так и предоставляемым сервисом. Наш опыт и качество производимой продукции — залог вашего успеха!",
        },
        {
          icon: require('@/assets/icons/criteriaIcon2.svg'),
          title: "Собственное производство",
          description: "В активе компании — собственный производственный цех 1000 кв.м и складская территория 13000м2 расположенная  в  РА, Араратский марз, село Арарат, Арарат, 5 участок Ереванского шоссе." ,
        },
        {
          icon: require('@/assets/icons/criteriaIcon3.svg'),
          title: "Нам можно доверять",
          description: "Наш принцип — работать честно и на совесть. Это не просто слова: мы предоставляем нашим клиентам полную информацию о заказе и проделанной работе, поставщиках сырья и применяемых материалов, вовремя предоставляем все отчетные документы.",
        },
        {
          icon: require('@/assets/icons/criteriaIcon4.svg'),
          title: "Программа лояльности",
          description: "Для постоянных клиентов действуют индивидуальные условия сотрудничества:Программа «Рекомендация» — бонусы за каждого привлеченного клиентаСпециальные акции, бонусы, скидки, подарки.Мы ценим своих клиентов и с удовольствием находим, чем их порадовать.",
        },
        {
          icon: require('@/assets/icons/criteriaIcon5.svg'),
          title: "Индивидуальный подход",
          description: "Наша цель — ваш правильный выбор.Мы стремимся дать максимум информации о продукте, подобрать оптимальные решения под ваши задачи и оказать полное содействие в их согласовании на любом уровне. Ваш персональный менеджер на связи 24/7.",
        },
        {
          icon: require('@/assets/icons/criteriaIcon6.svg'),
          title: "Исключительное качество",
          description: "Мы дорожим своими клиентами и своей репутацией. Поэтому предлагаем только материалы высокого качества.Вся продукция под маркой M1 GROUPE производится исключительно из качественного первичного сырья ведущих производителей отрасли и изготавливается на современных автоматизированных производственных линиях. Материалы сертифицированы и обеспечены необходимой документацией.",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.criteria {
  padding: 80px 71px 100px 71px;
  &__title {
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    padding-bottom: 55px;
    span {
      color: #DF2129 !important;
    }
  }
  &__container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &__item {
      width: 732px;
      height: 398px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      &__icon {
      }
      &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
      }
      &__description {
        color: #333;
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
@media(max-width: 1655px) {
  .criteria {
    padding: 80px 71px 100px 71px;
    &__container {
      &__item {
        width: 600px;
      }
    }
  }
}
@media(max-width: 1373px) {
  .criteria {
    &__title {
      font-size: 45px;
    }
    &__container {
      width: 100%;
      &__item {
        width: 100%;
        height: auto;
        padding-bottom: 60px;
      }
    }
  }
}
@media(max-width: 992px) {
  .criteria {
    padding: 80px 32px 100px 32px;
    &__title {
      width: 466px;
    }
  }
}
@media(max-width: 512px) {
  .criteria {
    &__title {
      font-size: 37px;
      width: 346px;
    }
    &__container {
      width: 100%;
      &__item {
        width: 100%;
        &__title {
          font-size: 28px;
        }
        &__description {
          font-size: 16px;
        }
      }
    }
  }
}
@media(max-width: 400px) {
  .criteria {
    &__title {
      font-size: 32px;
      width: 300px;
    }
  }
}
@media(max-width: 343px) {
  .criteria {
    &__title {
      font-size: 25px;
      width: 250px;
    }
  }
}
</style>