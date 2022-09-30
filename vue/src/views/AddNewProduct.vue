<template>
  <NavigationVue />
  <div class="d-flex container mt-1">
    <SectionVue title="Add Product">
      <div class="d-flex flex-lg-row flex-md-column">
        <div class="mb-3 p-3 flex-fill">
          <label for="" class="form-label">Product Name</label>
          <input
            v-model="product.name"
            type="text"
            class="form-control"
            id="productName"
          />
        </div>
        <div class="mb-3 p-3 flex-fill">
          <label for="" class="form-label">Product Description</label>
          <input
            v-model="product.description"
            type="text"
            class="form-control"
            id="productName"
          />
        </div>
      </div>
      <SectionVue title="Add Multiple Unit Stocks">
        <MultipleUnitVue
          v-for="unit in unitSize"
          :key="unit"
          @addNew="handleAddNew"
          :unitValue="unitValue"
        />
      </SectionVue>
      <div class="d-flex flex-row-reverse w-100">
        <button class="button me-2" @click="handleSubmit">SUBMIT</button>
      </div>
    </SectionVue>
  </div>
</template>

<script setup>
import SectionVue from "../components/Section.vue";
import MultipleUnitVue from "../components/MultipleUnit.vue";
import NavigationVue from "../components/Navigation.vue";

import store from "../store";
import { ref } from "vue";
const unitSize = ref(1);

const unitValue = ref(["kg", "gram", "pound", "litter", "piece"]);

// handeling product Info
const product = {
  name: "",
  description: "",
};

// handeling multiUnit Data
const multiUnitData = [];

const handleAddNew = (values) => {
  console.log(values);
  unitSize.value++;
  multiUnitData.push(values);
};

const handleSubmit = () => {
  console.log({ ...product, unit: multiUnitData });
  addNewProduct({ ...product, unit: multiUnitData });
};

function addNewProduct(product) {
  store
    .dispatch("addNewProduct", product)
    .then((res) => {
      console.log(".Then", res);
    })
    .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
}
</script>
<style scoped>
.button {
  border: 2px solid rgb(0, 140, 255);
  border-radius: 4px;
  padding: 2px 12px;
  background-color: inherit;
  color: black;
}
.button:hover {
  background-color: rgb(0, 140, 255);
  color: aliceblue;
  transition: 1s ease-in;
}
</style>
