<template>
  <div class="container">
    <div class="form">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const user = {
  email: "",
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
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
<style>
form {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  background-color: #d5d9df;
  padding: 24px 20px;
  border: 1px solid rgb(172, 167, 167);
  border-radius: 20px;
  width: 20rem;
}
.header {
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
}
.redirect {
  color: #626469;
  margin-top: 8px;
}
.redirect span {
  border-bottom: 1px solid #77a7f0;
}
</style>
