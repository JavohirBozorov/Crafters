<template>
  <div class="container">
    <div class="for-border my-4">
      <h6 class="client">Our Client</h6>
      <div class="main-card d-flex">
        <div class="content">
          <i class="bi bi-snow2"></i>
          <h6>Mark Jekno 1</h6>
          <p>Iphone Developer</p>
          <p class="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            ratione!
          </p>
        </div>
        <div class="content">
          <i class="bi bi-snow2"></i>
          <h6>Mark Jekno 2</h6>
          <p>Iphone Developer</p>
          <p class="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            ratione!
          </p>
        </div>
        <div class="content">
          <i class="bi bi-snow2"></i>
          <h6>Mark Jekno 3</h6>
          <p>Iphone Developer</p>
          <p class="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            ratione!
          </p>
        </div>
        <div class="content">
          <i class="bi bi-snow2"></i>
          <h6>Mark Jekno 4</h6>
          <p>Iphone Developer</p>
          <p class="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            ratione!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextSlider",
};
</script>

<style scoped>
.client {
  background-color: #f5f5f5;
  padding: 0.6rem 1rem;
  font-weight: 500;
}
.main-card {
  opacity: 0.8;
  font-weight: 400;
}
.for-border {
  border: 1px solid #ededed;
  max-width: 350px;
  width: 111%;
  transform: translateX(-19px);
  overflow: hidden;
}
.content {
  padding: 0.5rem 1.5rem;
  min-width: 280px;
  display: block;
}
.bi-snow2 {
  font-size: 2.5rem;
  padding-left: 1rem;
  color: #9bbab1;
}
</style>
