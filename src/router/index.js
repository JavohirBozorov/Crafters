import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/brands",
    name: "BrandsPage",
    component: () =>
      import("../views/BrandsPage.vue"),
  },
  {
    path: "/specials",
    name: "SpecialsPage",
    component: () => import("../views/SpecialsPage.vue"),
  },
  {
    path: "/contacts",
    name: "ContactsPage",
    component: () => import("../views/ContactsPage.vue"),
  },
  {
    path: "/blogs",
    name: "BlogsPage",
    component: () => import("../views/BlogsPage.vue"),
  },
  {
    path: "/site-map",
    name: "Site Map",
    component: () => import("../views/SiteMap.vue"),
  },
  {
    path: "/offer-deals",
    name: "OfferDeals",
    component: () => import("../views/OfferDeals.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
