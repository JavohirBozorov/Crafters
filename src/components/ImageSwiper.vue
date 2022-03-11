<template>
  <div class="home-swiper">
    <div class="slider-swiper">
      <swiper
        :slides-per-view="1"
        :space-between="60"
        loop
        :autoplay="{
          delay: 500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide
          v-for="n in 4"
          :key="n"
          class="test"
          :class="{ test_2: true }"
        >
          <img
            :src="getImageUrl(42 + n)"
            width="600"
            height="400"
            class="img-fluid w-100 mx-auto"
            blank="true"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default {
  name: "ImageSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({}),
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/800/400/?image=${imageId}`;
    },
  },
};
</script>
<style scoped>
.slider-swiper {
  margin-top: 1.65rem;
}
.home-swiper {
  overflow: hidden;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto,
.mx-auto {
  margin-left: auto;
}
.mr-auto,
.mx-auto {
  margin-right: auto;
}
</style>
