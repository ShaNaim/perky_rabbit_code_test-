<template>
  <div class="section">
    <header v-if="clickable">
      <router-link :to="navigateTo" class="nav-link">
        <span> {{ title }} </span>
      </router-link>
    </header>
    <header v-else>{{ title }}</header>
    <slot></slot>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  clickable: Boolean,
  navigateTo: Object,
});
</script>
<style scoped>
.section {
  padding: 12px;
  width: 100%;
  height: 100%;
  background-color: #f5f1f1;
  border: 1px solid #ffeaea7a;
  border-radius: 8px;
}
.section header {
  border-bottom: 1px solid rgb(192, 190, 190);
  font-weight: 700;
}
</style>
