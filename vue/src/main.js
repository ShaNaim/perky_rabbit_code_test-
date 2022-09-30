import { createApp } from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
// import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";

createApp(App).use(store).use(router).mount("#app");
// Using Bootstrap and BootstrapVue
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
