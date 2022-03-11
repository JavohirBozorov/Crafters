<template>
  <div class="discount">
    <div class="row">
      <div
        v-for="discount in discounts"
        :key="discount.id"
        class="col d-flex right-content pointer"
      >
        <div class="row text-center track">
          <div class="col">
            <i :class="discount.icon"></i>
          </div>
        </div>
        <div class="row text">
          <div class="col">
            <p>{{ discount.text }}</p>
            <p>{{ discount.offer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscountBlock",
  data: () => ({
    discounts: [
      {
        icon: "bi bi-truck",
        text: "Save 20% When You",
        offer: "Use Credit Card",
      },
      {
        icon: "bi bi-gift",
        text: "Fast Free Shipment",
        offer: "Load Any Computer`s",
      },
      {
        icon: "bi bi-phone",
        text: "14-Day Money Back",
        offer: "Enter Now",
      },
    ],
  }),
};
</script>

<style scoped>
.discount {
  margin-top: 2rem;
}
p {
  margin: 0;
}
.pointer {
  cursor: pointer;
}
.right-content {
  background-color: #f2f2f2;
  padding: 1rem 0;
  margin: 0 0.7rem;
}
.middle {
  margin: 0 1rem;
}
.bi {
  font-size: 35px;
  padding: 1rem;
  border-right: 1px solid #dbdbdb;
}
.text {
  padding-left: 1.5rem;
  font-weight: 500;
  color: #222;
  line-height: 20px;
  align-self: center;
  font-family: "Lora", Arial, sans-serif;
  font-size: 14px;
}
</style>
