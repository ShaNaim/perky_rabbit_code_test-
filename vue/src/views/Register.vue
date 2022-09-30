<template>
  <Auth>
    <form class="form" @submit="register">
      <h3 class="mb-4 header">Register</h3>
      <span class="text-danger" v-if="errors"> {{ errors }} </span>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="email"
        />
      </div>
      <div class="mb-3">
        <label for="userName" class="form-label">User Name</label>
        <input
          v-model="user.userName"
          type="userName"
          class="form-control"
          id="userName"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          id="password"
        />
      </div>

      <button type="submit" class="btn btn-primary mt-2">Register</button>
      <router-link :to="{ name: 'Login' }" class="redirect">
        <span> Login To Your account </span>
      </router-link>
    </form>
  </Auth>
</template>
<script setup>
import Auth from "./Auth.vue";
import { ref } from "vue";
import store from "../store";
import { useRouter } from "vue-router";
const router = useRouter();
const user = {
  userName: "",
  email: "",
  password: "",
};
const loading = ref(false);
const errors = ref("");
function register(ev) {
  ev.preventDefault();
  loading.value = true;
  store
    .dispatch("register", user)
    .then(() => {
      router.push({
        name: "Dashboard",
      });
    })
    .catch((error) => {
      loading.value = false;
      console.log("error", error);
      console.log("error.sata", error.response.status);
      console.log("error.data", error.response.data);

      if (error.response.status === 422) {
        errors.value = "Email or User Name Already Exixts";
      }
    });
}
</script>
