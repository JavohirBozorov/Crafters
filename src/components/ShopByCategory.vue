<template>
  <div class="my-5">
    <div class="deal border">
      <div class="row border-bottom">
        <div class="col d-flex justify-content-between p-2 mx-3 my-1">
          <div class="d-flex align-items-center">
            <h4 class="title">Shop By Category</h4>
          </div>
          <div class="control">
            <i @click="goLeft" class="bi bi-chevron-left"></i>
            <i @click="goRight" class="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
      <span class="row products">
        <div
          :style="{ transform: 'translateX(' + health + 'px' + ')' }"
          class="col m-3 d-flex product-child"
        >
          <div
            v-for="deal in deals"
            :key="deal.id"
            class="deal-component mx-xl-3 px-xl-1"
          >
            <img :src="deal.image" alt="img" />
            <h6 class="theme pt-3">{{ deal.title }}</h6>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopByCategory",
  components: {},
  data: () => ({
    health: -757,
    ended: false,
    deals: [
      {
        image: require(`@/assets/img1.jpg`),
        title: "Eletronic",
      },
      {
        image: require(`@/assets/img2.jpg`),
        title: "Appliances",
      },
      {
        image: require(`@/assets/img3.jpg`),
        title: "Luggages",
      },
      {
        image: require(`@/assets/img4.jpg`),
        title: "Clothing",
      },
      {
        image: require(`@/assets/img1.jpg`),
        title: "Accesories",
      },
      {
        image: require(`@/assets/img2.jpg`),
        title: "Appliances",
      },
      {
        image: require(`@/assets/img3.jpg`),
        title: "Luggages",
      },
      {
        image: require(`@/assets/img1.jpg`),
        title: "Eletronic",
      },
      {
        image: require(`@/assets/img4.jpg`),
        title: "Clothing",
      },
    ],
  }),
  methods: {
    goRight() {
      if (this.health < -10) {
        this.health += 188.5;
      } else {
        return;
      }
    },
    goLeft() {
      if (this.health > -750) {
        this.health -= 188.5;
      } else {
        return;
      }
    },
  },
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
.deal-img {
  height: 100%;
  font-family: "lora", Arial, Helvetica, sans-serif;
}
.title {
  font-size: 18px;
  line-height: 18px;
  align-items: flex-end;
  margin-bottom: -0.3rem;
}
.control {
  transition: all 0.5s linear;
}
.control .bi {
  font-weight: 600;
  color: #000;
  background-color: #f2f2f2;
  padding: 5px;
  margin: 3px;
  border-radius: 50%;
}
.theme {
  font-weight: 600;
}
.products {
  max-width: 950px;
  overflow: hidden;
}
.product-child {
  transform: translateX(0);
  margin-left: -200px;
  /* background-color: lightgreen; */
}

@media only screen and (min-width: 1200px) {
  .deal-component {
    margin: 0;
  }
}
</style>
