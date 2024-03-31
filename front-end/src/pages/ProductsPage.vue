<template>
   <h1>Products</h1>
   <ProductsList :products="products" />
</template>

<script>
import { products } from '../temp-data';
import ProductsList from '../components/ProductsList.vue';
export default {
    name : "ProductPage",
    components : {
     ProductsList,
    },
    data() {
        return {
            products,
        }
    }
}
</script>