<template>
  <div class="container mt-4">
    <div class="main-card">
      <p class="product">Latest Products</p>
      <div v-for="card in cards" :key="card.id" class="element">
        <img :src="card.image" alt="img" class="pointer" />
        <div class="content">
          <CraftersTopLeftCardRating :deal="card.rating" />
          <span class="text pointer">{{ card.text }}</span>
          <span class="cost">${{ card.cost }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CraftersTopLeftCardRating from "@/components/CraftersTopLeftCardRating.vue";

export default {
  name: "CardProducts",
  components: {
    CraftersTopLeftCardRating,
  },
  data: () => ({
    cards: [
      {
        text: "Accelerate their...",
        cost: 199,
        image: require(`@/assets/1.jpg`),
        rating: 5,
        id: 1,
      },
      {
        text: "Accelerate their...",
        cost: 149,
        image: require(`@/assets/2.jpg`),
        rating: 3,
        id: 2,
      },
      {
        text: "Accelerate their...",
        cost: 119,
        image: require(`@/assets/3.jpg`),
        rating: 4,
        id: 3,
      },
    ],
  }),
};
</script>
<style scoped>
.product {
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  font-weight: 500;
}
.main-card {
  border: 1px solid #ededed;
  width: 110%;
  transform: translateX(-12px);
}
.element {
  display: flex;
  margin: 1rem;
}
.element img {
  width: 80px;
}
.content > * {
  display: block;
  padding: 0.1rem 1rem;
}
.cost {
  font-weight: 500;
}
.pointer {
  cursor: pointer;
}
.bi-star-fill {
  color: gold;
  padding: 2px;
}
.container {
  margin: 0;
}
.text {
  width: 120%;
}
</style>
