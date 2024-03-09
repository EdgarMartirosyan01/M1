<template>
  <div class="poly">
    <div class="poly__image">
      <img src="@/assets/images/products/PolyHome1.jpg" alt="M1">
    </div>
    <div class="poly__image image2">
      <img src="@/assets/images/products/PolyHome2.jpg" alt="M1">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.poly {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 36px;
  padding: 32px 72px;
  &__image {
    width: 50%;
    img {
      max-width: 700px;
      height: auto;
    }
  }
}
.image2 {
  max-width: 715px;
}
@media(max-width: 1639px) {
  .poly {
    &__image {
      img {
        max-width: 500px;
      }
    }
  }
  .image2 {
    max-width: 515px;
  }
}
@media(max-width: 1150px) {
  .poly {
    flex-direction: column;
    &__image {
      img {
        max-width: 700px;
        width: 90vw;
      }
    }
  }
  .image2 {
    max-width: 715px;
    width: 90vw;
  }
}
@media(max-width: 1150px) {
  .poly {
    padding: 32px;
  }
}
</style>