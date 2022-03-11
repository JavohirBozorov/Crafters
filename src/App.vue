<template>
  <div class="app">
    <div>
      <NavbarCallNumbers />
      <LogoSearchBasket />
    </div>
    <div class="container-fluid d-flex justify-content-between">
      <div class="crafter-top-left">
        <AllCategories />
      </div>
      <div class="crafter-top-right mx-3">
        <div class="row justify-content-between">
          <span class="col-8 col-lg-10 mx-auto">
            <router-link to="/">Home</router-link>
            <router-link to="/brands">Brands</router-link>
            <router-link to="/specials">Specials</router-link>
            <router-link to="/contacts">Contact Us</router-link>
            <router-link to="/blogs">Blogs</router-link>
            <router-link to="/site-map">Site Map</router-link>
          </span>
          <span class="col-4 col-lg-2 offer-deal">
            <router-link to="/offer-deals">Offer Deals</router-link>
          </span>
          <router-view />
        </div>
      </div>
    </div>
    <div class="footer">
      <ParallaxInput />
      <FooterInfos />
      <PaymentSystems />
    </div>
  </div>
</template>

<script>
import NavbarCallNumbers from "@/components/NavbarCallNumbers.vue";
import LogoSearchBasket from "@/components/LogoSearchBasket.vue";
import AllCategories from "@/components/AllCategories.vue";
import ParallaxInput from "@/components/ParallaxInput.vue";
import FooterInfos from "@/components/FooterInfos.vue";
import PaymentSystems from "@/components/PaymentSystems.vue";

export default {
  name: "App",
  components: {
    NavbarCallNumbers,
    LogoSearchBasket,
    AllCategories,
    ParallaxInput,
    FooterInfos,
    PaymentSystems,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

.app {
  overflow-y: hidden;
}
span a {
  font-family: "Lora", Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-decoration: none;
  color: #000;
  padding: 0.5rem;
  display: inline-block;
  margin-right: 1rem;
}
.router-link-exact-active,
span a:hover {
  color: #9bbab1;
}
.crafter-top-left {
  width: 20%;
}
.crafter-top-right {
  width: 75%;
  display: inline-block;
}
.offer-deal {
  width: 15%;
}

@media only screen and (max-width: 575.7px) {
  .container-bottom {
    width: 90%;
    margin: auto;
  }
  .container {
    width: 90%;
    margin: auto;
  }
}
@media only screen and (min-width: 575.8px) {
  .container-bottom {
    width: 85%;
    margin: auto;
  }
  .container {
    width: 85%;
    margin: auto;
  }
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
@media only screen and (min-width: 991.8px) {
}
</style>
