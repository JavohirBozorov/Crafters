<template>
  <div class="my-5">
    <div class="deal border">
      <div class="row border-bottom">
        <h4 class="col title p-2 mx-3 my-1">Feautured Productes</h4>
      </div>
      <span class="row">
        <div v-for="deal in deals" :key="deal.id" class="col-4">
          <div class="row">
            <span class="col-6 p-3">
              <img class="deal-img" :src="deal.image" alt="img" />
            </span>
            <span class="col-6 py-3">
              <CraftersTopLeftCardRating
                :deal="deal.rating"
                class="rate mt-2"
              />
              <p class="describtion py-2 mt-1">
                Lorem ipsum dolor sit, amet consectetur.
              </p>
              <h6 class="cost">
                <span>{{ deal.opacityCost }}</span>
                ${{ deal.cost }}
              </h6>
            </span>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import CraftersTopLeftCardRating from "@/components/CraftersTopLeftCardRating.vue";
export default {
  name: "FeauturedProductes",
  components: {
    CraftersTopLeftCardRating,
  },
  data: () => ({
    deals: [
      {
        image: require(`@/assets/1-190x230 (1).jpg`),
        cost: 122.99,
        rating: 4,
      },
      {
        image: require(`@/assets/17-190x230 (1).jpg`),
        cost: 119.99,
        rating: 5,
      },
      {
        image: require(`@/assets/10-190x230.jpg`),
        cost: 119.99,
        rating: 1,
      },
      {
        image: require(`@/assets/10-190x230.jpg`),
        cost: 119.99,
        rating: 3,
      },
      {
        image: require(`@/assets/1-190x230 (1).jpg`),
        cost: 122.99,
        rating: 2,
      },
      {
        image: require(`@/assets/17-190x230 (1).jpg`),
        cost: 119.99,
        rating: 5,
      },
    ],
    timers: [
      {
        number: 957,
        text: "Days",
      },
      {
        number: 23,
        text: "hours",
      },
      {
        number: 57,
        text: "min",
      },
      {
        number: 17,
        text: "sec",
      },
    ],
  }),
};
</script>

<style scoped>
.row {
  --bs-gutter-x: 0rem;
}
.deal {
  font-family: "lora", Arial, Helvetica, sans-serif;
}
p {
  margin: 0;
}
.describtion {
  line-height: 18px;
  font-size: 15px;
}
.timer span {
  line-height: 16px;
}
.deal-img {
  font-family: "lora", Arial, Helvetica, sans-serif;
  width: 120px;
}
.title {
  font-size: 18px;
  line-height: 18px;
}
.number {
  font-weight: 500;
}
.text {
  font-size: smaller;
  font-weight: 600;
  opacity: 0.8;
}
.min-width {
  min-width: 44px;
}
.cost span {
  opacity: 0.9;
}
</style>
