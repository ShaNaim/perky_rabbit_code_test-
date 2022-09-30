<template>
  <Auth>
    <form class="form" @submit="login">
      <h3 class="mb-4 header">Login</h3>
      <div class="mb-3">
        <label for="userNameOrEmail" class="form-label"
          >User Name <span style="color: #626469"> / Email </span>
        </label>
        <input
          v-model="user.login"
          type="text"
          class="form-control"
          id="userNameOrEmail"
          aria-describedby="emailHelp"
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

      <button type="submit" class="btn btn-success mt-2">Login</button>
      <router-link :to="{ name: 'Register' }" class="redirect">
        <span> Register account </span>
      </router-link>
    </form>
  </Auth>
</template>
<script setup>
import Auth from "./Auth.vue";
import store from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const user = {
  login: "",
  password: "",
};
let loading = ref(false);
let errorMsg = ref("");
function login(ev) {
  ev.preventDefault();
  loading.value = true;
  store
    .dispatch("login", user)
    .then(() => {
      loading.value = false;
      router.push({
        name: "Dashboard",
      });
    })
    .catch((err) => {
      loading.value = false;
      errorMsg.value = err.response.data.error;
    });
  console.log(user);
}
</script>
