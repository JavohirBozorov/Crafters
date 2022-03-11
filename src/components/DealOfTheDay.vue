<template>
  <div class="mt-5">
    <div class="deal border">
      <div class="row border-bottom">
        <h4 class="col title p-2 mx-3 my-1">Deal Of The Day</h4>
        <div class="col">
          <!-- <i class="bi bi-chevron-left"></i>
                    <i class="bi bi-chevron-right"></i> -->
        </div>
      </div>
      <span class="row">
        <div v-for="deal in deals" :key="deal.id" class="col-6">
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
              <div class="timer">
                <div class="d-flex text-center">
                  <span class="min-width border py-2 m-1">
                    <p class="number">947</p>
                    <p class="text">Days</p>
                  </span>
                  <span class="min-width border py-2 m-1">
                    <p class="number">21</p>
                    <p class="text">hours</p>
                  </span>
                  <span class="min-width border py-2 m-1">
                    <p class="number">46</p>
                    <p class="text">Mins</p>
                  </span>
                  <span class="min-width border py-2 m-1">
                    <p class="number">53</p>
                    <p class="text">Secs</p>
                  </span>
                </div>
              </div>
              <div class="btn-group mx-auto pt-3">
                <button type="button" :class="deal.btnClass">
                  {{ deal.button }}
                </button>
              </div>
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
  name: "DealOfTheDay",
  components: {
    CraftersTopLeftCardRating,
  },
  data: () => ({
    deals: [
      {
        image: require(`@/assets/deal1.jpg`),
        cost: 122.99,
        rating: 5,
        opacityCost: "",
        button: "Out Of Stock",
        btnClass: "btn btn-danger",
      },
      {
        image: require(`@/assets/deal2.jpg`),
        cost: 119.99,
        rating: 3,
        opacityCost: "$155.99",
        button: "Add To Card",
        btnClass: "btn btn-primary",
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
  line-height: 1.286rem;
  font-size: 1.07rem;
}
.timer span {
  line-height: 1.143rem;
}
.deal-img {
  height: 100%;
  font-family: "lora", Arial, Helvetica, sans-serif;
}
.title {
  font-size: 1.286rem;
  line-height: 1.286rem;
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
  min-width: 3.145rem;
}
.cost span {
  opacity: 0.9;
}
</style>
