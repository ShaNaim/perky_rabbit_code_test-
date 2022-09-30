<template>
  <NavigationVue />
  <div class="container">
    <SectionVue title="All Products">
      <div class="d-flex flex-lg-column flex-md-column productList">
        <div class="product" v-for="product in productsList">
          <SectionVue
            :title="product.name"
            :clickable="true"
            :navigateTo="{ name: 'productDetails', params: { id: product.id } }"
          >
            <div
              v-for="data in product.data"
              class="d-flex flex-row border-bottom border-success p-2 mb-2"
            >
              <span
                class="flex-fill p-3 badge rounded-pill border border-success text-dark"
              >
                Quantity :
                {{ data.quantity }}
              </span>
              <span
                class="flex-fill p-3 badge rounded-pill border border-success text-dark"
              >
                Unit :
                {{ data.unit_value }}{{ data.unit_name }}
              </span>
              <span
                class="flex-fill p-3 badge rounded-pill border border-success text-dark"
              >
                Exp Date :
                {{ data.exp_date }}
              </span>
            </div>
          </SectionVue>
        </div>
      </div>
    </SectionVue>
  </div>

  <div class="d-flex flex-lg-row flex-md-column container mt-1">
    <SectionVue title="Expaired Products">
      <div class="d-flex flex-lg-column flex-md-column productList">
        <div class="product" v-for="product in expairedList">
          <SectionVue
            :clickable="true"
            :navigateTo="{ name: 'productDetails', params: { id: product.id } }"
            :title="product.name"
          >
            <div
              v-for="data in product.data"
              class="d-flex flex-row border-bottom border-success p-2 mb-2"
            >
              <span
                class="flex-fill p-3 badge rounded-pill border border-success text-dark"
              >
                Quantity :
                {{ data.quantity }}
              </span>
              <span
                class="flex-fill p-3 badge rounded-pill border border-success text-dark"
              >
                Unit :
                {{ data.unit_value }}{{ data.unit_name }}
              </span>
              <span
                class="flex-fill p-3 badge rounded-pill border border-danger text-danger"
              >
                Exp Date :
                {{ data.exp_date }}
              </span>
            </div>
          </SectionVue>
        </div>
      </div>
    </SectionVue>
    <SectionVue title="Stock Out">
      <div class="d-flex flex-lg-column flex-md-column productList">
        <div class="product" v-for="product in stockList">
          <SectionVue
            :clickable="true"
            :navigateTo="{ name: 'productDetails', params: { id: product.id } }"
            :title="product.name"
          >
            <div
              v-for="data in product.data"
              class="d-flex flex-row border-bottom border-success p-2 mb-2"
            >
              <span
                class="flex-fill p-3 badge rounded-pill border border-danger text-danger"
              >
                Quantity :
                {{ data.quantity }}
              </span>
              <span
                class="flex-fill p-3 badge rounded-pill border border-success text-dark"
              >
                Unit :
                {{ data.unit_value }}{{ data.unit_name }}
              </span>
              <span
                class="flex-fill p-3 badge rounded-pill border border-success text-dark"
              >
                Exp Date :
                {{ data.exp_date }}
              </span>
            </div>
          </SectionVue>
        </div>
      </div>
    </SectionVue>
  </div>
</template>

<script setup>
import SectionVue from "../components/Section.vue";
import NavigationVue from "../components/Navigation.vue";

import store from "../store";
import { ref, onMounted } from "vue";
const productsList = ref([]);
const stockList = ref([]);
const expairedList = ref([]);

// handeling product Info
function getAllProducts() {
  store
    .dispatch("getProducts")
    .then((res) => {
      let allProducts = res.data.product;
      let unitData = res.data.unitData;
      let productList = [];
      let stocoutProducts = [];
      let expairedProducts = [];

      allProducts.forEach((element) => {
        let tempObject = {};
        console.log("ele", element.name);
        let list = unitData.filter((data) => data.product_id === element.id);
        tempObject.name = element.name;
        tempObject.id = element.id;
        tempObject.data = list;
        productList.push(tempObject);

        let stocout = list.filter((data) => data.quantity < 5);
        if (stocout.length > 0) {
          let tempStockObject = {};
          tempStockObject.name = element.name;
          tempStockObject.id = element.id;
          tempStockObject.data = stocout;
          stocoutProducts.push(tempStockObject);
        }

        let expaired = list.filter(
          (data) => new Date(data.exp_date) < new Date()
        );
        if (expaired.length > 0) {
          let tempExpObject = {};
          tempExpObject.name = element.name;
          tempExpObject.id = element.id;
          tempExpObject.data = expaired;
          expairedProducts.push(tempExpObject);
        }
      });

      productsList.value = productList;
      stockList.value = stocoutProducts;
      expairedList.value = expairedProducts;
      console.log(productsList.value);
      console.log(stockList.value);
      console.log(expairedList.value);
    })
    .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
}
onMounted(() => {
  getAllProducts();
});
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
.productList .product {
  border: 1px solid rgba(177, 170, 170, 0.342);
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>
