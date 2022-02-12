<template>
  <div>
    <CraftersTopNavbar />
    <CraftersTopNavbarFindLogoBlog />
    <CraftersTopLeft />
    <template id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view />
    </template>
  </div>
</template>

<script>
import CraftersTopNavbar from "@/components/CraftersTopNavbar.vue";
import CraftersTopNavbarFindLogoBlog from "@/components/CraftersTopNavbarFindLogoBlog.vue";
import CraftersTopLeft from "@/components/CraftersTopLeft.vue";

export default {
  name: "CraftersMainComponent",
  components: {
    CraftersTopNavbar,
    CraftersTopNavbarFindLogoBlog,
    CraftersTopLeft,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  display: block;
  float: left;
  width: 100%;
  color: #222;
  font-family: "Lora", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.3px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
