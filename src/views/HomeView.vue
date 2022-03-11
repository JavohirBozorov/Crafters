<template>
  <div class="container home">
    <ImageSwiper />
    <DiscountBlock />
    <DealOfTheDay />
    <DoubleImage />
    <LatestProduct />
    <ShopByCategory />
    <DoubleImage />
    <FeauturedProductes />
    <SponsorLogos />
  </div>
</template>

<script>
import ImageSwiper from "@/components/ImageSwiper.vue";
import DiscountBlock from "@/components/DiscountBlock.vue";
import DealOfTheDay from "@/components/DealOfTheDay.vue";
import DoubleImage from "@/components/DoubleImage.vue";
import LatestProduct from "@/components/LatestProduct.vue";
import ShopByCategory from "@/components/ShopByCategory.vue";
import FeauturedProductes from "@/components/FeauturedProductes.vue";
import SponsorLogos from "@/components/SponsorLogos.vue";

export default {
  name: "Home",
  components: {
    ImageSwiper,
    DiscountBlock,
    DealOfTheDay,
    DoubleImage,
    LatestProduct,
    ShopByCategory,
    FeauturedProductes,
    SponsorLogos,
  },
  data: () => ({}),
  methods: {},
};
</script>
<style scoped>
* {
  font-size: 14px;
}
@media only screen and (min-width: 1199.8px) {
  .container {
    width: 90%;
    margin: auto;
  }
}
@media only screen and (min-width: 991.8px) {
  .container {
    width: 96%;
  }
}
</style>
