<template>
  <div class="container-fluid all-cate">
    <div @click="awesome = !awesome" class="d-flex categories">
      <i class="bi bi-list"></i>
      <p class="all">All Categories</p>
    </div>
    <transition name="fade">
      <div v-if="awesome" class="pt-4">
        <div v-for="item in items" :key="item.id" class="elements p-2">
          <i class="bi bi-arrow-right"></i>
          <span class="justify-content-evenly">
            {{ item.text }}
          </span>
        </div>
      </div>
    </transition>
    <div class="forHome">
      <CardProducts />
      <OncePhoto />
      <TextSlider />
      <CardProducts />
      <OncePhoto />
    </div>
  </div>
</template>
<script>
import CardProducts from "@/components/CardProducts.vue";
import OncePhoto from "@/components/OncePhoto.vue";
import TextSlider from "@/components/TextSlider.vue";

export default {
  name: "AllCategories",
  components: {
    CardProducts,
    OncePhoto,
    TextSlider,
  },
  data: () => ({
    awesome: false,
    items: [
      {
        text: "Accessories",
        id: 1,
      },
      {
        text: "Clothes",
        id: 2,
      },
      {
        text: "Digital-camera",
        id: 3,
      },
      {
        text: "Eyeware",
        id: 4,
      },
      {
        text: "Sofware",
        id: 5,
      },
      {
        text: "Lenses",
        id: 6,
      },
      {
        text: "Phone & PDAs",
        id: 7,
      },
      {
        text: "Cameras",
        id: 8,
      },
      {
        text: "Digital-camera",
        id: 9,
      },
      {
        text: "Sports-outdoors",
        id: 10,
      },
    ],
  }),
};
</script>
<style scoped>
.all-cate {
  width: 18rem;
}
.categories {
  background-color: #9bbab1;
  align-items: center;
  width: 94%;
  padding: 0.5rem;
  transition: all 2s linear;
  cursor: pointer;
}
.bi-list {
  color: #fff;
  font-weight: 600;
}
.all {
  margin: auto 0.3rem;
  color: #fff;
  font-weight: 400;
}
.elements {
  border: 1px solid #ededed;
  width: 94%;
}
.elements i {
  padding: 0.7rem;
}
@media (min-width: 992px) {
  .container-fluid {
    margin: 0 0.5rem;
  }
  /* .forHome {
    display: none;
  } */
}
@media (min-width: 1200px) {
  .container-fluid {
    margin: 0 1.5rem;
  }
}
</style>
