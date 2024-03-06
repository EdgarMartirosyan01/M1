<template>
  <div class="map-container" id="map">
    <div class="map-container__map">
      <iframe src="https://snazzymaps.com/embed/557232" width="100%" height="817px" style="border:none;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsMap"
}
</script>

<style scoped lang="scss">
.map-container {
  padding: 0 74px 100px 74px;
  &__map {
    width: 100%;
    height: 817px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
    0 2px 2px rgba(0,0,0,0.12),
    0 4px 4px rgba(0,0,0,0.12),
    0 8px 8px rgba(0,0,0,0.12),
    0 16px 16px rgba(0,0,0,0.12);
    overflow: hidden;
  }
}
@media(max-width: 1310px) {
  .map-container {
    padding: 0 32px 100px 32px;
  }
}
@media (max-width: 992px) {
  .map-container {
    &__map {
      height: 650px;
    }
  }
}
@media (max-width: 560px) {
  .map-container {
    &__map {
      height: 400px;
    }
  }
}
</style>