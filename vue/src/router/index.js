import { createRouter, createWebHistory } from "vue-router";
// import Dashboard from "../views/Dashboard.vue";
// import Surveys from "../views/Surveys.vue";
// import SurveyView from "../views/SurveyView.vue";
// import Login from "../views/Login.vue";
// import Register from "../views/Register.vue";
// import NotFound from "../views/NotFound.vue";
// import SurveyPublicView from "../views/SurveyPublicView.vue";
// import DefaultLayout from "../components/DefaultLayout.vue";
// import AuthLayout from "../components/AuthLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AddNewProduct from "../views/AddNewProduct.vue";
import ProductDetails from "../views/ProductDetails.vue";

import store from "../store";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    meta: { requiresAuth: true },
  },
  {
    path: "/add-product",
    component: AddNewProduct,
    name: "AddProduct",
    meta: { requiresAuth: true },
  },
  {
    path: "/product/:id",
    name: "productDetails",
    component: ProductDetails,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { isGuest: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { isGuest: true },
  },
  // {
  //   path: "/404",
  //   name: "NotFound",
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
