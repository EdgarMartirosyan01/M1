<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h3 class="animate-charcter">ERROR</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404Page"
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
          -225deg,
          #DF2129 0%,
          #5e5e5e 29%,
          #313131 67%,
          #DF2129 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 250px;
  font-family: Montserrat;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
@media (max-width: 950px) {
  .animate-charcter {
    font-size: 150px;
  }
}
@media (max-width: 575px) {
  .animate-charcter {
    font-size: 100px;
  }
}
@media (max-width: 391px) {
  .animate-charcter {
    font-size: 60px;
  }
}
</style>