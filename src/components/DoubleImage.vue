<template>
  <div class="d-flex justify-content-between mt-4">
    <div
      v-for="doubleImage in doubleImages"
      :key="doubleImage.Id"
      class="content"
    >
      <div
        v-bind:style="{ backgroundImage: `url(` + doubleImage.image + `)` }"
        class="product"
      >
        <div class="info px-4 py-5">
          <div class="discount">{{ doubleImage.discount }}</div>
          <div class="fabric py-1">{{ doubleImage.fabric }}</div>
          <div class="type mb-5">{{ doubleImage.type }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoubleImage",
  data: () => ({
    doubleImages: [
      {
        discount: "Sale 30%",
        fabric: "New Flour",
        type: "Candle",
        image: require(`./../assets/Cms-banner-1.jpg`),
      },
      {
        discount: "Flate 30%",
        fabric: "Latest Woolen",
        type: "Kid's Cap",
        image: require(`./../assets/Cms-banner-2.jpg`),
      },
    ],
  }),
};
</script>

<style scoped>
.content {
  width: 48%;
  font-family: "Lora", Arial, sans-serif;
  transition: all 1s linear;
  overflow: hidden;
}
.product {
  cursor: pointer;
}
.product:hover {
  transition: all 0.5s ease;
  transform: scale(1.1);
}
.discount {
  font-size: 1.357rem;
  font-weight: 400;
  line-height: 1.5714rem;
}
.fabric,
.type {
  font-size: 23px;
  font-weight: 600;
  line-height: 29px;
}
</style>
