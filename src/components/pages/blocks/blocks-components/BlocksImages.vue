<template>
  <div class="services">
    <div class="services__images">
      <img src="@/assets/images/portfolio/portfolioImage2.png" alt="Portfolio">
      <img src="@/assets/images/portfolio/portfolioImage3.png" alt="Portfolio">
      <img src="@/assets/images/portfolio/portfolioImage4.png" alt="Portfolio">
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocksImages"
}
</script>

<style scoped lang="scss">
.services {
  padding: 0 72px 100px 72px;
  display: flex;
  flex-direction: column;
  &__images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
    img {
      width: 485px;
      height: 485px;
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
@media(max-width: 1663px) {
  .services {
    &__images {
      img {
        width: 388px;
        height: 388px;
      }
    }
  }
}
@media(max-width: 1382px) {
  .services {
    padding: 0 32px 100px 32px;
  }
}
@media(max-width: 1291px) {
  .services {
    &__images {
      align-items: center;
      justify-content: center;
      gap: 50px;
    }
  }
}
@media(max-width: 550px) {
  .services {
    &__images {
      img {
        width: 388px;
        height: 388px;
      }
    }
  }
}
@media(max-width: 428px) {
  .services {
    &__images {
      gap: 20px;
      img {
        width: 312px;
        height: 312px;
      }
    }
  }
}
</style>