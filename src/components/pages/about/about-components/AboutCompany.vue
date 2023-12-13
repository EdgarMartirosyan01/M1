<template>
  <div class="company">
    <div class="company__title">
      {{$t('о кОМПАНИИ')}}
    </div>
    <div class="company__description">
      <span>{{$t('Компания СТРОИТЕЛЬНЫЕ КОНСТРУКЦИИ - команда профессионалов с многолетним опытом работы в строительной отрасли. Мы занимаемся производством и реализацией строительных материалов на территории РФ. Основным направлением деятельности нашей компании является производство инновационного, энергоэффективного строительного материала, полистиролбетона, не имеющего аналогов в современном строительстве.')}}</span>
      <span>{{$t('Наша продукция изготавливается в строгом соответствии со стандартами ГОСТ 33929-2016 на современном технологичном оборудовании, что позволяет нам быть лидерами на этом направлении, а нашей торговой марке M1 GROUPE - знаком качества продукции из полистиролбетона.')}}</span>
    </div>
    <div class="company__carousel">
      <el-carousel :interval="5000" height="818px">
        <el-carousel-item v-for="item in blockImage" :key="item">
          <img :src="item.image" alt="Blocks">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCompany",
  computed: {
    blockImage() {
      return [
        {
          image: require('@/assets/images/carousel-block.png'),
        },
        {
          image: require('@/assets/images/carousel-block.png'),
        },
        {
          image: require('@/assets/images/carousel-block.png'),
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.company {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 60px 72px 0 72px;
  gap: 60px;
  &__title {
    color: #DF2129;
    font-family: Montserrat;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 32px;
    span {
      color: #000;
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 150% */
    }
  }
  &__carousel {
    width: 100%;
    height: 100%;
  }
}
@media(max-width: 1383px) {
  .company {
    padding: 60px 32px 0 32px;
  }
}
@media(max-width: 608px) {
  .company {
    &__title {
      font-size: 50px;
    }
  }
}
@media(max-width: 464px) {
  .company {
    &__title {
      font-size: 40px;
    }
    &__description {
      span {
        font-size: 16px;
      }
    }
  }
}
</style>