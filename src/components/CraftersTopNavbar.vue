<template>
  <div class="d-flex navbar justify-content-between">
    <!--Nav Blok-->
    <nav class="container-fluid row">
      <div class="d-flex justify-content-start col-6">
        <p class="text">
          Good luck with shopping. Call us free 24/7 : (555) 172-244-7888
        </p>
      </div>
      <ul class="d-flex justify-content-end col-6 row text-center">
        <li class="col-12 col-md-3">
          <a href="#">Today's Deal</a>
        </li>
        <li class="col-12 col-md-3 border-x">
          <a href="#">Customer Service</a>
        </li>
        <li class="col-12 col-md-3">
          <a href="#" class="">Track Order</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
* {
  font-family: "Lora", serif;
  font-size: 14px;
}
.navbar {
  background-color: #f0f0f0;
  padding: 6px 0;
}
nav {
  line-height: 22px;
  color: #222;
}
ul li {
  list-style: none;
}
ul li a {
  text-decoration: none;
  color: #222;
}
.border-x {
  border-left: 1.5px solid #e1dddc;
  border-right: 1.5px solid #e1dddc;
  margin: 0 1px;
}
.col-md-3 {
  width: 25%;
}
ul.d-flex.justify-content-end.col-6.row {
  margin-bottom: 0;
}
.text {
  margin: 0;
}
@media (min-width: 992px) {
  .container-fluid {
    margin: 0 2rem;
  }
  ul li {
    margin: 0 -0.8rem;
  }
}
</style>
