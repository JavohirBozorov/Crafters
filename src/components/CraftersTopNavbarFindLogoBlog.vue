<template class="">
  <div class="container-fluid border-bottom my-3">
    <ul class="d-flex justify-content-between logo_blog">
      <li class="logo">
        <img src="../../public/logo.png" class="pointer" alt="logo" />
      </li>
      <li class="input-group-blok">
        <div class="input-group input-group-lg mb-3">
          <input
            type="text"
            class="form-control shadow-none"
            placeholder="Search..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span class="input-group-text" id="basic-addon1">Search</span>
        </div>
      </li>
      <li>
        <ul class="myCard">
          <li class="icon-group">
            <i class="bi bi-heart"></i>
            <i class="bi bi-person"></i>
            <i class="bi bi-cart3"></i>
          </li>
          <li>
            <span>
              <p>My Cart</p>
              <p>0 Items - $0.00</p>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CraftersTopNavbarFindLogoBlog",
};
</script>
<style scoped>
.border-botttom {
  border-bottom: 1px solid #ededed;
}
.logo {
  width: 19%;
}
ul li {
  list-style-type: none;
}
.input-group-blok {
  width: 40%;
}
.input-group span {
  border-radius: 10rem;
  background-color: #9bbab1;
  color: #f7f7f7;
  font-size: 15px;
  width: 19%;
}
.input-group span:hover {
  background-color: #222;
}
.form-control {
  padding: 0.8rem 0.9rem;
}
span p {
  margin: 0;
  padding: 0;
}
input.form-control {
  line-height: 17px;
  border-radius: 20rem;
  font-size: 15px;
}
input:active {
  border-color: #f7f7f7;
}
.input-group-text {
  cursor: pointer;
}
.logo_blog {
  margin-top: 2.3rem;
}
.myCard {
  display: flex;
  font-size: 26px;
  cursor: pointer;
}
.myCard span {
  font-family: "Lora", Arial, sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
  align-items: center;
  text-align: start;
}
i {
  margin: 0 6px;
}
.bi-cart3 {
  margin-right: 1rem;
}
.bi-heart {
  font-size: 1.5rem;
}
.pointer {
  cursor: pointer;
}
@media (min-width: 992px) {
  .container-fluid {
    text-align: center;
    /* width: 95%; */
    padding-right: 5%;
    margin: 0 0rem;
  }
}
</style>
