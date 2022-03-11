<template>
  <div>
    <keep-alive>
      <star-rating
        :rating="deal"
        v-model="deal"
        :star-size="12"
        :border-width="0"
        :show-rating="false"
        :animate="true"
        :star-points="[
          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17,
        ]"
      ></star-rating>
    </keep-alive>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "StarsRating",
  components: {
    StarRating,
  },
  props: {
    deal: {
      type: Number,
    },
  },
  data: () => ({
    rating: "No Rating Selected",
    currentRating: "No Rating",
    currentSelectedRating: "No Current Rating",
    boundRating: 3,
  }),
  computed: {
    starRating: {
      get() {
        return this.deal.rating;
      },
      // set(value) {
      //   this.$emit("starRated", value);
      // },
    },
  },
};
</script>

<style scoped>
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 0px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}
</style>
