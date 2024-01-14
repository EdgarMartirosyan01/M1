<template>
  <div class="portfolio">
    <div class="portfolio__title">
      {{$t('Портфолио')}}
    </div>
    <div class="portfolio__image">
      <img src="@/assets/images/portfolio/portfolioImage1.png" alt="Portfolio">
    </div>
    <div class="portfolio__description">
<!--      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</span>-->
<!--      <span>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?</span>-->
<!--      <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</span>-->
    </div>
    <div class="portfolio__images">
      <img src="@/assets/images/portfolio/portfolioImage2.png" alt="Portfolio">
      <img src="@/assets/images/portfolio/portfolioImage3.png" alt="Portfolio">
      <img src="@/assets/images/portfolio/portfolioImage4.png" alt="Portfolio">
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage"
}
</script>

<style scoped lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 71px 60px 71px;
  &__title {
    color: #DF2129;
    font-family: Montserrat;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    padding-bottom: 40px;
  }
  &__image {
    img {
      width: 100%;
      height: 100%;
      box-shadow: 0 1px 1px rgba(0,0,0,0.12),
      0 2px 2px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 8px 8px rgba(0,0,0,0.12),
      0 16px 16px rgba(0,0,0,0.12);
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 136px;
    gap: 30px;
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
  &__images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    img {
      width: 546px;
      height: 409px;
      box-shadow: 0 3px 3px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 6px 6px rgba(0,0,0,0.12),
      0 10px 10px rgba(0,0,0,0.12),
      0 18px 18px rgba(0,0,0,0.12);
    }
    img:hover {
      box-shadow: 0 1px 1px rgba(0,0,0,0.12),
      0 2px 2px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 8px 8px rgba(0,0,0,0.12),
      0 16px 16px rgba(0,0,0,0.12);
    }
  }
}
@media(max-width: 1900px) {
  .portfolio {
    padding: 60px 71px 60px 71px;
    &__description {
      padding: 100px 136px;
    }
    &__images {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 60px;
      img {
        width: 436px;
        height: 327px;
      }
    }
  }
}
@media(max-width: 1570px) {
  .portfolio {
    padding: 60px 71px 60px 71px;
    &__description {
      padding: 100px;
    }
    &__images {
      width: 100%;
      justify-content: center;
      gap: 60px;
      img {
        width: 546px;
        height: 409px;
      }
    }
  }
}
@media(max-width: 1382px) {
  .portfolio {
    padding: 60px 32px 60px 32px;
    &__description {
      padding: 100px 136px;
    }
    &__images {
      gap: 60px;
      img {
        width: 546px;
        height: 409px;
      }
    }
  }
}
@media(max-width: 1215px) {
  .portfolio {
    &__title {
      font-size: 52px;
    }
    &__description {
      padding: 75px 100px 75px 100px;
    }
    &__images {
      gap: 50px;
      img {
        width: 655px;
        height: 490px;
      }
    }
  }
}
@media(max-width: 751px) {
  .portfolio {
    &__title {
      font-size: 45px;
    }
    &__description {
      padding: 75px 50px 75px 50px;
    }
    &__images {
      gap: 50px;
      img {
        width: 546px;
        height: 409px;
      }
    }
  }
}
@media(max-width: 600px) {
  .portfolio {
    &__title {
      font-size: 42px;
    }
    &__description {
      padding: 75px 35px 75px 35px;
    }
    &__images {
      gap: 50px;
      img {
        width: 436px;
        height: 327px;
      }
    }
  }
}
@media(max-width: 480px) {
  .portfolio {
    padding: 32px;
    &__title {
      font-size: 32px;
    }
    &__description {
      padding: 75px 0 75px 0;
      span {
        font-size: 17px;
      }
    }
    &__images {
      gap: 50px;
      img {
        width: 348px;
        height: 261px;
      }
    }
  }
}
@media(max-width: 381px) {
  .portfolio {
    padding: 32px;
    &__title {
      font-size: 32px;
    }
    &__description {
      padding: 30px 0 30px 0;
      span {
        font-size: 17px;
      }
    }
    &__images {
      gap: 50px;
      img {
        width: 278px;
        height: 208px;
      }
    }
  }
}
</style>