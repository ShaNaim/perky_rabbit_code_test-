import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
      // token: "123",
    },
    product: {
      allProducts: [],
      loading: false,
    },
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
      });
    },
    login({ commit }, user) {
      console.log(user);
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
    getUser({ commit }) {
      return axiosClient.get("/user").then((res) => {
        console.log(res);
        commit("setUser", res.data);
      });
    },
    getProducts({ commit }) {
      commit("setProductsLoading", true);
      let url = "/product";
      return axiosClient.get(url).then((res) => {
        commit("setProductsLoading", false);
        commit("setProducts", res.data);
        return res;
      });
    },
    getProductById({ commit }, id) {
      commit("setProductsLoading", true);
      let url = "/product/" + id;
      return axiosClient.get(url).then((res) => {
        console.log("res :::", res);
        commit("setProductsLoading", false);
        // commit("setProducts", res.data);
        return res;
      });
    },
    updateProductUnit({ commit }, unit) {
      console.log("unit ::", unit);
      commit("setProductsLoading", true);
      let url = "/product/" + unit.id;
      return axiosClient.post(url, unit).then((res) => {
        commit("setProductsLoading", false);
        commit("saveNewProduct", res.data);
        return res.data;
      });
    },
    updateProduct({ commit }, productInfo) {
      commit("setProductsLoading", true);
      let url = "/product/" + productInfo.id;
      return axiosClient.post(url, productInfo).then((res) => {
        commit("setProductsLoading", false);
        // commit("saveNewProduct", res.data);
        return res.data;
      });
    },

    addNewProduct({ commit }, product) {
      console.log(product);
      commit("setProductsLoading", true);
      return axiosClient.post("/product", product).then((res) => {
        commit("setProductsLoading", false);
        commit("saveNewProduct", res.data);
        return res.data;
      });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, user) => {
      state.user.data = user;
    },
    setToken: (state, token) => {
      state.user.token = token;
      sessionStorage.setItem("TOKEN", token);
    },
    setProductsLoading: (state, loading) => {
      state.product.loading = loading;
    },
    setProducts: (state, products) => {
      state.product.allProducts = products;
    },
    saveNewProduct: (state, newProduct) => {
      state.product.allProducts.push(newProduct);
    },
  },
  modules: {},
});

export default store;
