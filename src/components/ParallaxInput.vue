<template>
  <div>
    <footer>
      <div class="fixed-img">
        <i class="bi bi-envelope"></i>
        <h3 class="newsletter">Subscribe Our Newsletter</h3>
        <div class="input-group pr-0 mx-auto mb-3">
          <input
            type="text"
            class="form-control shadow-none"
            placeholder="Enter Your Mail ID"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span class="input-group-text" id="basic-addon1">Subscribe</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ParallaxInput",
};
</script>

<style scoped>
* {
  font-family: "Lora", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.57rem;
}
footer {
  overflow-y: hidden;
}
.fixed-img {
  background-color: #f0f0f0;
  width: 100%;
  text-align: center;
  background-image: url(./../assets/News.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 20rem;
  background-position: top right;
  background-attachment: fixed;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem;
  align-items: center;
  justify-items: center;
}
.bi-envelope {
  font-size: 2rem;
  transform: translateY(2rem);
}
.input-group {
  transform: translateY(-3rem);
  width: 40%;
}
.form-control {
  width: 50%;
  border-radius: 1.43rem;
  height: 2.7rem;
}
.input-group-text {
  border-radius: 1.43rem;
  cursor: pointer;
}
.input-group-text:hover {
  background-color: #222;
  color: #fff;
}
.newsletter {
  font-family: "lora", Arial, sans-serif;
  font-weight: 600;
  padding: 1rem 0;
  transform: translateY(-2rem);
}
@media only screen and (min-width: 991.8px) {
  .container-bottom {
    width: 92%;
    margin: auto;
  }
  .container {
    width: 95%;
    margin: auto;
  }
}
@media only screen and (max-width: 575.7px) {
  .input-group {
    width: 80%;
  }
}
@media only screen and (max-width: 767.7px) {
  .input-group {
    width: 60%;
  }
}
</style>
