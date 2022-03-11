<template>
  <div class="mt-5">
    <div class="deal border">
      <div class="row border-bottom">
        <div class="col d-flex justify-content-between p-2 mx-3 my-1">
          <div class="">
            <h4 class="title">Latest Product</h4>
          </div>
          <div class="control">
            <!-- <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i> -->
          </div>
        </div>
      </div>
      <span class="row">
        <div v-for="deal in deals" :key="deal.id" class="product col">
          <div class="row">
            <span class="col py-xl-3 px-xl-2">
              <div class="">
                <div class="">
                  <img class="deal-img" :src="deal.image" alt="img" />
                  <div class="icon-blok">
                    <div
                      v-for="list in lists"
                      :key="list.id"
                      class="icon-group"
                    >
                      <i id="icon" :class="list.icon"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <!-- @starRated="rated"   pastda -->
                  <CraftersTopLeftCardRating
                    :deal="deal.rating"
                    class="rate mb-1"
                  />
                  <a href="#" class="text pt-2 pb-1">{{ deal.text }}</a>
                  <p class="cost">${{ deal.cost }}</p>
                </div>
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
  name: "LatestProduct",
  components: {
    CraftersTopLeftCardRating,
  },
  data: () => ({
    rated: "",
    val: [],
    deals: [
      {
        image: require(`@/assets/14-190x230.jpg`),
        cost: 122.99,
        text: "Lorem ipsum dolor sit amet consectetur.",
        rating: 5,
      },
      {
        image: require(`@/assets/1-190x230.jpg`),
        cost: 119.99,
        text: "Lorem ipsum dolor sit amet consectetur.",
        rating: 4,
      },
      {
        image: require(`@/assets/17-190x230.jpg`),
        cost: 199.99,
        text: "Lorem ipsum dolor sit amet consectetur.",
        rating: 1,
      },
      {
        image: require(`@/assets/20-190x230.jpg`),
        cost: 319.99,
        text: "Lorem ipsum dolor sit amet consectetur.",
        rating: 3,
      },
    ],
    lists: [
      {
        icon: "bi bi-cart3",
      },
      {
        icon: "bi bi-eye",
      },
      {
        icon: "bi bi-heart",
      },
      {
        icon: "bi bi-shuffle",
      },
    ],
  }),
  // created: {
  //   rated(val) {
  //     console.log(val);
  //   },
  // },
};
</script>

<style scoped>
.row {
  --bs-gutter-x: 0rem;
}
.deal {
  font-family: "lora", Arial, Helvetica, sans-serif;
  transition: all 0.5s ease;
}
p {
  margin: 0;
}
a {
  padding: 0;
}
.deal-img {
  height: 100%;
  font-family: "lora", Arial, Helvetica, sans-serif;
}
.title {
  font-size: 18px;
  line-height: 18px;
  margin-bottom: -0.4rem;
}
.text {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}
.text:hover {
  color: #9bbab1;
}
.cost {
  line-height: 22px;
  color: #000;
  font-weight: 600;
}
.control .bi {
  font-weight: 600;
  color: #000;
  background-color: #f2f2f2;
  padding: 5px;
  margin: 3px;
  border-radius: 50%;
}
.icon-blok {
  transition: all 0.5s linear;
}
.icon-group {
  display: inline-block;
  text-align: center;
  transform: translateY(-8rem);
  opacity: 0;
}
.icon-group .bi {
  padding: 0.7rem;
  text-align: center;
  background-color: #9bbab1;
  color: #fff;
  border-radius: 50%;
  margin-left: 0.5rem;
}
.icon-group .bi:hover {
  background-color: #222;
}
.product:hover .icon-group {
  opacity: 1;
}
.rate {
  margin-top: -0.75rem;
}
#icon {
  cursor: pointer;
}

@media only screen and (min-width: 1200px) {
  .cool {
    margin: 0;
  }
}
</style>
