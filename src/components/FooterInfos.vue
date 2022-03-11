<template>
  <div class="footer-middle foo-bar">
    <div class="container-bottom">
      <div class="mt-5">
        <div class="footer-middle d-flex row overflow-hidden">
          <div class="footer-title col-md-6 col-lg-4">
            <h2 class="bolder">Quick Information</h2>
            <p class="address">
              60 29th Street San Francisco, CA 94110 507-Union Trade Center,
              United States of Americas
            </p>
            <p class="call mb-3">Call us: 0123-456-789</p>
            <a href="#" class="email">support@templatemela.com</a>
            <div class="social-group">
              <i class="mr-1 bi bi-facebook social" aria-hidden="true"></i>
              <i class="bi bi-twitter social" aria-hidden="true"></i>
              <i class="bi bi-instagram social" aria-hidden="true"></i>
              <i class="bi bi-youtube social" aria-hidden="true"></i>
              <i class="bi bi-pinterest social" aria-hidden="true"></i>
            </div>
          </div>
          <div class="extras col-md-6 col-lg-2">
            <h2 class="bolder">Extras</h2>
            <div v-for="info in infos" :key="info.id">
              <a href="#">{{ info.extra }}</a>
            </div>
          </div>
          <div class="extras col-md-6 col-lg-3">
            <h2 class="bolder">Information</h2>
            <div v-for="info in infos" :key="info.id">
              <a href="#">{{ info.link }}</a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 pl-5">
            <div class="d-flex justify-content-between latest-news">
              <h2 class="bolder">Latest News</h2>
              <div class="angle-icon pt-4">
                <i
                  @click="upScrollNews"
                  class="bi bi-chevron-up p-3 pointer"
                ></i>
                <i
                  @click="downScrollNews"
                  class="bi bi-chevron-down pointer"
                ></i>
              </div>
            </div>
            <div class="card-content">
              <div
                name="fade"
                :style="{ transform: 'translateY(' + coordinate + 'px' + ')' }"
              >
                <div
                  v-for="card in cards"
                  :key="card.id"
                  class="element d-flex"
                >
                  <img :src="card.image" alt="img" class="pb-4 pointer image" />
                  <div class="content">
                    <h4 class="text pointer">{{ card.date }}</h4>
                    <p class="cost">{{ card.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterInfos",
  data: () => ({
    coordinate: 0,
    cards: [
      {
        date: "8Jan, 2021",
        text: "Passage of Lorem Ipsum",
        image: require(`@/assets/1.jpg`),
      },
      {
        date: "11Feb, 2021",
        text: "Lorem ipsum dolor sit amet elit.",
        image: require(`@/assets/2.jpg`),
      },
      {
        date: "19Mar, 2021",
        text: "Passage of Lorem Ipsum",
        image: require(`@/assets/3.jpg`),
      },
      {
        date: "7May, 2021",
        text: "Lorem ipsum dolor sit amet elit.",
        image: require(`@/assets/4.jpg`),
      },
      {
        date: "2Jun, 2021",
        text: "Passage of Lorem Ipsum",
        image: require(`@/assets/1.jpg`),
      },
      {
        date: "12Jul, 2021",
        text: "Lorem ipsum dolor sit amet elit.",
        image: require(`@/assets/2.jpg`),
      },
      {
        date: "29Aug, 2021",
        text: "Passage of Lorem Ipsum",
        image: require(`@/assets/3.jpg`),
      },
      {
        date: "10Sep, 2021",
        text: "Lorem ipsum dolor sit amet elit.",
        image: require(`@/assets/4.jpg`),
      },
    ],
    infos: [
      {
        link: "About Us",
        extra: "Specials",
      },
      {
        link: "Delivery Information",
        extra: "Brands",
      },
      {
        link: "Privacy Policy",
        extra: "Contact Us",
      },
      {
        link: "Term & Conditions",
        extra: "Site Map",
      },
      {
        link: "Wish List",
        extra: "My Account",
      },
      {
        link: "Gift Certificates",
        extra: "Affiliates",
      },
    ],
  }),
  methods: {
    upScrollNews() {
      if (this.coordinate > -600) {
        this.coordinate -= 109;
      } else {
        this.coordinate = 0;
      }
    },
    downScrollNews() {
      if (this.coordinate < 0) {
        this.coordinate += 109;
      } else {
        this.coordinate = -654;
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Lora", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.footer-middle {
  overflow-x: hidden;
  display: flex;
}
.social {
  margin: 0.1rem;
  background-color: #f0f0f0;
  padding: 0.5rem 0.65rem;
  border-radius: 60%;
  margin-top: 2rem;
}
.social:hover {
  color: #f0f0f0;
  cursor: pointer;
  background-color: #9bbab1;
}
.bolder {
  font-size: 16px;
  font-weight: 600;
  padding: 1rem 0;
}
.address {
  width: 90%;
}
.email {
  line-height: 25px;
  color: #222;
  text-decoration: none;
}
.email:hover {
  color: #9bbab1;
}
.social-group {
  margin-top: 2.5rem;
  padding-bottom: 2rem;
}
.extras {
  line-height: 25px;
}
.extras a {
  display: block;
  text-decoration: none;
  color: #222;
  margin: 0.6rem 0;
}
.extras a:hover {
  color: #9bbab1;
}
.pointer {
  cursor: pointer;
}
.bi-chevron-up,
.bi-chevron-down {
  transition: all 0.3s linear;
}
.bi-chevron-up:hover,
.bi-chevron-down:hover {
  color: #9bbab1;
}
.foo-bar {
  transition: all 1s linear;
}
.card-content {
  position: relative;
  overflow: hidden;
  max-height: 195px;
}
.element {
  position: relative;
  top: 0px; /*220px*/
  transition-duration: 500ms;
}
.content {
  padding: 0rem 0rem 1rem 1.5rem;
  overflow: hidden;
}
.image {
  max-height: 100%;
  margin-bottom: 1px;
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
  .extras {
    padding: 0 2rem;
  }
}
</style>
