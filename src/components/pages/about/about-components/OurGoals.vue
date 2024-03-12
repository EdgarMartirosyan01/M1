<template>
  <div class="goals">
    <div class="goals__container">
      <div class="goals__container__left">
        <div class="goals__container__left__description">
          <span>{{$t('Стратегической целью компании является популяризация полистиролбетона и вывод его на качественно иной, высокий уровень конкурентоспособности среди аналогичных материалов')}}</span>
          <span>{{$t('Долгое время мы внимательно изучали рынок и следили за передовыми тенденциями в сфере производства строительных материалов. Использование изделий из полистиролбетона выделяется как одно из наиболее перспективных направлений в современном строительстве.')}}</span>
          <span>{{$t('Однако практика показывает, что и строительный комплекс, и частные заказчики недостаточно знают о бесспорных преимуществах и экономической выгоде применения этой технологии. В результате отдают предпочтение более разрекламированному материалу который по ключевым характеристикам значительно уступает полистиролбетону.')}}</span>
          <span>{{$t('Но мы уверены в перспективах этого направления и выбрали иной подход к решению данной проблемы. Так появился наш проект, цель которого — производство, продвижение и реализация продукции из полистиролбетона под торговой маркой M1 GROUPE')}}</span>
        </div>
      </div>
      <div class="goals__container__right">
        <div class="goals__container__right__title">
          {{$t('Наши')}} <span>{{$t('цели')}}</span>
        </div>
<!--        <img src="@/assets/images/about/aboutImage2.png" alt="About Us">-->
      </div>
    </div>
    <div class="goals__container reverse">
      <div class="goals__container__left">
        <div class="goals__container__left__description">
          <span>{{$t('Мы уверены, что единственный путь к успешному развитию бизнеса — это предлагать продукцию и услуги, которые полностью отвечает требованиям заказчиков.')}}</span>
          <span>{{$t('Главное преимущество продукции M1 Group — высокий уровень контроля качества на каждом этапе производства: при выборе и закупке сырья и материалов, ведении технологических процессов со строгим соблюдением всех норм, при упаковке и доставке продукции на строительный объект')}}</span>
          <span>{{$t('В сфере услуг наша компания предлагает качественный и надежный сервис. Мы ответственно подходим к выполнению всех стадий оказания услуг, учитывая запросы и пожелания наших заказчиков.')}}</span>
          <span>{{$t('Доверяя нам, вы выбираете качественное и эффективное решение своих строительных задач!')}}</span>
        </div>
      </div>
      <div class="goals__container__right">
        <div class="goals__container__right__title">
          {{$t('Наш')}} <span>{{$t('подход')}}</span>
        </div>
<!--        <img src="@/assets/images/about/aboutImage1.png" alt="About Us">-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurGoals"
}
</script>

<style scoped lang="scss">
.goals {
  padding: 0 72px 100px 72px;
  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-top: 100px;
    &__left {
      max-width: 746px;
      &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        padding-bottom: 40px;
        span {
          color: #DF2129;
        }
      }
      &__description {
        display: flex;
        flex-direction: column;
        gap: 32px;
        span {
          color: #000;
          font-family: Montserrat;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
    &__right {
      &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        padding-bottom: 40px;
        display: none;
        span {
          color: #DF2129;
        }
      }
    }
  }
}
.reverse {
  flex-direction: row-reverse;
}
@media(max-width: 1706px) {
  .goals {
    &__container {
      justify-content: space-between;
      flex-direction: column-reverse;
      &__left {
        max-width: 100%;
        &__title {
          display: none;
        }
      }
      &__right {
        &__title {
          display: flex;
        }
      }
    }
  }
  .reverse {
    flex-direction: column-reverse;
  }
}
@media(max-width: 870px) {
  .goals {
    &__container {
      &__right {
        img {
          width: 648px;
          height: 506px;
        }
      }
    }
  }
}
@media(max-width: 697px) {
  .goals {
    &__container {
      &__right {
        img {
          width: 518px;
          height: 404px;
        }
      }
    }
  }
}
@media(max-width: 578px) {
  .goals {
    &__container {
      &__right {
        img {
          width: 414px;
          height: 323px;
        }
      }
    }
  }
}
@media(max-width: 476px) {
  .goals {
    &__container {
      &__right {
        img {
          width: 331px;
          height: 258px;
        }
      }
    }
  }
}
@media(max-width: 383px) {
  .goals {
    &__container {
      &__right {
        &__title {
          font-size: 32px;
          display: flex;
          flex-wrap: wrap;
        }
        img {
          width: 264px;
          height: 206px;
        }
      }
      &__left {
        &__title {
          font-size: 32px;
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }
}
@media(max-width: 1383px) {
  .goals {
    padding: 0 32px 100px 32px;
  }
}
</style>