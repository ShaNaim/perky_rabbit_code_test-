<template>
  <div class="d-flex flex-lg-row flex-md-column">
    <div class="mb-3 p-3 flex-fill">
      <input
        name="unit-amount"
        type="number"
        class="form-control"
        id="unitAmount"
        placeholder="Unit Amount"
        v-model="productUnit.unitValueAmount"
        :disabled="!showButton"
      />
    </div>
    <div class="mb-3 p-3 flex-fill">
      <select
        name="unit"
        class="form-select"
        v-model="productUnit.unit"
        :disabled="!showButton"
      >
        <option selected value="0">Unit</option>
        <option v-for="unit in props.unitValue" :key="unit" :value="unit">
          {{ unit }}
        </option>
      </select>
    </div>
    <div class="mb-3 p-3 flex-fill">
      <input
        type="number"
        class="form-control"
        id="productName"
        placeholder="Quantity"
        name="qunatity"
        v-model="productUnit.quantity"
        :disabled="!showButton"
      />
    </div>
  </div>
  <div class="d-flex flex-lg-row flex-md-column">
    <div class="mb-3 p-3 flex-fill">
      <label for="password" class="form-label">Exp. Date </label>

      <input
        type="date"
        id="productName"
        placeholder="Quantity"
        name="qunatity"
        v-model="productUnit.mafDate"
        :disabled="!showButton"
      />
    </div>
    <div class="mb-3 p-3 flex-fill">
      <label for="password" class="form-label">Maf. Date </label>
      <input
        type="date"
        id="productName"
        placeholder="Quantity"
        name="qunatity"
        v-model="productUnit.expDate"
        :disabled="!showButton"
      />
    </div>

    <div class="mb-3 p-3 flex-fill">
      <button
        v-if="updateValue"
        type="button"
        class="btn btn-outline-info"
        @click="handleUpdate"
      >
        update
      </button>
      <button
        v-else
        type="button"
        class="btn btn-outline-info"
        @click="handleClick"
      >
        +
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const showButton = ref(true);
const props = defineProps(["unitValue", "updateValue"]);
const emit = defineEmits(["addNew"]);

// handeling form data
// const productUnit = {
//   unitValueAmount: "",
//   unit: "",
//   quantity: "",
//   mafDate: "",
//   expDate: "",
// };

const productUnit = computed(() => {
  return {
    unitValueAmount: props.updateValue ? props.updateValue.unit_value : "",
    unit: props.updateValue ? props.updateValue.unit_name : "",
    quantity: props.updateValue ? props.updateValue.quantity : "",
    mafDate: props.updateValue ? props.updateValue.meg_date : "",
    expDate: props.updateValue ? props.updateValue.exp_date : "",
    id: props.updateValue ? props.updateValue.id : "",
    productId: props.updateValue ? props.updateValue.product_id : "",
  };
});

function handleClick() {
  if (validate(productUnit.value)) {
    showButton.value = false;
    emit("addNew", { ...productUnit.value });
  } else {
    alert(" Provide all information ");
  }
}

function handleUpdate() {
  if (validate(productUnit.value)) {
    emit("addNew", { ...productUnit.value });
  } else {
    alert(" Provide all information ");
  }
}

function validate(productUnit) {
  console.log(productUnit);
  if (productUnit.unitValueAmount === "") return false;
  if (productUnit.unit === "") return false;
  if (productUnit.quantity === "") return false;
  return true;
}
</script>
