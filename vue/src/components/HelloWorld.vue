<script setup>
import { ref, onMounted, onBeforeUpdate, onUpdated } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const countTwo = ref(0);
const secondTitle = "Mu";
const thirdTitle = "Muaa";

const handleClick = () => {
  count.value++;
  countTwo.value--;
};
onMounted(() => {
  console.log("MOUNTED");
});
onBeforeUpdate(() => {
  if (count.value === 6) {
    console.log("onBeforeUpdate");
  }
});
onUpdated(() => {
  if (count.value === 6) {
    console.log("onUpdated");
    count.value++;
  }
});
</script>

<template>
  <h1 v-if="true">{{ msg }}</h1>
  <h1 v-else>{{ thirdTitle }}</h1>
  <h1>{{ secondTitle }}</h1>

  <div class="card">
    <button type="button" @click="handleClick">
      count is {{ count }} {{ countTwo }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
