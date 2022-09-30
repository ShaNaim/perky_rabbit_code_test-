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
      <!-- <div class="d-flex flex-row-reverse w-100">
        <button class="button me-2" @click="updateProductInfo">Update</button>
      </div> -->
      <SectionVue title="Add Multiple Unit Stocks">
        <MultipleUnitVue
          v-for="unit in unitData"
          :key="unit.id"
          @addNew="updateProduct"
          :unitValue="unitValue"
          :updateValue="unit"
        />
      </SectionVue>
    </SectionVue>
  </div>
</template>

<script setup>
import SectionVue from "../components/Section.vue";
import MultipleUnitVue from "../components/MultipleUnit.vue";
import NavigationVue from "../components/Navigation.vue";
import { useRoute } from "vue-router";
import store from "../store";
import { ref, onMounted } from "vue";

// handeling product Info
const route = useRoute();

const unitValue = ref(["kg", "gram", "pound", "litter", "piece"]);

// handeling product Info
const product = ref({
  name: "",
  description: "",
});
const unitData = ref([]);

function updateProduct(product) {
  console.log(product);
  store
    .dispatch("updateProductUnit", product)
    .then((res) => {
      console.log(".Then", res);
    })
    .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
}

function getProductById() {
  store
    .dispatch("getProductById", route.params.id)
    .then((res) => {
      console.log(res);
      product.value = res.data.product;
      unitData.value = res.data.unitData;
    })
    .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
}

onMounted(() => {
  getProductById();
});
</script>
<style scoped>
.button {
  border: 2px solid rgb(174, 179, 106);
  border-radius: 4px;
  padding: 2px 12px;
  background-color: inherit;
  color: black;
}
.button:hover {
  background-color: rgb(250, 252, 176);
  color: rgb(0, 0, 0);
  transition: 0.6s ease-in;
}
</style>
