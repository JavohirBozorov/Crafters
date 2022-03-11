<template>
  <div>
    <div class="footer-bottom">
      <div class="container-bottom">
        <div class="row d-flex justify-content-between copyright">
          <div class="col-12 col-md-6 footer-bottom-left align-text-bottom">
            <p class="align-text-bottom">
              Powered by<a href="#">Open Cart</a>Your Store 2022
            </p>
          </div>
          <div
            class="col-12 col-md-6 footer-bottom-right d-flex justify-content-end"
          >
            <ul
              v-for="logo in logos"
              :key="logo.id"
              class="list-unstyled d-flex justify-content-between"
            >
              <li class="logo-blok">
                <img :src="logo.image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentSystems",
  data: () => ({
    logos: [
      {
        id: 1,
        image: require(`@/assets/visa.png`),
      },
      {
        id: 2,
        image: require(`@/assets/discover.png`),
      },
      {
        id: 3,
        image: require(`@/assets/mastercard.png`),
      },
      {
        id: 4,
        image: require(`@/assets/american-express.png`),
      },
      {
        id: 5,
        image: require(`@/assets/paypal.png`),
      },
      {
        id: 6,
        image: require(`@/assets/visa.png`),
      },
      {
        id: 7,
        image: require(`@/assets/maestro.png`),
      },
    ],
  }),
};
</script>

<style scoped>
* {
  font-family: "Lora", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.571rem;
  overflow: hidden;
}

.container-bottom {
  width: 90%;
  margin: auto;
}
.container {
  width: 90%;
  margin: auto;
}

.footer-bottom-right ul li {
  padding: 0.25rem;
}
.footer-bottom-left {
  margin-top: 0.8rem;
}
.footer-bottom-left a {
  margin: 0;
  padding: 0.5rem;
  color: #222;
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
</style>
